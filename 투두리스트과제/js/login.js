const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", onLogin)


function onLogin(e){
    
    e.preventDefault();
    
    const loginId = document.querySelector("#login-id");
    const greeting = document.querySelector("#greeting");
    
    greeting.innerHTML = `환영합니다 ${loginId.value}님`;

    greeting.classList.remove("hidden");
    document.querySelector("#todo-form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    loginForm.classList.add("hidden");

}   