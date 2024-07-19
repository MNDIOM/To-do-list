
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
  event.preventDefault(); 

  const newTodoText = todoInput.value.trim(); 

  if (newTodoText) {
   
    const newTodoItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = newTodoText;
    newTodoItem.appendChild(taskSpan);

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    newTodoItem.appendChild(editButton);

    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save');
    newTodoItem.appendChild(saveButton);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    newTodoItem.appendChild(deleteButton);

    
    todoList.appendChild(newTodoItem);

   
    todoInput.value = '';
  }
}


todoList.addEventListener('click', function(event) {
  const item = event.target.parentElement;

  if (event.target.classList.contains('delete')) {
    todoList.removeChild(item);
  } else if (event.target.classList.contains('edit')) {
    const taskSpan = item.querySelector('span');
    const saveButton = item.querySelector('.save');
    const editButton = item.querySelector('.edit');

   
    taskSpan.contentEditable = true;
    taskSpan.focus();
    
   
    saveButton.style.display = 'inline-block';
    editButton.style.display = 'none';
  } else if (event.target.classList.contains('save')) {
    const taskSpan = item.querySelector('span');
    const saveButton = item.querySelector('.save');
    const editButton = item.querySelector('.edit');

   
    saveButton.style.display = 'none';
    editButton.style.display = 'inline-block';
  }
});
