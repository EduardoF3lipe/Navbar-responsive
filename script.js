let darkmode = document.querySelector('#moon');

darkmode.onclick = () => {
  if(darkmode.classList.contains('ri-moon-line')){
    darkmode.classList.replace('ri-moon-line', 'ri-sun-line')
    document.body.classList.add('color')
  }else{
    darkmode.classList.replace('ri-sun-line', 'ri-moon-line');
    document.body.classList.remove('color');
  }
}


// ======================================================= \\

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');

menu.onclick = () => {
  if (menu.classList.contains('ri-menu-3-line')) {
    menu.classList.replace('ri-menu-3-line', 'ri-close-line')
    navlist.classList.add('open');
  } else {
    menu.classList.replace('ri-close-line', 'ri-menu-3-line')
    navlist.classList.remove('open');
  }
  
}
