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
    $aResult = array();
    if(!isset($_POST['content']) ) { $aResult['error'] = 'No content!'; }
    if(!isset($_POST['id']) ) { $aResult['error'] = 'No id!'; }
    if(!isset($aResult['error']) ) {
        $content = $_POST['content'];
        $id = $_POST['id'];
        $sql = "UPDATE ADMIN_PAGE SET content = '" . $content . "' WHERE id = " . $id;
        if ($conn->query($sql) === TRUE) {
            $result = "Record updated successfully";
            echo json_encode($result);
        } else {
            $error = "Error: " . $sql . "<br>" . $conn->error;
            echo json_encode($error);
        }
        $conn->close();
    }
    
?>