<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$format = $_POST['format'];

$to = 'onegin343@ukr.net';
$subject = 'Новая заявка с Вашего сайта';
$headers = 'From: user@mail.ru' . "\r\n";



//echo $phone;
//echo $email;


mail($to, $subject, $name, $phone, $email, $comment, $format, $headers);



?>
