<?php
	require_once 'dbconnect.php';
	$userid = $_SESSION['userID'];
	$ip = $_POST['ip'];
	$table = 'clusters'
	if(isset($ip) && !empty($ip))
	{
		//It's a hack!
		//Notify owner?
		$st = $conn->prepare("SELECT ClusterUUID FROM ? WHERE ClusterIP = ?");
		$st->bind_params("ss",$table,$ip);
		$st->execute();
		$res = $st->setFetchMode(PDO::FETCH_ASSOC);
		$lines = $st->fetchAll();
		if(count($lines) === 0)
			echo "{\"count\":0}";
		elseif(count($lines) === 1)
		{
			$id = $lines[0][ClusterUUID];
			$js = "{\"count\":1,\"clusterID\":\"{$id}\"}";
			echo $js;
		}
		else
			echo "{}";
	}
	elseif(isset($userid) && !empty($userid))
	{
		$st = $conn->prepare("SELECT * FROM ? WHERE ClusterUserUUID = ?");
		$st->bind_params("ss",$table,$userid);
		$st->execute();
		$res = $st->setFetchMode(PDO::FETCH_ASSOC);
		$lines = $st->fetchAll();
		if(count($lines) === 0)
		{
			echo "{\"count\":0}";
		}
		else
		{
			$c = count($lines);
			$js = "{\"count\":{$c},\"clusters\":[";
			for($i = 0;$i<$c;$i++)
			{
				$id = $lines[$i][ClusterUUID];
				$ip = $lines[$i][ClusterIP];
				$mjs = "{\"clusterID\":\"{$id}\",\"clusterIP\":\"{$ip}\"}";
				$js .= $mjs;
			}
			$js.="]}";
			echo $js;
		}
	}
?>
