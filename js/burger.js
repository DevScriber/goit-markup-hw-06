const burger = document.querySelector('.burger');

const burgerBtnOpen = document.querySelector('.burger-button');
const burgerBtnClose = document.querySelector('.burger-button-close');

const toggleBurger = () => burger.classList.toggle('is-open');

burgerBtnOpen.addEventListener('click', toggleBurger);
burgerBtnClose.addEventListener('click', toggleBurger);