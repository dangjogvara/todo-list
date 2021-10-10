<?php include 'connection.php';

// Get params
$id = $_GET['id'];
$sql = "delete from todos where id=" . $id;

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    echo $id;

}


