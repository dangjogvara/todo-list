<?php include_once 'connection.php';

$id = $_POST['id'];

if (isset($mysqli)) {
    $mysqli->query("DELETE FROM test WHERE id=$id") or
    die($mysqli->error);

   
}


