tabz()

function tabz(){  

  let tabLinks = document.querySelectorAll('.js-tab__nav__item')
  console.log(tabLinks)
  let tabItems = document.querySelectorAll('.js-tab__panel')
  console.log(tabItems)
  
  for(tabLink of tabLinks){    
    
    tabLink.addEventListener('click', e =>{

      //Récupère le lien cliqué
      let target = e.target
      
      //Supprime la class is-selected sur les liens
      for(tabLink of tabLinks){
        tabLink.classList.remove('is-selected')
      }
      //Ajoute la class is-selected sur le lien cliqué
      target.classList.add('is-selected')
      
      for(tabItem of tabItems){        

        //Supprime la class 'is-selected sur les panneaux
        tabItem.classList.remove('is-selected')

        //Si le data-tab du lien cliqué et du panneau sont =
        if(target.dataset.tab === tabItem.dataset.tab) {
          
          //Ajoute la class 'is-selected sur le panneau
          tabItem.classList.add('is-selected')
        
        }                
        
      }

    })

  }

}