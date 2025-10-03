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

		$title = $params->camp;
		$date = $params->date;
		$firstName = $params->firstName;
		$lastName = $params->lastName;
		$address = $params->address;
		$zip = $params->zip;
		$city = $params->city;
		$phone = $params->phone;
		$email = $params->email;
		$birthday = $params->birthday;
		$age = $params->age;
		$gender = $params->gender;
		$nationality = $params->nationality;
		$county = $params->county;
		$confession = $params->confession;
		$info = $params->info;
		$permission_swim = $params->perm_swim;
		$permission_hike = $params->perm_hike;
		$permission_ski = $params->perm_ski;
		$permission_independence = $params->perm_ind;
		$permission_photo = $params->perm_photo;
		$swimskill = $params->swimskill;
		$agreement = $params->agreement;
		$twoMail = $_GET["2f"];

		
		if($twoMail == $email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$recipient = 'orh@becker-christian.de';  
			$subject = "Freizeitanmeldung >> $title << von $firstName $lastName"; 
			$message = "--------------- <b>ONLINE-FREIZEITANMELDUNG ---------------<br>
			<br>__________________________________________________<br>$title  <i>($date)</i></b>
			<br>__________________________________________________<br><br>
			<table><tr><td>Name: </td><td><b>$firstName $lastName</b></td></tr>
			<tr><td>Adresse: </td><td><b>$address<br>$zip $city</b></td></tr>
			<tr><td>Telefon: </td><td><b>$phone</b></td></tr>
			<tr><td>E-Mail: </td><td><b>$email</b></td></tr>
			<tr><td>______________________________</td><td>______________________________</td></tr>
			<tr><td>Geburtstag: </td><td><b>$birthday</b></td></tr>
			<tr><td>Alter: </td><td><b>$age</b></td></tr>
			<tr><td>Geschlecht: </td><td><b>$gender</b></td></tr>
			<tr><td>Staatsangehörigkeit: </td><td><b>$nationality</b></td></tr>
			<tr><td>Kreis/Bezirk: </td><td><b>$county</b></td></tr>
			<tr><td>Konfession: </td><td><b>$confession</b></td></tr>
			<tr><td>______________________________</td><td>______________________________</td></tr>
			<tr><td>Besondere Hinweise: </td><td><b>$info</b></td></tr>
			<tr><td>Schwimmerfahrung: </td><td><b>$swimskill</b></td></tr>
			<tr><td>______________________________</td><td>______________________________</td></tr>
			<tr><td><b><i><u>Einverständnisse:</u></i></b></td></tr>
			<tr><td>Badeerlaubnis:</td><td><b>$permission_swim</b></td></tr>
			<tr><td>Bergtourelaubnis:</td><td><b>$permission_hike</b></td></tr>
			<tr><td>Skifahrerlaubnis:</td><td><b>$permission_ski</b></td></tr>
			<tr><td>Gelände verlassen-Erlaubnis:</td><td><b>$permission_independence</b></td></tr>
			<tr><td>Foto- und Videoerlaubnis:</td><td><b>$permission_photo</b></td></tr>
			<tr><td>Zustimmung der Grundsätze, Bedingungen und der Datenschutzerklärung:</td><td><b>$agreement</b></td></tr></table>";

			$headers   = array();
			$headers[] = 'MIME-Version: 1.0';
			$headers[] = 'Content-type: text/html; charset=utf-8';

			// Additional headers
			$headers[] = "From: Freizeitanmeldung@orh.de";

			mail($recipient, $subject, $message, implode("\r\n", $headers));
		}
		break;
	default: //Reject any non POST or OPTIONS requests.
		header("Allow: POST", true, 405);
		exit;
    } 
