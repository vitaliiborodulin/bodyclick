<?php

require_once "phpmailer/phpmailer.php";

	$response = [
		'res' => false,
		'error' => ''
	];

	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		$email = trim($_POST['email']);

        $people_old = (int)file_get_contents('people.txt') ?: 0;
        $ticket_old = (int)file_get_contents('ticket.txt') ?: 0;
		
		if($name === '' || $phone === '' || $email === ''){
			$response['error'] = 'Заполните все поля!';
		} else if($people_old == 0) {
            $response['error'] = 'Места закончились!';
        } else if($ticket_old == 0) {
            $response['error'] = 'Билеты закончились!';
        }else {


            $mail_title =  'Ваш билетик';
            $mailBody = 'Уважаемый ' . $name . '. Ваш билет номер ' . $ticket_old . '. Ждём Вас.';
            $success = sendMail($email, $title, $mailBody);
            $response['res'] = true;
            $ticket_new = $people_old - 99;
            
			if ($success){
                $dt = date("Y-d-m H:i:s");
                $adminBody = "Дата заявки: $dt Имя: $name Тел: $phone Почта: $email";

                sendMail('xaaser2006@gmail.com', 'Заявка на регистрацию', $adminBody);

                $people_new = $people_old - 1;
                file_put_contents('people.txt', $people_new);

            }
		}
	}

	echo json_encode($response);