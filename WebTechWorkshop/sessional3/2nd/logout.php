<?php
session_start();
session_destroy();
setcookie("user_email", "", time() - 3600, "/"); // delete cookie
header("Location: login1.php");
exit();
?>
