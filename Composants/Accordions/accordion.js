//Accordion
accordion()
function accordion() {

  console.log('Hello Accordions')

  let tabsTitle = document.querySelectorAll('.js-accordion__panel__title')
  let tabsContent = document.querySelectorAll('.js-accordion__panel__content')
  
  for(tabTitle of tabsTitle) {

    tabTitle.addEventListener('click', e => {

      //Récupère le tab__title cliqué
      let target = e.target      

      //Boucle sur tous les tab__title
      for(tabTitle of tabsTitle) {
        tabTitle.classList.remove('is-selected')
      }
      
      //Ajoute la class is-selected sur le tab__title cliqué
      target.classList.add('is-selected')

      //Boucle sur tous les tab__content
      for(tabContent of tabsContent) {
        //Si tab__content est ouvert
        if(tabContent.classList.contains('is-selected')){
          //Referme
          tabContent.classList.remove('is-selected')
          //Referme la hauteur
          tabContent.style.height = 0
        }
      }

      //Récupère tab__content suivant directement tab__title cliqué
      let targetNextSibling = target.nextElementSibling
      //Ouvre tab__content suivant directement tab__title cliqué
      targetNextSibling.classList.add('is-selected')

      //Calcul la hauteur à ajouter au conteneur ouvert
      if(targetNextSibling.classList.contains('is-selected')) {

        //Récupère les enfants
        let targetChilds = targetNextSibling.children

        //Hauteur à 0 par défaut
        let totalHeight = 0
        let totalMargin = 0
        let totalPadding = 0
        
        //Boucle sur les enfants
        for(let i=0; i<targetChilds.length; i++) {

          let targetChild = targetChilds[i]

          //Récupère le margin-top
          let targetChildMT = parseInt(window.getComputedStyle(targetChild,null).getPropertyValue("margin-top"));
          //Récupère le margin-bottom
          let targetChildMB = parseInt(window.getComputedStyle(targetChild,null).getPropertyValue("margin-bottom"));  
          //Additionne le margin-top et le margin-bottom
          totalMargin = totalMargin + targetChildMT + targetChildMB
          
          //Récupère le padding-top
          let targetChildPT = parseInt(window.getComputedStyle(targetChild,null).getPropertyValue("padding-top"));
          //Récupère le padding-bottom
          let targetChildPB = parseInt(window.getComputedStyle(targetChild,null).getPropertyValue("padding-bottom"));    //Additionne le padding-top et le padding-bottom
          totalPadding = totalPadding + targetChildPT + targetChildPB
          
          //Récupère la hauteur de chaque enfant
          let targetChildHeight = targetChild.offsetHeight
            
          //Calcul la hauteur totale
          totalHeight = totalHeight + targetChildHeight 
                        
          //Additionne la hauteur total le margin total et le pading total
          targetNextSibling.style.height = (totalHeight  + totalMargin + totalPadding)+'px'

        }

      } 

    })
  }

}