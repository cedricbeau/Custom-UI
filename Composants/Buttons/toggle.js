toggleButton()
function toggleButton(){
  let toggle = document.querySelector('.btn-toggle');
  toggle.addEventListener('click', (e) => {   
    toggle.classList.toggle('is-checked') 
  });
}