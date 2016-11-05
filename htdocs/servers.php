<?php
	// Fetch Servers
	require_once 'dbconnect.php';
	$userid = $_SESSION["userID"];
	$clusterid = $_POST["clusterid"];
	//$table = 'servers';
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
				echo "{\"exit\":false,\"error\":\"Cluster not found\"}";
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
				echo "{\"exit\":false,\"error\",\"multiple clusters with ID\"}";
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
				echo "{\"exit\":true\"count\":0}";
			else
			{
				//fetch and parse all single servers
				for($i=0;$i<count($lines);$i++)
				{
					$ram+=$lines[$i]['ServerRAM'];
					$cpu+=$lines[$i]['ServerCPU'];
					$sto+=$lines[$i]['ServerStorage'];
				}
				$js = "{\"exit\":true,\"count\":".count($lines).",\"ram\":".$ram.",\"cpu\":".$cpu.",\"storage\":".$sto."}";
				echo $js;
			}
		}
		else
			echo "{\"exit\":false,\"error\":\"intrusion\"}";
	}
?>
