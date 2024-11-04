const modal = document.querySelector('.modal-overlay');
const modalBtnOpen = document.querySelector('.order-button');
const modalBtnClose = document.querySelector('.button-close');

const toggleModal = () => modal.classList.toggle('is-open'); 

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);