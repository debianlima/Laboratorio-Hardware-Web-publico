// Script menu hamburger
const botao = document.querySelector('nav button');
const menu = document.querySelector('.hamburguer');

botao.addEventListener('click', () => {
  menu.classList.toggle('active');
});
