<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$format = $_POST['format'];

$to = 'onegin343@ukr.net';
$subject = 'Новая заявка с Вашего сайта';
$headers = 'From: user@mail.ru' . "\r\n";

$message = 'Новая заявка от ' . $email . ' ' . $comment . 'Телефон: ' . $phone;

function json_response($code = 200, $message = null){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: http://localhost:8000');

    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message
        ));
};


mail($to, $subject, $message);
echo json_response(200, 'working');


// $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
// http_response_code(200);
// echo json_encode($arr);

?>
