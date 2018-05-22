console.log('Hello Notification')

window.setTimeout(closeNotification, 500)
window.setTimeout(openNotification, 500)

function closeNotification() {

  let closeBtns = document.querySelectorAll('.notification__close__btn');

  for(closeBtn of closeBtns){

    closeBtn.addEventListener('click', function(){
      let thisParentParent = this.parentNode.parentNode
      setTimeout(function(){
        thisParentParent.classList.add('is-closed')        
      }, 100)
      setTimeout(function(){
        thisParentParent.classList.remove('is-open')
        thisParentParent.classList.remove('is-closed')        
      },700)
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

function openNotification(){

  let btnShowTopLeft = document.getElementById('show-top-left')
  let btnShowTopRight = document.getElementById('show-top-right')
  let btnShowBottomLeft = document.getElementById('show-bottom-left')
  let btnShowBottomRight = document.getElementById('show-bottom-right')

  let notifTopLeft = document.querySelector('.notification-top-left')
  let notifTopRight = document.querySelector('.notification-top-right')
  let notifBottomLeft = document.querySelector('.notification-bottom-left')
  let notifBottomRight = document.querySelector('.notification-bottom-right')

  openNotif(btnShowTopLeft, notifTopLeft)
  openNotif(btnShowTopRight, notifTopRight)
  openNotif(btnShowBottomLeft, notifBottomLeft)
  openNotif(btnShowBottomRight, notifBottomRight)

  function openNotif(btnNotif, itemNotif){  

    btnNotif.addEventListener('click', function(){

      itemNotif.classList.add('is-open')
      
      setTimeout(function(){
        itemNotif.classList.add('is-closed')        
      }, 4000)
      setTimeout(function(){
        itemNotif.classList.remove('is-open')
        itemNotif.classList.remove('is-closed')        
      },4600)

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