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

