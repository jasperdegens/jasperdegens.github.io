<?php
	if (!empty($_POST)) {
		try {
			$username = "jasper15";
			$password = "zAa6a#^5*Y";
			$pdo = new PDO('mysql:host=localhost;dbname=jasper15_hotmap', $username, $password);
			$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 
			$stmt = $pdo->prepare('INSERT INTO userdata (latitude, longitude, rating, timestamp, GUID) VALUES(:latitude, :longitude, :rating, CURRENT_TIMESTAMP, :GUID)');
			$stmt->execute(array(
							':latitude' => $_POST['latitude'],
							':longitude' => $_POST['longitude'],
							':rating' => $_POST['rating'],
							':GUID' => $_POST['GUID']
						));
	 
			# Success
			$return_code = array('Return Code' => 0, 'Return Message' => 'Success');
			echo json_encode($return_code);
		} catch(PDOException $e) {
			$return_code = array('Return Code' => (int)$e->getCode(), 'Return Message' => $e->getMessage());
			echo json_encode($return_code);
		}
	}
?>