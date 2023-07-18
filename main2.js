
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

