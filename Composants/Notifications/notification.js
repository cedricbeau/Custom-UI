openNotification()
closeNotification()

function openNotification(){  

  let notifTopLeft = document.querySelector('.notification-top-left')
  let notifTopRight = document.querySelector('.notification-top-right')
  let notifBottomLeft = document.querySelector('.notification-bottom-left')
  let notifBottomRight = document.querySelector('.notification-bottom-right')

  openNotif(notifTopLeft)
  openNotif(notifTopRight)
  openNotif(notifBottomLeft)
  openNotif(notifBottomRight)

  function openNotif(itemNotif){      

    itemNotif.classList.add('is-open')
      
    setTimeout(function(){
      itemNotif.classList.add('is-closed')        
    }, 4000)
    
    setTimeout(function(){
      itemNotif.classList.remove('is-open')
      itemNotif.classList.remove('is-closed')        
    },4600)    

  }

}

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