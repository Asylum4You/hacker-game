<?php
	// Fetch Servers
	require_once 'dbconnect.php';
	$userid = $_SESSION["userID"];
	$clusterid = $_POST["clusterid"];
	$table = 'servers';
	//TODO
	/*
	* check if useruuid is the same of the clusteruseruuid
	* if not
	*	ask for login/password
	*/
	if(isset($userid) && !empty($userid) && isset($clusterid) && !empty($clusterid))
	{
		$st = $conn->prepare("SELECT ClusterUserUUID FROM clusters WHERE ClusterID = ?");
		$st->bind_params("s",$clusterid);
		$st->execute();
		$r = $st->setFetchMode(PDO::FETCH_ASSOC);
		$lines = $st->fetchAll();
		switch(count($lines))
		{
			case 0:
				echo "{}";
				break;
			case 1:
				$cuserid = $lines[0][ClusterUserUUID];
				if($cuserid === $userid)
				{
					$owncluster = true;
				}
				else
					$owncluster = false;
			default:
				echo "{}";
		}
		if(isset($owncluster))
		{
			//fetch the ram and stuff values
			$st = $conn->prepare("SELECT * FROM servers WHERE ServerClusterUUID = ?");
			$st->bind_params("s",$clusterid);
			$st->execute();
			$r = $st->setFetchMode(PDO::FETCH_ASSOC);
			$lines = $st->fetchAll();
			$ram=0;
			$cpu=0;
			$sto=0;
			if(count($lines)===0)
				echo "{}";
			else
			{
				//fetch and parse all single servers
				for($i=0;$i<count($lines);$i++)
				{
					
				}
			}
		}
		else
			echo "{}";
	}
?>
