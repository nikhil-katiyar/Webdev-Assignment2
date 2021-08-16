<?php
	$Name = $_POST['costumer name'];
	$phone = $_POST['costumer phonenumber'];
	$email = $_POST['costumer email'];
	$membership = $_POST['membership'];
    $card = $_POST['card number']
	$q1 = $_POST['q1'];
    $q2 = $_POST['q2'];
    $q3 = $_POST['q3'];
    $q4 = $_POST['q4'];
    $q5 = $_POST['q5'];
    $Potato = $_POST['Potato'];
    $Tomato = $_POST['Tomato'];
    $Onion = $_POST['Onion'];
    $Cabbage = $_POST['Cabbage'];
    $Capsicum = $_POST['Capsicum'];
     $payment = $_POST['payment'];
    
    
	$conn = new mysqli('localhost:3308','root','','table');
    if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(id,costumer name,costumer phonenumber,costumer email,membership,card number,Potato,q1,Tomato,q2,Onion,q3,Cabbage,q4,Capsicum,q5,payment) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("isissiiiiiiiiiiis", 0, $Name, $phone, $email, $membership, $card, $Potato, $q1, $Tomato, $q2, $Onion, $q3, $Cabagge, $q4, $Capsicum, $q5, $payment);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>