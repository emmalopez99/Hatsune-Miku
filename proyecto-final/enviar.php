<?php
$pagina = "gracias.html";
Header("Location: $pagina");
?>
<?php
$para = 'emmasanisidro@gmail.com';
$asunto = 'Mensaje desde la web';

$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$mensaje = $_POST['mensaje'];

$contenido = "Este mensaje fue enviado por " . $nombre . " \r\n";
$contenido .= "Su e-mail es: " . $mail . " \r\n";
$contenido .= "Mensaje: " . $mensaje . " \r\n";

mail($para, $asunto, $contenido);
?>
