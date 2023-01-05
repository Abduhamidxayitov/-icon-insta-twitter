let list = document.querySelector('.sci li');
let bg = document.querySelector('.socialMedia');
list.forEach(elements => {
  elements.addEventListener('mouseenter', function
  (event){
 let color = event.target.getAttribute
 ('data-color');
 bg.style.backgroundColor = color;
})
})