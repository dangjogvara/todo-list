<?php
// Connection properties
$host = 'localhost';
$password = '';
$user = 'root';
$db = 'todo';


// Connecto to DB
$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error)
    die('Connection Error');
