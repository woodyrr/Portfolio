
let drinks = document.querySelector(".drinks");
function drinked(){
    drinks.addEventListener("mouseover",() =>{
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.drinksImg').style.filter = 'brightness(60%)';
    })

    drinks.addEventListener("mouseout",() => {
        document.querySelector('.overlay').style.display = '';
        document.querySelector('.drinksImg').style.filter = '';
    });
};

// side modadl *****
drinked();

function drinkSide(){
    drinks.addEventListener('click',() =>{
        document.getElementById('sideModal').classList.toggle('hidden');
    });
    let sidemArrow = document.getElementById('sidemArrow');
    sidemArrow.addEventListener('click',() =>{
        document.getElementById('sideModal').classList.toggle('block');
    });
}
drinkSide();

//2nd project
let colors = document.querySelector(".colors");
function colored(){
    colors.addEventListener("mouseover",() =>{
    document.querySelector('.overlay2').style.display = 'block';
    document.querySelector('.colorsImg').style.filter = 'brightness(60%)';
    })

    colors.addEventListener("mouseout",() => {
        document.querySelector('.overlay2').style.display = '';
        document.querySelector('.colorsImg').style.filter = '';
    });
};
colored()

function drinkSide2(){
    colors.addEventListener('click',() =>{
        document.getElementById('sideModal2').classList.toggle('hidden');
    });
    let sidemArrow = document.getElementById('sidemArrow2');
    sidemArrow.addEventListener('click',() =>{
        document.getElementById('sideModal2').classList.toggle('block');
    });
}
drinkSide2();