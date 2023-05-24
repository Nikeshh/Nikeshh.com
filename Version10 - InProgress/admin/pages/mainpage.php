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

    // Find the main page details
    $sql = "SELECT * FROM ADMIN_MAIN_MENU_PAGE WHERE MAIN_MENU_ID='" . $id . "'";
    $result = $conn->query($sql);
    $mainpagecontents = array();
    while($row = $result->fetch_assoc()) {
        $mainpagecontents[] = $row;
    }
    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $mainpagecontents[0]["page_title"] ?></title>
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
                            <h3><?php echo $mainpagecontents[0]["page_title"] ?></h3>
                            <p class="text-subtitle text-muted"><?php echo $mainpagecontents[0]["page_subtitle"] ?></p>
                        </div>
                        <div class="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="../../admin.html">Admin</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?php echo $mainpagecontents[0]["page_title"] ?></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <section class="section">
                    <?php
                        for ($i=0 ; $i < sizeof($mainpagecontents); $i++){
                            $mainpagecontent = $mainpagecontents[$i];
                            echo '
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">' . $mainpagecontent["content_title"] . '</h4>
                                    </div>
                                    <div class="card-body">' . $mainpagecontent["content"] . '</div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Edit '. $mainpagecontent["content_title"] .'</h4>
                                                <button id="'. $mainpagecontent["id"] . "_button" .'" class="btn btn-primary">Save</button>
                                            </div>
                                            <div class="card-body">
                                                <textarea name="'. $mainpagecontent["id"] . "_editor" .'" id="'. $mainpagecontent["id"] . "_editor" .'" class="form-control" rows="12" cols="50"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ';
                        }
                    ?>

                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Software, SAAS products, Websites, Apps, Themes, Templates, Extensions and Plugins Development</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./software-and-saas-products/run-your-company.html">Run Your Company</a></li>
                                <li><a href="./software-and-saas-products/marketer.html">Marketer</a></li>
                                <li><a href="./software-and-saas-products/social-media-automation.html">Social Media Automation</a></li>
                                <li><a href="./software-and-saas-products/chatbot-king.html">Chatbot King</a></li>
                                <li><a href="./software-and-saas-products/educator.html">Educator</a></li>
                                <li><a href="./software-and-saas-products/b2bxlead.html">B2BXLead</a></li>
                                <li><a href="./software-and-saas-products/b2cxlead.html">B2CXLead</a></li>
                                <li><a href="./software-and-saas-products/lead-generation-and-automation.html">Lead generation and automation</a></li>
                                <li><a href="./software-and-saas-products/ai-powered-landing-page-builder.html">AI powered landing page builder</a></li>
                                <li><a href="./software-and-saas-products/ai-powered-website-builder.html">AI powered website builder</a></li>
                                <li><a href="./software-and-saas-products/automation-product.html">Automation product</a></li>
                                <li><a href="./software-and-saas-products/e-commerce.html">E-commerce</a></li>
                                <li><a href="./software-and-saas-products/freelancing-marketplace.html">Freelancing maretplace</a></li>
                                <li><a href="./software-and-saas-products/no-code-freelancing-marketplace.html">No code freelancing marketplace</a></li>
                                <li><a href="./software-and-saas-products/chatbot-king.html">Chatbot King</a></li>
                                <li><a href="./software-and-saas-products/e-Social.html">e-Social</a></li>
                                <li><a href="./software-and-saas-products/impact-ai.html">ImpactAI</a></li>
                                <li><a href="./software-and-saas-products/influencer-platform.html">Influencer Platform</a></li>
                                <li><a href="./software-and-saas-products/payment-pro.html">Payment Pro</a></li>
                                <li><a href="./software-and-saas-products/property-manager.html">Property Manager</a></li>
                                <li><a href="./software-and-saas-products/sales-king.html">Sales King</a></li>
                                <li><a href="./software-and-saas-products/photo-gallery.html">Photo Gallery</a></li>
                                <li><a href="./software-and-saas-products/pricing-table.html">Pricing Table</a></li>
                                <li><a href="./software-and-saas-products/testimonials.html">Testimonials</a></li>
                                <li>
                                    <a href="./software-and-saas-products/testimonials.html">Themes, Templates and Plugins</a>
                                    <ul>
                                        <li><a href="./software-and-saas-products/themes-and-plugins/photo-gallery-app.html">Photo Gallery App</a></li>
                                        <li><a href="./software-and-saas-products/themes-and-plugins/admin-panel-themes.html">Admin Panel Themes</a></li>
                                        <li>
                                            <a href="./software-and-saas-products/themes-and-plugins/shopify.html">Shopify</a>
                                            <ul>
                                                <li><a href="./software-and-saas-products/themes-and-plugins/shopify/powerful-theme.html">Powerful Theme</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./software-and-saas-products/websites.html">Websites</a>
                                    <ul>
                                        <li>
                                            <a href="./software-and-saas-products/websites/nikeshh-vijayabaskaran.html">Nikeshh Vijayabaskaran</a>
                                            <ul>
                                                <li><a href="./software-and-saas-products/websites/nikeshh-vijayabaskaran/nikeshh.html">Nikeshh.com</a></li>
                                                <li><a href="./software-and-saas-products/websites/nikeshh-vijayabaskaran/nikeshh-vijayabaskaran.html">NikeshhVijayabaskaran.com</a></li>
                                                <li><a href="./software-and-saas-products/websites/nikeshh-vijayabaskaran/nikeshh-codes.html">NikeshhCodes.com</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/leadup-global.html">LeadupGlobal.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/free-website-king.html">FreeWebsiteKing.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/appurla-fashion.html">Appurlafashion.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/biskit-bites.html">Biskitbites.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/code-with-nik.html">Codewithnik.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/happy-hour-code.html">Happyhourcode.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/zero-to-being.html">Zerotobeing.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/interview-love.html">Interviewlove.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/utility-battle.html">Utilitybattle.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/the-recipe-school.html">Therecipeschool.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/newie-bee-money.html">Newiebeemoney.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/spectra-review.html">Spectrareview.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/retina-biz.html">Retinabiz.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/experience-the-heaven.html">Experiencetheheaven.com</a>
                                        </li>
                                        <li>
                                            <a href="./software-and-saas-products/websites/tech-breezers.html">Techbreezers.com</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Jobs</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./jobs/contract-jobs.html">Contract Jobs</a></li>
                                <li><a href="./jobs/full-time-jobs.html">Full Time Jobs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Businesses, Startups and Companies</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>
                                    <a href="./companies/neev.html">Neev</a>
                                </li>
                                <li>
                                    <a href="./companies/rgprotech.html">RGProtech</a>
                                </li>
                                <li>
                                    <a href="./companies/leadup-global.html">Leadup Global</a>
                                </li>
                                <li>
                                    <a href="./companies/nikeshh-vijayabaskaran.html">Nikeshh Vijayabaskaran</a>
                                </li>
                                <li>
                                    <a href="./companies/nikeshh-vijayabaskaran.html">Service Based Company</a>
                                </li>
                                <li>
                                    <a href="./companies/agencies.html">Agencies</a>
                                    <ul>
                                        <li><a href="./companies/agencies/website-and-software-development-agency.html">Website and Software development agency</a></li>
                                        <li>
                                            <a href="./companies/agencies/marketing-and-lead-generation-agency.html">Marketing and Lead Generation agency</a>
                                            <ul>
                                                <li><a href="./companies/agencies/marketing-and-lead-generation-agency/ppe-supply.html">PPE Supply</a></li>
                                                <li><a href="./companies/agencies/marketing-and-lead-generation-agency/alt-interiors.html">ALT Interiors</a></li>
                                                <li><a href="./companies/agencies/marketing-and-lead-generation-agency/robby-singh.html">Robby Singh</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./companies/agencies/recruitment-agency.html">Recruitment Agency</a></li>
                                        <li><a href="./companies/agencies/no-code-agency.html">No code dev agency</a></li>
                                        <li><a href="./companies/agencies/personal-brand-monetization-agency.html">Personal brand monetization agency</a></li>
                                        <li><a href="./companies/agencies/outsourcing-agency.html">Outsourcing agency</a></li>
                                        <li><a href="./companies/agencies/design-agency.html">Design agency</a></li>
                                        <li><a href="./companies/agencies/white-labeled-seo-agency.html">White labeled SEO Agency</a></li>
                                        <li><a href="./companies/agencies/ad-agency.html">Ad Agency</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Envato and Codecanyon</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./envato-and-codecanyon/food-delivery-pro.html">Food Delivery Pro</a></li>
                                <li><a href="./envato-and-codecanyon/listing-pro.html">Listing Pro</a></li>
                                <li><a href="./envato-and-codecanyon/real-estate-pro.html">Real Estate Pro</a></li>
                                <li><a href="./envato-and-codecanyon/service-pro.html">Service Pro</a></li>
                                <li><a href="./envato-and-codecanyon/ui-master.html">UI Master</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Blogging</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Social Media</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./social-media/discord.html">Discord</a></li>
                                <li><a href="./social-media/facebook.html">Facebook</a></li>
                                <li><a href="./social-media/instagram.html">Instagram</a></li>
                                <li><a href="./social-media/pinterest.html">Pinterest</a></li>
                                <li><a href="./social-media/reddit.html">Reddit</a></li>
                                <li><a href="./social-media/tiktok.html">Tiktok</a></li>
                                <li><a href="./social-media/twitch.html">Twitch</a></li>
                                <li><a href="./social-media/twitter.html">Twitter</a></li>
                                <li>
                                    <a href="./social-media/youtube.html">Youtube</a>
                                    <ul>
                                        <li>
                                            <a href="./social-media/youtube/aravatu.html">Aravatu</a>
                                        </li>
                                        <li>
                                            <a href="./social-media/youtube/bull-gaming.html">Bull gaming</a>
                                        </li>
                                        <li>
                                            <a href="./social-media/youtube/jackson.html">Jackson</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Freelancing</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./freelancing/fiverr.html">Fiverr</a></li>
                                <li><a href="./freelancing/freelancer.html">Freelancer</a></li>
                                <li><a href="./freelancing/guru.html">Guru</a></li>
                                <li><a href="./freelancing/upwork.html">Upwork</a></li>
                                <li><a href="./freelancing/requests.html">Requests</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Drop Servicing</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Teaching, Tutorials and Courses</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Books, Ebooks, Tutorials, Writings and Newsletters</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>
                                    <a href="./books-ebooks-and-newsletters/amazon-kdp.html">Amazon KDP</a>
                                    <ul>
                                        <li><a href="./books-ebooks-and-newsletters/amazon-kdp/children-books.html">Children Books</a></li>
                                    </ul>
                                </li>
                                <li><a href="./books-ebooks-and-newsletters/medium.html">Medium</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Ecommerce</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>
                                    <a href="./ecommerce/merch-by-amazon.html">Merch By Amazon</a>
                                    <ul>
                                        <li>9.99 USD monthly from May 15th</li>
                                        <li>Waiting for merch by amazon account from addie</li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./ecommerce/etsy.html">Etsy</a>
                                    <ul>
                                        <li><a href="./ecommerce/etsy/nikeshhstore.html">Nikeshh Store</a></li>
                                        <li><a href="./ecommerce/etsy/chromajewellery.html">Chroma Jewellery</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./ecommerce/digital-products.html">Digital Products</a>
                                    <ul>
                                        <li>
                                            <a href="./ecommerce/digital-products/plr-products.html">PLR products</a>
                                            <ul>
                                                <li><a href="./ecommerce/digital-products/plr-products/self-care-guide.html">Self Care Guide</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./ecommerce/digital-products/notion-templates.html">Notion Templates</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./ecommerce/physical-products.html">Physical Products</a>
                                    <ul>
                                        <li>
                                            <a href="./ecommerce/physical-products/dropshipping.html">Dropshipping</a>
                                            <ul>
                                                <li><a href="./ecommerce/physical-products/dropshipping/chewrr.html">Chewrr</a></li>
                                                <li><a href="./ecommerce/physical-products/dropshipping/biskit-bites.html">Biskit Bites</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Designing and Art</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./designing-and-art/awwards.html">Awwards</a></li>
                                <li><a href="./designing-and-art/behance.html">Behance</a></li>
                                <li><a href="./designing-and-art/dribbble.html">Dribbble</a></li>
                                <li><a href="./designing-and-art/graphic-designing.html">Graphic Designing</a></li>
                                <li><a href="./designing-and-art/pinterest.html">Pinterest</a></li>
                                <li><a href="./designing-and-art/redbubble.html">Redbubble</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Coaching, Consulting and Marketing</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Print on demand</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>
                                    <a href="./print-on-demand/tshirt.html">Tshirt</a>
                                    <ul>
                                        <li><a href="./print-on-demand/tshirt/merch-by-amazon.html">Merch By Amazon</a></li>
                                        <li><a href="./print-on-demand/tshirt/redbubble.html">Redbubble</a></li>
                                        <li><a href="./print-on-demand/tshirt/teespring.html">Teespring</a></li>
                                        <li><a href="./print-on-demand/tshirt/teepublic.html">Teepublic</a></li>
                                    </ul>
                                </li>
                                <li><a href="./print-on-demand/etsy.html">Etsy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Social Media Automation</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./social-media-automation/youtube-automation.html">Youtube Automation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Airbnb Arbitrage</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">High Ticket Sales</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Lead Generation</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Affiliate Marketing</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./affiliate-marketing/click-bank.html">Click bank</a></li>
                                <li><a href="./affiliate-marketing/impact.html">Impact</a></li>
                                <li><a href="./affiliate-marketing/shopdotcom.html">Shop.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Investing, Savings, Stocks, Dividends and Trading</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./investing/crypto.html">Crypto</a></li>
                                <li><a href="./investing/index-funds.html">Index Funds</a></li>
                                <li><a href="./investing/roth-ira.html">ROTH IRA</a></li>
                                <li><a href="./investing/s-and-p-500.html">S&P 500</a></li>
                                <li><a href="./investing/stocks.html">Stocks</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Realestate</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Content Creation</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Branding</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./branding/personal-branding.html">Personal Branding</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Education and Courses</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Game development, Animation, VFX, LUT, Presets and Plugin development</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Influencer and Microinfluencer</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Virtual Assistant, Freelance Writing, Ghostwriting and Copywriting</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Podcast</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Photography, Videography, Audio and Editing</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Gumroad</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Streaming</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Web 3.0, Web 5.0, Blockchain, NFT, Crypto, Artificial Intelligence and Machine Learning</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Luck</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Flipping</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="./flipping/apps.html">Apps</a></li>
                                <li><a href="./flipping/businesses.html">Businesses</a></li>
                                <li><a href="./flipping/domains.html">Domains</a></li>
                                <li><a href="./flipping/real-estate.html">Realestate</a></li>
                                <li><a href="./flipping/websites.html">Websites</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Seasonal</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Speaking</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Marketing and Sales</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Sales Funnels</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Email list</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Learning</h4>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
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
    <script src="https://cdn.ckeditor.com/4.11.1/standard/ckeditor.js"></script>
    <script>
        (function($){
            var mainpagecontents = <?php echo json_encode($mainpagecontents); ?>;
            for(var i=0; i<mainpagecontents.length; i++) {
                var main_page_content = mainpagecontents[i];
                var selector = main_page_content["id"] + "_editor";
                CKEDITOR.replace(selector);
                CKEDITOR.instances[selector].setData(main_page_content["content"]);

                // Save
                var save_selector = "#" + main_page_content["id"] + "_button";
                $(save_selector).click(async function(){
                    var content = CKEDITOR.instances[selector].getData();
                    $.ajax({
                        type: "POST",
                        url: '../../server/mainmenupage/update.php',
                        dataType: 'json',
                        data: { content: content, id: main_page_content["id"] },
                        success: function (response) {
                            if(response == "Record updated successfully") {
                                Swal.fire(`Updated!`);
                                location.reload();
                            } else {
                                Swal.fire(`Not Updated! ${response}`);
                            }
                        },
                        error: function(error){
                            Swal.fire(`Error: ${JSON.stringify(error)}`);
                        }
                    });
                });
            }
        })(jQuery);
    </script>
</body>
</html>
