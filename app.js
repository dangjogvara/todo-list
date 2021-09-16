// Selectors
const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const dateInput = document.querySelector('.date-input');
const tableBody = document.querySelector('.table-body');

// Event Listeners
todoButton.addEventListener('click', addTodo);
tableBody.addEventListener('click', manageTodo);
// Call this function on load
document.addEventListener('DOMContentLoaded', loadTable);

function addTodo(e) {
  e.preventDefault();

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

  const completeBtn = document.createElement('button');
  completeBtn.type = 'button';
  completeBtn.className = 'complete-btn';
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const row = document.createElement('tr');
  const todo = document.createElement('td');
  todo.id = 'todoText';
  const date = document.createElement('td');
  date.id = 'todoDate';
  const buttons = document.createElement('td');
  buttons.append(completeBtn, deleteBtn);

  todo.innerText = todoInput.value;
  date.innerText = dateInput.value;
  row.append(todo, date, buttons);

  if (todoInput.value !== '') {
    tableBody.append(row);
    saveTable(row);
  } else {
    alert('Please add a Todo!');
  }

  // Clear input field
  todoInput.value = '';
  dateInput.value = '';
}

function manageTodo(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const row = item.parentElement.parentElement;
    row.remove();
  }

  if (item.classList[0] === 'complete-btn') {
    const row = item.parentElement.previousSibling.previousSibling;
    row.classList = 'completed';

    console.log(row);
  }
}

// Save data to localStorage
function saveTable(rows) {
  let todos;
  let todoText = rows.children[0].innerText;
  let todoDate = rows.children[1].innerText;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  // Create object to save
  const saveTodo = {
    todo: todoText,
    date: todoDate,
  };

  todos.push(saveTodo);

  // Save as JSON
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Load Table from localStorage
function loadTable() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  console.log(todos);
}
