const input = document.querySelector('#todo-input'); /// input 
const addButton = document.querySelector('#add-btn');
const removeAll = document.querySelector('#remove-all');
const todoList = document.querySelector('#todo-list');


addButton.addEventListener('click', ()=>{
 const todoText = input.value
 if(todoText.trim().length === 0){
  return alert('adcione alguma tarefa')
 }

const newTodo = document.createElement('li');
newTodo.innerText = todoText;

const  deleteButton = document.createElement('button');
deleteButton.innerText = "remover";

deleteButton.addEventListener('click', ()=>{
  newTodo.remove()                           // estou removendo a li que eu criei
})

const completeButton = document.createElement('button');
completeButton.innerText = "finalizar tarefa";

completeButton.addEventListener('click', ()=>{
 newTodo.style.textDecoration = 'line-through';

});

const todoActions = document.createElement('div');
todoActions.appendChild(completeButton);
todoActions.appendChild(deleteButton);

removeAll.addEventListener('click', ()=>{
  todoList.remove();

})
newTodo.appendChild(todoActions);
todoList.appendChild(newTodo);

input.value = '';

})