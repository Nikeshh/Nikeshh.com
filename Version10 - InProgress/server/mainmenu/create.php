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

    header('Content-Type: application/json');
    $aResult = array();
    if(!isset($_POST['icon']) ) { $icon = 'bi-grid-fill'; } else { $icon = $_POST['icon']; }
    if(!isset($_POST['label']) ) { $aResult['error'] = 'No label!'; }
    if(!isset($_POST['name']) ) { $aResult['error'] = 'No name!'; }
    if(!isset($aResult['error']) ) {
        $label = $_POST['label'];
        $name = $_POST['name'];
        $sql = "INSERT INTO ADMIN_MAIN_MENU (icon, label, name) VALUES ('$icon', '$label', '$name')";
        if ($conn->query($sql) === TRUE) {
            $result = "New record created successfully";
            echo json_encode($result);
        } else {
            $error = "Error: " . $sql . "<br>" . $conn->error;
            echo json_encode($error);
        }
        $conn->close();
    }
    
?>