<?php include 'connection.php';

// Get params
$id = $_GET['id'];

// Query string
$sql = "delete from todos where id=" . $id;

// if variable is set
if (isset($mysqli)) {
    // Run query
    $mysqli->query($sql) or
    die($mysqli->error);

    echo $id;
}


