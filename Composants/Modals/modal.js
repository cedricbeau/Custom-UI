modal()
function modal() {
    
  var btns = document.querySelectorAll('.btn-modal');

  function toggleModal(elemModal, elemBody) {
    elemModal.classList.toggle('is-open');
    elemBody.classList.toggle('has-modal');    
  }
  
  function myModal() {
    var modal = document.querySelector('.modal');
    var bodyPage = document.body;
    toggleModal(modal, bodyPage);
  }

  for(var i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', myModal);
  }

}