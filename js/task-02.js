const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElements = document.querySelector('#ingridients');
let newList = ingredients.map((element) => '<li>${element}</li>').join("");
listElements.innerHTML = newList;
