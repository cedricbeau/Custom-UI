let constantHref = location.href
console.log(constantHref)
//Composants
const composants = [
  {
    title: 'Accordions',
    href: constantHref+'Composants/Accordions/index.html'
  },
  {
    title: 'Alerts',
    href: constantHref+'Composants/Alerts/index.html'
  },
  {
    title: 'Breadcrumbs',
    href: constantHref+'Composants/Breadcrumbs/index.html'
  },
  {
    title: 'Buttons',
    href: constantHref+'Composants/Buttons/index.html'
  },
  {
    title: 'Cards',
    href: constantHref+'Composants/Cards/index.html'
  },
  {
    title: 'Forms',
    href: constantHref+'Composants/Forms/index.html'
  },
  {
    title: 'Modals',
    href: constantHref+'Composants/Modals/index.html'
  },
  {
    title: 'Navigation',
    href: constantHref+'Composants/Navigation/index.html'
  },
  {
    title: 'Notifications',
    href: constantHref+'Composants/Notifications/index.html'
  },
  {
    title: 'Paginations',
    href: constantHref+'Composants/Paginations/index.html'
  },
  {
    title: 'Progress',
    href: constantHref+'Composants/Progress/index.html'
  },
  {
    title: 'Slider',
    href: constantHref+'Composants/Slider/index.html'
  },
  {
    title: 'Tables',
    href: constantHref+'Composants/Tables/index.html'
  },
  {
    title: 'Tabs',
    href: constantHref+'Composants/Tabs/index.html'
  },
  {
    title: 'Tooltips',
    href: constantHref+'Composants/Tooltips/index.html'
  }
]
//Layouts
const layouts = [
  {
    title: 'Grid',
    href: constantHref+'Layouts/Grid/index.html'
  },
  {
    title: '2-colonnes',
    href: constantHref+'Layouts/2-colonnes/index.html'
  },
  {
    title: '3-colonnes',
    href: constantHref+'Layouts/3-colonnes/index.html'
  }
]

navContainer('composants', composants)
navContainer('layouts', layouts)
navigation()

function navContainer(container, navArray) {
  //Récupère la balise nav
  let navContainer = document.getElementById(container)

  //Création de la balise ul
  let navList = document.createElement('ul')
  navList.classList.add('nav')

  //Boucle sur la liste
  for (navItem of navArray) {

    //Création de la balise li
    let navListItems = document.createElement('li')
    navListItems.classList.add('nav__item')

    //Création de la balise a
    let navListLinks = document.createElement('a')
    navListLinks.classList.add('nav__link')
    navListLinks.href = navItem.href
    navListLinks.innerText = navItem.title

    //Insère la balise a dans la balise li
    navListItems.appendChild(navListLinks)
    //Insère la balise li dans la balise ul
    navList.appendChild(navListItems)
    //Insère la balise ul dans la balise nav
    navContainer.appendChild(navList)
  }
}

function navigation() {

  //Récupère le conteneur où afficher le contenu
  let container = document.querySelector('.content__body')
  //Récupère toutes les balises li de la navigation principale
  let navItems = document.querySelectorAll('.nav__item')
  //Récupère toutes les balises a de la navigation principale
  let navLinks = document.querySelectorAll('.nav__link')
  //Récupère la balise h2 = titre de la page
  let contentTitle = document.querySelector('.content__title')

  //Click
  function navAction(e) {

    e.preventDefault()

    //Vide le contenu de la page
    container.innerHTML = ''

    const target = e.target
    const targetHref = target.href
    const targetText = target.innerText

    //Charge le titre de la page
    contentTitle.innerHTML = targetText

    //Supprime la class is-active sur le parent du lien cliqué
    for (navItem of navItems) {
      if (navItem.classList.contains('is-active')) {
        navItem.classList.remove('is-active')
      }
    }

    //Ajoute la classe is-active sur le parent du lien cliqué
    target.parentElement.classList.add('is-active')

    //Récupère le dernier mot du lien cliqué
    let targetUrlSplit = targetHref.split('/')
    console.log(targetUrlSplit)
    let wordIndex = targetUrlSplit.length - 1
    console.log(wordIndex)
    let oldText = targetUrlSplit[wordIndex]    
    let newText = targetText.toLowerCase()    

    //customCSS
    let newTargetUrlCSS = targetHref.replace(oldText, newText + '.css')
    let dynamicLink = document.querySelector('#customCSS')
    dynamicLink.setAttribute('href', newTargetUrlCSS)

    //customScript
    let customScriptContainer = document.getElementById('customScriptContainer')
    let customScript = document.createElement('script')
    let newTargetUrlJS = targetHref.replace(oldText, newText + '.js')
    customScript.setAttribute('src', newTargetUrlJS);
    customScriptContainer.innerHTML = ''
    customScriptContainer.appendChild(customScript);

    //Modifie la class du body
    document.body.removeAttribute('class')
    document.body.classList.add('body-' + newText)

    //XMLHttpRequest
    //Charge le contenu
    const xhr = new XMLHttpRequest();
      
    xhr.onload = function () {
      container.innerHTML = this.response;
    };

    xhr.open('GET', targetHref, true);
    xhr.send();

  }

  for (navLink of navLinks) {
    navLink.addEventListener('click', navAction, false)
  }
}


