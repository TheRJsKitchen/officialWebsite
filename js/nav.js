const navFunction = () => {
    const burger = document.querySelector('.burger');
    const ul = document.querySelector('.ul');
    const navItems = document.querySelectorAll('.ul li');
    const navA = document.querySelectorAll('.ul li a');

    burger.addEventListener('click', ()=>{
        ul.classList.toggle('nav-active');

        navItems.forEach((items, index) => {
            if (items.style.animation) {
                items.style.animation = ''; 
            } else {
                items.style.animation = `animateNav 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })



    navA.forEach((items, index) => {
        items.tabIndex = '-1';
    })
}

const scrollFunction = ()=>{
    function getScroll () {

        var nav = document.querySelector('.myNavBar');
        var scrollY = window.scrollY;

        if(scrollY >= 100) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            nav.style.transition = '0.2s all ease-in-out';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            nav.style.transition = '0.2s all ease-in-out';
        }
    }

    window.addEventListener('scroll', getScroll);
}


const runFunctions = ()=>{
    navFunction();
    scrollFunction();
}

runFunctions();
