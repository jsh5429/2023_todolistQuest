const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);


function todoAdd(e){
    e.preventDefault();

    const todoValue = todoForm.firstElementChild.value;

    
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";
    const time = document.createElement("span");
    
    time.innerHTML = getClock();

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time); 
    li.appendChild(button);

    // document.querySelector("todolist");
    document.querySelector("#todolist").appendChild(li);

    // input의 value 값을 ""으로 바꿈
    // todolist를 한번 추가했을때 input:text에 추가한 내용이
    // 그대로 남아있는것을 깔끔하게 없애준다.
    todoForm.firstElementChild.value = "";

    // check에 클릭이벤트 추가
    check.addEventListener("click", todoCheck);
    // button에 클릭이벤트 추가
    button.addEventListener("click", todoDelete);
}

function todoCheck(e){
    
    const check = e.target;
    const li = check.parentNode;
    if(check.checked){
        li.style.color = "lightgray";
    } else {
        check.parentNode.style.color = "";
    }
}

function todoDelete(e){
    const button = e.target;
    const li = button.parentNode;
    li.remove();
}