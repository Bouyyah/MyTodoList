//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTNERS
todoButton.addEventListener('click', addTodo)

//FUNCTIONS

function addTodo(event){
//preventing page from refreshiing
    event.preventDefault();
//Create todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
//Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
//Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//Trash mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
//append div to list
    todoList.appendChild(todoDiv);

}