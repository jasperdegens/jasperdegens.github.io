<?php
	if (!empty($_POST)) {
		try {
			$username = "jasper15";
			$password = "zAa6a#^5*Y";
			
			$conn = new PDO('mysql:host=localhost;dbname=jasper15_hotmap', $username, $password);
			
			# Run in exception mode during debugging
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
			 
			$stmt = $conn->prepare('SELECT * FROM `userdata` WHERE (latitude BETWEEN :latitude_tl AND :latitude_br) AND (longitude BETWEEN :longitude_tl AND :longitude_br)');
			$pdo_statement = array(':latitude_tl' => $_POST['latitude_br'], 
									':latitude_br' => $_POST['latitude_tl'], 
									':longitude_tl' => $_POST['longitude_tl'], 
									':longitude_br' => $_POST['longitude_br']);
			$stmt->execute($pdo_statement);
		 
			$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
			echo json_encode($rows);
		} catch(PDOException $e) {
			$return_code = array('Return Code' => (int)$e->getCode(), 'Return Message' => $e->getMessage());
			echo json_encode($return_code);
		}
	}
?>