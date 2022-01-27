let fontSizeControl = document.querySelector('#font-size-control');
let spanText = document.querySelector('#text');

fontSizeControl.addEventListener('input', onRangeChange); 

function onRangeChange(event){
    const {value} = event.currentTarget; 
    spanText.style.fontSize = `${value}px`;
}