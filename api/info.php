<?php
session_start();


if(isset($_SESSION['user'])){
    $user = $_SESSION['user'];
    echo '
        {
            "success": true,
            "user": "'.$user.'"
        }
    ';
}else{
    echo '
        {
            "success": false
        }
    ';
}