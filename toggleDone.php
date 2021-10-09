<?php include 'connection.php';

// Get params
$id = $_GET['id'];

// Either true or false
$done = ($_GET['done'] === 'true');


$sql = "UPDATE test SET done='$done' WHERE id=$id";

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    
}
