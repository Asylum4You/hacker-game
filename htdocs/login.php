<?php
    require_once 'dbconnect.php';
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($username) && !empty($username) && isset($password) && !empty($password))
    {
        $table = 'users';
        $sql=$conn->prepare("SELECT UserUUID, UserName, UserPassword, Banned FROM ? WHERE UserName =?");
        $sql->bind_params("ss",$table,$username);
        $sql->execute();
        
        $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
        $lines = $sql->fetchAll();
        switch(count($lines))
        {
            case 0:
                $json = "{\"auth\":false,\"error\":\"username\"}";
                echo $json;
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
                $json = "{\"auth\":true}";
                echo $json;
                else
                {
                    $json = "{\"auth\":false,\"error\":\"password\"}";
                    echo $json;
                }
                break;
            default:
                echo "{\"auth\":null}";
        }
    }
?>
