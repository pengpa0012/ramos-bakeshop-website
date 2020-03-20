const navContent = document.querySelector('.nav-content');
const navBurger = document.querySelector('.nav-burger');

navBurger.addEventListener('click', ()=>{
	navContent.classList.toggle('toggle');
});