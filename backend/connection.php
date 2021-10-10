<?php
// Connection properties
$host = 'localhost';
$password = '';
$user = 'root';
$db = 'todo';


// Setup connection to database
$mysqli = new mysqli($host, $user, $password, $db);

// Check for errors
if ($mysqli->connect_error)
    die('Connection Error');
