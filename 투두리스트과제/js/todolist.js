const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);
const done = document.querySelector("#tododone");
// console.log(done);


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

    document.querySelector("#todolist").appendChild(li);

    todoForm.firstElementChild.value = "";

    check.addEventListener("click", todoCheck);
    button.addEventListener("click", todoDelete);

    const checkboxNumber = document.querySelectorAll("#todolist>li>input[type='checkbox']");
    const checkedBox = document.querySelectorAll("#todolist>li>input[type='checkbox']:checked");
    done.innerHTML = `전체 할일 ${checkboxNumber.length} | 완료한 할일 ${checkedBox.length}`;

}

function todoCheck(e){
    
    // console.log(checkedBox.length);
    const check = e.target;
    const li = check.parentNode;
    const checkboxNumber = document.querySelectorAll("#todolist>li>input[type='checkbox']");
    const checkedBox = document.querySelectorAll("#todolist>li>input[type='checkbox']:checked");
    if(check.checked){
        li.style.color = "lightgray";
        done.innerHTML = `전체 할일 ${checkboxNumber.length} | 완료한 할일 ${checkedBox.length}`;
    } else {
        check.parentNode.style.color = "";
        done.innerHTML = `전체 할일 ${checkboxNumber.length} | 완료한 할일 ${checkedBox.length}`;
    }
}


function todoDelete(e){
    const button = e.target;
    const li = button.parentNode;
    li.remove();
    // 제거 한 후의 상태 값을 가져와야 하기에 remove() 다음에 변수를 호출해야한다.
    const checkboxNumber = document.querySelectorAll("#todolist>li>input[type='checkbox']");
    const checkedBox = document.querySelectorAll("#todolist>li>input[type='checkbox']:checked");
    done.innerHTML = `전체 할일 ${checkboxNumber.length} | 완료한 할일 ${checkedBox.length}`;
}