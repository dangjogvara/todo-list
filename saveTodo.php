<?php include 'connection.php';

$todo = $_POST['todo'];
$date = $_POST['date'];

if (isset($mysqli)) {
    $mysqli->query("INSERT INTO test(todo, date) VALUES('$todo','$date')") or
    die($mysqli->error);
}


