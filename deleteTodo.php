<?php include 'connection.php';

// Get params
$id = $_GET['id'];
$sql = "delete from test where id=" . $id;

if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    echo $id;

}


