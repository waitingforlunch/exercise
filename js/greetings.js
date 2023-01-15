const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string 이 반복될때 변수를 만들어주면 좋을때 모두 대문자로 쓴다고 한다 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY)
// getItem은 로컬스토리지에서 저장된 밸류를 저장

function paintGreetings (username) {
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function OnLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 윗줄은 로컬 스토리지에 유저네임이라는 밸류를 저장함
    paintGreetings(username);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginsubmit);
} 
else  {
    paintGreetings(savedUsername);
}

