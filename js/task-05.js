let name_output = document.querySelector('#name-output');
const name_input = document.querySelector('#name-input');

name_input.addEventListener("input", (event) => {
if(name_input.value===""){
name_output.textContent = `Anonymous`;
}
else {
    name_output.textContent = event.currentTarget.value;}
});

