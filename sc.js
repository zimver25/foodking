const list = document.querySelector('.navbar-links')
const btn = document.querySelector('.navbar__menu-logo')




btn.addEventListener('click', ()=>{
    // console.log('dd');

    if(list.style.opacity == 0) list.style.opacity = 1
  else if(list.style.opacity == 1) list.style.opacity = 0
})