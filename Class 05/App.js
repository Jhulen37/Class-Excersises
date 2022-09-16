const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
const clear = document.getElementById('clear');

let data = JSON.parse(localStorage.getItem('items'));
let itemsArray = data ? data : [];

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
});

itemsArray.forEach((item) => {
  liMaker(item);
});

clear.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}); 