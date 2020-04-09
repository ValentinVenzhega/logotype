<?php
// Файлы phpmailer
require ‘phpmailer/phpmailer.php’;
require ‘phpmailer/smtp.php’;
require ‘phpmailer/exception.php’;
// Переменные
$name = $_POST[‘name’];
$number = $_POST[‘number’];
$email = $_POST[‘email’];
$message = $_POST[‘message’];
// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = ‘smtp.yandex.ru’; 
$mail->SMTPAuth = true; 
$mail->Username = ‘valek917’; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = ‘lupohi78’; // Ваш пароль
$mail->SMTPSecure = ‘ssl’; 
$mail->Port = 465;
$mail->setFrom(‘valek917@yandex.ru’); // Ваш Email
$mail->addAddress(‘vel09vel@rambler.ru’); // Email получателя
$mail->addAddress(‘example@gmail.com’); // Еще один email, если нужно.
// Прикрепление файлов
 /* for ($ct = 0; $ct < count($_FILES[‘userfile’][‘tmp_name’]); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES[‘userfile’][‘name’][$ct]));
 $filename = $_FILES[‘userfile’][‘name’][$ct];
 if (move_uploaded_file($_FILES[‘userfile’][‘tmp_name’][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= ‘Failed to move file to ‘ . $uploadfile;
 }
 }  */
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = “Новая заявка”; // Заголовок письма
$mail->Body = “Имя $name . Телефон $number . Почта $email” . Сообщение $message”;;  // Текст письма
// Результат
if ($mail->send()) {
  echo "$msg";
} else {
  echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
  echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
?>