<?php
 /*
 TODO - need changes on echo functions;
 I use single quotes in SQL queries around $variables,
 I dont know if they're needed;
 Countermeasure SQL injections;
 */
 session_start();
 require_once 'dbconnect.php';
 $table = "Users"; /* correct me */
 $username = $_POST("username");
 $password = $_POST("password");
 $email = $_POST("email");
 /* More info? */
 
 // See if nickname available
 $sql = "SELECT * FROM $table WHERE username = '$username' OR email = '$email';"; // Need SQL injection defenses
 $result = $conn->query($sql);
 if($result->num_rows == 0){
  // Add user
  // $password = hash_function($password); // hash_function not declared/defined yet
  $add = "INSERT INTO $table (username, password, email) VALUES ('$username', '$password','$email')";
  if($conn->query($add) === true){
   // Created successfully
   echo "Account created";
  }
  else {
   // Failure
   echo "Creation Failure";
  }
 }
 else {
  while($row = $result->fetch_assco()) {
   if( $row["username"] === $username){
    echo "Username already taken"; 
   }
   if($row["email"] === $email){
    echo "Email already taken";
   }
  }
 }
?>
