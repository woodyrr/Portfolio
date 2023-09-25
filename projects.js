let openBtn = document.querySelector('.nav-open-btn')
let line = document.querySelectorAll('.line')
let navdefault = document.querySelector('.navbar-default')
let headova = document.querySelector('.header-overlay')
let body = document.querySelector('.body')
let openBtn1 = document.querySelector('.nav-open-btn1')
openBtn.addEventListener("click", mobileMenu);
openBtn1.addEventListener("click", mobileMenu1);
function mobileMenu() {
    openBtn.classList.toggle("active");
    headova.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
}
function mobileMenu1() {
    openBtn1.classList.toggle("active");
    headova.classList.toggle("active");
    body.classList.toggle("overflow-hidden")
}

