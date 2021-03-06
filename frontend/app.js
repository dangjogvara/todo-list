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

// This function adds To-do's
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
    const id = document.createElement('td');
    id.id = 'todo-id';
    id.className = 'todo-id';
    id.style.display = 'none';

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
    row.append(id, todo, date, buttons);

    // Simple alert warning
    if (todoInput.value !== '' && dateInput.value !== '') {
        // get values from inputs
        let todoText = row.children[1].innerText;
        let todoDate = row.children[2].innerText;

        // Object to save
        const todoObj = {
            text: todoText,
            date: todoDate,
        };

        // Send a post request
        $.post('../backend/saveTodo.php', todoObj)
            // Callback funtion
            .done(res => {
                // Append to-do to table
                tableBody.append(row);
                // Add auto generated ID from the database to the to-do
                const rowId = $('#todo-id');
                rowId.attr('id', res);
                rowId.html(res);
            });
    } else {
        alert('Please add a Todo!');
    }

    // Clear input field
    todoInput.value = '';
    dateInput.value = '';
}

function manageTodo(e) {
    // Check what button you are clicking
    const item = e.target;
    if (item.classList[0] === 'delete-btn') {

        // Delete to-do from database
        const id = item.parentElement.parentElement.children[0].id;

        // Send ajax request
        $.ajax({
            url: `../backend/deleteTodo.php?id=${id}`,
            type: 'DELETE',
        }).done(id => {
            // Find the row to delete dynamically in JS
            const row = item.parentElement.parentElement;
            const rowId = $('#todo-id').html();
            if ($(rowId === id)) {
                row.remove();
            }
        });
    }

    // Mark task as completed
    if (item.classList[0] === 'complete-btn') {
        const id = item.parentElement.parentElement.children[0].id;
        const row = item.parentElement.previousSibling.previousSibling;
        let done = false;

        // Toggle true or false and set style
        if (row.classList.toggle('completed')) {
            done = !done;
        }

        // Send ajax request
        $.ajax({
            url: `../backend/toggleDone.php?id=${id}&done=${done}`,
            type: 'PATCH',
        });


    }
}

// Load table from database
function loadTable() {
    // Load data from database using jquery
    $.getJSON('../backend/getAll.php', res => {

        // Loop through each to-do in the array and create table (same as in the addTodo() function)
        res.forEach(todo => {
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

            // create td element for table
            const loadId = document.createElement('td');
            loadId.innerText = todo.id;
            loadId.id = todo.id;
            loadId.className = 'todo-id';
            loadId.style.display = 'none';

            const loadTodo = document.createElement('td');
            loadTodo.innerText = todo.text;
            const done = todo.done;
            if (done == 1) {
                loadTodo.className = 'completed';
            }


            const loadDate = document.createElement('td');
            loadDate.innerText = todo.date;
            loadDate.className = 'todo-date';

            const buttons = document.createElement('td');
            buttons.append(completeBtn, deleteBtn);

            row.append(loadId, loadTodo, loadDate, buttons);

            // Append to table
            tableBody.append(row);
        });
    });
}
