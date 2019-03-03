<?php
session_start();
$_POST = json_decode(file_get_contents('php://input'), true);


if(isset($_POST) && !empty($_POST)){
    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email == "joseab_1949@hotmail.com"){
        $_SESSION['user'] = $email;
        echo '{ 
            "message": "'.$email.'",
            "success": true
        }';
    }else{
    
        echo '{ 
            "message": "Error desde la  api",
            "success": false
        }';
    }

}


