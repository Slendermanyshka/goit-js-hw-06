let inputForm = document.querySelector('#validation-input');

inputForm.addEventListener('blur', textInputBlur);

function textInputBlur(event){
    let inputLength = event.currentTarget.value.length;
    
    if (Number(inputForm.dataset.length) === inputLength){
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    }
    else{
        inputForm.classList.add('invalid');
        inputForm.classList.remove('valid');
    }
    
}