<?php include_once 'connection.php';


if (isset($mysqli)) {
    $result = $mysqli->query("SELECT * FROM todos");
    $todos = [];
    if ($result) {
        while ($row = $result->fetch_object()) {
            $todos[] = $row;
        }
        echo json_encode($todos);
    }
}



