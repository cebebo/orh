<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: https://www.becker-christian.de/");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
	case("POST"): //Send the email;
		header("Access-Control-Allow-Origin: https://www.becker-christian.de/");
		// Payload is not send to $_POST Variable,
		// is send to php:input as a text
		$json = file_get_contents('php://input');
		//parse the Payload from text format to Object
		$params = json_decode($json);

		$email = $params->email;
		$twoMail = $_GET["2f"];
		$name = $params->name;
		$message = $params->message;
		
		if($twoMail == $email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$recipient = 'mail@becker-christian.de';  
			$subject = "Kontaktanfrage von <$email>"; 
			$message = "Name:" . $name . "<br>" . $message ;

			$headers   = array();
			$headers[] = 'MIME-Version: 1.0';
			$headers[] = 'Content-type: text/html; charset=utf-8';

			// Additional headers
			$headers[] = "From: noreply@becker-christian.de";

			mail($recipient, $subject, $message, implode("\r\n", $headers));
		}
		break;
	default: //Reject any non POST or OPTIONS requests.
		header("Allow: POST", true, 405);
		exit;
    } 
