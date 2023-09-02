






let openBtn = document.querySelector('.nav-open-btn')
let line = document.querySelectorAll('.line')
let navdefault = document.querySelector('.navbar-default')
let headova = document.querySelector('.header-overlay')
let body = document.querySelector('.body')
openBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    openBtn.classList.toggle("active");
    headova.classList.toggle("active");
    body.classList.toggle("overflow-hidden")
    
}
