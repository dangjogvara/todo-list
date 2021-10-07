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

// This functions adds To-do's
function addTodo(e) {
    // Prevent the page from reloading
    e.preventDefault();

    // Create button element
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    // Create button element
    const completeBtn = document.createElement('button');
    completeBtn.type = 'button';
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    // Create tr element for table
    const row = document.createElement('tr');
    row.className = 'table-row';

    // create td element for table
    const todo = document.createElement('td');
    todo.className = 'todo-text';

    // create td element for table
    const date = document.createElement('td');
    date.className = 'todo-tate';

    // Insert buttons into table elements
    const buttons = document.createElement('td');
    buttons.append(completeBtn, deleteBtn);

    // Get values from inputs
    todo.innerText = todoInput.value;
    date.innerText = dateInput.value;
    // Append everything to the table
    row.append(todo, date, buttons);

    // Simple alert warning
    if (todoInput.value !== '') {
        tableBody.append(row);
        saveTodo(row);
    } else {
        alert('Please add a Todo!');
    }

    // Clear input field
    todoInput.value = '';
    dateInput.value = '';
}

function saveTodo(rows) {
    // get values from inputs
    let todoText = rows.children[0].innerText;
    let todoDate = rows.children[1].innerText;

    // Object to save
    const saveTodo = {
        todo: todoText,
        date: todoDate,
    };

    // save to-do using jquery
    $.post('saveTodo.php', saveTodo, (res) => {
        console.log(res);
    });
}

function deleteTodo() {

}


function manageTodo(e) {
    // Check what button you are clicking
    const item = e.target;
    if (item.classList[0] === 'delete-btn') {
        const row = item.parentElement.parentElement;
        // Remove row if button pressed has class delete-btn
        row.remove();
        console.log(row);
    }

    // Mark task as completed
    if (item.classList[0] === 'complete-btn') {
        const row = item.parentElement.previousSibling.previousSibling;
        row.classList = 'completed';
    }
}

// Load table from database
function loadTable() {
    // Load data from database using juery
    $.getJSON('getAll.php', (res) => {

        // Loop through each todo in the array and create table (same as in the addTodo() function)
        res.forEach((todo) => {
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

            const completeBtn = document.createElement('button');
            completeBtn.type = 'button';
            completeBtn.className = 'complete-btn';
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';

            const row = document.createElement('tr');
            row.className = 'table-row';

            const loadTodo = document.createElement('td');
            loadTodo.innerText = todo.todo;
            loadTodo.className = 'todo-text';

            const loadDate = document.createElement('td');
            loadDate.innerText = todo.date;
            loadDate.className = 'todo-date';

            const buttons = document.createElement('td');
            buttons.append(completeBtn, deleteBtn);

            row.append(loadTodo, loadDate, buttons);

            // Append to table
            tableBody.append(row);
        });
    })
}
