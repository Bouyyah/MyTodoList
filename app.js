//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//EVENT LISTNERS
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//FUNCTIONS

function createTodo(todo){

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function addTodo(event){

    event.preventDefault();
    saveLocalTodos(todoInput.value);
    createTodo(todoInput.value);
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        deleteLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(item.classList[0]=== "complete-btn"){
        item.parentElement.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all": 
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                };
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                    };
                break;
        }
    });
}

function checkLocalstorage(){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function saveLocalTodos(todo){
    let todos;
    todos = checkLocalstorage(todos);
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    todos = checkLocalstorage(todos);
    todos.forEach(todo =>{
        createTodo(todo);
    });
}

function deleteLocalTodos(todo) {
    let todos;
    todos = checkLocalstorage(todos);

    const todoName = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoName),1);
    localStorage.setItem("todos", JSON.stringify(todos));

}