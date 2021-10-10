<?php include 'connection.php';

$text = $_POST['text'];
$date = $_POST['date'];

$sql = "INSERT INTO todos(text, date) VALUES('$text','$date')";

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    $last_inserted = $mysqli->insert_id;
    echo $last_inserted;


}


