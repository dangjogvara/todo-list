// Selectors
const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const dateInput = document.querySelector('.date-input');
const tableBody = document.querySelector('.table-body');

// Event Listeners
todoButton.addEventListener('click', addTodo);
tableBody.addEventListener('click', removeTodo);

function addTodo(e) {
  e.preventDefault();

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const row = document.createElement('tr');
  const todo = document.createElement('td');
  const date = document.createElement('td');
  todo.innerText = todoInput.value;
  date.innerText = dateInput.value;
  row.append(todo, date, completeBtn, deleteBtn);
  tableBody.append(row);

  // Clear input field
  todoInput.value = '';
  dateInput.value = '';
}

function removeTodo(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const row = item.parentElement;
    row.remove();
  }
}
