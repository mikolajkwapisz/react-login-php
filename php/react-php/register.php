<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
Access-Control-Allow-Headers, Authorization, X-Requested-with");

$data = json_decode( file_get_contents('php://input'), true);

require_once"connection.php";

$username = $data['username'];

$check_admin_username = substr($username, 0, 5 );
$password = $data['password'];
$password_hash = password_hash($password, PASSWORD_BCRYPT);
$email = $data['email'];

if($check_admin_username == "admin"){

    if( !empty($username) && !empty($password) && !empty($email) ){
        $connection = mysqli_connect($host, $db_user, $db_password, $db_name);
        
        $sql = "INSERT into admin(
        username,
        password,
        email
        )
        VALUES(
            '$username',
            '$password_hash',
            '$email'
        )";
    
    $result = mysqli_query($connection, $sql);

} 
} else{ 

    if( !empty($username) && !empty($password) && !empty($email) ){
        $connection = mysqli_connect($host, $db_user, $db_password, $db_name);
        
        $sql = "INSERT into user(
        username,
        password,
        email
        )
        VALUES(
            '$username',
            '$password_hash',
            '$email'
        )";
    
    $result = mysqli_query($connection, $sql);
    
} }