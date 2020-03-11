<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
/*
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

date_default_timezone_set('Etc/UTC');

require '../vendor/autoload.php';

$mail = new PHPMailer;

try {
  //Server settings
  $mail->isSMTP();                                            // Send using SMTP
  $mail->SMTPDebug = SMTP::DEBUG_LOWLEVEL;
  $mail->Host = 'mail.bumperball.in.ua';
  $mail->Port = 587;
  $mail->SMTPAuth = true;
  $mail->Username = 'noreply@bumperball.in.ua';
  $mail->Password = '123580as';

  //Set who the message is to be sent from
  $mail->setFrom('noreply@test.com');

  //Set who the message is to be sent to
  $mail->addAddress('benqmaks+123@gmail.com');

  // Content
  $mail->isHTML(true);
  $mail->Subject = 'Here is the subject';
  $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
*/
