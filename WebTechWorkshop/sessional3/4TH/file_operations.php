<?php
echo "<h2>1. Reading from a File (example_copy.txt)</h2>";
$readFile = 'example_copy.txt';
if (file_exists($readFile)) {
    $handle = fopen($readFile, 'r');
    $content = fread($handle, filesize($readFile));
    fclose($handle);
    echo nl2br(htmlspecialchars($content));
} else {
    echo "❌ File $readFile does not exist.<br>";
}

echo "<hr><h2>2. Writing to a File (sample.txt)</h2>";
$writeFile = 'sample.txt';
$textToWrite = "Welcome in the world of machine learning.";
$handle = fopen($writeFile, 'w');
if ($handle) {
    fwrite($handle, $textToWrite);
    fclose($handle);
    echo "✅ Written to $writeFile successfully.<br>";
} else {
    echo "❌ Unable to write to $writeFile.<br>";
}

echo "<hr><h2>3. Appending to a File (example.txt)</h2>";
$appendFile = 'example.txt';
$textToAppend = "This is an appended message.\n";
$handle = fopen($appendFile, 'a');
if ($handle) {
    fwrite($handle, $textToAppend);
    fclose($handle);
    echo "✅ Appended to $appendFile successfully.<br>";
} else {
    echo "❌ Unable to append to $appendFile.<br>";
}

echo "<hr><h2>4. Copying File (example.txt → example_copy.txt)</h2>";
if (file_exists($appendFile)) {
    if (copy($appendFile, $readFile)) {
        echo "✅ File copied to $readFile successfully.<br>";
    } else {
        echo "❌ Failed to copy $appendFile.<br>";
    }
} else {
    echo "❌ Source file $appendFile does not exist.<br>";
}

echo "<hr><h2>5. Deleting File (example_copy.txt)</h2>";
if (file_exists($readFile)) {
    if (unlink($readFile)) {
        echo "✅ $readFile deleted successfully.<br>";
    } else {
        echo "❌ Failed to delete $readFile.<br>";
    }
} else {
    echo "❌ File $readFile not found for deletion.<br>";
}

echo "<hr><h2>6. Renaming File (sample.txt → renamed_sample.txt)</h2>";
$newName = 'renamed_sample.txt';
if (file_exists($writeFile)) {
    if (rename($writeFile, $newName)) {
        echo "✅ $writeFile renamed to $newName.<br>";
    } else {
        echo "❌ Failed to rename $writeFile.<br>";
    }
} else {
    echo "❌ $writeFile does not exist.<br>";
}
?>

