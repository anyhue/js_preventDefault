const loginForm = document.querySelector(".loginform")
const loginInput = document.querySelector(".loginform input");

function LoginSubmit(event) {
    event.preventDefault();
    //const username = loginInput.value 
    console.log(loginInput);
}

loginForm.addEventListener("submit", LoginSubmit);