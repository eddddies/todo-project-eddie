const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
//const loginButton = document.querySelector("#login-form button");
const greeting = document.getElementById("greeting")

const USERNAME_KEY = "userName";
const HIDDEN_CLASS = "hidden";

function onInputNameSubmit(event){

    event.preventDefault();

    const userName = loginInput.value;

    localStorage.setItem(USERNAME_KEY, userName);

    paintGreeting(userName)

}



function paintGreeting(userName){
     greeting.innerText = `Hello ${userName}`;

     greeting.classList.remove(HIDDEN_CLASS)
     loginForm.classList.add(HIDDEN_CLASS)
}

const savedUser = localStorage.getItem(USERNAME_KEY)

if(savedUser === null){
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit", onInputNameSubmit)
    //loginButton.addEventListener("click", onLoginButtonClicked)
}else {
    paintGreeting(savedUser)

}