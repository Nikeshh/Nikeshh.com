<?php
    /*$servername = "127.0.0.1";
    $username = "admin";
    $password = "nikeshh123";
    $dbname = "admin_nikeshh";*/
    $servername = "127.0.0.1";
    $username = "u121977718_admin";
    $password = "1Jobdone!";
    $dbname = "u121977718_admin";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    header('Content-Type: application/json');
    $id = $_POST['id'];
    $sql = "UPDATE ADMIN_SUB_MENU SET favorite = '0' WHERE id = " . $id;
    if ($conn->query($sql) === TRUE) {
        $result = "Record updated successfully";
        // TODO: Update the parent menu if any of the submenu has been a favorite
        // TODO: If none of the submenu is favorite, mark the parent menu as not favorite
        echo json_encode($result);
    } else {
        $error = "Error: " . $sql . "<br>" . $conn->error;
        echo json_encode($error);
    }
    $conn->close();
    
?>