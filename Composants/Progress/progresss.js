progresss()

function progresss(){

  let progressBars = document.querySelectorAll('.progress__bar')

  for(progressBar of progressBars){    
    let progressBarValue = progressBar.getAttribute('aria-valuenow') 
    progressBar.style.width = progressBarValue+'%'
  }

}