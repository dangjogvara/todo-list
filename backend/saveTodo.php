<?php include 'connection.php';

// Assign parameters
$text = $_POST['text'];
$date = $_POST['date'];

// SQL string
$sql = "INSERT INTO todos(text, date) VALUES('$text','$date')";

// Send query
if (isset($mysqli)) {
    $mysqli->query($sql) or
    die($mysqli->error);

    // Return last inserted ID for use in the frontend
    $last_inserted = $mysqli->insert_id;
    echo $last_inserted;
}


