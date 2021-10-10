<?php include 'connection.php';

$todo = $_POST['todo'];
$date = $_POST['date'];

$sql = "INSERT INTO todos(text, date) VALUES('$todo','$date')";

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    $last_inserted = $mysqli->insert_id;
    echo $last_inserted;


}


