'use strict';

const switcher = document.querySelector('.btn');
const switchersound = document.querySelector('.btn2');

switcher.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
 
  const className = document.body.className;
   
  switch (className){
    case "light-theme": this.textContent = "Dark"; break;
    case "dark-them": this.textContent = "Light"; break;
  }
  
  console.log('classe atual: ' + className);
});