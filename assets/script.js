// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navOverlay = document.getElementById('nav-overlay');

    // Menu show
    // validate if constants exists
    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu');
            navOverlay.classList.add('show-overlay');
        });
    }

    // Menu Hidden
    // validate if constants exists
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
            navOverlay.classList.remove('show-overlay');
        });
    }

// change background header
function scrollHeader(){
    const header=document.getElementById('header');
    // when the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);