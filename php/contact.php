<?php

$subject = $_REQUEST['subject'] . ' STRT Multipurpose Site Template : Demo';//Subject of your email
$to = 'your@address.com'; //Recipient's or Your E-mail

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message .= 'Name: ' . $_REQUEST['name'] . "<br>";
$message .= 'Email: ' . $_REQUEST['email'] . "<br>";
$message .= 'Subject: ' . $_REQUEST['subject'] . "<br><br>";
$message .= $_REQUEST['message'];


if (@mail($to, $subject, $message, $headers)) {
    // Transfer the value 'sent' to ajax function for showing success message.
    echo 'sent';
} else {
    // Transfer the value 'failed' to ajax function for showing error message.
    echo 'failed';
}
?>