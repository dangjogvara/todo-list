<?php
$host = 'localhost';
$password = '';
$user = 'root';
$db = 'todo';


$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error)
    die('Connection Error');
