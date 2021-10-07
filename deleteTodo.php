<?php include_once 'connection.php';

// Get params
$id = $_GET['id'];

if (isset($mysqli)) {
    $mysqli->query("DELETE FROM test WHERE id=$id") or
    die($mysqli->error);


}


