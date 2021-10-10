<?php include_once 'connection.php'; // Load DB setup file

// If variable is set
if (isset($mysqli)) {
    // Query the database
    $result = $mysqli->query("SELECT * FROM todos");

    // Init empty array
    $todos = [];

    // If there is data coming back
    if ($result) {
        // Populate array
        while ($row = $result->fetch_object()) {
            $todos[] = $row;
        }
        // Send back as JSON
        echo json_encode($todos);
    }
}



