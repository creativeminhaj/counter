const button = document.querySelector('.add');
const output = document.querySelector('h3');

let count=0;

button.addEventListener('click', () => {
  count++,
  output.innerHTML=count;
})