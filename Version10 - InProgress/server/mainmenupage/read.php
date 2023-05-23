<?php
    $servername = "127.0.0.1";
    $username = "admin";
    $password = "nikeshh123";
    $dbname = "admin_nikeshh";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM ADMIN_MAIN_MENU";
    $result = $conn->query($sql);
    $myArray = array();
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    }
    if ($result) {
        echo json_encode($myArray);
    } else {
        $error = "Error: " . $sql . "<br>" . $conn->error;
        echo json_encode($error);
    }
    $conn->close();
    
?>