<?php

function checkIfAdmin ($connection, $username, $password) {
    $sql_get_password = "SELECT password From admin WHERE username = '$username' ";

    if($result_password = $connection->query($sql_get_password)){
        $admins = $result_password->num_rows;
        if($admins > 0){
            global $hashed_password;
            $hashed_password_assoc = $result_password->fetch_assoc();
            $hashed_password = implode("", $hashed_password_assoc);
            $result_password->close();
        }
    }

    if( password_verify($password, $hashed_password)){
        $sql_get_users = "SELECT * from user";

        if($result_data = $connection->query($sql_get_users)){
            $users = $result_data->num_rows;
            if($users > 0) {
                $users_data = $result_data->fetch_all(MYSQLI_ASSOC);
                print_r(json_encode($users_data));
                $result_data->close();
            }
        }
    } else {
        echo "Wrong username or password";
    }
}

?>