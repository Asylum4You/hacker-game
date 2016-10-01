<?php
    require_once 'dbconnect.php';
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($username) && !empty($username) && isset($password) && !empty($password))
    {
        $table = 'users';
        $sql=$conn->prepare("SELECT UserUUID, UserName, UserPassword, Banned FROM $table WHERE UserName ='$username'");
        $sql->execute();
        
        $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
        $lines = $sql->fetchAll();
        switch(count($lines))
        {
            case 0:
                //New user
                //Redirect to register page
                break;
            case 1:
                // One single user
                $row = $lines[0];
                $a_pass = $row[UserPassword];
                if(sha1($password)===$a_pass && $row[Banned] === 0) // Authenticated and not banned
                {
                    session_start();
                    $_SESSION['username']=$username;
                    $_SESSION['userID'] = $row[UserUUID];
                }
                else
                {
                    echo "Password incorrect\n";
                }
                break;
            default:
                //Something's wrong
        }
    }
?>
