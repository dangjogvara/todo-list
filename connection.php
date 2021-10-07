<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'todo';


$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error)
    die('Connect Error');
