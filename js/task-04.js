let counterValue = 0;
const counter = document.querySelector('#value');

const add = document.querySelector(`[data-action="increment"]`);
add.addEventListener('click' , () => {
    counterValue+=1;
    counter.textContent=counterValue});

const minus = document.querySelector(`[data-action="decrement"]`);
minus.addEventListener('click' , () => {
    counterValue-=1;
    counter.textContent=counterValue});
