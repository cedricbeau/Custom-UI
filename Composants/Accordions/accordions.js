//Accordion
window.setTimeout(accordion, 1000)
function accordion() {

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
    
  var editor = function(id) {
            
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
  editor(code2)
  
}

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

var clipboard = new ClipboardJS('.btn-clipboard');
  
clipboard.on('success', function(e) {
  console.log(e);
});
clipboard.on('error', function(e) {
  console.log(e);
});