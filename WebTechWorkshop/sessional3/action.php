<?php
// Define DB credentials
$servername = "localhost";
$username = "root";
$password = "";  // Homebrew installs MySQL with no password by default
$database = "webtech";

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data safely
    $student_name = $_POST['student_name'];
    $email_id     = $_POST['email_id'];
    $phone        = $_POST['phone'];
    $course       = $_POST['course'];
    $semester     = $_POST['semester'];
    $address      = $_POST['address'];

    // Connect to MySQL
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("❌ Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL insert query
    $sql = "INSERT INTO student_rec (student_name, email_id, phone, course, semester, address)
            VALUES (?, ?, ?, ?, ?, ?)";

    // Use prepared statements to avoid SQL injection
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("❌ Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssssss", $student_name, $email_id, $phone, $course, $semester, $address);

    // Execute and check result
    if ($stmt->execute()) {
        echo "<h2>✅ Registration Successful!</h2>";
    } else {
        echo "<h2>❌ Error: " . $stmt->error . "</h2>";
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "<h2>⚠️ Invalid request method.</h2>";
}
?>
