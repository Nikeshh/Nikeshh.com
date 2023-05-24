<?php
    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
        $url = "https://";   
    else  
        $url = "http://";

    // Append the host(domain name, ip) to the URL.   
    $url.= $_SERVER['HTTP_HOST'];   

    // Append the requested resource location to the URL   
    $url.= $_SERVER['REQUEST_URI'];

    $url_components = parse_url($url);
    parse_str($url_components['query'], $params);
    $id = $params["id"];

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

    // Find the unique labels
    $sql = "SELECT * FROM ADMIN_MENU GROUP BY LABEL";
    $result = $conn->query($sql);
    $labels = array();
    while($row = $result->fetch_assoc()) {
        $labels[] = $row;
    }
    // Find the menu and submenu items
    $menuitems = array();
    $submenuitems = array();
    for ($i=0 ; $i < sizeof($labels); $i++){
        // Menu Array
        $sql = "SELECT * FROM ADMIN_MENU WHERE LABEL = '" . $labels[$i]["label"] . "'";
        $result = $conn->query($sql);
        $menus = array();
        while($row = $result->fetch_assoc()) {
            $menus[] = $row;
        }
        $menuitems[] = $menus;

        // Submenu array
        foreach($menus as $row) {
            $menu_id = $row["id"];
            $sql = "SELECT * FROM ADMIN_SUB_MENU WHERE MENU_ID = '" . $menu_id . "'";
            $result = $conn->query($sql);
            $submenus = array();
            while($row = $result->fetch_assoc()) {
                $submenus[] = $row;
            }
        }
        $submenuitems[] = $submenus;
    }

    // Find the sub page details
    $sql = "SELECT * FROM ADMIN_PAGE WHERE SUBMENU_ID='" . $id . "'";
    $result = $conn->query($sql);
    $pagecontents = array();
    while($row = $result->fetch_assoc()) {
        $pagecontents[] = $row;
    }
    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pagecontents[0]["page_title"] ?></title>
    <link rel="stylesheet" href="../assets/css/main/app.css">
    <link rel="stylesheet" href="../assets/css/main/app-dark.css">
    <link rel="shortcut icon" href="../assets/images/logo/favicon.svg" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/logo/favicon.png" type="image/png">
    <link rel="stylesheet" href="../assets/extensions/sweetalert2/sweetalert2.min.css">
</head>

<body>
    <div id="app">
        <div id="sidebar" class="active">
            <div class="sidebar-wrapper active">
                <div class="sidebar-header position-relative">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo">
                            <a href="../../admin.html"><img src="../assets/images/logo/logo.svg" alt="Logo" srcset=""></a>
                        </div>
                        <div class="theme-toggle d-flex gap-2  align-items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--system-uicons" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path><g transform="translate(-210 -1)"><path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path><circle cx="220.5" cy="11.5" r="4"></circle><path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path></g></g></svg>
                            <div class="form-check form-switch fs-6">
                                <input class="form-check-input  me-0" type="checkbox" id="toggle-dark" >
                                <label class="form-check-label" ></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path></svg>
                        </div>
                        <div class="sidebar-toggler  x">
                            <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <span id="addmenu" style="font-size: 1rem; cursor: pointer;" class="m-2"><i class="bi bi-list"></i></span>
                        <span id="addsubmenu" style="font-size: 1rem; cursor: pointer;" class="m-2"><i class="bi bi-menu-button"></i></span>
                        <span id="addpage" style="font-size: 1rem; cursor: pointer;" class="m-2"><i class="bi bi-file-earmark"></i></span>
                    </div>
                </div>
                <div class="sidebar-menu">
                    <ul class="menu">
                        <?php
                            for ($i=0 ; $i < sizeof($labels); $i++){
                                $datalabel = $labels[$i];
                                echo '<li class="sidebar-title">'. $datalabel["label"] . '</li>';
                                $datamenus = $menuitems[$i];

                                for($j=0; $j < sizeof($datamenus); $j++) {
                                    $datamenu = $datamenus[$j]; // Single
                                    $datasubmenu = $submenuitems[$j]; // Multiple

                                    echo '
                                        <li
                                            class="sidebar-item  has-sub ">
                                            <a href="#" class="sidebar-link">
                                                <i class="bi bi-collection-fill"></i>
                                                <span>'. $datamenu["name"] .'</span>
                                            </a>
                                            <ul class="submenu ">';
                                                for($k=0; $k < sizeof($datasubmenu); $k++) {
                                                    echo '<li class="submenu-item "><a href="./subpage.php?id='. $datasubmenu[$k]["id"] .'">'. $datasubmenu[$k]["name"] .'</a>';
                                                }
                                            echo '
                                             </ul>
                                        </li>
                                    ';
                                }
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
        <div id="main">
            <header class="mb-3">
                <a href="#" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                </a>
            </header>
            <div class="page-heading">
                <div class="page-title">
                    <div class="row">
                        <div class="col-12 col-md-6 order-md-1 order-last">
                            <h3><?php echo $pagecontents[0]["page_title"] ?></h3>
                            <p class="text-subtitle text-muted"><?php echo $pagecontents[0]["page_subtitle"] ?></p>
                        </div>
                        <div class="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="../../admin.html">Admin</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?php echo $pagecontents[0]["page_title"] ?></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <section class="section">
                    <?php
                        for ($i=0 ; $i < sizeof($pagecontents); $i++){
                            $pagecontent = $pagecontents[$i];
                            echo '
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">' . $pagecontent["content_title"] . '</h4>
                                    </div>
                                    <div class="card-body">' . $pagecontent["content"] . '</div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Edit '. $pagecontent["content_title"] .'</h4>
                                                <button class="btn btn-primary">Save</button>
                                            </div>
                                            <div class="card-body">
                                                <div id="'. $pagecontent["content_title"] . "_" . $pagecontent["id"] .'">
                                                    <p>'. $pagecontent["content"] .'</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ';
                        }
                    ?>
                </section>
            </div>
            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-start">
                        <p>2023 &copy; Nikeshh Vijayabaskaran</p>
                    </div>
                    <div class="float-end">
                        <p>Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a
                                href="https://nikeshh.com">Nikeshh Vijayabaskaran</a></p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>

    <script src="../assets/js/bootstrap.js"></script>
    <script src="../assets/js/app.js"></script>

    <!-- Sweet Alert -->
    <script src="../assets/extensions/sweetalert2/sweetalert2.min.js"></script>
    <script src="../assets/js/pages/popup.js"></script>

    <!-- CKEditor -->
    <script src="https://cdn.ckeditor.com/ckeditor5/34.2.0/classic/ckeditor.js"></script>
    <script>
        var page_contents = <?php echo json_encode($pagecontents); ?>;
        for(var i=0; i<page_contents.length; i++) {
            var page_content = page_contents[i];
            var selector = "#" + page_content["content_title"] + "_" + page_content["id"];
            ClassicEditor
            .create(document.querySelector(selector))
            .catch(error => {
                console.error(error);
            });
        }
    </script>
</body>
</html>
