<?php
	/*
	TODO - need changes on echo functions;
	I use single quotes in SQL queries around $variables,
	I dont know if they're needed;
	Countermeasure SQL injections;
	*/
	session_start();
	require_once 'dbconnect.php';
	$table = "users";
	$username = $_POST("username");
	$password = $_POST("password");
	$email = $_POST("email");
	$taken = "";
	/* More info? */
	
	// See if nickname available
	$st = $conn->prepare("SELECT UserName, UserEmail FROM users WHERE UserName = ? OR UserEmail = ?");
	$st->bind_params("ss",$username,$email);
	$st->execute();
	$lines = $st->fetchAll();
	if(count($lines) === 0)
	{
		//Register then
		//TODO - generate random(?) UUID
		$h_pass = sha1($password);
		$st = $conn->prepare("INSERT INTO users (UserName, UserEmail,UserPassword) VALUES (?, ?, ?)");
		$st->bind_params("sss",$username,$email,$h_pass);
		$st->execute();
	}
	else
	{
		switch(count($lines))
		{
			case 1:
				if($lines[0]['UserEmail'] === $email)
				{
					$taken = "email";
				}
				else
				{
					$taken = "username";
				}
				break;
			default:
				$taken = "username and email";
		}
		echo $taken;
		//Dont wanna spend much time xp
	}
?>
