<!-- login1.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login Form</h2>
    <form method="POST" action="login1.php">
        <label>Email ID:</label><br>
        <input type="email" name="email_id" required><br><br>

        <label>Password:</label><br>
        <input type="password" name="password" required><br><br>

        <input type="submit" name="login" value="Login">
        <input type="reset" value="Reset">
    </form>
</body>
</html>

<?php
session_start();

if (isset($_POST['login'])) {
    $conn = new mysqli("localhost", "root", "", "webtech");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $email = $_POST['email_id'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM log WHERE email_id='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows === 1) {
        $_SESSION['email_id'] = $email;

        // Set cookie for 1 hour
        setcookie("user_email", $email, time() + 3600, "/");

        header("Location: welcome.php");
        exit();
    } else {
        echo "<h3>Incorrect Credentials</h3>";
    }

    $conn->close();
}
?>
