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
    if(!isset($_POST['content_title']) ) { $aResult['error'] = 'No content title!'; }
    if(!isset($_POST['content']) ) { $aResult['error'] = 'No content!'; }
    if(!isset($_POST['page_title']) ) { $aResult['error'] = 'No page title!'; }
    if(!isset($_POST['page_subtitle']) ) { $aResult['error'] = 'No page sub title!'; }
    if(!isset($_POST['main_menu_id']) ) { $aResult['error'] = 'No main menu id!'; }
    if(!isset($aResult['error']) ) {
        $content_title = $_POST['content_title'];
        $content = $_POST['content'];
        $page_title = $_POST['page_title'];
        $page_subtitle = $_POST['page_subtitle'];
        $main_menu_id = $_POST['main_menu_id'];
        $sql = "INSERT INTO ADMIN_MAIN_MENU_PAGE (content_title, content, page_title, page_subtitle, main_menu_id) VALUES ('$content_title', '$content', '$page_title', '$page_subtitle', '$main_menu_id')";
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