<?php
    define('DBHOST', 'localhost');
    define('DBUSER', 'root');
    define('DBPASS', '');
    define('DBNAME', 'game');

    $conn = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME) or die(mysqli_error($conn));
?>