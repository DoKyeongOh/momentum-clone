const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
loadToDo();

function loadToDo(){
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");   
    li.id = newToDo.id;
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = "❌";
    span.innerText = newToDo.text;
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
}

function OnToDoSubmitted(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
    const toDoitem = {
        text : newToDo,
        id : Date.now()
    };

    toDos.push(toDoitem);
    paintToDo(toDoitem);
    saveToDos();
}

toDoForm.addEventListener("submit", OnToDoSubmitted);
