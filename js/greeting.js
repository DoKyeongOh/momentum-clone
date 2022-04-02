const loginForm = document.querySelector("#login-form");
const inputInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);
const isUserExist = (savedUsername===null);

if (isUserExist) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnSubmit);
} else {
    paintGreeting(savedUsername);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}

function OnSubmit(eventInfo){
    eventInfo.preventDefault();
    username = inputInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}


