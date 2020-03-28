<?php
  $myMail = 'ivan.serenko@nure.ua';

  $postData = file_get_contents('php://input');
  $data = json_decode($postData, true);
  
  $name = $data['name'];
  $phone = $data['phone'];
  $email = $data['email'];
  $comment = $data['comment'];
  $format = $data['format'];

function json_response($code = 200, $message = null){
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: token, Content-Type');
  header('Access-Control-Max-Age: 1728000');
  header('Content-Length: 0');
  header('Content-Type: application/json; charset=utf-8');
  return json_encode(array(
      'status' => $code < 300, // success or not?
      'message' => $message
      ));
};

$ownerMessage = "Name:    " . $name   ."\n".
                "Phone:   " . $phone  ."\n".
                "Email:   " . $email  ."\n".
                "Format:  " . $format ."\n".
                "Comment: " . $comment."\n";

$clientMessage =  "Здравствуйте ". $name ."! \nМы приняли вашу заявку на обработку и свяжемся с вами в ближайшее время.";

if($email !== "") {
  if(mail($myMail, "Landing form", $ownerMessage)) {
    echo json_response(200, 'SUCCESS');
  } else {
    echo json_response(500, 'ERROR');
  }
  mail($email, "Администрация bumperball.in.ua", $clientMessage);
}

?>