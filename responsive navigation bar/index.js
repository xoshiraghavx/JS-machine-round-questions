const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');

hamburger.addEventListener('click', function(){
    navLink.classList.toggle('hide');
});