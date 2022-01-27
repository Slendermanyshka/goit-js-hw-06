
const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", chekRegistr);

function chekRegistr(event){
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
      }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}