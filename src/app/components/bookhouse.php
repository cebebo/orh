<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: http://www.orh.de/");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
	case("POST"): //Send the email;
		header("Access-Control-Allow-Origin: http://www.orh.de/");
		// Payload is not send to $_POST Variable,
		// is send to php:input as a text
		$json = file_get_contents('php://input');
		//parse the Payload from text format to Object
		$params = json_decode($json);

		
		$twoMail = $_GET["2f"];
		$firstName = $params->firstName;
		$lastName = $params->lastName;
		$organisation = $params->organisation;
		$adressAdd = $params->adressAdd;
		$adress = $params->adress;
		$zip = $params->zip;
		$city = $params->city;
		$email = $params->email;
		$phone = $params->phone;
		$message = $params->message;
		$from = $params->from;
		$to = $params->to;
		$amount = $params->amount;
		$catering = $params->catering;
		

		if($twoMail == $email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$recipient = 'orh@becker-christian.de';  
			$subject = "Hausanfrage von $organisation"; 
			$message = "--------------- <b>ONLINE-HAUSANFRAGE</b> ---------------<br><br>
			<table><tr><td>Organisation/Verein: </td><td><b>$organisation</b></td></tr>  
			<tr><td>Name: </td><td><b>$firstName $lastName</b></td></tr>
			<tr><td>Adresse: </td><td><b>$adress<br>$adressAdd<br>$zip $city</b></td></tr>
			<tr><td>E-Mail: </td><td><b>$email</b></td></tr>
			<tr><td>Telefon: </td><td><b>$phone</b></td></tr>
			<tr><td>______________________________</td><td>______________________________</td></tr>
			<tr><td>Zeitraum: </td><td><b>$from bis $to</b></td></tr>
			<tr><td>Personenanzahl: </td><td><b>$amount Personen</b></td></tr>
			<tr><td>Verpflegung: </td><td><b>$catering</b></td></tr>
			<tr><td>______________________________</td><td>______________________________</td></tr>
			<tr><td>Bemerkung: </td><td><b>$message</b></td></tr>";

			$headers   = array();
			$headers[] = 'MIME-Version: 1.0';
			$headers[] = 'Content-type: text/html; charset=utf-8';

			// Additional headers
			$headers[] = "From: Hausanfrage@orh.de";

			mail($recipient, $subject, $message, implode("\r\n", $headers));
		}
		break;
	default: //Reject any non POST or OPTIONS requests.
		header("Allow: POST", true, 405);
		exit;
    } 
