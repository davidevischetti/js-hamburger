//CREO DELLE VARIABILI PER INTERAGIRE CON IL MENU BURGER
const myBurger = document.querySelector('.header-right .fa-bars');

const myMenu = document.querySelector('.hamburger-menu');

const myClose = document.querySelector('.close .fa-times');

//CREO UN EVENTO CLICK PER APRIRE CON IL MENU BURGER
myBurger.addEventListener ('click',
    function() {
        myMenu.classList.add('active');
    }
);

//CREO UN EVENTO CLICK PER CHIUDERE CON IL MENU BURGER
myClose.addEventListener ('click',
    function() {
        myMenu.classList.remove('active');
    }
);