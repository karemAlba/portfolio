<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "krmd91@gmail.com";
  $nombre = $_REQUEST['nombre'];
  $email = $_REQUEST['email'];
  $asunto = $_REQUEST['asunto'];
  $comentario = $_REQUEST['comentario'];
  
  //send email
  mail($admin_email, "$asunto", $comentario, "From:" . $email);
  
  //Email response
  echo "Tu mensaje se a enviado con exito!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
  	echo "Tu mensaje no se pudo enviar intentalo más tarde";
  	
  }
?>