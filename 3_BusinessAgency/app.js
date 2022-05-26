const menu = document.querySelector('.menu');
console.log(menu);

const navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=> {
  navbar.classList.toggle('change');
});
