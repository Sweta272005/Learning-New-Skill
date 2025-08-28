<?php
session_start();

if (!isset($_SESSION['email_id'])) {
    header("Location: login1.php");
    exit();
}

$email = $_SESSION['email_id'];
$cookie_email = isset($_COOKIE['user_email']) ? $_COOKIE['user_email'] : "No cookie found.";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome, <?php echo $email; ?>!</h2>
    <p>Your email from cookie: <?php echo $cookie_email; ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>
