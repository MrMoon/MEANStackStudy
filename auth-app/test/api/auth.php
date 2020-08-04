<?php
$_POST = json_decode(file_get_contents('php://input') , true);

if(isset($_POST) && !empty($_POST)) {
  $email = $_POST['email'];
  $password = $_POST['password'];
  if($email == 'admin@admin.com' && $password == 'admin') {
    ?>
    {
      "success": true ,
      "secret": "This is the secret no one know but the admin"
    }
    <?php
  } else {
     ?>
     {
       "success": false,
       "message": "Invalid Admin credentials"
     }
     <?php
    }
   } else {
      ?>
      {
        "success": false,
        "message": "Invalid Method , only POST"
      }
      <?php
    }
      ?>
