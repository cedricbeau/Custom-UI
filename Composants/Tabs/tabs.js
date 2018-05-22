window.setTimeout(tabs, 500)

function tabs(){  

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

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/*
** Le code ci-dessous est utilisé
** à des fins de présentations. Il peut donc être supprimé
** sans altérer le bon fonctionnement du composant
*/
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
window.setTimeout(codeMirrorFunc, 1000)
window.setTimeout(clipFunc, 1500)
//Codemirror
function codeMirrorFunc() {  

	var textareas = document.querySelectorAll('.code_snippet')
    
  for (var i = 0; i<textareas.length; i++) {
    textareas[i].setAttribute('id', 'code'+i)    
  }
    
  function editor(id) {
            
  	CodeMirror.fromTextArea(id, {
      mode:            'xml',
      htmlMode: true,
      theme:           'mdn-like',
      lineNumbers:     false,
      styleActiveLine: false,
      matchBrackets:   true,
      tabSize:         2      
    });
      
  }

  editor(code0)
  editor(code1)
  
}

/* codeMirrorFunc() */

//Clipboard
function clipFunc(){

  let clipTargets = document.querySelectorAll('.CodeMirror')
  for(var i=0; i<clipTargets.length;i++){
    let clipTarget = clipTargets[i]
    clipTarget.setAttribute('id', 'codeTarget'+i)
  }

  let clipBtns = document.querySelectorAll('.btn-clipboard')
  for(var i=0; i<clipBtns.length;i++){
    let clipBtn = clipBtns[i]
    clipBtn.setAttribute('data-clipboard-target', '#codeTarget'+i)
  }

}
/* clipFunc() */

var clipboard = new ClipboardJS('.btn-clipboard');
  
clipboard.on('success', function(e) {
  console.log(e);
});
clipboard.on('error', function(e) {
  console.log(e);
});

