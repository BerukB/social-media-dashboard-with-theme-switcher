
const darkModeToggle = document.getElementById('switch');
const switchContainer = document.getElementById('switchContainer');

switchContainer.addEventListener('click', () => {

  document.documentElement.classList.toggle('dark');

 

  darkModeToggle.classList.toggle('slide');
  darkModeToggle.classList.toggle('slideO');

});