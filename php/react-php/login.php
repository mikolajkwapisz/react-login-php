<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Headers, Authorization, X-Requested-with");

require_once"connection.php";
require"admin.php";

$data = json_decode( file_get_contents('php://input'), true);


$con = new mysqli($host, $db_user, $db_password, $db_name);

if($con->connect_errno != 0) {
    echo "Error: ".$con->connect_errno;
} else {
    $username = $data['username'];
    $password = $data['password'];

    $check_if_admin = substr($username, 0, 5);

    if($check_if_admin == "admin"){
        checkIfAdmin($con, $username, $password);
    }else {

        
        $sql_password = "SELECT password from user WHERE username = '$username'";
        
        if($result = $con->query($sql_password)){
            $users = $result->num_rows;
            if($users>0){
                global $hashed_password;
                $hashed_password_assoc = $result->fetch_assoc();
                $hashed_password = implode("", $hashed_password_assoc);
            }
        }
        
        if( password_verify($password, $hashed_password)) {
            
            $sql = "SELECT * from user WHERE username = '$username'";
            if($result = $con->query($sql)){
                $users = $result->num_rows;
                if($users>0) {
                    $user_data = $result->fetch_assoc();
                    echo json_encode($user_data);
                    
                    $result->close();
                } else {
                    echo "Wrong username or password";
                }
        }
    } else {
        echo "Wrong username or password";
    }
    $con->close();
}
}