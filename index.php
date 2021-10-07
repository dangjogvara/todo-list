<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="#">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
              integrity="sha512-9BwLAVqqt6oFdXohPLuNHxhx36BVj5uGSGmizkmGkgl3uMSgNalKc/smum+GJU/TTP0jy0+ruwC3xNAk3F759A=="
              crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <link rel="stylesheet" href="style.css">
        <title>Todo List</title>
    </head>

    <body>
        <?php include_once 'connection.php'; ?>
        <header>
            <h1>Todo List</h1>
        </header>
        <form>
            <div class="input-container">
                <input class="todo-input" type="text" placeholder="Add Todo">
                <input class="date-input" type="date">
                <button class="todo-button" name="save" type="submit">
                    <i class="fas fa-plus-square"></i>
                </button>
            </div>
        </form>
        <div class="todo-container">
            <table id="table">
                <thead>
                <tr>
                    <th>Todos</th>
                    <th>Date</th>
                    <th>Manage</th>
                </tr>
                </thead>
                <tbody class="table-body">
                <!-- Generate table here with JavaScript -->
                </tbody>
            </table>

        </div>

        <script src="./app.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
                integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    </body>
    <div class="page-footer">
        <footer>
            <p>Copyright &copy; 2021 Dan Poulsen - <a id='link' href="https://github.com/dangjogvara/todo-list">Github
                    repository</a>
            </p>
        </footer>
    </div>

</html>