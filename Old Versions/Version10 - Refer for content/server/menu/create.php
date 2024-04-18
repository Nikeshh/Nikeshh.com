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
    if(!isset($_POST['icon']) ) { $icon = 'bi-grid-fill'; } else { $icon = $_POST['icon']; }
    if(!isset($_POST['name']) ) { $aResult['error'] = 'No name!'; }
    if(!isset($_POST['label']) ) { $aResult['error'] = 'No label!'; }
    if(!isset($_POST['main_menu_id']) ) { $aResult['error'] = 'No main menu id!'; }
    if(!isset($aResult['error']) ) {
        $name = $_POST['name'];
        $label = $_POST['label'];
        $main_menu_id = $_POST['main_menu_id'];
        $sql = "INSERT INTO ADMIN_MENU (icon, name, label, main_menu_id) VALUES ('$icon', '$name', '$label', '$main_menu_id')";
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