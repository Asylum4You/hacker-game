<?php
    require_once 'dbconnect.php';
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($username) && !empty($username) && isset($password) && !empty($password)) {
        $table  = ""; // Table name (Users?)
        $sql    = "SELECT password FROM $table WHERE username = $username;"; // Need implement SQL-injection defenses
        $result = $conn->query($sql);
        if($result->num_rows == 1) {
            // Compare (possibly hashed) passwords
            $row = $result->fetch_assoc();
            if(strcmp($password,/*hash_function()*/row["password"]) {
                $_SESSION["username"] = $username;
                $_SESSION["auth"] = true;
                //Redirect somewhere
            }
            else {
                //Return something
            }
        }
        else {
            if($result->num_rows == 0) {
                // Create user
                // Redirect to register page
            }
            else /*More than one row*/ {
                //More than one user per username(?)
                //Possible SQL injection(?)
                // Maybe notify game admins
            }
        }
    }
?>
