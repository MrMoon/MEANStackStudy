<?php
session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
  echo '{
    "message": "This is a message from the database , Welcome Admin" ,
    "success": true
  }';
} else {
  echo '{
    "message": "This is a message from the database , Welcome Admin" ,
    "success": false
  }';
}

 ?>
