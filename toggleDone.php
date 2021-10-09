<?php include 'connection.php';

// Get params
$id = $_GET['id'];
$done = $_GET['done'];

$sql = "UPDATE test SET done='$done' WHERE id=$id";

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);
}
