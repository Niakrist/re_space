<?php

$name = isset($_POST['name']) ? htmlspecialchars(substr($_POST['name'], 0,  100)) : '';
$tele = isset($_POST['tele']) ? htmlspecialchars(substr($_POST['tele'], 0,   50)) : '';
$mail = isset($_POST['mail']) ? htmlspecialchars(substr($_POST['mail'], 0,  100)) : '';
$text = isset($_POST['text']) ? htmlspecialchars(substr($_POST['text'], 0, 2000)) : '';

$ip = (isset($_SERVER['HTTP_X_REAL_IP'])) ? $_SERVER['HTTP_X_REAL_IP'] : $_SERVER['REMOTE_ADDR'];
$time = date('j M Y, G:i:s T');
$host = (substr($_SERVER['HTTP_HOST'], 0, 4) === 'www.') ? substr($_SERVER['HTTP_HOST'], 4) : $_SERVER['HTTP_HOST'];
$subj = "{$host} - письмо с сайта";

$eol = "\r\n";

$head =
	'From: site@' . $host . $eol .
	'Content-Type: text/plain; charset=utf-8' . $eol .
	'Content-Transfer-Encoding: 8bit' . $eol . $eol
;

$body = 
	'Сайт: ' . $host . $eol .
	'IP пользователя: ' . $ip . $eol .
	'Отправлено: ' . $time . $eol .
	'Тема: ' . $subj . $eol .
	'Имя: ' . $name . $eol .
	'Телефон: ' . $tele . $eol .
	'Email: ' . $mail . $eol .
	'Сообщение:' . $eol . $text . $eol
;

#mail("sales@{$host}", '=?utf-8?b?'.base64_encode($subj).'?=', $body, $head);
mail("ak_88dron@inbox.ru", '=?utf-8?b?'.base64_encode($subj).'?=', $body, $head);
file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/../letters/' . date('Y-m-d-H-i-s').'.txt', $body);

?>