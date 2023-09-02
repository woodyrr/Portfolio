let openBtn = document.querySelector('.nav-open-btn')
let line = document.querySelectorAll('.line')
let navdefault = document.querySelector('.navbar-default')
let headova = document.querySelector('.header-overlay')
let body = document.querySelector('.body')
openBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    openBtn.classList.toggle("active");
    headova.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
    
    
}

let drinks = document.querySelector(".drinks");
let overlay1 = document.querySelector('.overlay-1')
let drinksova = document.querySelector('.drinks-overlay')
let backBtn = document.querySelector('.back-btn')
let colorsova = document.querySelector('.colors-overlay')
let backBtn1 = document.querySelector('.back-btn1')
let colors = document.querySelector(".colors");
let foods = document.querySelector(".foods");
let foodsova = document.querySelector('.foods-overlay')
let backBtn2 = document.querySelector('.back-btn2')

function drinked(){
    drinks.addEventListener("mouseover",() =>{
    document.querySelector('.drinksImg').style.filter = 'brightness(40%)';
    overlay1.classList.add("active");
    overlay1.classList.toggle('overflow-hidden')
    overlay1.classList.toggle('h-0')
    
    })

    drinks.addEventListener("mouseout",() => {
        document.querySelector('.drinksImg').style.filter = '';
        overlay1.classList.remove("active");
        overlay1.classList.toggle('overflow-hidden')
        overlay1.classList.toggle('h-0')
    });

    drinks.addEventListener("click", () =>{
        drinksova.classList.toggle('active')
        body.classList.toggle("overflow-hidden")
    })
    backBtn.addEventListener("click", () =>{
        drinksova.classList.toggle('active')
        body.classList.toggle("overflow-hidden")
    })
    
    
};

// side modadl *****
drinked();


let overlay2 = document.querySelector('.overlay2')
function colored(){
    colors.addEventListener("mouseover",() =>{
    
    document.querySelector('.colorsImg').style.filter = 'brightness(40%)';
    overlay2.classList.add("active");
    overlay2.classList.toggle('overflow-hidden');
    overlay2.classList.toggle('h-0');
    })

    colors.addEventListener("mouseout",() => {
        document.querySelector('.colorsImg').style.filter = '';
        overlay2.classList.remove("active");
        overlay2.classList.toggle('overflow-hidden')
        overlay2.classList.toggle('h-0')
    });
    colors.addEventListener("click", () =>{
        colorsova.classList.toggle('active')
        body.classList.toggle("overflow-hidden")
    })
    backBtn1.addEventListener("click", () =>{
        colorsova.classList.toggle('active')
        body.classList.toggle("overflow-hidden")
    })
};
colored()

let overlay3 = document.querySelector('.overlay3')
function master(){
    foods.addEventListener("mouseover",() =>{
    document.querySelector('.foodsImg').style.filter = 'brightness(40%)';
    overlay3.classList.add("active");
    overlay3.classList.toggle('overflow-hidden');
    overlay3.classList.toggle('h-0');
    })

    foods.addEventListener("mouseout",() => {
        document.querySelector('.foodsImg').style.filter = '';
        overlay3.classList.remove("active");
        overlay3.classList.toggle('overflow-hidden')
        overlay3.classList.toggle('h-0');  
    });

    foods.addEventListener("click", () =>{
        foodsova.classList.toggle('active');
        body.classList.toggle("overflow-hidden");
    });

    backBtn2.addEventListener("click", () =>{
        foodsova.classList.toggle('active')
        body.classList.toggle("overflow-hidden");
        document.querySelector('.projects').style.filter = ''; 
    });
};
master()