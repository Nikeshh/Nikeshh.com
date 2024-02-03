-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 31, 2023 at 06:10 PM
-- Server version: 10.5.19-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u121977718_nikeshh`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_settings`
--

CREATE TABLE `about_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `about_subtitle` varchar(191) NOT NULL,
  `about_title` varchar(191) NOT NULL,
  `about_description` text NOT NULL,
  `about_buttontext` varchar(191) NOT NULL,
  `about_buttonlink` varchar(191) NOT NULL,
  `about_image` varchar(191) NOT NULL,
  `about_ytlink` varchar(191) NOT NULL,
  `member_title_section` varchar(255) NOT NULL,
  `banner_img` varchar(255) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `banner_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_settings`
--

INSERT INTO `about_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `about_subtitle`, `about_title`, `about_description`, `about_buttontext`, `about_buttonlink`, `about_image`, `about_ytlink`, `member_title_section`, `banner_img`, `banner_title`, `banner_desc`, `created_at`, `updated_at`) VALUES
(1, 1, 'About Me', 'Web design encompasses many different skills and disciplines in the production and maintenance of websites.', 'about-us', 'Home', 'We Make Brands Stand Out.', 'A Digital Marketing and Custom Web Design agency', '<p>I love to build, break, and rebuild software applications. <br />Everything has a story to narrate so do the software(s) I develop.<br /><br />A Full Stack Engineer with 5+ yrs of mainstream and 7+ yrs of freelancing exp who aspires to add value and aspires to change the world. I have a strong desire to improve Software Development and Cloud Technology skills with a strong understanding of Web app development, Backend Services, DevOps and Cloud Services. I love to build, break, and rebuild software applications. Everything has a story to narrate so do the software(s) I develop.<br />Proficient in visualizing and designing well-detailed, highly scalable cloud infrastructure in a cross-functioning team environment to identify, analyze complex problems, and complete tasks on time.<br /><br />SKILLS AND TECHNOLOGIES<br />➊ Web (ReactJS, Redux, NextJS, ExpressJS, NodeJS, HTML5, CSS4, Bootstrap, WordPress, JavaScript, Typescript, API Integration [SOAP,REST], Angular2+, PHP [Laravel,CodeIgniter,WordPress], jQuery, VueJS), Axios, Redux thunk, Database (SQL,MySQL,NoSQL,Oracle,H2,PostgreSQL,Hadoop,MS SQL Server,MongoDB,Redis,GraphQL,InfluxDB), Monitoring (Prometheus,ELK,Datadog,Grafana, Opentelemetry,Micrometer,Jaeger), JMS(ApacheMQ,Apache ActiveMQ, RabbitMQ, IBM), Computer Vision, NLP, Python for Data Science, Adobe XD, Figma, Photoshop and After effects<br />➋ Programming (Python, Java, Java8, C++, C, Dart, Swift, R), Spring, Spring Boot, Analytics (Tableau,Python,Google Analytics,Power BI,Machine Learning and Artificial Intelligence), Android (Java,Kotlin), IOS(Swift), Cross Platform (Flutter,React Native), XML, JavaFX, Servlets, JSP, JDBC, Servers (JBoss, WebSphere, WebLogic, Tomcat), Testing (Cucumber,Junit,Mockito,Powermock), Log4j, Logstash, Apache Camel, MDB, EJB, ESB (IIB,Mule,OSB)<br />➌ Ansible, Containerization (Docker,Kubernetes), Microservices, Eureka, Terraform, Cloud Tools (AWS,Azure,GCP), AWS Skills (EC2,S3,IAM,RDS,Route 53,Lambda,VPC,ELB,Elastic Search), Scripting (Shell, Python, Bash), Linux, Windows, macOS, Rundeck, Kafka, Kinesis, Azure EventHub, Apache Atlas<br />➍ Git, SVN, Vault, Consul, Bitbucket, Jira, Atlassian, Confluence, Wiki, Jenkins, CI/CD, Agile/Scrum Software Development, REST APIs, Data Structure, Build Tools (Maven,Gradle)<br /><br />*Feel Free to ping in case of any opportunity or discussion.</p>', 'Contact me', 'https://nikeshh.com/contact', 'https://nikeshh.com/public/images/media/1633278274PSDFebFrameNot163 (1).webp', 'https://www.youtube.com/watch?v=fMkYqHI68io', 'Professional <span>team.</span>', 'https://icode.lucian.host/public/images/media/1633027720quinheader.webp', 'About the company', 'Quin is a creative agency built with one purpose: to help you define your brand. We offer impeccable service combining a nice and user-friendly design with quality programming.', NULL, '2023-09-19 03:17:39'),
(2, 2, 'Sobre Venor', 'O design da Web abrange muitas habilidades e disciplinas diferentes na produção e manutenção de websites.', 'about-us', 'Casa', 'Fazemos Marcas Destacadas.', 'Uma agência de Marketing Digital e Web Design Personalizado', '<p>Web design<strong> </strong> engloba muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de sites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico, design de interface, incluindo c&oacute;digo padronizado.</p>\r\n<ul>\r\n<li>UI bonita e f&aacute;cil de entender, anima&ccedil;&otilde;es profissionais</li>\r\n<li>Essas vantagens s&atilde;o design &amp; amp; perfeitos de pixel; c&oacute;digo claro entregue</li>\r\n<li>Apresente seus servi&ccedil;os de forma flex&iacute;vel, conveniente e polivalente</li>\r\n</ul>', 'Contate-Nos', 'https://icode.lucian.host/contact', 'https://icode.lucian.host/public/images/media/1633278274PSDFebFrameNot163 (1).webp', 'https://www.youtube.com/watch?v=fMkYqHI68io', 'Equipe profissional.', 'https://icode.lucian.host/public/images/media/1633027720quinheader.webp', 'Sobre <span> a empresa </span>', 'Quin é uma agência de criação construída com um propósito: ajudar você a definir sua marca. Oferecemos um serviço impecável combinando um design agradável e amigável com uma programação de qualidade.', NULL, '2022-01-24 15:02:01'),
(3, 3, 'حول نيفا', 'يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية.', 'about-us', 'منزل، بيت', 'نجعل العلامات التجارية متميزة.', 'وكالة تسويق رقمي وتصميم مواقع ويب مخصصة', '<p>يشمل</p>\r\n<p><strong> تصميم الويب strong&gt; العديد من المهارات والتخصصات المختلفة في إنتاج مواقع الويب وصيانتها. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ، وتصميم الواجهة ، بما في ذلك التعليمات البرمجية الموحدة. p&gt; </strong></p>\r\n<p><strong> واجهة مستخدم جميلة وسهلة الفهم ورسوم متحركة احترافية li&gt; هذه المزايا هي تصميم مثالي للبكسل وأمبير. تسليم كود واضح قدم خدماتك بمرونة وملاءمة ومتعددة الأغراض li&gt; </strong></p>', 'اتصل بنا', 'https://icode.lucian.host/contact', 'https://icode.lucian.host/public/images/media/1633278274PSDFebFrameNot163 (1).webp', 'https://www.youtube.com/watch?v=fMkYqHI68io', 'فريق فني.', 'https://icode.lucian.host/public/images/media/1633027720quinheader.webp', 'حول <span> الشركة </ span>', 'Quin هي وكالة إبداعية تم إنشاؤها لغرض واحد: مساعدتك في تحديد علامتك التجارية. نحن نقدم خدمة لا تشوبها شائبة تجمع بين التصميم الجميل وسهل الاستخدام والبرمجة عالية الجودة.', NULL, '2022-01-24 15:38:28');

-- --------------------------------------------------------

--
-- Table structure for table `blog_settings`
--

CREATE TABLE `blog_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` int(4) DEFAULT 0,
  `banner_img` text DEFAULT NULL,
  `banner_title` text DEFAULT NULL,
  `banner_desc` text DEFAULT NULL,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `html_sidebar1` text NOT NULL,
  `html_sidebar2` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_settings`
--

INSERT INTO `blog_settings` (`id`, `language_id`, `banner_img`, `banner_title`, `banner_desc`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `html_sidebar1`, `html_sidebar2`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://icode.lucian.host/public/images/media/1633963749news-bg.webp', 'Our recent <span>news</span>', 'Making people smile gets us out of bed every morning. Through thoughtful design, we create delightful digital experiences that make life simpler and more enjoyable.', 'Our recent news', 'Do you believe that your brand needs help from a creative team? Contact us to start working for your project!', 'blog', 'Home', '<h3 class=\"widget-title\">About us</h3>\r\n<div class=\"textwidget\"><a href=\"/about-us\"><img class=\"html-widget-image img-fluid\" src=\"/public/images/media/1615714364sidebar-img1.jpg\" alt=\"\" /></a>\r\n<p class=\"html-widget-paragraph\">Do you believe that your brand needs help from a creative team? Contact us to start working for your project!</p>\r\n<a class=\"btn btn-style1\" href=\"/about-us\">Read More </a></div>', '<h3 class=\"widget-title\">Banner ad</h3>\r\n<div class=\"textwidget\"><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"html-widget-image img-ad img-fluid\" src=\"/public/images/media/1615715240adsense500x500.png\" alt=\"\" /></a>&nbsp;</div>', NULL, '2021-10-11 18:49:17'),
(2, 2, 'https://icode.lucian.host/public/images/media/1633963749news-bg.webp', 'Nossas <span> notícias </span> recentes', 'Fazer as pessoas sorrirem nos tira da cama todas as manhãs. Por meio de um design bem pensado, criamos experiências digitais maravilhosas que tornam a vida mais simples e agradável.', 'Nossas notícias recentes', 'Você acredita que sua marca precisa da ajuda de uma equipe criativa? Entre em contato para começar a trabalhar no seu projeto!', 'blog', 'Casa', '<h3 class=\"widget-title\">Sobre n&oacute;s</h3>\r\n<div class=\"textwidget\"><a href=\"/about-us\"><img class=\"html-widget-image img-fluid\" src=\"/public/images/media/1615714364sidebar-img1.jpg\" alt=\"\" /></a>\r\n<p class=\"html-widget-paragraph\">Voc&ecirc; acredita que sua marca precisa da ajuda de uma equipe criativa? Entre em contato para come&ccedil;ar a trabalhar no seu projeto!</p>\r\n<a class=\"btn btn-style1\" href=\"/about-us\">consulte Mais informa&ccedil;&atilde;o </a></div>', '<h3 class=\"widget-title\">An&uacute;ncio de banner</h3>\r\n<div class=\"textwidget\"><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"html-widget-image img-ad img-fluid\" src=\"/public/images/media/1615715240adsense500x500.png\" alt=\"\" /></a>&nbsp;</div>', NULL, '2021-04-10 22:57:50'),
(3, 3, 'https://icode.lucian.host/public/images/media/1633963749news-bg.webp', 'آخر <span> أخبار </ span>', 'جعل الناس يبتسمون يجعلنا ننهض من الفراش كل صباح. من خلال التصميم المدروس ، نخلق تجارب رقمية مبهجة تجعل الحياة أبسط وأكثر متعة.', 'آخر أخبارنا', 'هل تعتقد أن علامتك التجارية تحتاج إلى مساعدة من فريق مبدع؟ اتصل بنا لبدء العمل في مشروعك!', 'blog', 'منزل، بيت', '<h3 class=\"widget-title\">معلومات عنا</h3>\r\n<div class=\"textwidget\"><a href=\"/about-us\"><img class=\"html-widget-image img-fluid\" src=\"/public/images/media/1615714364sidebar-img1.jpg\" alt=\"\" /></a>\r\n<p class=\"html-widget-paragraph\">هل تعتقد أن علامتك التجارية تحتاج إلى مساعدة من فريق مبدع؟ اتصل بنا لبدء العمل في مشروعك!</p>\r\n<a class=\"btn btn-style1\" href=\"/about-us\">اقرأ أكثر </a></div>', '<h3 class=\"widget-title\">لافتة إعلانية</h3>\r\n<div class=\"textwidget\"><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noopener\"><img class=\"html-widget-image img-ad img-fluid\" src=\"/public/images/media/1615715240adsense500x500.png\" alt=\"\" /></a>&nbsp;</div>', NULL, '2021-03-20 18:34:09');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `language_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Agency, Consulting', '2021-03-13 19:32:07', '2021-03-13 19:32:07'),
(2, 1, 'Design, UI/UX', '2021-03-13 19:32:20', '2021-03-13 19:32:20'),
(3, 1, 'Programming', '2021-03-13 19:32:32', '2021-03-13 19:32:32'),
(5, 0, 'en', '2021-04-05 22:44:55', '2021-04-05 22:44:55'),
(9, 2, 'UI/UX', '2021-04-10 22:05:08', '2021-04-10 22:05:08'),
(8, 2, 'Programação', '2021-04-10 22:04:47', '2021-04-10 22:04:47'),
(10, 2, 'Agência, Consultoria', '2021-04-10 22:05:18', '2021-04-10 22:05:18'),
(11, 3, 'برمجة', '2021-04-11 17:47:26', '2021-04-11 17:47:26'),
(12, 3, 'تصميم', '2021-04-11 17:47:37', '2021-04-11 17:47:37'),
(13, 3, 'وكالة ، استشارات', '2021-04-11 17:47:46', '2021-04-11 17:47:46');

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(10) UNSIGNED NOT NULL,
  `challenge_category_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `excerpt` text DEFAULT NULL,
  `image_featured2` text DEFAULT NULL,
  `img_gal1` text DEFAULT NULL,
  `img_gal2` text DEFAULT NULL,
  `img_gal3` text DEFAULT NULL,
  `img_gal4` text DEFAULT NULL,
  `date` text DEFAULT NULL,
  `client` text DEFAULT NULL,
  `button_text` text DEFAULT NULL,
  `button_link` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`id`, `language_id`, `user_id`, `challenge_category_id`, `photo_id`, `title`, `slug`, `body`, `excerpt`, `image_featured2`, `img_gal1`, `img_gal2`, `img_gal3`, `img_gal4`, `date`, `client`, `button_text`, `button_link`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 282, 'Test Challenge', 'test-challenge', '<p>Test Challenge Body</p>\r\n<p>&nbsp;</p>', '<p>Test Challenge Description</p>\r\n<p>&nbsp;</p>', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', NULL, NULL, 'Read more', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'Test Challenge', 'Test Challenge', '2023-07-15 16:50:30', '2023-07-15 16:50:30');

-- --------------------------------------------------------

--
-- Table structure for table `challenge_categories`
--

CREATE TABLE `challenge_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `challenge_categories`
--

INSERT INTO `challenge_categories` (`id`, `language_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Sample Challenge Category', '2023-07-15 16:45:22', '2023-07-15 16:45:22');

-- --------------------------------------------------------

--
-- Table structure for table `challenge_settings`
--

CREATE TABLE `challenge_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` int(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `banner_img` varchar(255) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `banner_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `challenge_settings`
--

INSERT INTO `challenge_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `title`, `description`, `banner_img`, `banner_title`, `banner_desc`, `created_at`, `updated_at`) VALUES
(1, 1, 'My Challenge', 'Nikeshh Challenges', 'challenge', 'Home', '', '', 'https://icode.lucian.host/public/images/media/1633880725portf_header-16.webp', 'Our latest<span>projects</span>', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', NULL, '2023-07-15 16:53:50');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo_id` varchar(191) NOT NULL,
  `company_name` text NOT NULL,
  `company_link` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `photo_id`, `company_name`, `company_link`, `created_at`, `updated_at`) VALUES
(1, '32', 'Crofts', 'https://nikeshh.com/', '2021-03-13 21:15:05', '2023-09-19 02:55:08'),
(2, '33', 'Autospeed', 'https://nikeshh.com/', '2021-03-13 21:15:24', '2023-09-19 02:55:14'),
(3, '34', 'Chesire', 'https://nikeshh.com/', '2021-03-13 21:15:40', '2023-09-19 02:55:21'),
(4, '35', 'Fast Banana', 'https://nikeshh.com/', '2021-03-13 21:15:55', '2023-09-19 02:55:27'),
(5, '36', 'Dance studio', 'https://nikeshh.com/', '2021-03-13 21:16:07', '2023-09-19 02:55:37'),
(6, '37', 'Beautybox', 'https://nikeshh.com/', '2021-03-13 21:16:19', '2023-09-19 02:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  `author` varchar(191) NOT NULL,
  `photo` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `body` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment_replies`
--

CREATE TABLE `comment_replies` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment_id` int(10) UNSIGNED NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  `author` varchar(191) NOT NULL,
  `photo` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `body` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_settings`
--

CREATE TABLE `contact_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `banner_title` text DEFAULT NULL,
  `banner_img` text DEFAULT NULL,
  `banner_desc` text DEFAULT NULL,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `box_icon1` varchar(191) NOT NULL,
  `box_icon2` varchar(191) NOT NULL,
  `box_icon3` varchar(191) NOT NULL,
  `box_title1` varchar(191) NOT NULL,
  `box_title2` varchar(191) NOT NULL,
  `box_title3` varchar(191) NOT NULL,
  `box_html1` text NOT NULL,
  `box_html2` text NOT NULL,
  `box_html3` text NOT NULL,
  `form_title` varchar(191) NOT NULL,
  `form_input_name` varchar(191) NOT NULL,
  `form_input_email` varchar(191) NOT NULL,
  `form_input_budget` varchar(191) NOT NULL,
  `form_input_phone` varchar(191) NOT NULL,
  `form_message` text NOT NULL,
  `button_text` varchar(191) NOT NULL,
  `button_link` varchar(191) NOT NULL,
  `mailto` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `iframe_txt` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_settings`
--

INSERT INTO `contact_settings` (`id`, `language_id`, `banner_title`, `banner_img`, `banner_desc`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `box_icon1`, `box_icon2`, `box_icon3`, `box_title1`, `box_title2`, `box_title3`, `box_html1`, `box_html2`, `box_html3`, `form_title`, `form_input_name`, `form_input_email`, `form_input_budget`, `form_input_phone`, `form_message`, `button_text`, `button_link`, `mailto`, `title`, `iframe_txt`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, NULL, 'Contact', 'My Contact page', 'contact', 'Home', '<i class=\"fas fa-phone-volume\"></i>', '<i class=\"fas fa-envelope\"></i>', '<i class=\"fas fa-map-marker-alt\"></i>', 'My phone number', 'My emails', 'My address', '<p><a href=\"tel:+14168345350\">+1 (416) 834-5350</a></p>', '<p><a href=\"mailto:nikeshh@nikeshh.com\">nikeshh@nikeshh.com</a> <a href=\"mailto:nikeshhbaskaran01@gmail.com\">nikeshhbaskaran01@gmail.com</a></p>', '<p><a href=\"https://maps.app.goo.gl/j8ruwjA1HJaCCrjs5\" target=\"_blank\" rel=\"noreferrer noopener\">Toronto, Canada</a></p>', 'Send us a message', 'Name', 'Email', 'Phone', 'Budget', 'Message', 'Submit', '', 'admin@nikeshh.com', 'Where we are', '<p><iframe style=\"border: 0;\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977296568!2d-79.54286378504295!3d43.71837095796846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1695091729630!5m2!1sen!2sca\" width=\"100%\" height=\"100%\" allowfullscreen=\"\" loading=\"lazy\"></iframe></p>', NULL, '2023-09-19 02:57:42'),
(2, 2, NULL, NULL, NULL, 'Contate-Nos', 'Nossa página de contato', 'contact', 'Casa', '<i class=\"fas fa-phone-volume\"></i>', '<i class=\"fas fa-envelope\"></i>', '<i class=\"fas fa-map-marker-alt\"></i>', 'Liga hoje', 'Nossos e-mails', 'Nosso endereço', '<p><a href=\"tel:+472543657456\">PS: +47 254 3657 456</a> <a href=\"tel:+877390740223\">HO: +87 739 0740 223</a></p>', '<p><a href=\"mailto:contact@niva.host\">contact@niva.host</a> <a href=\"mailto:office@niva.host\">office@niva.host</a></p>', '<p><a href=\"https://goo.gl/maps/JwQdjL8S1MaJnQAv5\">Malet St, Bloomsbury, London WC1E 7HU, United Kingdom</a></p>', 'Envie-nos uma mensagem', 'Nome', 'E-mail', 'Telefone', 'Despesas', 'Mensagem', 'Enviar', '', 'contact@lucian.host', 'Onde estamos', '<p><iframe style=\"border: 0;\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.880220551257!2d-0.1308206!3d51.5229378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35223832b9a7517a!2sUniversity%20of%20London!5e0!3m2!1sen!2sro!4v1615724797695!5m2!1sen!2sro\" width=\"100%\" height=\"450\" allowfullscreen=\"\"></iframe></p>', NULL, '2021-04-10 23:03:13'),
(3, 3, NULL, NULL, NULL, 'اتصل بنا', 'صفحة الاتصال الخاصة بنا', 'contact', 'منزل، بيت', '<i class=\"fas fa-phone-volume\"></i>', '<i class=\"fas fa-envelope\"></i>', '<i class=\"fas fa-map-marker-alt\"></i>', 'اتصل بنا اليوم', 'رسائل البريد الإلكتروني لدينا', 'عنواننا', '<p><a href=\"tel:+472543657456\">PS: +47 254 3657 456</a> <a href=\"tel:+877390740223\">HO: +87 739 0740 223</a></p>', '<p><a href=\"mailto:contact@niva.host\">contact@niva.host</a> <a href=\"mailto:office@niva.host\">office@niva.host</a></p>', '<p><a href=\"https://goo.gl/maps/JwQdjL8S1MaJnQAv5\">Malet St, Bloomsbury, London WC1E 7HU, United Kingdom</a></p>', 'أرسل لنا رسالة', 'اسم', 'بريد إلكتروني', 'هاتف', 'الدخل', 'رسالة', 'إرسال', '', 'contact@lucian.host', 'اين نحن', '<p><iframe style=\"border: 0;\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.880220551257!2d-0.1308206!3d51.5229378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35223832b9a7517a!2sUniversity%20of%20London!5e0!3m2!1sen!2sro!4v1615724797695!5m2!1sen!2sro\" width=\"100%\" height=\"450\" allowfullscreen=\"\"></iframe></p>', NULL, '2021-04-10 23:02:01');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(100) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `header_footer_settings`
--

CREATE TABLE `header_footer_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` int(4) NOT NULL,
  `sidebar_title` varchar(191) DEFAULT NULL,
  `sidebar_title2` char(255) DEFAULT NULL,
  `sidebar_description` text DEFAULT NULL,
  `sidebar_description2` varchar(255) DEFAULT NULL,
  `sidebar_menu_description` text DEFAULT NULL,
  `typed_title` varchar(191) NOT NULL,
  `typed_text` text NOT NULL,
  `typed_buttontext` varchar(191) NOT NULL,
  `typed_buttonlink` varchar(191) NOT NULL,
  `footer_col1_subtitle` varchar(191) NOT NULL,
  `footer_col1_title` varchar(191) NOT NULL,
  `footer_col1_buttontext` varchar(191) NOT NULL,
  `footer_col1_buttonlink` varchar(191) NOT NULL,
  `footer_col2_title1` varchar(191) NOT NULL,
  `footer_col2_title2` text NOT NULL,
  `footer_col2_html1` text NOT NULL,
  `footer_col2_html2` text NOT NULL,
  `footer_copyright` text NOT NULL,
  `social_links` text DEFAULT NULL,
  `submenu-extra` text NOT NULL,
  `button_start_text` varchar(255) NOT NULL,
  `button_start_link` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `header_footer_settings`
--

INSERT INTO `header_footer_settings` (`id`, `language_id`, `sidebar_title`, `sidebar_title2`, `sidebar_description`, `sidebar_description2`, `sidebar_menu_description`, `typed_title`, `typed_text`, `typed_buttontext`, `typed_buttonlink`, `footer_col1_subtitle`, `footer_col1_title`, `footer_col1_buttontext`, `footer_col1_buttonlink`, `footer_col2_title1`, `footer_col2_title2`, `footer_col2_html1`, `footer_col2_html2`, `footer_copyright`, `social_links`, `submenu-extra`, `button_start_text`, `button_start_link`, `created_at`, `updated_at`) VALUES
(1, 1, 'My portfolio', NULL, 'https://nikeshh.com/portfolio', NULL, '<p>Have a project for me?</p>\r\n<p><a class=\"btn btn-slider\" href=\"/contact\" target=\"_self\">Let\'s Talk </a></p>\r\n<p>&nbsp;</p>', 'Are you looking for', '[\'Web Design?\', \'App Development?\', \'Website development?\', \'Branding?\']', 'Contact', 'https://nikeshh.com/contact', 'READY TO DO THIS', 'Let\'s get to work', 'Get the offer', 'https://nikeshh.com/contact', 'Quick Links', 'Say Hello', '<ul class=\"menu\">\r\n<li class=\"menu-item-footer\"><a href=\"/newsletter\">Newsletter</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/gdpr\">GDPR</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/terms-and-conditions\">Terms and conditions</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/privacy-policy\">Privacy Policy</a></li>\r\n</ul>', '<ul class=\"ft-link\">\r\n<li><a href=\"mailto:nikeshh@example.com\">nikeshh@nikeshh.com</a></li>\r\n</ul>', '<p>&copy; 2023. All rights reserved by <a href=\"https://www.nikeshh.com\">Nikeshh Vijayabaskaran</a>.</p>\r\n<p>&nbsp;</p>', '<ul>\r\n<li><a href=\"https://www.facebook.com/vnikeshh/\" target=\"_blank\" rel=\"noopener\"><em class=\"facebook-icon\"><strong>facebook</strong></em></a></li>\r\n<li><a href=\"https://twitter.com/NikeshhV\" target=\"_blank\" rel=\"noopener\"><em class=\"twitter-icon\"><strong>twitter</strong></em></a></li>\r\n<li><a href=\"https://www.instagram.com/nikeshhvijayabaskaran/\" target=\"_blank\" rel=\"noopener\"><em class=\"instagram-icon\"><strong>instagram</strong></em></a></li>\r\n<li><a href=\"https://www.linkedin.com/in/nikeshh/\" target=\"_blank\" rel=\"noopener\"><em class=\"linkedin-icon\"><strong>linkedin</strong></em></a></li>\r\n</ul>', 'lorem', 'Start a Project', '#', NULL, '2023-09-04 16:25:49'),
(2, 2, 'Nosso portfólio', NULL, 'https://icode.lucian.host/portfolio', NULL, '<p>Tem um projeto para nós?</p>\r\n<p><a class=\"btn btn-slider\" href=\"/contact\" target=\"_self\">Vamos conversar</a></p>', 'Você está procurando por', '[\'Web Design?\', \'Mídia social?\', \'Design de impressão?\', \'Design digital?\', \'Design de impressão?\']', 'Contato', 'https://icode.lucian.host/contact', 'PRONTO PARA FAZER ISSO', 'Vamos ao trabalho', 'Contate-Nos', 'https://icode.lucian.host/contact', 'Links Rápidos', 'Diga olá', '<ul class=\"menu\">\r\n<li class=\"menu-item-footer\"><a href=\"/gdpr\">GDPR</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/terms-conditions\">Termos e Condi&ccedil;&otilde;es</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/privacy-policy\">Pol&iacute;tica de Privacidade</a></li>\r\n</ul>', '<ul class=\"ft-link\">\r\n<li><a href=\"mailto:admin@example.com\">admin@example.com</a></li>\r\n<li><a href=\"mailto:hr@example.com\">hr@example.com</a></li>\r\n</ul>\r\n<div class=\"social-share-inner\">\r\n<ul class=\"social-share\">\r\n<li><a href=\"https://twitter.com/SweetThemes1\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-facebook-f\"><strong>facebook</strong></em></a></li>\r\n<li><a href=\"https://www.instagram.com\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-twitter\"><strong>instagram</strong></em></a></li>\r\n<li><a href=\"https://www.behance.net\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-behance\"><strong>behance</strong></em></a></li>\r\n</ul>\r\n</div>', '<p>&copy; 2022. Todos os direitos reservados por <a href=\"https://themeforest.net/user/sweet-themes\">Sweet-Themes.</a> Estamos rastreando qualquer inten&ccedil;&atilde;o de pirataria.</p>', '<ul>\r\n<li><a href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"noopener\"><em class=\"facebook-icon\"><strong>facebook</strong></em></a></li>\r\n<li><a href=\"https://twitter.com/SweetThemes1\" target=\"_blank\" rel=\"noopener\"><em class=\"twitter-icon\"><strong>twitter</strong></em></a></li>\r\n<li><a href=\"https://www.instagram.com\" target=\"_blank\" rel=\"noopener\"><em class=\"instagram-icon\"><strong>instagram</strong></em></a></li>\r\n<li><a href=\"https://www.behance.net\" target=\"_blank\" rel=\"noopener\"><em class=\"behance-icon\"><strong>behance</strong></em></a></li>\r\n<li><a href=\"https://www.linkedin.com/\" target=\"_blank\" rel=\"noopener\"><em class=\"linkedin-icon\"><strong>linkedin</strong></em></a></li>\r\n</ul>', 'lorem', 'Start a Project', '#', NULL, '2022-01-24 14:25:17'),
(3, 3, 'لدينا محفظة', 'لدينا محفظة', 'https://icode.lucian.host/portfolio', 'https://icode.lucian.host/portfolio', '<p>هل لديك مشروع لنا؟</p>\r\n<p><a class=\"btn btn-slider\" href=\"/contact\" target=\"_self\">لنتحدث</a></p>', 'هل تبحث عن', '[\'تصميم المواقع؟\', \'وسائل التواصل الاجتماعي؟\', \'تصميم وطباعة؟\', \'تصميم رقمي؟\', \'تصميم وطباعة؟\']', 'اتصال', 'https://icode.lucian.host/contact', 'على استعداد للقيام بذلك', 'هيا بنا إلى العمل', 'اتصل بنا', 'https://icode.lucian.host/contact', 'روابط سريعة', 'قل مرحبا', '<ul class=\"menu\">\r\n<li class=\"menu-item-footer\"><a href=\"/gdpr\">جاربار</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/terms-conditions\">الأحكام والشروط</a></li>\r\n<li class=\"menu-item-footer\"><a href=\"/privacy-policy\">سياسة الخصوصية</a></li>\r\n</ul>', '<ul class=\"ft-link\">\r\n<li><a href=\"mailto:admin@example.com\">admin@example.com</a></li>\r\n<li><a href=\"mailto:hr@example.com\">hr@example.com</a></li>\r\n</ul>\r\n<div class=\"social-share-inner\">\r\n<ul class=\"social-share\">\r\n<li><a href=\"https://twitter.com/SweetThemes1\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-facebook-f\"><strong>facebook</strong></em></a></li>\r\n<li><a href=\"https://www.instagram.com\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-twitter\"><strong>instagram</strong></em></a></li>\r\n<li><a href=\"https://www.behance.net\" target=\"_blank\" rel=\"noopener\"><em class=\"fab fa-behance\"><strong>behance</strong></em></a></li>\r\n</ul>\r\n</div>', '<p>&copy; 2022. جميع الحقوق محفوظة Sweet-Themes. نحن نتتبع أي نية للقرصنة.</p>', '<ul>\r\n<li><a href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"noopener\"><em class=\"facebook-icon\"><strong>facebook</strong></em></a></li>\r\n<li><a href=\"https://twitter.com/SweetThemes1\" target=\"_blank\" rel=\"noopener\"><em class=\"twitter-icon\"><strong>twitter</strong></em></a></li>\r\n<li><a href=\"https://www.instagram.com\" target=\"_blank\" rel=\"noopener\"><em class=\"instagram-icon\"><strong>instagram</strong></em></a></li>\r\n<li><a href=\"https://www.behance.net\" target=\"_blank\" rel=\"noopener\"><em class=\"behance-icon\"><strong>behance</strong></em></a></li>\r\n<li><a href=\"https://www.linkedin.com/\" target=\"_blank\" rel=\"noopener\"><em class=\"linkedin-icon\"><strong>linkedin</strong></em></a></li>\r\n</ul>', 'lorem', 'Start a Project', '#', NULL, '2022-01-24 14:25:40');

-- --------------------------------------------------------

--
-- Table structure for table `home_settings`
--

CREATE TABLE `home_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `fun_title` varchar(191) NOT NULL,
  `fun_description` text NOT NULL,
  `count_icon1` varchar(255) DEFAULT NULL,
  `count_icon2` varchar(255) DEFAULT NULL,
  `count_icon3` varchar(255) DEFAULT NULL,
  `count_icon4` varchar(255) DEFAULT NULL,
  `count_number1` varchar(191) NOT NULL,
  `count_description1` text NOT NULL,
  `count_number2` varchar(191) NOT NULL,
  `count_description2` text NOT NULL,
  `count_number3` varchar(191) NOT NULL,
  `count_description3` text NOT NULL,
  `count_number4` varchar(191) NOT NULL,
  `count_description4` text NOT NULL,
  `about_subtitle` varchar(191) NOT NULL,
  `about_title` varchar(191) NOT NULL,
  `about_description` text NOT NULL,
  `about_buttontext` varchar(191) NOT NULL,
  `about_buttonlink` varchar(191) NOT NULL,
  `about_image1` varchar(191) NOT NULL,
  `about_image2` varchar(191) NOT NULL,
  `about_image3` varchar(255) DEFAULT NULL,
  `about_image1_titlu1` varchar(255) DEFAULT NULL,
  `about_image1_titlu2` varchar(255) DEFAULT NULL,
  `about_image2_titlu1` varchar(255) DEFAULT NULL,
  `about_image2_titlu2` varchar(255) DEFAULT NULL,
  `about_image3_titlu1` varchar(255) DEFAULT NULL,
  `about_image3_titlu2` varchar(255) DEFAULT NULL,
  `about_yearstitle` varchar(191) NOT NULL,
  `about_yearstext` varchar(191) NOT NULL,
  `services_title` varchar(191) NOT NULL,
  `sevices_text` text DEFAULT NULL,
  `projects_title` varchar(191) NOT NULL,
  `projects_subtitle` varchar(191) NOT NULL,
  `works_title` varchar(191) NOT NULL,
  `works_subtitle` varchar(191) NOT NULL,
  `challenges_title` varchar(191) NOT NULL,
  `challenges_subtitle` varchar(191) NOT NULL,
  `testimonial_title` varchar(255) DEFAULT NULL,
  `testimonial_subtitle` varchar(255) DEFAULT NULL,
  `blog_title` varchar(191) NOT NULL,
  `blog_subtitle` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_settings`
--

INSERT INTO `home_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `fun_title`, `fun_description`, `count_icon1`, `count_icon2`, `count_icon3`, `count_icon4`, `count_number1`, `count_description1`, `count_number2`, `count_description2`, `count_number3`, `count_description3`, `count_number4`, `count_description4`, `about_subtitle`, `about_title`, `about_description`, `about_buttontext`, `about_buttonlink`, `about_image1`, `about_image2`, `about_image3`, `about_image1_titlu1`, `about_image1_titlu2`, `about_image2_titlu1`, `about_image2_titlu2`, `about_image3_titlu1`, `about_image3_titlu2`, `about_yearstitle`, `about_yearstext`, `services_title`, `sevices_text`, `projects_title`, `projects_subtitle`, `works_title`, `works_subtitle`, `challenges_title`, `challenges_subtitle`, `testimonial_title`, `testimonial_subtitle`, `blog_title`, `blog_subtitle`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nikeshh Vijayabaskaran | Full Stack Developer and Digital Marketer', 'Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.', 'Fun Facts', 'This motivates me to continue looking for new challenges in order to improve my services.', '<i class=\"far fa-smile\"></i>', '<i class=\"fas fa-mug-hot\"></i>', '<i class=\"far fa-lightbulb\"></i>', '<i class=\"fas fa-briefcase\"></i>', '425', 'Happy Customers', '12', 'Cups of Coffee', '1320', 'Innovations', '860', 'Great Projects', 'About me', 'Unlimited Skills for Super Projects.', '<p>I love to build, break, and rebuild software applications. Everything has a story to narrate so do the software(s) I develop.</p>\r\n<p>A <em><strong>Full Stack Engineer with 5+ yrs of mainstream and 7+ yrs of freelancing experience</strong></em> who aspires to add value and aspires to change the world. I have a strong desire to improve Software Development and Cloud Technology skills with a strong understanding of Web app development, Backend Services, DevOps and Cloud Services. I love to build, break, and rebuild software applications. Everything has a story to narrate so do the software(s) I develop.</p>\r\n<p><br />Proficient in visualizing and designing well-detailed, highly scalable cloud infrastructure in a cross-functioning team environment to identify, analyze complex problems, and complete tasks on time.</p>\r\n<p>&nbsp;</p>', 'Get the offer', 'https://nikeshh.com/pricing', 'https://nikeshh.com/public/images/media/1632839112about-us-pic3.webp', 'https://nikeshh.com/public/images/media/1632839112about-us-pic2.webp', 'https://nikeshh.com/public/images/media/1632839113about-us-pic1.webp', 'Web and Software Development', 'Launch', 'Marketing and Strategy', 'Reach', 'Systemise and Automation', 'Automate and Scale', '12', 'YEARS OF EXPERIENCE', 'How can I help?', '<p>I help premium brands achieve their future through innovation and creative perspectives. From software and website development to app creation, branding, and design, we help you grow your business and succeed online.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 'My premium portfolio.', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', 'My premium works.', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', 'My premium challenges.', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', 'My clients', 'They are just some of those who have trusted our services. Project delivered, happy customer with quin cms.', 'My latest news.', 'Blog posts', NULL, '2023-07-22 10:36:10'),
(2, 2, 'iCode CMS | Agência Criativa', 'Quer você precise de um novo logotipo, site, vídeo, campanha de marketing ou ebook criado para sua empresa, a chave para tornar o projeto um sucesso começa com um briefing criativo bem pensado.', 'Curiosidades', 'Isso nos motiva a continuar buscando novos desafios para melhorar nossos serviços.', '<i class=\"far fa-smile\"></i>', '<i class=\"fas fa-mug-hot\"></i>', '<i class=\"far fa-lightbulb\"></i>', '<i class=\"fas fa-briefcase\"></i>', '425', 'Ótimos Projetos', '12', 'Inovações', '1320', 'Copos de café', '860', 'Clientes Felizes', 'SOBRE A AGÊNCIA', 'Habilidades ilimitadas para <span>superprojetos.</span>', '<p> <strong> Web design </strong> engloba muitas habilidades e disciplinas diferentes na produção e manutenção de sites. As diferentes áreas de web design incluem web design gráfico, design de interface, incluindo código padronizado. </p>\r\n<ul>\r\n<li> UI bonita e fácil de entender, animações profissionais </li>\r\n<li> Essas vantagens são design & amp; perfeitos de pixel; código claro entregue </li>\r\n<li> Apresente seus serviços de forma flexível, conveniente e polivalente </li>\r\n</ul>', 'Pegue a oferta', 'https://icode.lucian.host/pricing', 'https://icode.lucian.host/public/images/media/1632839112about-us-pic3.webp', 'https://icode.lucian.host/public/images/media/1632839112about-us-pic2.webp', 'https://icode.lucian.host/public/images/media/1632839113about-us-pic1.webp', 'Desenvolvimento web', 'Código de Qualidade', 'Agência Criativa', 'Estratégia de marketing', 'Serviços de Web Design', 'Experiência de usuário', '12', 'ANOS DE EXPERIÊNCIA', 'Como podemos <span>ajudar?</span>', '<p>Ajudamos as marcas <strong>premium </strong>a alcan&ccedil;arem seu futuro por meio da inova&ccedil;&atilde;o e de perspectivas criativas. Fazemos sua empresa crescer por meio de <strong>ideias </strong>pr&oacute;prias, testadas e aperfei&ccedil;oadas ao longo dos anos.</p>', 'Nossos projetos premium.', 'Espelho de soluções criativas desenvolvidas para clientes. Como designers apaixonados, adoramos criar produtos incríveis que sejam fáceis de usar, acessíveis, envolventes e encantadores.', 'Nossos projetos premium.', 'Nossos projetos premium.', 'Nossos projetos premium.', 'Nossos projetos premium.', 'Nossos clientes', 'Eles são apenas alguns dos que confiaram em nossos serviços. Projeto entregue, cliente satisfeito com icode cms.', 'Nossas últimas notícias', 'POSTAGENS NO BLOG', NULL, '2022-01-24 14:52:33'),
(3, 3, 'نيفا CMS | وكالة إبداعية', 'سواء كنت بحاجة إلى شعار جديد أو موقع ويب أو مقطع فيديو أو حملة تسويقية أو كتاب إلكتروني تم إنشاؤه لعملك ، فإن مفتاح إنجاح المشروع يبدأ بامتلاك موجز إبداعي مدروس جيدًا.', 'حقائق ممتعة', 'على مر السنين قمنا بالعديد من الأشياء التي نفخر بها. هذا يحفزنا على مواصلة البحث عن تحديات جديدة من أجل تحسين خدماتنا.', '<i class=\"far fa-smile\"></i>', '<i class=\"fas fa-mug-hot\"></i>', '<i class=\"far fa-lightbulb\"></i>', '<i class=\"fas fa-briefcase\"></i>', '425', 'مشاريع عظيمة', '12', 'ابتكارات', '1320', 'كؤوس من القهوة', '860', 'الزبائن سعداء', 'عن الوكالة', 'مهارات غير محدودة للمشاريع الخارقة.', 'يشمل <p> <strong> تصميم الويب </ strong> العديد من المهارات والتخصصات المختلفة في إنتاج مواقع الويب وصيانتها. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ، وتصميم الواجهة ، بما في ذلك التعليمات البرمجية الموحدة. </ p>\r\n<ul>\r\n<li> واجهة مستخدم جميلة وسهلة الفهم ورسوم متحركة احترافية </ li>\r\n<li> هذه المزايا هي تصميم مثالي للبكسل وأمبير. تسليم كود واضح </li>\r\n<li> قدم خدماتك بمرونة وملاءمة ومتعددة الأغراض </ li>\r\n</ul>', 'احصل على العرض', 'https://icode.lucian.host/pricing', 'https://icode.lucian.host/public/images/media/1632839112about-us-pic3.webp', 'https://icode.lucian.host/public/images/media/1632839112about-us-pic2.webp', 'https://icode.lucian.host/public/images/media/1632839113about-us-pic1.webp', 'تطوير الشبكة', 'كود الجودة', 'وكالة إبداعية', 'استراتيجية التسويق', 'خدمات تصميم المواقع', 'تجربة المستخدم', '12', 'سنوات من الخبرة', 'كيف يمكننا المساعدة؟', '<p>نحن نساعد العلامات التجارية المتميزة على تحقيق مستقبلها من خلال الابتكار ووجهات النظر الإبداعية. نحن ننمي شركتك من خلال الأفكار الداخلية الخاصة ، <strong>والتي </strong>تم اختبارها وإتقانها على مر السنين.</p>', 'مشاريعنا المتميزة.', 'اعمال محددة', 'مشاريعنا المتميزة.', 'اعمال محددة', 'مشاريعنا المتميزة.', 'اعمال محددة', 'عملائنا', 'إنهم مجرد بعض أولئك الذين وثقوا بخدماتنا. تم تسليم المشروع ، عميل سعيد مع quin cms.', 'آخر أخبارنا', 'مشاركات المدونة', NULL, '2021-06-05 15:35:16');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo_id` varchar(191) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `is_default` tinyint(4) NOT NULL DEFAULT 1,
  `rtl` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 - LTR, 1- RTL',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `photo_id`, `name`, `code`, `is_default`, `rtl`, `created_at`, `updated_at`) VALUES
(1, '264', 'English (US)', 'en', 1, 0, NULL, '2023-07-07 00:25:29'),
(4, '262', 'English (UK)', 'en', 0, 0, '2023-07-07 00:24:44', '2023-07-07 00:24:44');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo_id` varchar(191) NOT NULL,
  `name` text NOT NULL,
  `position` text NOT NULL,
  `facebook` text DEFAULT NULL,
  `twitter` text DEFAULT NULL,
  `linkedin` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `photo_id`, `name`, `position`, `facebook`, `twitter`, `linkedin`, `created_at`, `updated_at`) VALUES
(7, '290', 'Nikeshh Vijayabaskaran', 'Full Stack Developer and Digital Marketer', 'https://www.facebook.com/vnikeshh/', 'https://twitter.com/NikeshhV', 'https://www.linkedin.com/in/nikeshh/', '2023-09-19 03:02:36', '2023-09-19 03:02:36');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) NOT NULL,
  `link` varchar(191) NOT NULL,
  `on_off_submenu` tinyint(1) NOT NULL DEFAULT 0,
  `submenu` text DEFAULT NULL,
  `order` smallint(6) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `language_id`, `name`, `link`, `on_off_submenu`, `submenu`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'Home', 'https://nikeshh.com/', 0, NULL, 1, '2021-03-13 15:37:55', '2023-07-01 21:01:44'),
(2, 1, 'About me', 'https://nikeshh.com/about-us', 0, NULL, 2, '2021-03-13 15:38:33', '2023-09-19 03:17:50'),
(3, 1, 'Portfolio', 'https://nikeshh.com/portfolio', 0, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"/portfolio\">Our Projects</a></li>\r\n<li><a href=\"/project/niva\">Niva WordPress Theme</a></li>\r\n<li><a href=\"/project/venor\">Venor WordPress Theme</a></li>\r\n</ul>', 3, '2021-03-13 15:39:05', '2023-07-22 10:23:33'),
(9, 1, 'Blog', 'https://nikeshh.com/blog', 1, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"/blog\">Our recent news</a></li>\r\n<li><a href=\"/post/https://nikeshh.com/post/10-effective-strategies-for-boosting-organic-traffic%20to-your-website\">10 Effective Strategies for Boosting Organic Traffic to Your Website</a></li>\r\n<li><a href=\"/post/elevate-your-business-with-website-development,-seo-and-online-advertising\">Elevate Your Business with Website Development, SEO, and Online Advertising</a></li>\r\n<li><a href=\"/post/the-importance-of-mobile-optimization-for-seo-best-practices-and-tools\">The Importance of Mobile Optimization for SEO: Best Practices and Tools</a></li>\r\n<li>&nbsp;</li>\r\n</ul>', 5, '2021-04-10 20:03:48', '2023-09-19 02:46:40'),
(17, 3, 'منزل، بيت', 'https://icode.lucian.host/', 0, NULL, 111, '2021-03-13 15:37:55', '2021-03-13 15:37:55'),
(11, 2, 'Casa', 'https://icode.lucian.host/', 0, NULL, 11, '2021-04-10 20:34:43', '2021-04-10 20:34:43'),
(12, 2, 'Sobre nós', 'https://icode.lucian.host/about-us', 0, NULL, 22, '2021-04-10 20:37:04', '2021-04-10 20:37:04'),
(14, 2, 'Portfólio', 'https://icode.lucian.host/portfolio', 1, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"/portfolio\">Nossos projetos</a></li>\r\n<li><a href=\"/project/niva\">Niva Tema Them</a></li>\r\n<li><a href=\"/project/venor\">Venor Tema Theme</a></li>\r\n</ul>\r\n\r\n\r\n', 33, '2021-04-10 20:39:50', '2021-04-10 20:39:50'),
(15, 2, 'Preços', 'https://icode.lucian.host/pricing', 0, NULL, 44, '2021-04-10 20:41:27', '2021-04-10 20:41:27'),
(16, 2, 'Blog', 'https://icode.lucian.host/blog', 1, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"/blog\">Nossas notícias recentes</a></li>\r\n<li><a href=\"/post/top-6-articles-you-must-read-today-niva\">Os 6 principais artigos que você deve ler</a></li>\r\n<li><a href=\"/post/7-creative-ways-to-boost-your-social-media\">Sete maneiras criativas de impulsionar sua mídia</a></li>\r\n</ul>', 55, '2021-04-10 20:44:07', '2021-04-10 20:44:07'),
(18, 3, 'معلومات عنا', 'https://icode.lucian.host/about-us', 0, NULL, 222, '2021-03-13 15:38:33', '2021-03-13 15:46:23'),
(19, 3, 'ملف', 'https://icode.lucian.host/portfolio', 1, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"https://icode.lucian.host/portfolio\">مشاريعنا</a></li>\r\n<li><a href=\"https://icode.lucian.host/project/niva\">نيفا وورد الموضوع</a></li>\r\n<li><a href=\"https://icode.lucian.host/project/venor\">موضوع Venor WordPress</a></li>\r\n</ul>', 333, '2021-03-13 15:39:05', '2021-04-11 17:07:57'),
(20, 3, 'التسعير', 'https://icode.lucian.host/pricing', 0, NULL, 444, '2021-03-13 15:44:34', '2021-03-13 15:44:34'),
(21, 3, 'مدونة او مذكرة', 'https://icode.lucian.host/blog', 1, '<ul class=\"dropdown-menu header__nav-menu\">\r\n<li><a href=\"https://icode.lucian.host/blog\">آخر أخبارنا</a></li>\r\n<li><a href=\"https://icode.lucian.host/post/top-6-articles-you-must-read-today-niva\">أهم 6 مقالات يجب أن تقرأها</a></li>\r\n<li><a href=\"https://icode.lucian.host/post/7-creative-ways-to-boost-your-social-media\">أفضل 7 طرق إبداعية لتعزيز Medi الخاص بك</a></li>\r\n</ul>', 555, '2021-04-10 20:03:48', '2021-04-11 17:08:29'),
(24, 1, 'Newsletter', 'https://nikeshh.com/newsletter', 0, NULL, 4, '2023-07-11 23:40:40', '2023-09-19 02:46:28');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(58, '2014_10_12_000000_create_users_table', 1),
(59, '2014_10_12_100000_create_password_resets_table', 1),
(60, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(61, '2016_04_22_211638_create_roles_table', 1),
(62, '2018_07_15_120309_add_photo_id_to_users', 1),
(63, '2018_07_15_140042_create_photos_table', 1),
(64, '2018_07_21_084950_create_posts_table', 1),
(65, '2018_07_21_142400_create_categories_table', 1),
(66, '2018_07_25_180532_create_comments_table', 1),
(67, '2018_07_25_180651_create_comment_replies_table', 1),
(68, '2019_08_19_000000_create_failed_jobs_table', 1),
(69, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(70, '2021_02_18_105157_create_sessions_table', 1),
(71, '2021_02_18_110236_add_fb_id_column_in_users_table', 1),
(72, '2021_02_21_092726_create_settings_table', 1),
(73, '2021_03_02_124524_create_menus_table', 1),
(74, '2021_03_02_150833_create_sliders_table', 1),
(75, '2021_03_04_111731_create_services_table', 1),
(76, '2021_03_04_114538_create_testimonials_table', 1),
(77, '2021_03_04_130014_create_clients_table', 1),
(78, '2021_03_04_132321_create_projects_table', 1),
(79, '2021_03_04_133655_create_members_table', 1),
(80, '2021_03_05_154933_create_pricings_table', 1),
(81, '2021_03_06_143051_create_project_categories_table', 1),
(82, '2021_03_06_143105_create_pages_table', 1),
(83, '2021_03_07_094913_create_header_footer_settings_table', 1),
(84, '2021_03_07_094936_create_home_settings_table', 1),
(85, '2021_03_07_095003_create_about_settings_table', 1),
(86, '2021_03_07_095030_create_portfolio_settings_table', 1),
(87, '2021_03_07_095049_create_pricing_settings_table', 1),
(88, '2021_03_07_095108_create_blog_settings_table', 1),
(89, '2021_03_07_095119_create_contact_settings_table', 1),
(90, '2020_03_14_141017_create_languages_table', 2),
(91, '2021_06_09_135740_create_orders_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `pricing_id` int(11) NOT NULL,
  `transaction_id` varchar(191) DEFAULT NULL,
  `amount` double(8,2) UNSIGNED DEFAULT NULL,
  `payment_status` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `pricing_id`, `transaction_id`, `amount`, `payment_status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, '63224971', 5.00, 0, '2021-06-09 18:58:13', '2021-06-09 18:58:13', NULL),
(2, 1, 1, '40859269', 5.00, 0, '2021-06-09 19:07:57', '2021-06-09 19:07:57', NULL),
(3, 1, 1, '87126729', 5.00, 0, '2021-06-09 19:08:34', '2021-06-09 19:08:34', NULL),
(4, 1, 1, '95156667', 5.00, 0, '2021-06-09 19:08:54', '2021-06-09 19:08:54', NULL),
(5, 1, 1, '72560519', 5.00, 0, '2021-06-09 19:10:39', '2021-06-09 19:10:39', NULL),
(6, 1, 1, '36843852', 5.00, 0, '2021-06-09 19:11:19', '2021-06-09 19:11:19', NULL),
(7, 1, 1, '54336862', 5.00, 0, '2021-06-09 19:15:51', '2021-06-09 19:15:51', NULL),
(8, 1, 1, '21932173', 5.00, 0, '2021-06-09 19:16:12', '2021-06-09 19:16:12', NULL),
(9, 1, 1, '10907697', 5.00, 0, '2021-06-09 19:16:50', '2021-06-09 19:16:50', NULL),
(10, 1, 1, '98960638', 5.00, 0, '2021-06-09 19:17:44', '2021-06-09 19:17:44', NULL),
(11, 1, 1, '60297663', 5.00, 0, '2021-06-09 19:18:01', '2021-06-09 19:18:01', NULL),
(12, 1, 1, '45298363', 5.00, 0, '2021-06-09 19:22:36', '2021-06-09 19:22:36', NULL),
(13, 1, 1, '65640608', 5.00, 0, '2021-06-09 19:23:39', '2021-06-09 19:23:39', NULL),
(14, 1, 1, '48939601', 5.00, 0, '2021-06-09 19:28:15', '2021-06-09 19:28:15', NULL),
(15, 1, 1, '55553551', 5.00, 0, '2021-06-09 19:28:49', '2021-06-09 19:28:49', NULL),
(16, 1, 1, '85930629', 5.00, 0, '2021-06-09 21:22:20', '2021-06-09 21:22:20', NULL),
(17, 1, 1, '77016119', 5.00, 0, '2021-06-10 05:12:54', '2021-06-10 05:12:54', NULL),
(18, 1, 1, '72444810', 5.00, 0, '2021-06-10 08:40:22', '2021-06-10 08:40:22', NULL),
(19, 1, 1, '61309735', 5.00, 0, '2021-06-10 08:41:23', '2021-06-10 08:41:23', NULL),
(20, 1, 1, '93593647', 5.00, 0, '2021-06-10 17:55:06', '2021-06-10 17:55:06', NULL),
(21, 1, 1, '80539520', 5.00, 0, '2021-06-10 18:02:08', '2021-06-10 18:02:08', NULL),
(22, 1, 1, '86256916', 5.00, 0, '2021-06-10 18:02:21', '2021-06-10 18:02:21', NULL),
(23, 1, 1, '54983637', 5.00, 0, '2021-06-10 18:03:16', '2021-06-10 18:03:16', NULL),
(24, 1, 1, '59425412', 5.00, 0, '2021-06-10 18:03:23', '2021-06-10 18:03:23', NULL),
(25, 1, 1, '34198675', 5.00, 0, '2021-06-10 18:03:41', '2021-06-10 18:03:41', NULL),
(26, 1, 1, '24471871', 5.00, 0, '2021-06-10 18:04:30', '2021-06-10 18:04:30', NULL),
(27, 1, 1, '42274701', 5.00, 0, '2021-06-10 18:05:10', '2021-06-10 18:05:10', NULL),
(28, 1, 1, '66822383', 5.00, 0, '2021-06-10 18:05:37', '2021-06-10 18:05:37', NULL),
(29, 1, 1, '78337109', 5.00, 0, '2021-06-10 18:05:50', '2021-06-10 18:05:50', NULL),
(30, 1, 1, '71413027', 5.00, 0, '2021-06-10 18:06:14', '2021-06-10 18:06:14', NULL),
(31, 1, 1, '38620334', 5.00, 0, '2021-06-10 18:10:41', '2021-06-10 18:10:41', NULL),
(32, 1, 1, '62686281', 5.00, 0, '2021-06-10 18:10:58', '2021-06-10 18:10:58', NULL),
(33, 1, 1, '93409193', 5.00, 0, '2021-06-10 18:11:21', '2021-06-10 18:11:21', NULL),
(34, 1, 1, '74753508', 5.00, 0, '2021-06-10 18:18:39', '2021-06-10 18:18:39', NULL),
(35, 1, 1, '23874215', 5.00, 0, '2021-06-10 18:47:28', '2021-06-10 18:47:28', NULL),
(36, 1, 1, '26502310', 5.00, 0, '2021-06-10 18:49:06', '2021-06-10 18:49:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `language_id`, `user_id`, `photo_id`, `title`, `slug`, `body`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, 'GDPR', 'gdpr', '<p>The&nbsp;<strong>General Data Protection Regulation</strong>&nbsp;(EU)&nbsp;<a class=\"external text\" href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj\">2016/679</a>&nbsp;(<strong>GDPR</strong>) is a&nbsp;<a title=\"Regulation (European Union)\" href=\"https://en.wikipedia.org/wiki/Regulation_(European_Union)\">regulation</a>&nbsp;in&nbsp;<a class=\"mw-redirect\" title=\"EU law\" href=\"https://en.wikipedia.org/wiki/EU_law\">EU law</a>&nbsp;on&nbsp;<a class=\"mw-redirect\" title=\"Data protection\" href=\"https://en.wikipedia.org/wiki/Data_protection\">data protection</a>&nbsp;and privacy in the&nbsp;<a title=\"European Union\" href=\"https://en.wikipedia.org/wiki/European_Union\">European Union</a>&nbsp;(EU) and the&nbsp;<a title=\"European Economic Area\" href=\"https://en.wikipedia.org/wiki/European_Economic_Area\">European Economic Area</a>&nbsp;(EEA). It also addresses the transfer of&nbsp;<a title=\"Personal data\" href=\"https://en.wikipedia.org/wiki/Personal_data\">personal data</a>&nbsp;outside the EU and EEA areas. The GDPR\'s primary aim is to give individuals control over their personal data and to simplify the regulatory environment for&nbsp;<a title=\"International business\" href=\"https://en.wikipedia.org/wiki/International_business\">international business</a>&nbsp;by unifying the regulation within the EU.<sup id=\"cite_ref-1\" class=\"reference\"><a href=\"https://en.wikipedia.org/wiki/General_Data_Protection_Regulation#cite_note-1\">[1]</a></sup>&nbsp;Superseding the&nbsp;<a title=\"Data Protection Directive\" href=\"https://en.wikipedia.org/wiki/Data_Protection_Directive\">Data Protection Directive</a>&nbsp;95/46/EC, the regulation contains provisions and requirements related to the processing of&nbsp;<a title=\"Personal data\" href=\"https://en.wikipedia.org/wiki/Personal_data\">personal data</a>&nbsp;of individuals (formally called&nbsp;<em>data subjects</em> in the GDPR) who are located in the EEA, and applies to any enterprise&mdash;regardless of its location and the data subjects\' citizenship or residence&mdash;that is processing the personal information of individuals inside the EEA.a</p>\r\n<p>Controllers and processors of personal data must put in place&nbsp;<em>appropriate technical and organizational measures</em>&nbsp;to implement the data protection principles. Business processes that handle personal data must be designed and built with consideration of the principles and provide safeguards to protect data (for example, using&nbsp;<a title=\"Pseudonymization\" href=\"https://en.wikipedia.org/wiki/Pseudonymization\">pseudonymization</a>&nbsp;or full&nbsp;<a title=\"Data anonymization\" href=\"https://en.wikipedia.org/wiki/Data_anonymization\">anonymization</a>&nbsp;where appropriate). Data controllers must design information systems with privacy in mind. For instance, using the highest-possible privacy settings by default, so that the datasets are not publicly available by default and cannot be used to identify a subject. No personal data may be processed unless this processing is done under one of the six lawful bases specified by the regulation (<a title=\"Consent\" href=\"https://en.wikipedia.org/wiki/Consent\">consent</a>, contract, public task, vital interest, legitimate interest or legal requirement). When the processing is based on consent the data subject has the right to revoke it at any time.</p>\r\n<p>Data controllers must clearly disclose any&nbsp;<a title=\"Data collection\" href=\"https://en.wikipedia.org/wiki/Data_collection\">data collection</a>, declare the lawful basis and purpose for data processing, and state how long data is being retained and if it is being shared with any third parties or outside of the EEA. Firms have the obligation to protect data of employees and consumers to the degree where only the necessary data is extracted with minimum interference with data privacy from employees, consumers, or third parties. Firms should have internal controls and regulations for various departments such as audit, internal controls, and operations. Data subjects have the right to request a&nbsp;<a title=\"Data portability\" href=\"https://en.wikipedia.org/wiki/Data_portability\">portable</a>&nbsp;copy of the data collected by a controller in a common format, and the right to have their&nbsp;<a title=\"Data erasure\" href=\"https://en.wikipedia.org/wiki/Data_erasure\">data erased</a>&nbsp;under certain circumstances. Public authorities, and businesses whose core activities consist of regular or systematic processing of personal data, are required to employ a&nbsp;<em>data protection officer</em>&nbsp;(DPO), who is responsible for managing compliance with the GDPR. Businesses must report&nbsp;<a title=\"Data breach\" href=\"https://en.wikipedia.org/wiki/Data_breach\">data breaches</a>&nbsp;to national supervisory authorities within 72 hours if they have an adverse effect on user privacy. In some cases, violators of the GDPR may be fined up to &euro;20 million or up to 4% of the annual worldwide turnover of the preceding financial year in case of an enterprise, whichever is greater.</p>\r\n<p>The GDPR was adopted on 14 April 2016, and became enforceable beginning 25 May 2018. As the GDPR is a&nbsp;<a title=\"Regulation (European Union)\" href=\"https://en.wikipedia.org/wiki/Regulation_(European_Union)\">regulation</a>, not a&nbsp;<a title=\"Directive (European Union)\" href=\"https://en.wikipedia.org/wiki/Directive_(European_Union)\">directive</a>, it is directly binding and applicable, but does provide flexibility for certain aspects of the regulation to be adjusted by individual member states.</p>\r\n<p>The regulation became a model for many national laws outside EU, including Chile, Japan, Brazil, South Korea, Argentina and Kenya. The&nbsp;<a title=\"California Consumer Privacy Act\" href=\"https://en.wikipedia.org/wiki/California_Consumer_Privacy_Act\">California Consumer Privacy Act</a>&nbsp;(CCPA), adopted on 28 June 2018, has many similarities with the GDPR.<sup id=\"cite_ref-2\" class=\"reference\"><a href=\"https://en.wikipedia.org/wiki/General_Data_Protection_Regulation#cite_note-2\">[2]</a></sup></p>', 'GDPR', 'The General Data Protection Regulation ', '2021-03-14 20:56:16', '2021-04-03 19:16:17'),
(2, 1, 1, NULL, 'Terms and conditions', 'terms-and-conditions', '<p><strong>Revision Policy</strong></p>\r\n<p>We offer revision services based on the package you have selected. Customers can request unlimited free revisions, and we will revise their design without any additional charges, as long as the design and concept remain the same. The turnaround time for revisions is 48 hours.</p>\r\n<p><strong>FAIR USAGE POLICY:</strong></p>\r\n<p>To ensure fair usage of our services and maximize customer satisfaction, unlimited revisions are limited to a maximum of 30 revisions per project. Any revisions beyond this limit may incur additional charges.</p>\r\n<p><strong>Refund Policy / Money Back Guarantee*</strong></p>\r\n<p>Our refund and cancellation policies are designed to provide security to both the client and the company. The following terms apply in the event of order cancellation, unless Nikeshh cancels or terminates the contract for reasons other than breach or non-performance.</p>\r\n<p>Refund requests will be processed according to the following terms:</p>\r\n<ol>\r\n<li>\r\n<p>Full refund (less 10% processing fee) is eligible if the order is canceled within 24 hours of placement, provided that initial designs have not been delivered or revisions requested within this timeframe. No refund requests due to change of mind will be entertained after the mentioned timeframe.</p>\r\n</li>\r\n<li>\r\n<p>If a refund request is made before the delivery of initial design(s), a full refund (less 10% service and processing fee) is eligible.</p>\r\n</li>\r\n<li>\r\n<p>If a refund request is made within 48 hours, a 66% refund (less 10% service and processing fee) is eligible.</p>\r\n</li>\r\n<li>\r\n<p>If a refund request is made between 48-120 hours of the initial design delivery, a 33% refund (less 10% service and processing fee) is eligible.</p>\r\n</li>\r\n<li>\r\n<p>No refund requests will be entertained after 120 hours of the initial design delivery. However, we encourage you to contact us if you have any concerns regarding satisfaction.</p>\r\n</li>\r\n<li>\r\n<p>No refund requests will be entertained if no action has been taken on the order for 30 days after placement. If you wish to reactivate your design order, a certain fee will be charged based on your project.</p>\r\n</li>\r\n<li>\r\n<p>No refund requests will be entertained after the final files have been delivered.</p>\r\n</li>\r\n<li>\r\n<p>For website packages, no refund requests will be entertained once website development has been completed or once the website has been deployed live.</p>\r\n</li>\r\n<li>\r\n<p>For video animation packages, no refund requests will be entertained after the completion of the storyboard.</p>\r\n</li>\r\n</ol>\r\n<p>All refund requests should be communicated to the support department. Nikeshh reserves the right to approve or disapprove refund requests on a case-by-case basis, based on the violation of the user agreement.</p>\r\n<p>For custom packages from Nikeshh, the refund policy applicable to single packages will be followed. For example, if you order logo and web design services and approve the logo, you can only claim a refund for the website service at the time of initial design.</p>\r\n<p>A valid reason must be provided when claiming a refund, which will be evaluated against the design brief and customer feedback for revisions. Refunds will not be given unless a concept has not been designed according to the brief, but further revisions will be provided until complete satisfaction.</p>\r\n<p>Money Back Guarantee* is based on the condition that the order is placed in good faith. Placing design orders with multiple design agencies for the same job with the intention of claiming a refund is not considered good faith, and such refund requests may be declined.</p>\r\n<p><strong>Design Ownership and Copyright:</strong></p>\r\n<p>Upon refund approval, the design rights will be transferred to Nikeshh, and you agree that you will have no right (direct or indirect) to use any version of the design or claim ownership in any form.</p>\r\n<p>Nikeshh, in collaboration with Government Copyright Agencies, may share Copyright Acquisition information for refunded designs, which restricts the future reuse of the designs as original designs. It is the client\'s responsibility to get their artwork copyrighted.</p>\r\n<p><strong>How to Claim a Refund:</strong></p>\r\n<p>To ensure the approval of your refund request, please ensure that you meet the following requirements:</p>\r\n<ol>\r\n<li>\r\n<p>Claim your refund by specifying your concern and contacting us through any of the following methods:</p>\r\n<ul>\r\n<li>Live Chat</li>\r\n<li><a href=\"mailto:support@nikeshh.com\">support@nikeshh.com</a></li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p>We will attempt to resolve your concern immediately according to our revision policy. If unresolved, our refund department will email you a refund request approval.</p>\r\n</li>\r\n<li>\r\n<p>After the refund, all design rights will be acquired by American Web Nerds, and you will not be allowed to display any version of the design provided by the company.</p>\r\n</li>\r\n</ol>\r\n<p><strong>Communication Policy</strong></p>\r\n<p>You acknowledge that Nikeshh is not liable for any correspondence from email addresses other than those followed by our own domain, \"nikeshh.com,\" or any contact number not mentioned on our website. Nikeshh cannot be held responsible for any damages caused by such correspondence. We only assume responsibility for communication through email addresses under our own domain or via the contact number mentioned on the Nikeshh website.</p>\r\n<p><strong>My Account</strong></p>\r\n<p>The My Account area serves as a convenient platform for communication. It is your sole responsibility to regularly check the account area for any queries, concerns, or additional instructions required by the designer. Failing to check or use the Account Area frequently does not provide sufficient grounds for a refund. However, if you are unsure how to use the area, you may contact our customer support team at any time for assistance.</p>\r\n<p><strong>Reactivation Policy</strong></p>\r\n<p>We will not entertain or refund any orders if the client remains non-responsive for 45 days. However, if the client has a personal issue and sends us an email to request a hold on the project, we will accommodate the request. If the client remains non-responsive for more than 45 days, an additional caution fee of $150 will be charged to re-initiate the project.</p>\r\n<p><strong>Third-Party Terms of Use</strong></p>\r\n<p>Certain features of our services may utilize third-party vendors and business partners, including software, information, or other services. Some of these vendors and business partners may require users who utilize such features to agree to their own terms and conditions. This clause identifies third-party terms and conditions that are required by those vendors and business partners for the specified features. By using these features, you agree to be bound by the respective third-party terms and conditions. Please note that these third-party terms are subject to change at the discretion of the respective third party.</p>\r\n<p><strong>Customer Support</strong></p>\r\n<p>We offer 24-hour customer support to address your queries and questions. You can contact us at any time for assistance.</p>\r\n<p><strong>Quality Assurance Policy</strong></p>\r\n<p>To ensure your satisfaction, our designers adhere to the specifications provided by you in the order form. The designs are created after thorough research, guaranteeing high-quality and unique designs. We offer a 100% satisfaction guarantee and continue working on the ordered design, revising it until you are fully satisfied. We also provide free coordination with your printing company, if required.</p>\r\n<p><strong>Delivery Policy</strong></p>\r\n<p>All design order files are delivered to the Account Area as per the date specified in the Order Confirmation Email. An email notification is sent to inform the client about the delivery of their design order to their specific account area. All policies related to revisions and refunds are subject to the date and time of the design order delivery to the client\'s account area.</p>\r\n<p>Upon placing an order, you receive a design order reference number to track the status of your order and post revisions against the reference number. We deliver all customized design orders via email within 2 to 3 days after receiving your order.</p>\r\n<p>For urgent requirements, we offer a RUSH DELIVERY service. By paying an additional fee of $100, you can receive your first logo samples within 24 hours. For further assistance, please contact our 24-hour Customer Support Center.</p>', 'Terms and conditions', 'We offer revision services based on the package you have selected. Customers can request unlimited free revisions, and we will revise their design without any additional charges, as long as the design and concept remain the same. The turnaround time for revisions is 48 hours.', '2021-03-14 21:07:27', '2023-07-07 03:50:16'),
(3, 1, 1, NULL, 'Privacy Policy', 'privacy-policy', '<p>This privacy policy outlines our practices regarding the collection and use of customer\'s personal data. When you submit an online query, we only require basic information such as your name, email address, phone number, or country, which is necessary for us to contact you and address your needs.</p>\r\n<p>We are committed to protecting your personally identifiable information and do not sell, trade, or transfer it to outside parties. However, we may share non-personally identifiable visitor information with trusted third parties and subsidiaries who assist us in operating our website, conducting business, or providing services, under the condition that they maintain the confidentiality of this information. Such shared data may be used for marketing, advertising, or other purposes.</p>\r\n<p>To ensure the security of your information, Nikeshh.com employs a secure server and Secure Socket Layer (SSL) technology to encrypt and transmit your private or credit information when you place an order on our website.</p>\r\n<p>We utilize your personal data to process orders and provide better responses to your inquiries. Additionally, your information may be used to enhance website features based on the feedback we receive from you, keep you informed about our latest offers and updates, and improve our customer services.</p>\r\n<p>Our adherence to the General Data Protection Regulation (GDPR) means that we do not disclose personally identifiable information to third parties without your consent. Your data will be treated as confidential, and you will have full knowledge of its use. This excludes our subsidiaries and trusted third parties who assist us in website operations, business conduct, or service provision, as long as they agree to maintain the confidentiality of this information.</p>\r\n<p>By giving your consent to this privacy notice, you authorize us to process your personal data for the specified purposes. Consent is necessary for Nikeshh to process both types of personal data, and it must be explicitly provided. If we require your sensitive personal data, we will explain the purpose and manner of its use. You have the right to withdraw your consent at any time, following the standard Withdrawal of Consent Procedure (GDPR DOC 2.7A), by contacting us via phone or email</p>\r\n<p>&nbsp;</p>', 'Privacy Policy', 'This privacy policy outlines our practices regarding the collection and use of customer\'s personal data. When you submit an online query, we only require basic information such as your name, email address, phone number, or country, which is necessary for us to contact you and address your needs.', '2021-03-14 21:08:41', '2023-07-07 03:39:24'),
(26, 1, 1, 275, 'Web Design', 'web-design', '<h2>Harnessing the Power of Web Design: Transforming Businesses in the Digital Age</h2>\r\n<h2>Introduction:</h2>\r\n<p>In the digital era, where consumers increasingly rely on online platforms to discover and engage with businesses, having an effective web presence is crucial. Web design plays a pivotal role in creating visually appealing, user-friendly, and functional websites that attract and retain visitors. In this article, we will explore the numerous benefits of web design for businesses and how it can be a powerful tool for success in today\'s competitive landscape.</p>\r\n<h2>I. Establishing a Strong Online Presence:</h2>\r\n<ol>\r\n<li>\r\n<p>Creating a Memorable First Impression: A well-designed website immediately captivates visitors and creates a positive first impression. The visual aesthetics, intuitive navigation, and professional branding elements all contribute to establishing a strong online presence that reflects the values and personality of the business.</p>\r\n</li>\r\n<li>\r\n<p>Building Brand Consistency: Web design enables businesses to showcase their brand identity consistently across various online touchpoints. From color schemes and typography to logo placement and imagery, a cohesive and visually appealing website reinforces brand recognition and fosters trust among visitors.</p>\r\n</li>\r\n<li>\r\n<p>Differentiating from Competitors: In a crowded online marketplace, a unique and visually appealing website design sets businesses apart from their competitors. Through innovative design elements, engaging content, and a user-centric approach, businesses can leave a lasting impression on their target audience, leading to increased brand loyalty and customer retention.</p>\r\n</li>\r\n</ol>\r\n<h2>II. Enhancing User Experience and Engagement:</h2>\r\n<ol>\r\n<li>\r\n<p>Intuitive Navigation and User-Friendly Interface: Web design focuses on creating intuitive navigation menus and a user-friendly interface, enabling visitors to find the information they need effortlessly. Clear and logical website architecture ensures a seamless browsing experience, reducing bounce rates and increasing engagement.</p>\r\n</li>\r\n<li>\r\n<p>Mobile Responsiveness: With the proliferation of smartphones and tablets, having a mobile-responsive website design is crucial. Responsive design ensures that the website adapts to different screen sizes and resolutions, providing a consistent and optimized user experience across devices. Mobile-friendly websites also tend to rank higher in search engine results.</p>\r\n</li>\r\n<li>\r\n<p>Improving Website Speed and Performance: Web design encompasses optimizing website performance by minimizing loading times and optimizing file sizes. A fast-loading website not only enhances user experience but also improves search engine rankings. Studies show that visitors are more likely to abandon a website if it takes too long to load, underscoring the importance of speed optimization.</p>\r\n</li>\r\n</ol>\r\n<h2>III. Driving Conversions and Business Growth:</h2>\r\n<ol>\r\n<li>\r\n<p>Clear Call-to-Actions (CTAs): Web design strategically incorporates persuasive and prominently placed CTAs to guide visitors towards desired actions, such as making a purchase, subscribing to a newsletter, or filling out a contact form. Well-designed CTAs enhance user engagement and conversion rates, ultimately driving business growth.</p>\r\n</li>\r\n<li>\r\n<p>Streamlining the Sales Funnel: Effective web design streamlines the user journey by structuring content and design elements to guide visitors through the sales funnel. By presenting relevant information, highlighting product/service benefits, and addressing potential pain points, businesses can increase conversions and drive revenue.</p>\r\n</li>\r\n<li>\r\n<p>Search Engine Optimization (SEO) Integration: Web design and SEO go hand in hand. By implementing SEO best practices during the design process, businesses can ensure that their websites are search engine-friendly, leading to improved visibility and organic traffic. Elements such as clean code, proper meta tags, and optimized images contribute to better search rankings.</p>\r\n</li>\r\n</ol>\r\n<h2>Conclusion:</h2>\r\n<p>Web design is a powerful tool for businesses in the digital age. By establishing a strong online presence, enhancing user experience and engagement, and driving conversions and business growth, well-designed websites can significantly impact a company\'s success. Investing in professional web design ensures that businesses can effectively showcase their brand, differentiate themselves from competitors, and provide an optimal user experience. In a digital landscape where consumers demand seamless interactions and captivating visuals, web design is an indispensable asset for businesses aiming to thrive and prosper.</p>', 'Web Design', 'Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI & UX behaviors.', '2023-07-09 22:43:35', '2023-07-10 02:55:07'),
(6, 2, 1, NULL, 'GDPR', 'gdpr', '<p>O&nbsp;<strong>Regulamento Geral sobre a Prote&ccedil;&atilde;o de Dados</strong>&nbsp;(<strong>RGPD</strong>) (UE) 2016/679 &eacute; um&nbsp;<a title=\"Regulamento (Uni&atilde;o Europeia)\" href=\"https://pt.wikipedia.org/wiki/Regulamento_(Uni%C3%A3o_Europeia)\">regulamento</a>&nbsp;do&nbsp;<a title=\"Direito da Uni&atilde;o Europeia\" href=\"https://pt.wikipedia.org/wiki/Direito_da_Uni%C3%A3o_Europeia\">direito europeu</a>&nbsp;sobre privacidade e prote&ccedil;&atilde;o de dados pessoais, aplic&aacute;vel a todos os indiv&iacute;duos na&nbsp;<a title=\"Uni&atilde;o Europeia\" href=\"https://pt.wikipedia.org/wiki/Uni%C3%A3o_Europeia\">Uni&atilde;o Europeia</a>&nbsp;e&nbsp;<a title=\"Espa&ccedil;o Econ&oacute;mico Europeu\" href=\"https://pt.wikipedia.org/wiki/Espa%C3%A7o_Econ%C3%B3mico_Europeu\">Espa&ccedil;o Econ&oacute;mico Europeu</a>&nbsp;que foi criado em 2018. Regulamenta tamb&eacute;m a exporta&ccedil;&atilde;o de dados pessoais para fora da UE e EEE. O RGPD tem como objetivo dar aos cidad&atilde;os e residentes formas de controlar os seus dados pessoais e unificar o quadro regulamentar europeu.<sup id=\"cite_ref-1\" class=\"reference\"><a href=\"https://pt.wikipedia.org/wiki/Regulamento_Geral_sobre_a_Prote%C3%A7%C3%A3o_de_Dados#cite_note-1\">[1]</a></sup></p>\r\n<p>O regulamento revoga a&nbsp;<a class=\"new\" title=\"Diretiva de Prote&ccedil;&atilde;o de Dados Pessoais (p&aacute;gina n&atilde;o existe)\" href=\"https://pt.wikipedia.org/w/index.php?title=Diretiva_de_Prote%C3%A7%C3%A3o_de_Dados_Pessoais&amp;action=edit&amp;redlink=1\">Diretiva de Prote&ccedil;&atilde;o de Dados Pessoais</a>&nbsp;de 1995 (95/46/CE) e cont&eacute;m cl&aacute;usulas e exig&ecirc;ncias relativas &agrave; forma como s&atilde;o tratadas&nbsp;<a title=\"Informa&ccedil;&atilde;o pessoalmente identific&aacute;vel\" href=\"https://pt.wikipedia.org/wiki/Informa%C3%A7%C3%A3o_pessoalmente_identific%C3%A1vel\">informa&ccedil;&otilde;es pessoais</a>&nbsp;na Uni&atilde;o Europeia e &eacute; aplic&aacute;vel a todas as empresas que operem no Espa&ccedil;o Econ&oacute;mico Europeu, independentemente do seu pa&iacute;s de origem. Os processos empresariais que tratem dados pessoais s&atilde;o obrigados a ser desenhados de raiz e por padr&atilde;o com medidas que respeitem os princ&iacute;pios da prote&ccedil;&atilde;o de dados por defeito e&nbsp;<a title=\"Privacidade desde a concep&ccedil;&atilde;o\" href=\"https://pt.wikipedia.org/wiki/Privacidade_desde_a_concep%C3%A7%C3%A3o\">desde a sua conce&ccedil;&atilde;o</a>, o que significa que os dados devem ser guardados usando&nbsp;<a class=\"new\" title=\"Pseudonimiza&ccedil;&atilde;o (p&aacute;gina n&atilde;o existe)\" href=\"https://pt.wikipedia.org/w/index.php?title=Pseudonimiza%C3%A7%C3%A3o&amp;action=edit&amp;redlink=1\">pseudonimiza&ccedil;&atilde;o</a>&nbsp;ou&nbsp;<a class=\"new\" title=\"Anonimiza&ccedil;&atilde;o (p&aacute;gina n&atilde;o existe)\" href=\"https://pt.wikipedia.org/w/index.php?title=Anonimiza%C3%A7%C3%A3o&amp;action=edit&amp;redlink=1\">anonimiza&ccedil;&atilde;o</a>&nbsp;completa e usando as mais elevadas configura&ccedil;&otilde;es de privacidade por padr&atilde;o, de modo a que os dados n&atilde;o possam ser disponibilizados sem consentimento expl&iacute;cito, e n&atilde;o possam ser usados para identificar algu&eacute;m sem informa&ccedil;&atilde;o adicional armazenada em separado. O regulamento n&atilde;o permite o tratamento de quaisquer dados fora do contexto legal especificado no regulamento, exceto no caso em que quem controla os dados tenha recebido consentimento expl&iacute;cito e&nbsp;<em>opt-in</em>&nbsp;do propriet&aacute;rio dos dados. O propriet&aacute;rio tem ainda o direito de revogar esta permiss&atilde;o em qualquer momento.</p>\r\n<p>O respons&aacute;vel pelo tratamento dos dados pessoais deve declarar claramente qualquer recolha de dados, declarar qual o enquadramento jur&iacute;dico que permite essa recolha, a finalidade do processamento de dados, quanto tempo v&atilde;o ficar armazenados os dados e se esses dados ser&atilde;o partilhados com terceiros fora da Uni&atilde;o Europeia. Os utilizadores t&ecirc;m o direito de exigir uma c&oacute;pia dos dados recolhidos em formato comum e o direito de exigir que esses dados sejam eliminados em determinadas circunst&acirc;ncias. As autoridades p&uacute;blicas e as empresas cuja atividade se centre no tratamento regular ou sistem&aacute;tico de dados pessoais s&atilde;o obrigados a ter um&nbsp;<em>data protection officer</em>&nbsp;(DPO), o qual &eacute; respons&aacute;vel por assegurar que o tratamento est&aacute; de acordo com o RGDP. As empresas s&atilde;o ainda obrigadas a comunicar qualquer&nbsp;<a class=\"new\" title=\"Viola&ccedil;&atilde;o de dados (p&aacute;gina n&atilde;o existe)\" href=\"https://pt.wikipedia.org/w/index.php?title=Viola%C3%A7%C3%A3o_de_dados&amp;action=edit&amp;redlink=1\">viola&ccedil;&atilde;o de dados</a>&nbsp;no prazo de 72h quando isso tenha qualquer efeito adverso na privacidade do utilizador.</p>\r\n<p>O regulamento foi aprovado em 15 de abril de 2016.<sup id=\"cite_ref-2\" class=\"reference\"><a href=\"https://pt.wikipedia.org/wiki/Regulamento_Geral_sobre_a_Prote%C3%A7%C3%A3o_de_Dados#cite_note-2\">[2]</a></sup>&nbsp;Ap&oacute;s um per&iacute;odo de transi&ccedil;&atilde;o de dois anos, entrou em vigor em 25 de maio de 2018.<sup id=\"cite_ref-3\" class=\"reference\"><a href=\"https://pt.wikipedia.org/wiki/Regulamento_Geral_sobre_a_Prote%C3%A7%C3%A3o_de_Dados#cite_note-3\">[3]</a></sup>&nbsp;Uma vez que o RGPD &eacute; um regulamento, e n&atilde;o uma&nbsp;<a title=\"Diretiva (Uni&atilde;o Europeia)\" href=\"https://pt.wikipedia.org/wiki/Diretiva_(Uni%C3%A3o_Europeia)\">diretiva</a>, n&atilde;o &eacute; necess&aacute;rio que os estados-membro aprovem legisla&ccedil;&atilde;o adicional, pelo que o regulamento &eacute; vinculativo e aplic&aacute;vel.<sup id=\"cite_ref-BlackmerGDPR16_4-0\" class=\"reference\"><a href=\"https://pt.wikipedia.org/wiki/Regulamento_Geral_sobre_a_Prote%C3%A7%C3%A3o_de_Dados#cite_note-BlackmerGDPR16-4\">[4]</a></sup></p>', 'GDPR', 'O Regulamento Geral de Proteção de Dados', '2021-03-14 20:56:16', '2021-04-11 18:38:01'),
(7, 2, 1, NULL, 'Termos e Condições', 'terms-conditions', '<p><strong>A Wikip&eacute;dia n&atilde;o possui um artigo com este nome exato.</strong>&nbsp;Por favor,&nbsp;<a title=\"Especial:Pesquisar/Contractual term\" href=\"https://pt.wikipedia.org/wiki/Especial:Pesquisar/Contractual_term\">procure por&nbsp;<em>Contractual term</em>&nbsp;na Wikip&eacute;dia</a>&nbsp;para buscar por t&iacute;tulos alternativos.</p>\r\n<ul>\r\n<li>Lembre-se que para criar ou editar esta p&aacute;gina, &eacute; necess&aacute;rio&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Entrar&amp;returnto=Contractual_term&amp;returntoquery=action%3Dedit\">iniciar sess&atilde;o</a></strong>.</li>\r\n<li><a title=\"Especial:Pesquisar/Contractual term\" href=\"https://pt.wikipedia.org/wiki/Especial:Pesquisar/Contractual_term\">Procure por \"<em>Contractual term</em>\"</a>&nbsp;em artigos existentes.</li>\r\n<li><a title=\"Especial:P&aacute;ginas afluentes/Contractual term\" href=\"https://pt.wikipedia.org/wiki/Especial:P%C3%A1ginas_afluentes/Contractual_term\">Procure por p&aacute;ginas na Wikip&eacute;dia que tenham liga&ccedil;&atilde;o para este t&iacute;tulo</a>.</li>\r\n</ul>\r\n<div id=\"noarticletext_technical\"><hr />\r\n<p><strong>Outras raz&otilde;es pelas quais esta mensagem pode aparecer:</strong></p>\r\n<ul>\r\n<li>Se uma p&aacute;gina foi recentemente criada aqui, isso pode n&atilde;o ser ainda vis&iacute;vel por causa de um atraso na atualiza&ccedil;&atilde;o da base de dados; espere alguns minutos e tente a fun&ccedil;&atilde;o&nbsp;<a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Contractual_term&amp;action=purge\"><em>purge</em></a>.</li>\r\n<li>Os t&iacute;tulos na Wikip&eacute;dia s&atilde;o&nbsp;<strong><a title=\"Case-sensitive\" href=\"https://pt.wikipedia.org/wiki/Case-sensitive\">sens&iacute;veis ao uso de mai&uacute;scula</a></strong>&nbsp;exceto para o primeiro caractere; por favor, tente formas alternativas e considere adicionar um&nbsp;<a title=\"Ajuda:Guia de edi&ccedil;&atilde;o/Redirecionar p&aacute;ginas\" href=\"https://pt.wikipedia.org/wiki/Ajuda:Guia_de_edi%C3%A7%C3%A3o/Redirecionar_p%C3%A1ginas\">redirecionamento</a>&nbsp;para o nome correto.</li>\r\n<li>Se a p&aacute;gina foi apagada, procure ver no&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Log/delete&amp;page=Contractual_term\">regist(r)o de elimina&ccedil;&atilde;o</a></strong>, e veja \"<a title=\"Wikip&eacute;dia:Por que a p&aacute;gina foi eliminada?\" href=\"https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Por_que_a_p%C3%A1gina_foi_eliminada%3F\">Por que a p&aacute;gina foi eliminada?</a>\".</li>\r\n<li>Se houve edi&ccedil;&otilde;es prejudiciais na p&aacute;gina, procure ver no&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Registro_de_abusos&amp;wpSearchTitle=Contractual_term\">regist(r)o do filtro de edi&ccedil;&otilde;es</a></strong>, e veja&nbsp;<a title=\"Wikip&eacute;dia:Filtro de edi&ccedil;&otilde;es\" href=\"https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Filtro_de_edi%C3%A7%C3%B5es\">quais filtros est&atilde;o em uso</a>.</li>\r\n</ul>\r\n</div>', 'Termos e Condições', 'Os pesquisadores observam que as regras sobre localização e limites de tempo podem ser inexequíveis', '2021-03-14 21:07:27', '2021-04-11 18:38:39'),
(8, 2, 1, NULL, 'Política de Privacidade', 'privacy-policy', '<p><strong>A Wikip&eacute;dia n&atilde;o possui um artigo com este nome exato.</strong>&nbsp;Por favor,&nbsp;<a title=\"Especial:Pesquisar/Privacy policy\" href=\"https://pt.wikipedia.org/wiki/Especial:Pesquisar/Privacy_policy\">procure por&nbsp;<em>Privacy policy</em>&nbsp;na Wikip&eacute;dia</a>&nbsp;para buscar por t&iacute;tulos alternativos.</p>\r\n<ul>\r\n<li>Lembre-se que para criar ou editar esta p&aacute;gina, &eacute; necess&aacute;rio&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Entrar&amp;returnto=Privacy_policy&amp;returntoquery=action%3Dedit\">iniciar sess&atilde;o</a></strong>.</li>\r\n<li><a title=\"Especial:Pesquisar/Privacy policy\" href=\"https://pt.wikipedia.org/wiki/Especial:Pesquisar/Privacy_policy\">Procure por \"<em>Privacy policy</em>\"</a>&nbsp;em artigos existentes.</li>\r\n<li><a title=\"Especial:P&aacute;ginas afluentes/Privacy policy\" href=\"https://pt.wikipedia.org/wiki/Especial:P%C3%A1ginas_afluentes/Privacy_policy\">Procure por p&aacute;ginas na Wikip&eacute;dia que tenham liga&ccedil;&atilde;o para este t&iacute;tulo</a>.</li>\r\n</ul>\r\n<div id=\"noarticletext_technical\"><hr />\r\n<p><strong>Outras raz&otilde;es pelas quais esta mensagem pode aparecer:</strong></p>\r\n<ul>\r\n<li>Se uma p&aacute;gina foi recentemente criada aqui, isso pode n&atilde;o ser ainda vis&iacute;vel por causa de um atraso na atualiza&ccedil;&atilde;o da base de dados; espere alguns minutos e tente a fun&ccedil;&atilde;o&nbsp;<a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Privacy_policy&amp;action=purge\"><em>purge</em></a>.</li>\r\n<li>Os t&iacute;tulos na Wikip&eacute;dia s&atilde;o&nbsp;<strong><a title=\"Case-sensitive\" href=\"https://pt.wikipedia.org/wiki/Case-sensitive\">sens&iacute;veis ao uso de mai&uacute;scula</a></strong>&nbsp;exceto para o primeiro caractere; por favor, tente formas alternativas e considere adicionar um&nbsp;<a title=\"Ajuda:Guia de edi&ccedil;&atilde;o/Redirecionar p&aacute;ginas\" href=\"https://pt.wikipedia.org/wiki/Ajuda:Guia_de_edi%C3%A7%C3%A3o/Redirecionar_p%C3%A1ginas\">redirecionamento</a>&nbsp;para o nome correto.</li>\r\n<li>Se a p&aacute;gina foi apagada, procure ver no&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Log/delete&amp;page=Privacy_policy\">regist(r)o de elimina&ccedil;&atilde;o</a></strong>, e veja \"<a title=\"Wikip&eacute;dia:Por que a p&aacute;gina foi eliminada?\" href=\"https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Por_que_a_p%C3%A1gina_foi_eliminada%3F\">Por que a p&aacute;gina foi eliminada?</a>\".</li>\r\n<li>Se houve edi&ccedil;&otilde;es prejudiciais na p&aacute;gina, procure ver no&nbsp;<strong><a class=\"external text\" href=\"https://pt.wikipedia.org/w/index.php?title=Especial:Registro_de_abusos&amp;wpSearchTitle=Privacy_policy\">regist(r)o do filtro de edi&ccedil;&otilde;es</a></strong>, e veja&nbsp;<a title=\"Wikip&eacute;dia:Filtro de edi&ccedil;&otilde;es\" href=\"https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Filtro_de_edi%C3%A7%C3%B5es\">quais filtros est&atilde;o em uso</a>. 2</li>\r\n</ul>\r\n</div>', 'Política de Privacidade', 'No Canadá, um Comissário de Privacidade do Canadá foi estabelecido de acordo com a Lei Canadense de Direitos Humanos em 1977.', '2021-03-14 21:08:41', '2021-04-18 14:23:22'),
(9, 3, 1, NULL, 'جاربار', 'gdpr', '<p>اللائحة العامة لحماية البيانات (الاتحاد الأوروبي) 2016/679 (GDPR) هي لائحة في قانون الاتحاد الأوروبي بشأن حماية البيانات والخصوصية في الاتحاد الأوروبي (EU) والمنطقة الاقتصادية الأوروبية (EEA). كما تتناول نقل البيانات الشخصية خارج مناطق الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية. يتمثل الهدف الأساسي للائحة العامة لحماية البيانات في منح الأفراد إمكانية التحكم في بياناتهم الشخصية وتبسيط البيئة التنظيمية للأعمال التجارية الدولية من خلال توحيد اللوائح داخل الاتحاد الأوروبي. [1] تحل اللائحة محل توجيه حماية البيانات 95/46 / EC ، وتحتوي على أحكام ومتطلبات تتعلق بمعالجة البيانات الشخصية للأفراد (يطلق عليهم رسميًا موضوعات البيانات في اللائحة العامة لحماية البيانات) الموجودين في المنطقة الاقتصادية الأوروبية ، وينطبقون على أي مؤسسة بغض النظر عن موقعه وجنسية الأشخاص موضوع البيانات أو إقامتهم - أي معالجة المعلومات الشخصية للأفراد داخل المنطقة الاقتصادية الأوروبية</p>\r\n<p>يجب على مراقبي ومعالجات البيانات الشخصية وضع التدابير الفنية والتنظيمية المناسبة لتنفيذ مبادئ حماية البيانات. يجب تصميم وبناء العمليات التجارية التي تتعامل مع البيانات الشخصية مع مراعاة المبادئ وتوفير ضمانات لحماية البيانات (على سبيل المثال ، استخدام إخفاء الهوية أو إخفاء الهوية الكامل عند الاقتضاء). يجب على مراقبي البيانات تصميم أنظمة المعلومات مع مراعاة الخصوصية. على سبيل المثال ، استخدام أعلى إعدادات الخصوصية الممكنة بشكل افتراضي ، بحيث لا تكون مجموعات البيانات متاحة بشكل افتراضي للجمهور ولا يمكن استخدامها لتحديد موضوع ما. لا يجوز معالجة أي بيانات شخصية ما لم تتم هذه المعالجة بموجب أحد القواعد القانونية الستة المحددة في اللائحة (الموافقة ، العقد ، المهمة العامة ، المصلحة الحيوية ، المصلحة المشروعة أو المتطلبات القانونية). عندما تعتمد المعالجة على الموافقة ، يحق لصاحب البيانات إبطالها في أي وقت.</p>\r\n<p>يجب على مراقبي البيانات الكشف بوضوح عن أي جمع للبيانات ، والإعلان عن الأساس القانوني والغرض من معالجة البيانات ، وتحديد مدة الاحتفاظ بالبيانات وما إذا كانت تتم مشاركتها مع أي جهات خارجية أو خارج المنطقة الاقتصادية الأوروبية. تلتزم الشركات بحماية بيانات الموظفين والمستهلكين إلى الدرجة التي يتم فيها استخراج البيانات الضرورية فقط مع الحد الأدنى من التدخل في خصوصية البيانات من الموظفين أو المستهلكين أو الأطراف الثالثة. يجب أن يكون لدى الشركات ضوابط ولوائح داخلية لمختلف الإدارات مثل التدقيق والضوابط الداخلية والعمليات. يحق لأصحاب البيانات طلب نسخة محمولة من البيانات التي تم جمعها بواسطة وحدة تحكم بتنسيق مشترك ، والحق في محو بياناتهم في ظل ظروف معينة. يُطلب من السلطات العامة والشركات التي تتكون أنشطتها الأساسية من المعالجة المنتظمة أو المنهجية للبيانات الشخصية تعيين مسؤول حماية البيانات (DPO) ، وهو مسؤول عن إدارة الامتثال للقانون العام لحماية البيانات (GDPR). يجب على الشركات الإبلاغ عن انتهاكات البيانات إلى السلطات الإشرافية الوطنية في غضون 72 ساعة إذا كان لها تأثير سلبي على خصوصية المستخدم. في بعض الحالات ، قد يتم تغريم منتهكي اللائحة العامة لحماية البيانات (GDPR) حتى 20 مليون يورو أو ما يصل إلى 4٪ من حجم المبيعات السنوي العالمي للسنة المالية السابقة في حالة وجود مؤسسة ، أيهما أكبر.</p>\r\n<p>تم اعتماد اللائحة العامة لحماية البيانات (GDPR) في 14 أبريل 2016 ، وأصبحت قابلة للتنفيذ اعتبارًا من 25 مايو 2018. نظرًا لأن اللائحة العامة لحماية البيانات هي لائحة وليست توجيهًا ، فهي ملزمة وقابلة للتطبيق بشكل مباشر ، ولكنها توفر المرونة لجوانب معينة من اللوائح ليتم تعديلها من قبل الأفراد. الدول الأعضاء.</p>\r\n<p>أصبحت اللائحة نموذجًا للعديد من القوانين الوطنية خارج الاتحاد الأوروبي ، بما في ذلك تشيلي واليابان والبرازيل وكوريا الجنوبية والأرجنتين وكينيا. قانون خصوصية المستهلك في كاليفورنيا (CCPA) ، المعتمد في 28 يونيو 2018 ، له العديد من أوجه التشابه مع اللائحة العامة لحماية البيانات. [2]</p>', 'جاربار', 'اللائحة العامة لحماية البيانات', '2021-03-14 20:56:16', '2021-04-11 18:44:43'),
(10, 3, 1, NULL, 'الأحكام والشروط', 'terms-conditions', '<p>شروط الخدمة (المعروفة أيضًا باسم شروط الاستخدام والشروط والأحكام ، والتي يشار إليها عادةً باختصار TOS أو ToS أو ToU أو T&amp;C) هي الاتفاقيات القانونية بين مقدم الخدمة والشخص الذي يريد استخدام تلك الخدمة. يجب أن يوافق الشخص على الالتزام بشروط الخدمة من أجل استخدام الخدمة المقدمة. [1] يمكن أن تكون شروط الخدمة أيضًا مجرد إخلاء مسؤولية ، خاصة فيما يتعلق باستخدام مواقع الويب. أثارت اللغة الغامضة والجمل المطولة المستخدمة في شروط الاستخدام مخاوف بشأن خصوصية العميل وزادت من الوعي العام بعدة طرق.</p>\r\n<p>تحتوي اتفاقية شروط الخدمة عادةً على أقسام تتعلق بموضوع واحد أو أكثر من الموضوعات التالية</p>\r\n<p>توضيح / تعريف الكلمات والعبارات الرئيسية<br />حقوق ومسؤوليات المستخدم<br />الاستخدام الصحيح أو المتوقع ؛ تعريف سوء الاستخدام<br />المساءلة عن الإجراءات والسلوك والسلوك عبر الإنترنت<br />سياسة الخصوصية التي تحدد استخدام البيانات الشخصية<br />تفاصيل الدفع مثل رسوم العضوية أو الاشتراك ، إلخ.<br />سياسة إلغاء الاشتراك التي تصف إجراءات إنهاء الحساب ، إن وجدت<br />يحتوي أحيانًا على بند تحكيم يوضح بالتفصيل عملية تسوية النزاع وحقوقًا محدودة لرفع دعوى إلى المحكمة<br />إخلاء المسؤولية / تحديد المسؤولية يوضح المسؤولية القانونية للموقع عن الأضرار التي يتكبدها المستخدمون<br />إشعار المستخدم عند تعديل الشروط ، إذا تم عرضه<br />من بين 102 شركة قامت بتسويق الاختبارات الجينية للمستهلكين في عام 2014 للأغراض الصحية ، كان لدى 71 شركة أحكام وشروط متاحة للجمهور: [4]</p>\r\n<p>57 من 71 لديها بنود إخلاء المسؤولية (بما في ذلك 10 إخلاء المسؤولية عن الضرر الناجم عن إهمالهم) ،<br />51 دع الشركة تغير الشروط (بما في ذلك 17 دون إشعار) ،<br />34 السماح بالكشف عن البيانات في ظروف معينة ،<br />31 يطلب من المستهلكين تعويض الشركة ،<br />20 وعد بعدم بيع البيانات.<br />من بين 260 اتفاقية ترخيص برمجيات المستهلك في السوق الشامل في عام 2010 ، [5]</p>\r\n<p>91٪ تنازلوا عن ضمانات القابلية للتسويق أو الملاءمة للغرض أو قالوا \"كما هي\"<br />92٪ تنازلوا عن الأضرار التبعية أو العرضية أو الخاصة أو المتوقعة<br />لم يضمن 69٪ أن البرنامج خالٍ من العيوب أو سيعمل كما هو موصوف في الدليل<br />55٪ تعويضات قصوى بسعر الشراء أو أقل<br />قال 36٪ إنهم لا يضمنون ما إذا كان ينتهك حقوق الملكية الفكرية للآخرين<br />32٪ مطلوب تحكيم أو محكمة معينة<br />17٪ طلب من العميل دفع الفواتير القانونية للمصنع (تعويض) ، ولكن ليس العكس<br />من بين شروط وأحكام 31 خدمة حوسبة سحابية في يناير ويوليو 2010 ، تعمل في إنجلترا ، [6]</p>\r\n<p>27 حدد القانون الذي سيتم استخدامه (ولاية أمريكية أو دولة أخرى) ،<br />يحدد معظمهم أنه يمكن للمستهلكين رفع دعوى ضد الشركة فقط في مدينة معينة في تلك الولاية القضائية ، على الرغم من أنه غالبًا ما يمكن للشركة رفع دعوى ضد المستهلك في أي مكان ،<br />يتطلب البعض تقديم المطالبات في غضون نصف عام إلى عامين ،<br />7 ـ فرض التحكيم ، وكل ذلك يمنع المستهلك من التصرف غير المشروع والمعارض.<br />13 يمكن تعديل الشروط بمجرد نشر التغييرات على موقع الويب الخاص بهم ،<br />الغالبية تتنصل من المسؤولية عن السرية أو النسخ الاحتياطية ،<br />الوعد الأكبر بالحفاظ على البيانات لفترة وجيزة فقط بعد إنهاء الخدمة ،<br />قليلون يتعهدون بحذف البيانات تمامًا عندما يغادر العميل ،<br />يقوم البعض بمراقبة بيانات العملاء لفرض سياساتهم على الاستخدام ،<br />جميع ضمانات إخلاء المسئولية وتقريبًا جميع إخلاء المسئولية ،<br />24 يطلب من العميل تعويضهم ، والقليل من تعويض العميل ،<br />القليل منهم يعطي ائتمانات للخدمة السيئة ، 15 يعد \"بأفضل الجهود\" ويمكن أن يعلق أو يتوقف في أي وقت.<br />لاحظ الباحثون أن القواعد الخاصة بالموقع والحدود الزمنية قد تكون غير قابلة للتنفيذ بالنسبة للمستهلكين في العديد من الولايات القضائية التي تخضع لحماية المستهلك ، وأن سياسات الاستخدام المقبولة نادرًا ما يتم فرضها ، وأن الحذف السريع يعد أمرًا خطيرًا إذا حكمت المحكمة لاحقًا أن الإنهاء غير قانوني ، وأن القوانين المحلية تتطلب في كثير من الأحيان ضمانات (وأجبرت المملكة المتحدة شركة Apple على قول ذلك).</p>', 'الأحكام والشروط', 'لاحظ الباحثون أن القواعد الخاصة بالمكان والحدود الزمنية قد تكون غير قابلة للتنفيذ', '2021-03-14 21:07:27', '2021-04-11 18:44:06'),
(11, 3, 1, NULL, 'سياسة الخصوصية', 'privacy-policy', '<p>اللائحة العامة لحماية البيانات (الاتحاد الأوروبي) 2016/679 (GDPR) هي لائحة في قانون الاتحاد الأوروبي بشأن حماية البيانات والخصوصية في الاتحاد الأوروبي (EU) والمنطقة الاقتصادية الأوروبية (EEA). كما تتناول نقل البيانات الشخصية خارج مناطق الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية. يتمثل الهدف الأساسي للائحة العامة لحماية البيانات في منح الأفراد إمكانية التحكم في بياناتهم الشخصية وتبسيط البيئة التنظيمية للأعمال التجارية الدولية من خلال توحيد اللوائح داخل الاتحاد الأوروبي. [1] تحل اللائحة محل توجيه حماية البيانات 95/46 / EC ، وتحتوي على أحكام ومتطلبات تتعلق بمعالجة البيانات الشخصية للأفراد (يطلق عليهم رسميًا موضوعات البيانات في اللائحة العامة لحماية البيانات) الموجودين في المنطقة الاقتصادية الأوروبية ، وينطبقون على أي مؤسسة بغض النظر عن موقعه وجنسية الأشخاص موضوع البيانات أو إقامتهم - أي معالجة المعلومات الشخصية للأفراد داخل المنطقة الاقتصادية الأوروبية</p>\r\n<p>يجب على مراقبي ومعالجات البيانات الشخصية وضع التدابير الفنية والتنظيمية المناسبة لتنفيذ مبادئ حماية البيانات. يجب تصميم وبناء العمليات التجارية التي تتعامل مع البيانات الشخصية مع مراعاة المبادئ وتوفير ضمانات لحماية البيانات (على سبيل المثال ، استخدام إخفاء الهوية أو إخفاء الهوية الكامل عند الاقتضاء). يجب على مراقبي البيانات تصميم أنظمة المعلومات مع مراعاة الخصوصية. على سبيل المثال ، استخدام أعلى إعدادات الخصوصية الممكنة بشكل افتراضي ، بحيث لا تكون مجموعات البيانات متاحة بشكل افتراضي للجمهور ولا يمكن استخدامها لتحديد موضوع ما. لا يجوز معالجة أي بيانات شخصية ما لم تتم هذه المعالجة بموجب أحد القواعد القانونية الستة المحددة في اللائحة (الموافقة ، العقد ، المهمة العامة ، المصلحة الحيوية ، المصلحة المشروعة أو المتطلبات القانونية). عندما تعتمد المعالجة على الموافقة ، يحق لصاحب البيانات إبطالها في أي وقت.</p>\r\n<p>يجب على مراقبي البيانات الكشف بوضوح عن أي جمع للبيانات ، والإعلان عن الأساس القانوني والغرض من معالجة البيانات ، وتحديد مدة الاحتفاظ بالبيانات وما إذا كانت تتم مشاركتها مع أي جهات خارجية أو خارج المنطقة الاقتصادية الأوروبية. تلتزم الشركات بحماية بيانات الموظفين والمستهلكين إلى الدرجة التي يتم فيها استخراج البيانات الضرورية فقط مع الحد الأدنى من التدخل في خصوصية البيانات من الموظفين أو المستهلكين أو الأطراف الثالثة. يجب أن يكون لدى الشركات ضوابط ولوائح داخلية لمختلف الإدارات مثل التدقيق والضوابط الداخلية والعمليات. يحق لأصحاب البيانات طلب نسخة محمولة من البيانات التي تم جمعها بواسطة وحدة تحكم بتنسيق مشترك ، والحق في محو بياناتهم في ظل ظروف معينة. يُطلب من السلطات العامة والشركات التي تتكون أنشطتها الأساسية من المعالجة المنتظمة أو المنهجية للبيانات الشخصية تعيين مسؤول حماية البيانات (DPO) ، وهو مسؤول عن إدارة الامتثال للقانون العام لحماية البيانات (GDPR). يجب على الشركات الإبلاغ عن انتهاكات البيانات إلى السلطات الإشرافية الوطنية في غضون 72 ساعة إذا كان لها تأثير سلبي على خصوصية المستخدم. في بعض الحالات ، قد يتم تغريم منتهكي اللائحة العامة لحماية البيانات (GDPR) حتى 20 مليون يورو أو ما يصل إلى 4٪ من حجم المبيعات السنوي العالمي للسنة المالية السابقة في حالة وجود مؤسسة ، أيهما أكبر.</p>\r\n<p>تم اعتماد اللائحة العامة لحماية البيانات <strong>(GDPR)</strong> في 14 أبريل 2016 ، وأصبحت قابلة للتنفيذ اعتبارًا من 25 مايو 2018. نظرًا لأن اللائحة العامة لحماية البيانات هي لائحة وليست توجيهًا ، فهي ملزمة وقابلة للتطبيق بشكل مباشر ، ولكنها توفر المرونة لجوانب معينة من اللوائح ليتم تعديلها من قبل الأفراد. الدول الأعضاء.</p>\r\n<p>أصبحت اللائحة نموذجًا للعديد من القوانين الوطنية خارج الاتحاد الأوروبي ، بما في ذلك تشيلي واليابان والبرازيل وكوريا الجنوبية والأرجنتين وكينيا. قانون خصوصية المستهلك في كاليفورنيا (CCPA) ، المعتمد في 28 يونيو 2018 ، له العديد من أوجه التشابه مع اللائحة العامة لحماية البيانات. [2]</p>', 'سياسة الخصوصية', 'في كندا ، تم إنشاء مفوض الخصوصية الكندي بموجب قانون حقوق الإنسان الكندي في عام 1977.', '2021-03-14 21:08:41', '2021-04-11 18:43:31');
INSERT INTO `pages` (`id`, `language_id`, `user_id`, `photo_id`, `title`, `slug`, `body`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(14, 1, 1, NULL, 'Lead Generation and Marketing', 'lead-generation-and-marketing', '<h2>Unleashing Growth: Harnessing the Power of Lead Generation and Marketing Services for Business Success</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s competitive business landscape, lead generation and marketing services have emerged as indispensable tools for businesses seeking sustainable growth and success. Lead generation services help businesses identify and attract potential customers, while marketing services enable businesses to effectively promote their products or services to targeted audiences. Together, these services form a powerful combination that drives business growth, expands customer reach, and increases conversion rates. In this article, we will explore the significance of lead generation and marketing services and delve into how they can empower businesses, fostering growth, profitability, and customer satisfaction.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Identifying and Attracting Potential Customers:</h2>\r\n<ol>\r\n<li>\r\n<p>Targeted Audience Research: Lead generation services assist businesses in understanding their target audience better. By conducting thorough market research and customer analysis, businesses can identify the characteristics, preferences, and pain points of their ideal customers. This insight allows businesses to tailor their marketing efforts to attract the right prospects effectively.</p>\r\n</li>\r\n<li>\r\n<p>Lead Capture and Database Management: Lead generation services help businesses capture and manage leads efficiently. By implementing lead capture forms on websites or landing pages, businesses can collect valuable customer information. This data is then organized and managed in a centralized database, enabling businesses to nurture leads and convert them into customers over time.</p>\r\n</li>\r\n<li>\r\n<p>Content Marketing and Lead Magnets: Marketing services often incorporate content marketing strategies to attract and engage potential customers. By creating valuable and informative content, businesses can position themselves as industry experts and build credibility. Marketing services help businesses distribute this content through various channels and use lead magnets, such as e-books or webinars, to capture leads\' contact information.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Effective Promotion and Customer Engagement:</h2>\r\n<ol>\r\n<li>\r\n<p>Multichannel Marketing: Marketing services enable businesses to reach their target audience through various channels. From social media marketing and email marketing to search engine optimization (SEO) and pay-per-click (PPC) advertising, businesses can leverage different marketing channels to maximize exposure and engage with potential customers. Multichannel marketing ensures a wider reach and increased brand visibility.</p>\r\n</li>\r\n<li>\r\n<p>Personalization and Segmentation: Marketing services focus on personalizing marketing campaigns based on individual customer preferences and behavior. By segmenting audiences and delivering tailored messages, businesses can enhance customer engagement and increase conversion rates. Personalized marketing campaigns demonstrate that businesses understand their customers\' needs and can provide tailored solutions.</p>\r\n</li>\r\n<li>\r\n<p>Marketing Automation and Lead Nurturing: Marketing services often utilize marketing automation tools to streamline and automate marketing processes. Automated email sequences and targeted campaigns allow businesses to nurture leads, provide relevant information, and guide them through the buyer\'s journey. Marketing automation saves time, improves efficiency, and ensures consistent communication with potential customers.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Measurement and Optimization:</h2>\r\n<ol>\r\n<li>\r\n<p>Data Analytics and Performance Tracking: Lead generation and marketing services rely on data analytics to measure the effectiveness of campaigns and optimize strategies. By analyzing key performance indicators (KPIs), businesses can gain insights into the success of their marketing efforts and make data-driven decisions. Performance tracking allows businesses to identify areas of improvement and allocate resources effectively.</p>\r\n</li>\r\n<li>\r\n<p>A/B Testing and Conversion Rate Optimization (CRO): Marketing services utilize A/B testing to optimize marketing campaigns and improve conversion rates. By testing different variations of marketing elements, such as headlines, call-to-action buttons, or landing pages, businesses can determine the most effective approach. Conversion rate optimization ensures that businesses maximize the value of their leads and increase overall conversion rates.</p>\r\n</li>\r\n<li>\r\n<p>Continuous Improvement and Strategy Refinement: Lead generation and marketing services facilitate a culture of continuous improvement. By analyzing data, monitoring trends, and staying updated with market dynamics, businesses can refine their marketing strategies over time. Continuous improvement ensures that businesses adapt to changing customer needs and preferences, leading to enhanced customer satisfaction and increased revenue.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Lead generation and marketing services are essential components of a successful business growth strategy. By identifying and attracting potential customers, effectively promoting products or services, and continuously optimizing marketing efforts, businesses can achieve sustainable growth and increased profitability. These services enable businesses to connect with their target audience, engage prospects, and convert them into loyal customers. Embracing lead generation and marketing services empowers businesses to navigate the competitive marketplace, establish a strong brand presence, and thrive in the ever-evolving digital landscape. With a strategic focus on lead generation and marketing, businesses can unlock their full growth potential and embark on a transformative journey toward long-term success.</p>', 'Lead Generation and Marketing', 'High Ticket Products Promotion and Marketing involves strategic efforts to promote and market valuable offerings to affluent audiences.', '2021-10-12 11:56:22', '2023-07-10 04:00:56'),
(15, 2, 1, NULL, 'Exemplo de serviço', 'service-example', '<h3>T&iacute;tulo do t&iacute;tulo</h3>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod </strong>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n<p><img class=\"img-fluid thumparallax-down\" src=\"/public/images/media/163388533314de21b7e74d5379a173b84119868006%20(1).webp\" alt=\"test\" /></p>\r\n</div>\r\n<div class=\"col-md-6\">\r\n<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n</div>\r\n</div>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <strong>Duis aute irure dolor</strong> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <strong>non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p><img class=\"img-fluid thumparallax-down\" src=\"/public/images/media/1633885135ezgif.com-gif-maker%20(6)%20(1).webp\" alt=\"test\" /></p>', 'Exemplo de serviço', 'Exemplo de serviço', '2021-10-14 12:29:38', '2021-10-14 12:29:38'),
(16, 3, 1, NULL, 'مثال الخدمة', 'service-example', '<h3>عنوان العنوان</h3>\r\n<p>Lorem ipsum dolor sit amet، consectetur adipisicing elit، <strong> sed do eiusmod </strong> tempor incidunt ut labore et dolore magna aliqua. كل ما في الأمر هو الحد الأدنى من التمرين ، ممارسة العمل على nostrud. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. باستثناء حالات معينة ، يجب أن يكون الشخص مسؤولاً عن ممارسة الجنس. &nbsp; &nbsp;</p>\r\n<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n<p><img class=\"img-fluid thumparallax-down\" src=\"/public/images/media/163388533314de21b7e74d5379a173b84119868006%20(1).webp\" alt=\"test\" /></p>\r\n</div>\r\n<div class=\"col-md-6\">\r\n<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n</div>\r\n</div>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <strong>Duis aute irure dolor</strong> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <strong>non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum. &nbsp; &nbsp;</p>\r\n<p><img class=\"img-fluid thumparallax-down\" src=\"/public/images/media/1633885135ezgif.com-gif-maker%20(6)%20(1).webp\" alt=\"test\" /></p>', 'مثال الخدمة', 'مثال الخدمة', '2021-10-14 12:31:12', '2021-10-14 12:31:12'),
(17, 1, 1, NULL, 'Design', 'design', '<h2>The Art of Impact: Harnessing the Power of Design Services for Business Success</h2>\r\n<h2>Introduction:</h2>\r\n<p>In a visually-driven world, design services have become integral to businesses aiming to make a lasting impression, communicate effectively, and enhance brand experiences. Design services encompass a wide range of creative disciplines, including graphic design, web design, product design, and user experience design. From captivating visuals to user-friendly interfaces, design services play a pivotal role in shaping the perception of businesses and driving customer engagement. In this article, we will explore the significance of design services and delve into how they can empower businesses, fostering growth, differentiation, and customer satisfaction.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Creating a Memorable Brand Identity:</h2>\r\n<ol>\r\n<li>\r\n<p>Logo and Visual Identity Design: Design services assist businesses in creating distinctive logos and visual identities that represent their brand essence. A well-designed logo serves as the visual representation of a brand and helps businesses establish recognition and recall. Consistent visual elements, color schemes, and typography across branding materials reinforce brand identity and enhance brand perception.</p>\r\n</li>\r\n<li>\r\n<p>Brand Collateral and Marketing Materials: Design services help businesses create impactful marketing collateral, including brochures, flyers, business cards, and signage. Effective design enhances brand messaging, captures attention, and communicates the value proposition of businesses. Professionally designed marketing materials instill confidence in customers and differentiate businesses from competitors.</p>\r\n</li>\r\n<li>\r\n<p>Packaging and Product Design: Design services contribute to the creation of visually appealing and functional packaging and product design. Packaging design not only protects and presents products but also influences consumer perception and purchasing decisions. Thoughtful product design, incorporating aesthetics and usability, enhances the overall customer experience and fosters brand loyalty.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Enhancing User Experience and Interaction:</h2>\r\n<ol>\r\n<li>\r\n<p>Web Design and User Interface (UI): Design services play a crucial role in creating user-friendly and visually appealing websites and digital interfaces. Intuitive navigation, clear information architecture, and aesthetically pleasing layouts enhance the user experience. Well-designed websites and user interfaces ensure easy access to information, encourage customer engagement, and drive conversions.</p>\r\n</li>\r\n<li>\r\n<p>User Experience (UX) Design: Design services focus on user-centered design principles, ensuring that businesses deliver exceptional user experiences. UX design optimizes the interaction between users and products or services. Through research, usability testing, and wireframing, businesses can create intuitive, seamless, and enjoyable experiences that meet customer needs and expectations.</p>\r\n</li>\r\n<li>\r\n<p>Mobile App Design: Design services contribute to the creation of visually captivating and user-friendly mobile applications. Mobile app design focuses on responsive layouts, optimized for various screen sizes and devices. Engaging app interfaces, intuitive navigation, and visually pleasing design elements enhance user engagement, driving customer satisfaction and loyalty.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Differentiation and Competitive Advantage:</h2>\r\n<ol>\r\n<li>\r\n<p>Visual Brand Differentiation: Design services enable businesses to differentiate themselves visually from competitors. By leveraging creative design elements, businesses can create a unique and recognizable brand identity. A distinctive design aesthetic helps businesses stand out in crowded markets, attract attention, and build a memorable brand presence.</p>\r\n</li>\r\n<li>\r\n<p>Design Thinking and Innovation: Design services foster a culture of design thinking, promoting innovation and problem-solving. Designers collaborate with businesses to identify pain points, understand user needs, and develop creative solutions. Design-led thinking drives product and service innovation, enhancing competitiveness and customer satisfaction.</p>\r\n</li>\r\n<li>\r\n<p>Consistent Branding Across Channels: Design services ensure consistent branding across various channels, both online and offline. From website design to social media graphics and print materials, consistent visual elements and messaging create a cohesive brand experience. Consistency strengthens brand recognition, reinforces brand values, and builds customer trust.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Design services are integral to businesses seeking to create a lasting impact, establish a unique brand identity, and drive customer engagement. From creating memorable logos to designing user-friendly interfaces and compelling marketing materials, design services contribute to the success and growth of businesses. Effective design enhances brand perception, differentiates businesses from competitors, and fosters customer loyalty. By embracing design services, businesses can elevate their visual presence, deliver exceptional user experiences, and cultivate meaningful connections with their target audience. The art of design services empowers businesses to capture attention, communicate effectively, and thrive in the competitive marketplace.</p>', 'Design', 'Unlocking Creativity, Inspiring Engagement: Transform Your Vision with Cutting-Edge Design Services', '2023-07-07 02:08:00', '2023-07-10 03:58:11'),
(18, 1, 1, NULL, 'Branding', 'branding', '<h2>Building Stronger Connections: Unleashing the Power of Branding Services for Businesses</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s highly competitive business landscape, branding services have become essential for businesses aiming to create a distinct identity, build customer loyalty, and differentiate themselves from competitors. Branding services encompass a range of strategic initiatives that help businesses define their brand essence, develop a compelling brand image, and effectively communicate their value proposition to target audiences. In this article, we will explore the significance of branding services and delve into how they can empower businesses, driving growth, recognition, and long-term success.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Establishing a Memorable Brand Identity:</h2>\r\n<ol>\r\n<li>\r\n<p>Brand Strategy and Positioning: Branding services assist businesses in developing a comprehensive brand strategy that aligns with their vision, mission, and values. Through market research and competitor analysis, businesses can identify their unique selling points and target audience. Brand positioning ensures that businesses occupy a distinct and favorable space in the minds of consumers, setting them apart from competitors.</p>\r\n</li>\r\n<li>\r\n<p>Logo and Visual Identity: A visually appealing and recognizable logo is a cornerstone of brand identity. Branding services assist businesses in creating compelling logos and visual elements that embody their brand values, personality, and offerings. Consistent visual identity across marketing collateral, website, packaging, and other touchpoints enhances brand recognition and fosters customer trust.</p>\r\n</li>\r\n<li>\r\n<p>Brand Messaging and Storytelling: Effective branding services help businesses craft compelling brand messaging and narratives that resonate with their target audience. By telling a cohesive brand story that connects emotionally with consumers, businesses can evoke a sense of loyalty and engagement. Authentic and relatable brand messaging strengthens brand perception and builds lasting relationships with customers.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Enhancing Customer Perception and Trust:</h2>\r\n<ol>\r\n<li>\r\n<p>Brand Reputation Management: Branding services aid businesses in managing and enhancing their brand reputation. By actively monitoring and addressing customer feedback, businesses can shape the perception of their brand in the marketplace. Proactive reputation management builds trust, instills confidence, and positions businesses as reliable and customer-centric entities.</p>\r\n</li>\r\n<li>\r\n<p>Consistent Branding: Branding services ensure consistency in brand representation across various touchpoints. From marketing campaigns to customer interactions, businesses can maintain a unified brand voice, design elements, and messaging. Consistent branding establishes a sense of professionalism, reliability, and authenticity, enhancing customer trust and loyalty.</p>\r\n</li>\r\n<li>\r\n<p>Emotional Branding and Customer Connection: Branding services help businesses create emotional connections with customers. By understanding customer needs, desires, and pain points, businesses can develop emotional branding strategies that resonate with their target audience. Emotional branding fosters customer loyalty, drives repeat business, and inspires advocacy.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Maximizing Marketing and Competitive Advantage:</h2>\r\n<ol>\r\n<li>\r\n<p>Differentiation and Market Positioning: Branding services enable businesses to differentiate themselves from competitors. By identifying and communicating their unique value propositions, businesses can carve out a distinct space in the market. Effective branding highlights what sets a business apart, leading to increased customer preference and loyalty.</p>\r\n</li>\r\n<li>\r\n<p>Integrated Marketing Communication: Branding services ensure a cohesive and integrated marketing communication strategy. From digital marketing to traditional advertising and public relations, businesses can create a consistent brand experience across various channels. Integrated marketing communication strengthens brand visibility, amplifies brand messaging, and increases customer recall.</p>\r\n</li>\r\n<li>\r\n<p>Brand Extension and Growth: Strong branding provides a foundation for business growth and expansion. Branding services assist businesses in leveraging their brand equity to extend into new markets, launch new products, or diversify their offerings. Well-established brands enjoy customer loyalty and trust, facilitating a smoother entry into new ventures and opportunities.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Branding services play a crucial role in establishing a strong brand identity, building customer loyalty, and driving business success. From developing a comprehensive brand strategy to crafting compelling brand messaging and visual identity, branding services empower businesses to differentiate themselves and create lasting connections with customers. By enhancing customer perception, fostering trust, and maximizing marketing efforts, businesses can establish themselves as industry leaders and achieve long-term growth. Embracing branding services unlocks immense potential for businesses, enabling them to build powerful brands that resonate with their target audience and drive sustained success in the competitive marketplace.</p>', 'Branding', 'Crafting Memorable Identities: Elevate Your Brand with Strategic Branding Solutions', '2023-07-07 02:08:58', '2023-07-10 03:56:58'),
(19, 1, 1, NULL, 'Ecommerce', 'ecommerce', '<h2>Transforming Business Success: Harnessing the Power of E-commerce Services</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s fast-paced digital era, e-commerce services have emerged as a vital component for businesses aiming to thrive in the online marketplace. E-commerce services encompass a range of solutions that enable businesses to establish and optimize their online presence, streamline operations, and engage with customers effectively. From online storefronts to secure payment gateways and logistics support, e-commerce services provide businesses with the tools and infrastructure to succeed in the digital landscape. In this article, we will explore the significance of e-commerce services and delve into how they can empower businesses, driving growth, profitability, and customer satisfaction.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Establishing a Strong Online Presence:</h2>\r\n<ol>\r\n<li>\r\n<p>Robust Online Storefronts: E-commerce services offer businesses the ability to create and customize online storefronts that showcase their products or services. These storefronts act as digital showrooms, providing a platform for businesses to display their offerings, attract customers, and facilitate seamless transactions. A well-designed and user-friendly online store enhances brand visibility and expands the customer base.</p>\r\n</li>\r\n<li>\r\n<p>Mobile Commerce (M-commerce): With the proliferation of smartphones and tablets, mobile commerce has become increasingly important for businesses. E-commerce services enable businesses to optimize their online storefronts for mobile devices, providing a seamless and user-friendly mobile shopping experience. Mobile commerce capabilities enhance accessibility, attract on-the-go customers, and drive sales growth.</p>\r\n</li>\r\n<li>\r\n<p>Omni-channel Presence: E-commerce services empower businesses to establish an omni-channel presence, integrating online and offline channels for a cohesive customer experience. By synchronizing inventory, pricing, and customer data across various channels, businesses can deliver consistent messaging and provide customers with a seamless shopping journey. This multi-channel approach fosters customer loyalty and maximizes sales opportunities.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Streamlining Operations and Logistics:</h2>\r\n<ol>\r\n<li>\r\n<p>Secure Payment Gateways: E-commerce services provide businesses with secure payment gateways, enabling smooth and secure online transactions. These gateways support various payment methods, ensuring that businesses can cater to diverse customer preferences. Secure payment processing builds customer trust and eliminates barriers to purchase, driving higher conversion rates and reducing cart abandonment.</p>\r\n</li>\r\n<li>\r\n<p>Inventory Management: Efficient inventory management is crucial for e-commerce success. E-commerce services offer businesses robust inventory management systems that track stock levels, automate replenishment processes, and provide real-time inventory visibility. This helps businesses maintain optimal inventory levels, reduce stockouts, and enhance order fulfillment, leading to improved customer satisfaction.</p>\r\n</li>\r\n<li>\r\n<p>Order Fulfillment and Logistics Support: E-commerce services often include order fulfillment and logistics support. From order processing and tracking to shipping and delivery management, businesses can leverage e-commerce services to streamline their fulfillment operations. These services ensure timely and accurate order delivery, enhancing customer satisfaction and driving repeat business.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Driving Marketing and Customer Engagement:</h2>\r\n<ol>\r\n<li>\r\n<p>Digital Marketing Integration: E-commerce services integrate with digital marketing channels, enabling businesses to execute targeted marketing campaigns. From search engine optimization (SEO) to social media advertising and email marketing, businesses can leverage e-commerce services to reach their target audience effectively. Integrated marketing strategies maximize brand exposure, attract new customers, and nurture existing customer relationships.</p>\r\n</li>\r\n<li>\r\n<p>Personalization and Customer Relationship Management (CRM): E-commerce services enable businesses to deliver personalized customer experiences and build lasting relationships. Through data-driven insights, businesses can segment customers, provide personalized recommendations, and tailor messaging based on individual preferences. CRM capabilities integrated into e-commerce services facilitate effective customer engagement, leading to higher customer satisfaction and loyalty.</p>\r\n</li>\r\n<li>\r\n<p>Analytics and Reporting: E-commerce services provide businesses with robust analytics and reporting tools to track and measure key performance metrics. From website traffic to conversion rates and customer behavior, businesses can gather insights and make data-driven decisions. Analytics-driven optimization allows businesses to refine their strategies, improve customer experiences, and maximize sales potential.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>E-commerce services have transformed the way businesses operate and engage with customers in the digital landscape. From establishing online storefronts to streamlining operations, optimizing logistics, and driving marketing efforts, e-commerce services provide a comprehensive framework for businesses to succeed online. By leveraging these services, businesses can enhance their online presence, streamline operations, and provide personalized customer experiences. Embracing e-commerce services unlocks immense potential for businesses, enabling them to drive growth, increase profitability, and foster customer satisfaction in the ever-evolving digital marketplace.</p>', 'Ecommerce', 'Thriving in the Digital Marketplace: Power Up Your Business with Dynamic Ecommerce Solutions', '2023-07-07 02:09:39', '2023-07-10 03:52:59'),
(20, 1, 1, NULL, 'Business Growth', 'business-growth', '<h2>Accelerating Success: Unleashing the Potential of Business Growth</h2>\r\n<h2>Introduction:</h2>\r\n<p>In the dynamic and competitive landscape of the business world, growth is the key to long-term success. Business growth encompasses a range of strategies and initiatives aimed at expanding operations, increasing revenue, and achieving sustainable success. Whether it\'s through expanding market share, entering new markets, or diversifying product offerings, business growth is a fundamental objective for companies across industries. In this article, we will explore the significance of business growth and delve into how it can be a catalyst for success, driving innovation, profitability, and market leadership.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Expanding Market Share and Customer Base:</h2>\r\n<ol>\r\n<li>\r\n<p>Increasing Sales and Revenue: Business growth is often synonymous with increased sales and revenue generation. By focusing on expanding market share and capturing a larger customer base, businesses can drive sales growth. Effective marketing strategies, targeted advertising, and customer acquisition initiatives can all contribute to expanding the customer base and driving revenue growth.</p>\r\n</li>\r\n<li>\r\n<p>Penetrating New Markets: Business growth involves exploring new markets and expanding geographic reach. By entering untapped markets or targeting new customer segments, businesses can diversify their customer base and reduce reliance on a single market. Strategic market expansion allows businesses to tap into new opportunities, gain a competitive edge, and foster long-term growth.</p>\r\n</li>\r\n<li>\r\n<p>Strategic Partnerships and Collaborations: Growth-oriented businesses actively seek partnerships and collaborations with other industry players. By forging strategic alliances, businesses can leverage shared resources, expertise, and networks to expand their reach and market influence. Collaborations can unlock new business opportunities, access new markets, and drive growth through synergistic partnerships.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Driving Innovation and Adaptability:</h2>\r\n<ol>\r\n<li>\r\n<p>Continuous Improvement: Business growth is fueled by a culture of continuous improvement and innovation. By embracing new technologies, processes, and ideas, businesses can stay ahead of the curve and adapt to evolving customer demands and market trends. Encouraging a culture of innovation drives creativity, enhances product offerings, and fosters a competitive advantage.</p>\r\n</li>\r\n<li>\r\n<p>Research and Development (R&amp;D): Investing in research and development activities is crucial for sustainable business growth. R&amp;D initiatives enable businesses to develop new products, improve existing offerings, and stay ahead of competitors. By allocating resources to R&amp;D, businesses can enhance their value proposition, meet changing customer needs, and seize new market opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Agility and Adaptability: Growth-oriented businesses prioritize agility and adaptability. In a rapidly changing business landscape, the ability to pivot quickly, embrace change, and respond to market dynamics is essential. By fostering a culture of flexibility and adaptability, businesses can capitalize on emerging trends, navigate challenges, and position themselves as industry leaders.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Maximizing Operational Efficiency:</h2>\r\n<ol>\r\n<li>\r\n<p>Streamlining Processes and Operations: Business growth necessitates optimizing internal operations and processes. By identifying inefficiencies, streamlining workflows, and automating repetitive tasks, businesses can enhance productivity and reduce costs. Operational efficiency frees up resources, allowing businesses to focus on growth initiatives and capitalize on market opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Scalability and Capacity Planning: As businesses grow, they need to ensure scalability and capacity planning to handle increased demands. Investing in infrastructure, technology, and human resources enables businesses to handle higher volumes, maintain service quality, and meet customer expectations. Scalability allows businesses to accommodate growth without compromising operational efficiency or customer satisfaction.</p>\r\n</li>\r\n<li>\r\n<p>Data-Driven Decision-Making: Leveraging data and analytics is crucial for driving business growth. By utilizing advanced analytics tools, businesses can gather insights, monitor key performance indicators, and make informed decisions. Data-driven decision-making empowers businesses to identify growth opportunities, optimize strategies, and refine their value proposition based on customer insights.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Business growth is a fundamental objective for businesses seeking sustainable success and market leadership. By expanding market share, entering new markets, driving innovation, and maximizing operational efficiency, businesses can unlock their full potential and accelerate growth. Embracing a culture of continuous improvement, agility, and data-driven decision-making enables businesses to adapt to evolving market dynamics and seize new opportunities. Business growth is not merely about increasing revenue but also about fostering innovation, customer satisfaction, and long-term profitability. With a strategic focus on growth initiatives, businesses can navigate the ever-changing business landscape and position themselves for long-term success.</p>', 'Business Growth', 'Fueling Your Journey to Success: Unleash the Potential of Your Business with Strategic Growth Solutions', '2023-07-07 02:10:14', '2023-07-10 03:51:06'),
(21, 1, 1, NULL, 'App Development', 'app-development', '<h2>Revolutionizing Business Growth: The Power of App Development</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s mobile-centric world, businesses are harnessing the power of app development to stay ahead of the competition and engage with their customers in a more personalized and convenient manner. Mobile applications have become an indispensable tool for businesses across industries, offering a range of benefits, from increased customer reach to enhanced brand loyalty. In this article, we will explore the significance of app development and delve into how it can empower businesses, driving growth, efficiency, and success in the modern digital landscape.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Expanding Customer Reach and Engagement:</h2>\r\n<ol>\r\n<li>\r\n<p>Access to a Wider Audience: App development enables businesses to tap into a vast pool of potential customers. By offering a mobile app, businesses can reach users who prefer to consume content, shop, and interact with brands on their smartphones or tablets. The app marketplace provides businesses with the opportunity to extend their reach globally and attract a diverse audience.</p>\r\n</li>\r\n<li>\r\n<p>Enhanced Customer Engagement: Mobile applications allow businesses to interact with their customers in real-time and deliver personalized experiences. Through push notifications, in-app messaging, and personalized content, businesses can engage with users, provide relevant information, and nurture customer relationships. Increased engagement leads to higher customer satisfaction, brand loyalty, and repeat business.</p>\r\n</li>\r\n<li>\r\n<p>Mobile Commerce (m-commerce): App development facilitates mobile commerce, enabling businesses to offer seamless and secure transactions within their applications. With in-app purchasing capabilities, businesses can simplify the purchasing process, provide a user-friendly checkout experience, and increase conversion rates. The convenience of m-commerce drives customer loyalty and revenue growth.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Streamlining Business Operations:</h2>\r\n<ol>\r\n<li>\r\n<p>Process Automation and Efficiency: App development empowers businesses to automate various operational processes, improving efficiency and reducing manual workloads. From inventory management to order fulfillment and customer support, custom-built apps can streamline internal operations, optimize workflows, and minimize errors. Automation allows businesses to focus on strategic activities and scale their operations effectively.</p>\r\n</li>\r\n<li>\r\n<p>Data Collection and Analysis: Mobile applications provide businesses with a wealth of data and insights about their customers\' behavior, preferences, and demographics. By leveraging analytics tools integrated into the app, businesses can collect and analyze data, gain valuable customer insights, and make data-driven decisions. This data-driven approach drives marketing strategies, enhances customer experiences, and increases overall business performance.</p>\r\n</li>\r\n<li>\r\n<p>Employee Productivity and Collaboration: App development can enhance employee productivity and collaboration by providing employees with mobile access to key business tools and resources. Custom apps can facilitate seamless communication, task management, and document sharing, regardless of employees\' physical location. Improved collaboration boosts efficiency, teamwork, and innovation within the organization.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Building Brand Loyalty and Differentiation:</h2>\r\n<ol>\r\n<li>\r\n<p>Personalized Brand Experience: Mobile applications offer businesses the opportunity to deliver highly personalized and customized brand experiences. Through user preferences, behavior tracking, and location-based services, businesses can provide tailored content, recommendations, and offers to individual users. This personalization fosters a sense of loyalty, drives engagement, and strengthens brand advocacy.</p>\r\n</li>\r\n<li>\r\n<p>Enhanced Brand Recognition: App development allows businesses to create a visually appealing and immersive brand experience. Custom-branded apps provide a consistent look and feel that aligns with the business\'s brand identity. The app icon on users\' home screens acts as a constant reminder of the brand, increasing brand recognition and recall.</p>\r\n</li>\r\n<li>\r\n<p>Competitive Differentiation: Having a mobile app sets businesses apart from their competitors and positions them as innovative and customer-focused. A well-designed and user-friendly app can provide a competitive advantage, attract new customers, and retain existing ones. Offering unique features, seamless user experiences, and superior customer service through the app can differentiate businesses in the market.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>App development has become a driving force behind business growth and success in the digital age. By expanding customer reach, enhancing engagement, streamlining operations, and fostering brand loyalty, mobile applications empower businesses to stay competitive and thrive in the ever-evolving digital landscape. The power of app development lies in its ability to deliver personalized experiences, improve efficiency, and differentiate businesses from their competitors. Embracing app development opens doors to new opportunities, allowing businesses to drive growth, build customer loyalty, and achieve sustainable success in the mobile-first world.</p>', 'App Development', 'Bringing Your Vision to Life: Ignite Success with Customized App Development Services', '2023-07-07 03:03:23', '2023-07-10 03:49:28'),
(22, 1, 1, NULL, 'Website Development', 'website-development', '<h2>Unlocking Business Potential: The Power of Website Development in the Digital Landscape</h2>\r\n<h2>Introduction:</h2>\r\n<p>In the digital age, a robust online presence is essential for businesses to thrive and succeed. Website development plays a pivotal role in establishing a strong digital footprint and creating an engaging platform to connect with customers. From brand promotion to customer acquisition, website development offers numerous benefits for businesses across industries. In this article, we will explore the significance of website development and delve into how it can empower businesses, driving growth, credibility, and success in the modern digital landscape.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Establishing a Powerful Online Presence:</h2>\r\n<ol>\r\n<li>\r\n<p>Enhanced Brand Visibility: A professionally developed website serves as the digital face of a business, enabling it to reach a wider audience and enhance brand visibility. By crafting a visually appealing and user-friendly website, businesses can capture the attention of potential customers, showcase their unique value proposition, and stand out from the competition.</p>\r\n</li>\r\n<li>\r\n<p>Credibility and Trust: A well-designed website instills confidence and credibility in potential customers. It serves as a platform to share information about the business, its expertise, and its achievements. A professionally developed website with a seamless user experience creates a positive impression, leading to trust, brand loyalty, and increased customer conversions.</p>\r\n</li>\r\n<li>\r\n<p>Global Reach: Website development eliminates geographical barriers, enabling businesses to extend their reach beyond local markets. With an online presence, businesses can tap into a global audience, reach potential customers across borders, and expand their customer base exponentially. A website acts as a 24/7 storefront, attracting customers regardless of time zones or physical location.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Effective Marketing and Lead Generation:</h2>\r\n<ol>\r\n<li>\r\n<p>Search Engine Optimization (SEO): Website development incorporates SEO best practices, ensuring that the website is search engine-friendly and ranks well in search engine results. By optimizing website structure, content, and keywords, businesses can increase organic traffic, attract highly targeted visitors, and drive qualified leads. SEO-friendly websites provide a strong foundation for effective online marketing strategies.</p>\r\n</li>\r\n<li>\r\n<p>Lead Generation and Conversion Optimization: A well-designed website incorporates strategic call-to-actions, lead capture forms, and conversion-focused landing pages. By optimizing these elements, businesses can generate leads, nurture prospects, and drive conversions. Effective website development focuses on creating intuitive user journeys and persuasive design elements that encourage visitors to take desired actions.</p>\r\n</li>\r\n<li>\r\n<p>Integration with Digital Marketing Channels: Website development allows seamless integration with various digital marketing channels. From social media to email marketing and content marketing, businesses can leverage their website as a hub to drive traffic, engage with customers, and capture valuable data. Integration with marketing automation tools further enhances lead nurturing and customer relationship management.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Customer Engagement and User Experience:</h2>\r\n<ol>\r\n<li>\r\n<p>Personalized Customer Experiences: Website development enables businesses to deliver personalized experiences to their target audience. Through user segmentation, dynamic content, and tailored messaging, businesses can create a highly relevant and engaging website experience. Personalization fosters a deeper connection with customers, increases their time spent on the website, and drives higher conversion rates.</p>\r\n</li>\r\n<li>\r\n<p>Responsive Design and Mobile Compatibility: With the widespread use of mobile devices, website development focuses on creating responsive designs that adapt seamlessly to various screen sizes. Mobile-friendly websites ensure a consistent user experience across devices and increase accessibility. Mobile compatibility is crucial for reaching and engaging customers who prefer to browse and make purchases on their smartphones or tablets.</p>\r\n</li>\r\n<li>\r\n<p>User-Friendly Navigation and Accessibility: Effective website development emphasizes user-friendly navigation and intuitive information architecture. Easy-to-use menus, clear content hierarchy, and well-organized layout enable visitors to find information quickly and navigate the website effortlessly. Accessible websites that consider users with disabilities further enhance inclusivity and improve overall user experience.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Website development is a cornerstone of success in the digital era. By establishing a powerful online presence, enhancing brand visibility, and driving customer engagement, businesses can leverage their websites to fuel growth and establish industry authority. Effective website development incorporates SEO strategies, lead generation techniques, and personalized user experiences. It empowers businesses to reach a global audience, generate qualified leads, and nurture customer relationships. Embracing the power of website development unlocks immense potential for businesses, enabling them to thrive in the ever-evolving digital landscape and achieve sustainable success.</p>', 'Website Development', 'Transforming Ideas into Stunning Digital Experiences: Unleash Your Online Potential with Professional Website Development', '2023-07-07 03:03:52', '2023-07-10 03:47:46');
INSERT INTO `pages` (`id`, `language_id`, `user_id`, `photo_id`, `title`, `slug`, `body`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(23, 1, 1, NULL, 'Software Development', 'software-development', '<h2>Empowering Businesses through Software Development: Unleashing the Potential of Custom Solutions</h2>\r\n<h2>Introduction:</h2>\r\n<p>In the digital age, software development has become a vital component for businesses aiming to stay competitive and thrive in an ever-evolving landscape. From streamlining operations to enhancing customer experiences, software solutions offer a plethora of benefits for businesses across industries. In this article, we will explore the significance of software development and delve into how it can empower businesses, driving efficiency, innovation, and growth.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Streamlining Business Operations:</h2>\r\n<ol>\r\n<li>\r\n<p>Process Automation: Software development enables businesses to automate repetitive and time-consuming tasks, freeing up valuable human resources. Custom software solutions can automate processes such as inventory management, data entry, invoicing, and customer relationship management. Automation increases operational efficiency, reduces errors, and allows employees to focus on higher-value tasks.</p>\r\n</li>\r\n<li>\r\n<p>Centralized Data Management: Custom software development facilitates the creation of centralized databases and information systems, ensuring seamless data management. Businesses can efficiently store, retrieve, and analyze data, leading to informed decision-making, improved collaboration, and streamlined workflows. Centralized data also enhances security and compliance with data protection regulations.</p>\r\n</li>\r\n<li>\r\n<p>Integration of Systems: Software development empowers businesses to integrate various systems and applications, eliminating data silos and enhancing communication and collaboration. Integration between platforms such as enterprise resource planning (ERP), customer relationship management (CRM), and project management systems optimizes processes, facilitates real-time information sharing, and improves overall business efficiency.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Enhancing Customer Experiences:</h2>\r\n<ol>\r\n<li>\r\n<p>Customized Solutions: Software development enables businesses to create tailor-made applications and platforms that align with their specific requirements and goals. Custom solutions allow businesses to deliver unique and personalized experiences to their customers. By understanding customer needs and preferences, businesses can develop software that enhances engagement, satisfaction, and loyalty.</p>\r\n</li>\r\n<li>\r\n<p>E-commerce Capabilities: In the era of online shopping, businesses can leverage software development to build robust e-commerce platforms. Custom-built e-commerce solutions provide seamless user experiences, secure payment gateways, personalized recommendations, and inventory management. These capabilities enable businesses to expand their reach, increase sales, and foster long-term customer relationships.</p>\r\n</li>\r\n<li>\r\n<p>Customer Relationship Management (CRM): Software development plays a crucial role in developing CRM systems that streamline customer interactions, sales processes, and support services. CRM solutions enable businesses to effectively manage customer data, track interactions, and provide personalized experiences. This leads to improved customer satisfaction, higher retention rates, and increased customer lifetime value.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Facilitating Innovation and Adaptability:</h2>\r\n<ol>\r\n<li>\r\n<p>Scalability and Flexibility: Custom software solutions provide businesses with the flexibility to adapt to changing market dynamics and scale their operations as needed. Unlike off-the-shelf software, custom-built applications can be easily modified and expanded to accommodate evolving business requirements. This scalability empowers businesses to respond to growth opportunities and emerging industry trends swiftly.</p>\r\n</li>\r\n<li>\r\n<p>Competitive Advantage: Software development offers businesses a competitive edge by enabling them to develop unique features, functionalities, and business models. Custom software solutions tailored to specific needs can differentiate businesses from competitors, attract new customers, and retain existing ones. Innovation-driven by software development can disrupt markets and revolutionize business processes.</p>\r\n</li>\r\n<li>\r\n<p>Real-time Insights and Analytics: Software development allows businesses to gather real-time data and insights about their operations, customers, and market trends. Through advanced analytics, businesses can make data-driven decisions, identify patterns and opportunities, and optimize their strategies. Real-time insights enable businesses to stay ahead of the curve, make proactive adjustments, and seize competitive advantages.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Software development has become an essential ingredient for businesses seeking growth, efficiency, and innovation in the digital era. By streamlining operations, enhancing customer experiences, and fostering innovation, businesses can harness the power of custom software solutions. From process automation to centralized data management and e-commerce capabilities, software development empowers businesses to achieve operational excellence and drive customer satisfaction. Embracing software development allows businesses to adapt to the rapidly evolving business landscape, gain a competitive advantage, and fuel long-term success. With the right software solutions, businesses can unlock their full potential and embark on a transformative journey towards growth and prosperity.</p>', 'Software Development', 'Crafting Innovative Solutions: Empower Your Business with Expert Software Development Services', '2023-07-07 03:04:42', '2023-07-10 03:44:49'),
(24, 1, 1, NULL, 'Online Advertising', 'online-advertising', '<h2>Unleashing the Potential of Online Advertising: Empowering Businesses in the Digital Age</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s digital landscape, online advertising has emerged as a powerful tool for businesses to reach and engage their target audience. With the increasing prevalence of internet usage and the shift towards digital channels, online advertising offers unparalleled opportunities for businesses to expand their reach, drive conversions, and accelerate growth. In this article, we will explore the myriad benefits of online advertising and shed light on how it can be a game-changer for businesses in the modern era.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Targeted Reach and Enhanced Visibility:</h2>\r\n<ol>\r\n<li>\r\n<p>Precise Audience Targeting: Online advertising enables businesses to target their ideal audience with exceptional precision. Through sophisticated targeting options, such as demographic data, interests, behaviors, and geographic location, businesses can ensure their advertisements are shown to individuals who are most likely to be interested in their products or services. This targeted approach maximizes the effectiveness of advertising campaigns and minimizes wasted ad spend.</p>\r\n</li>\r\n<li>\r\n<p>Expanded Reach: Unlike traditional advertising channels, online advertising has a global reach. With the ability to reach potential customers across borders and time zones, businesses can tap into new markets and expand their customer base. Online platforms offer extensive reach, allowing businesses to connect with a vast audience regardless of their geographical location.</p>\r\n</li>\r\n<li>\r\n<p>Increased Brand Visibility: Online advertising provides businesses with the opportunity to enhance their brand visibility and recognition. By consistently displaying ads across various online channels, businesses can reinforce their brand messaging and establish a strong presence in the minds of their target audience. Increased brand visibility translates into improved brand recall and customer trust.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Cost-Effectiveness and Measurable ROI:</h2>\r\n<ol>\r\n<li>\r\n<p>Cost Efficiency: Online advertising offers businesses the advantage of cost efficiency compared to traditional advertising methods. With online platforms, businesses can set their budget and adjust it as needed, ensuring that they are getting the most out of their advertising spend. The ability to target specific audiences and track ad performance allows for more effective use of marketing budgets, maximizing return on investment (ROI).</p>\r\n</li>\r\n<li>\r\n<p>Performance Tracking and Analytics: One of the key advantages of online advertising is the ability to track and measure campaign performance accurately. Advanced analytics tools and advertising platforms provide businesses with valuable insights into key metrics, such as impressions, clicks, conversions, and engagement rates. This data-driven approach enables businesses to refine their strategies, optimize campaigns, and achieve higher conversion rates over time.</p>\r\n</li>\r\n<li>\r\n<p>Cost-Per-Action (CPA) and Return on Ad Spend (ROAS): Online advertising offers the advantage of tracking specific actions and conversions, allowing businesses to calculate their cost-per-action (CPA) and return on ad spend (ROAS). This level of granularity in measuring results enables businesses to identify high-performing campaigns and channels, optimize their marketing efforts, and allocate resources more effectively to drive maximum ROI.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Diverse Advertising Formats and Personalization:</h2>\r\n<ol>\r\n<li>\r\n<p>Variety of Advertising Formats: Online advertising provides businesses with a wide range of formats to choose from, catering to various campaign objectives and target audience preferences. Whether it\'s display ads, video ads, social media ads, native ads, or search engine ads, businesses can leverage the format that aligns best with their goals and audience engagement.</p>\r\n</li>\r\n<li>\r\n<p>Personalized Advertising: Online advertising empowers businesses to deliver personalized messages to their target audience. By leveraging data and insights about their customers, businesses can create highly targeted and relevant ad campaigns. Personalization increases the likelihood of capturing audience attention, fostering engagement, and driving conversions.</p>\r\n</li>\r\n<li>\r\n<p>Retargeting and Remarketing: Online advertising allows businesses to implement retargeting and remarketing strategies. By tracking user behavior and interactions, businesses can show ads specifically to users who have previously visited their website or expressed interest in their products. Retargeting keeps the brand top of mind and increases the chances of conversion by reaching users who have already shown initial interest.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>Online advertising has revolutionized the way businesses connect with their target audience, enabling precise targeting, increased visibility, and measurable ROI. By leveraging the vast reach and personalization capabilities of online platforms, businesses can optimize their advertising efforts, enhance brand recognition, and drive conversions. The cost-effectiveness, real-time tracking, and variety of advertising formats make online advertising an indispensable tool for businesses seeking to thrive in the digital age. Embracing online advertising empowers businesses to seize new opportunities, outshine competitors, and achieve remarkable growth and success in the dynamic digital landscape.</p>', 'Online Advertising', 'Online Advertising is the art of using the internet as a medium to deliver marketing messages to an identified and intended audience.', '2023-07-07 03:05:11', '2023-07-10 03:42:26'),
(25, 1, 1, NULL, 'High Ticket Product Promotion and Marketing', 'high-ticket-product-promotion-and-marketing', '<h2>Unlocking Success: The Power of High Ticket Product Promotion and Marketing for Businesses</h2>\r\n<h2>Introduction:</h2>\r\n<p>In the world of business, high ticket products offer an exciting opportunity for companies to maximize their revenue and profitability. These premium-priced offerings often require a focused and strategic approach to promotion and marketing. In this article, we will delve into the realm of high ticket product promotion and marketing, exploring the numerous benefits it offers businesses and how it can be a game-changer in today\'s competitive marketplace.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Amplifying Profitability and Revenue Generation:</h2>\r\n<ol>\r\n<li>\r\n<p>Higher Profit Margins: High ticket products typically carry higher profit margins compared to lower-priced items. By focusing on promoting and selling high ticket products, businesses can significantly boost their profitability. Selling fewer high-priced items can yield greater returns than selling numerous low-priced items, reducing overhead costs and increasing revenue.</p>\r\n</li>\r\n<li>\r\n<p>Targeting High-Value Customers: High ticket products attract a specific segment of customers who have the means and willingness to invest in premium offerings. These customers often have higher purchasing power, leading to increased customer lifetime value and potentially fostering long-term relationships. Targeting high-value customers can result in repeat purchases, referrals, and increased brand loyalty.</p>\r\n</li>\r\n<li>\r\n<p>Revenue Diversification: Incorporating high ticket products into a business\'s offerings diversifies revenue streams, reducing reliance on a single product or service. This diversification strengthens a business\'s financial stability and resilience, mitigating risks associated with fluctuations in demand or market trends.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Building Perceived Value and Brand Image:</h2>\r\n<ol>\r\n<li>\r\n<p>Exclusivity and Prestige: High ticket products carry an inherent aura of exclusivity and prestige. The premium pricing creates an image of luxury and quality, positioning the brand as a leader in its industry. Customers perceive high ticket products as valuable investments, enhancing their sense of pride and status associated with the purchase.</p>\r\n</li>\r\n<li>\r\n<p>Brand Positioning and Differentiation: Promoting high ticket products allows businesses to position themselves as premium providers, distinguishing them from competitors. Through effective marketing, businesses can communicate unique selling propositions, such as superior craftsmanship, advanced features, or exceptional customer service. This differentiation strengthens brand equity and fosters customer loyalty.</p>\r\n</li>\r\n<li>\r\n<p>Establishing Expertise and Authority: High ticket products often require in-depth knowledge and expertise to showcase their value effectively. By educating customers and demonstrating expertise through marketing efforts, businesses can establish themselves as thought leaders and industry authorities. This positioning instills trust and confidence in potential customers, leading to increased sales and market influence.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Tailored Marketing and Relationship Building:</h2>\r\n<ol>\r\n<li>\r\n<p>Personalized Marketing Strategies: High ticket products necessitate personalized marketing approaches to effectively engage potential customers. By understanding the needs, preferences, and pain points of high-value customers, businesses can develop targeted marketing campaigns. Customized messaging, exclusive offers, and personalized experiences create a sense of individual attention, increasing the likelihood of conversion.</p>\r\n</li>\r\n<li>\r\n<p>Relationship Building and Upselling Opportunities: High ticket product promotion provides an opportunity to build strong customer relationships. By offering exceptional customer service, post-purchase support, and personalized follow-ups, businesses can foster trust and loyalty. Satisfied high ticket customers are more likely to become brand advocates, providing valuable referrals and upselling opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Strategic Partnerships and Influencer Collaborations: Promoting high ticket products opens doors for strategic partnerships and collaborations with influencers and industry leaders. By aligning with well-known individuals or organizations, businesses can leverage their reach, credibility, and audience to enhance brand exposure and generate interest in their offerings.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>High ticket product promotion and marketing present a unique opportunity for businesses to elevate their profitability, strengthen their brand image, and build lasting customer relationships. By focusing on premium-priced offerings, businesses can tap into a segment of high-value customers, diversify their revenue streams, and establish themselves as leaders in their industry. Implementing tailored marketing strategies, personalizing customer experiences, and forming strategic partnerships are all essential components of a successful high ticket product marketing campaign. Embracing the power of high ticket product promotion can propel businesses to new heights of success in the competitive marketplace.</p>', 'High Ticket Product Promotion and Marketing', 'High Ticket Products Promotion and Marketing involves strategic efforts to promote and market valuable offerings to affluent audiences.', '2023-07-07 03:06:23', '2023-07-10 03:40:52'),
(27, 1, 1, 274, 'SEO Solutions', 'seo-solutions', '<h2>Unleashing the Power of SEO Solutions: Transforming Businesses in the Digital Era</h2>\r\n<h2>Introduction:</h2>\r\n<p>In today\'s digital age, where businesses are constantly vying for online visibility and customer attention, Search Engine Optimization (SEO) has emerged as a crucial tool for success. SEO solutions encompass a set of strategies and techniques that enhance a website\'s visibility and ranking in search engine results. By leveraging SEO, businesses can improve their online presence, drive organic traffic, and ultimately boost their revenue and growth. In this article, we will delve into the various aspects of SEO solutions and explore how they can be incredibly beneficial for businesses in the modern landscape.</p>\r\n<p>&nbsp;</p>\r\n<h2>I. Enhancing Online Visibility and Brand Awareness:</h2>\r\n<ol>\r\n<li>\r\n<p>Boosting Search Engine Rankings: SEO solutions involve optimizing a website\'s structure, content, and user experience to meet search engine algorithms\' criteria. By aligning with search engine guidelines, businesses can improve their website\'s ranking in organic search results, making them more visible to potential customers.</p>\r\n</li>\r\n<li>\r\n<p>Increasing Organic Traffic: Higher search engine rankings translate to increased organic traffic. As businesses appear on the first page of search results for relevant keywords, they attract more visitors who are actively seeking their products or services. This targeted traffic can lead to higher conversion rates and revenue growth.</p>\r\n</li>\r\n<li>\r\n<p>Establishing Brand Authority: SEO strategies involve creating high-quality, informative, and engaging content. By consistently publishing valuable content optimized for relevant keywords, businesses can position themselves as authoritative sources in their industry. This establishes trust and credibility among their target audience, leading to long-term brand loyalty.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>II. Improving User Experience and Engagement:</h2>\r\n<ol>\r\n<li>\r\n<p>Website Optimization: SEO solutions emphasize optimizing websites to enhance user experience. This includes improving site speed, mobile responsiveness, and navigation, making it easier for users to find relevant information quickly. A well-optimized website contributes to lower bounce rates, increased time-on-site, and improved conversion rates.</p>\r\n</li>\r\n<li>\r\n<p>Content Creation and Optimization: SEO involves creating high-quality content that aligns with users\' search intent. By optimizing content with relevant keywords, businesses can attract their target audience, provide value, and encourage user engagement. Engaging content leads to higher click-through rates, longer page visits, and increased social shares, expanding brand reach.</p>\r\n</li>\r\n<li>\r\n<p>Local SEO: For businesses targeting local customers, local SEO solutions are vital. Optimizing for location-specific keywords, managing online reviews, and ensuring consistent business information across directories can significantly improve local search visibility. This enables businesses to reach and attract customers in their vicinity, driving foot traffic and increasing conversions.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>III. Cost-Effectiveness and Long-Term Benefits:</h2>\r\n<ol>\r\n<li>\r\n<p>Targeted Marketing Approach: SEO solutions enable businesses to target specific keywords and demographics, ensuring that their marketing efforts reach the right audience. This focused approach minimizes wasteful spending on broad advertising campaigns, making SEO a cost-effective marketing strategy.</p>\r\n</li>\r\n<li>\r\n<p>Long-Term Results: Unlike paid advertising, where visibility ends once the budget is exhausted, SEO provides long-term benefits. Once a website achieves high rankings, it can continue to attract organic traffic and generate leads without additional expenses. This sustainable approach maximizes ROI and contributes to long-term business success.</p>\r\n</li>\r\n<li>\r\n<p>Tracking and Analytics: SEO solutions offer valuable insights into user behavior, website performance, and keyword effectiveness. Businesses can leverage analytics tools to monitor their SEO efforts, make data-driven decisions, and refine their strategies over time. This iterative approach ensures continuous improvement and adaptability to changing market dynamics.</p>\r\n</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion:</h2>\r\n<p>In the ever-evolving digital landscape, SEO solutions have become indispensable for businesses seeking growth and success. By enhancing online visibility, improving user experience, and optimizing their websites and content, businesses can attract targeted organic traffic, establish brand authority, and drive conversions. Furthermore, the cost-effectiveness and long-term benefits of SEO make it a highly attractive marketing strategy. In this fiercely competitive era, embracing SEO solutions is no longer an option but a necessity for businesses to thrive in the digital realm.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 'SEO Solutions', 'There’s some SEO in everything you do online. Search engine optimization, or SEO, is a strategy for improving your site’s rankings in engine results.', '2023-07-09 22:44:01', '2023-07-10 00:03:11'),
(28, 1, 1, NULL, 'Newsletter', 'newsletter', '<h1><strong>Join My Newsletter and Stay Informed! <a href=\"https://nikeshhs-newsletter.beehiiv.com/subscribe\" target=\"_blank\" rel=\"noreferrer noopener\">Click Here</a></strong></h1>\r\n<p>Subscribe to my newsletter and gain exclusive access to the latest updates, insights, and trends in the exciting world of technology, science, business, entrepreneurship, and personal growth. By joining our community, you\'ll receive valuable content delivered right to your inbox.</p>\r\n<h2><strong>Why Subscribe?</strong></h2>\r\n<ol>\r\n<li>\r\n<p><strong>Tech Breakthroughs:</strong> Stay up to date with the latest technological advancements, innovations, and discoveries that are shaping our world. From artificial intelligence and blockchain to robotics and cybersecurity, we\'ll explore the fascinating realm of technology together.</p>\r\n</li>\r\n<li>\r\n<p><strong>Science Discoveries:</strong> Explore the wonders of the scientific universe. Delve into mind-bending research, space exploration, medical breakthroughs, and the latest developments in fields like biology, physics, chemistry, and more. Prepare to be amazed by the frontiers of human knowledge.</p>\r\n</li>\r\n<li>\r\n<p><strong>Business Insights:</strong> Gain valuable insights into the world of business, entrepreneurship, and startups. Learn from successful entrepreneurs, discover strategies for growth and success, and stay informed about emerging trends and opportunities in the business landscape.</p>\r\n</li>\r\n<li>\r\n<p><strong>Entrepreneurial Journey:</strong> Embark on an exciting journey as we dive into the world of entrepreneurship. Gain inspiration from the stories of visionary entrepreneurs, learn practical tips and tricks, and discover resources to help you navigate the challenges and triumphs of starting and growing your own venture.</p>\r\n</li>\r\n<li>\r\n<p><strong>Personal Growth:</strong> Unlock your potential and foster personal growth. Explore topics such as productivity, mindset, goal-setting, leadership, and self-improvement. Discover practical techniques to enhance your skills, overcome obstacles, and achieve your aspirations.</p>\r\n</li>\r\n</ol>\r\n<h2><strong>How It Works:</strong></h2>\r\n<p>Subscribing is quick and easy. Simply enter your name and email address in the form below, and you\'ll be added to our newsletter community. We respect your privacy and promise to handle your information securely.</p>\r\n<p><strong>Join our vibrant community today and become part of the conversation! Don\'t miss out on the valuable insights, inspiration, and resources we have in store for you. Subscribe now and let\'s embark on a journey of knowledge and growth together!</strong></p>\r\n<p>&nbsp;</p>\r\n<h1><strong><a href=\"https://nikeshhs-newsletter.beehiiv.com/subscribe\" target=\"_blank\" rel=\"noreferrer noopener\">Click Here To Subscribe To My Newsletter</a></strong></h1>\r\n<p>&nbsp;</p>', 'Newsletter', 'Subscribe to my newsletter', '2023-07-11 23:26:42', '2023-07-11 23:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(100) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('contact@lucian.host', '$2y$10$V03XjapY6Ln0dM71jO.82e64kFK8NTAlU/oKrVl5fPEFbQFwdi2JK', '2021-06-07 22:52:04');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(10) UNSIGNED NOT NULL,
  `file` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `file`, `created_at`, `updated_at`) VALUES
(1, '1615631836niva2logo.png', '2021-03-13 15:37:16', '2021-03-13 15:37:16'),
(2, '1615631850niva2logo.png', '2021-03-13 15:37:30', '2021-03-13 15:37:30'),
(3, '1615635078home-slider-layer1-test2-2.jpg', '2021-03-13 16:31:18', '2021-03-13 16:31:18'),
(4, '1615635502start-project-bg-img-1.jpg', '2021-03-13 16:38:22', '2021-03-13 16:38:22'),
(5, '1615636710about-s1.jpg', '2021-03-13 16:58:30', '2021-03-13 16:58:30'),
(6, '1615636710about-s2.jpg', '2021-03-13 16:58:30', '2021-03-13 16:58:30'),
(8, '1615637853web-design.jpg', '2021-03-13 17:17:33', '2021-03-13 17:17:33'),
(9, '1615638059seo-solutions.jpg', '2021-03-13 17:20:59', '2021-03-13 17:20:59'),
(10, '1615638134advertise-soluti.jpg', '2021-03-13 17:22:14', '2021-03-13 17:22:14'),
(11, '1615638165app-sol-service.jpg', '2021-03-13 17:22:45', '2021-03-13 17:22:45'),
(19, '1615644757niva-project.jpg', '2021-03-13 19:12:37', '2021-03-13 19:12:37'),
(20, '1615644758venor-project.jpg', '2021-03-13 19:12:38', '2021-03-13 19:12:38'),
(38, '1615660211blog-psot1.jpg', '2021-03-13 23:30:11', '2021-03-13 23:30:11'),
(39, '1615660375post-rece2.jpg', '2021-03-13 23:32:55', '2021-03-13 23:32:55'),
(40, '1615660380post-rece3.jpg', '2021-03-13 23:33:00', '2021-03-13 23:33:00'),
(24, '1615648164favicon.png', '2021-03-13 20:09:24', '2021-03-13 20:09:24'),
(25, '1615649260about-3-page.jpg', '2021-03-13 20:27:40', '2021-03-13 20:27:40'),
(26, '1615650588member-pic (4).jpg', '2021-03-13 20:49:48', '2021-03-13 20:49:48'),
(27, '1615650635member-pic (2).jpg', '2021-03-13 20:50:35', '2021-03-13 20:50:35'),
(28, '1615650688member-pic (1).jpg', '2021-03-13 20:51:28', '2021-03-13 20:51:28'),
(29, '1615650720member-pic (6).jpg', '2021-03-13 20:52:00', '2021-03-13 20:52:00'),
(30, '1615650802member-pic (5).jpg', '2021-03-13 20:53:22', '2021-03-13 20:53:22'),
(31, '1615650866member-pic (3).jpg', '2021-03-13 20:54:26', '2021-03-13 20:54:26'),
(32, '1615652105client-p2.png', '2021-03-13 21:15:05', '2021-03-13 21:15:05'),
(33, '1615652124client-p3.png', '2021-03-13 21:15:24', '2021-03-13 21:15:24'),
(34, '1615652140client-p4.png', '2021-03-13 21:15:40', '2021-03-13 21:15:40'),
(35, '1615652155client-p5.png', '2021-03-13 21:15:55', '2021-03-13 21:15:55'),
(36, '1615652167client-p6.png', '2021-03-13 21:16:07', '2021-03-13 21:16:07'),
(37, '1615652179client-p8.png', '2021-03-13 21:16:19', '2021-03-13 21:16:19'),
(41, '1615661120project5.jpg', '2021-03-13 23:45:20', '2021-03-13 23:45:20'),
(42, '1615661127project1.jpg', '2021-03-13 23:45:27', '2021-03-13 23:45:27'),
(43, '1615661133project2.jpg', '2021-03-13 23:45:33', '2021-03-13 23:45:33'),
(44, '1615661137project6.jpg', '2021-03-13 23:45:37', '2021-03-13 23:45:37'),
(45, '1615661143project3.jpg', '2021-03-13 23:45:43', '2021-03-13 23:45:43'),
(46, '1615661148project5.jpg', '2021-03-13 23:45:48', '2021-03-13 23:45:48'),
(47, '1615661162project4.jpg', '2021-03-13 23:46:02', '2021-03-13 23:46:02'),
(48, '1615661279st-portfolio1 (1).jpg', '2021-03-13 23:47:59', '2021-03-13 23:47:59'),
(49, '1615661279st-portfolio4 (1).jpg', '2021-03-13 23:47:59', '2021-03-13 23:47:59'),
(50, '1615661280st-portfolio2.jpg', '2021-03-13 23:48:00', '2021-03-13 23:48:00'),
(51, '1615661280st-portfolio3.jpg', '2021-03-13 23:48:00', '2021-03-13 23:48:00'),
(53, '1615713675member-pic (4).jpg', '2021-03-14 13:21:15', '2021-03-14 13:21:15'),
(54, '1615714364sidebar-img1.jpg', '2021-03-14 13:32:44', '2021-03-14 13:32:44'),
(55, '1615715240adsense500x500.png', '2021-03-14 13:47:20', '2021-03-14 13:47:20'),
(58, '1615722163adplace-blog.jpg', '2021-03-14 15:42:43', '2021-03-14 15:42:43'),
(95, '16163164191616251805sandwich-packaging.jpg', '2021-03-21 12:46:59', '2021-03-21 12:46:59'),
(85, '1616237145member22-agency-600x600.jpg', '2021-03-20 14:45:45', '2021-03-20 14:45:45'),
(87, '1616251743identity-branding3.jpg', '2021-03-20 18:49:03', '2021-03-20 18:49:03'),
(88, '1616251805sandwich-packaging.jpg', '2021-03-20 18:50:05', '2021-03-20 18:50:05'),
(89, '1616312321project1.jpg', '2021-03-21 11:38:41', '2021-03-21 11:38:41'),
(90, '1616312331project2.jpg', '2021-03-21 11:38:51', '2021-03-21 11:38:51'),
(91, '1616312337project3.jpg', '2021-03-21 11:38:57', '2021-03-21 11:38:57'),
(92, '1616312346project4.jpg', '2021-03-21 11:39:06', '2021-03-21 11:39:06'),
(93, '1616312361project5.jpg', '2021-03-21 11:39:21', '2021-03-21 11:39:21'),
(94, '1616312371project6.jpg', '2021-03-21 11:39:31', '2021-03-21 11:39:31'),
(114, '1618065739arabic.svg', '2021-04-10 18:42:19', '2021-04-10 18:42:19'),
(115, '1618066273portugal.svg', '2021-04-10 18:51:13', '2021-04-10 18:51:13'),
(116, '1618066305united-kingdom.svg', '2021-04-10 18:51:45', '2021-04-10 18:51:45'),
(119, '16187422851615635502start-project-bg-img-1.jpg', '2021-04-18 14:38:05', '2021-04-18 14:38:05'),
(120, '16187424371615635502start-project-bg-img-1.jpg', '2021-04-18 14:40:37', '2021-04-18 14:40:37'),
(121, '1621861012logo8.svg', '2021-05-24 16:56:52', '2021-05-24 16:56:52'),
(122, '1622048188venor-layer1.png', '2021-05-26 20:56:28', '2021-05-26 20:56:28'),
(123, '1622050488home-version-five-banner-side-img1.png', '2021-05-26 21:34:48', '2021-05-26 21:34:48'),
(124, '1622051367right-image-2.png', '2021-05-26 21:49:27', '2021-05-26 21:49:27'),
(125, '1622051695banner-image.png', '2021-05-26 21:54:55', '2021-05-26 21:54:55'),
(126, '1622051838banner-1.png', '2021-05-26 21:57:18', '2021-05-26 21:57:18'),
(127, '16220521941615636710about-s1.jpg', '2021-05-26 22:03:14', '2021-05-26 22:03:14'),
(128, '16220522691615636710about-s1.jpg', '2021-05-26 22:04:29', '2021-05-26 22:04:29'),
(168, '1622363873galerie1.jpg', '2021-05-30 12:37:53', '2021-05-30 12:37:53'),
(130, '16220532141615636710about-s2.jpg', '2021-05-26 22:20:14', '2021-05-26 22:20:14'),
(131, '16220581871615636710about-s2.jpg', '2021-05-26 23:43:07', '2021-05-26 23:43:07'),
(132, '16221355461615638134advertise-soluti.jpg', '2021-05-27 21:12:26', '2021-05-27 21:12:26'),
(133, '16221359571615638134advertise-soluti.jpg', '2021-05-27 21:19:17', '2021-05-27 21:19:17'),
(134, '16221360901615638134advertise-soluti.jpg', '2021-05-27 21:21:30', '2021-05-27 21:21:30'),
(135, '16221363221615638134advertise-soluti.jpg', '2021-05-27 21:25:22', '2021-05-27 21:25:22'),
(136, '1622283727project1.jpg', '2021-05-29 14:22:07', '2021-05-29 14:22:07'),
(137, '1622292570project2.jpg', '2021-05-29 16:49:30', '2021-05-29 16:49:30'),
(138, '1622292686project3.jpg', '2021-05-29 16:51:26', '2021-05-29 16:51:26'),
(139, '1622292846project3.jpg', '2021-05-29 16:54:06', '2021-05-29 16:54:06'),
(140, '1622292944project4.jpg', '2021-05-29 16:55:44', '2021-05-29 16:55:44'),
(144, '1622298365post1.jpg', '2021-05-29 18:26:05', '2021-05-29 18:26:05'),
(145, '1622298385post2.jpg', '2021-05-29 18:26:25', '2021-05-29 18:26:25'),
(146, '1622298433post3.jpg', '2021-05-29 18:27:13', '2021-05-29 18:27:13'),
(147, '1622301395slider2.png', '2021-05-29 19:16:35', '2021-05-29 19:16:35'),
(148, '16223146321615649260about-3-page.jpg', '2021-05-29 22:57:12', '2021-05-29 22:57:12'),
(155, '1622317714portret3.jpg', '2021-05-29 23:48:34', '2021-05-29 23:48:34'),
(171, '1622363875galerie4.jpg', '2021-05-30 12:37:55', '2021-05-30 12:37:55'),
(158, '1622318113portret5.jpg', '2021-05-29 23:55:13', '2021-05-29 23:55:13'),
(159, '1622318247portret6.jpg', '2021-05-29 23:57:27', '2021-05-29 23:57:27'),
(160, '1622318449portret1.jpg', '2021-05-30 00:00:49', '2021-05-30 00:00:49'),
(161, '1622318512portret6.jpg', '2021-05-30 00:01:52', '2021-05-30 00:01:52'),
(170, '1622363874galerie3.jpg', '2021-05-30 12:37:54', '2021-05-30 12:37:54'),
(169, '1622363873galerie2.jpg', '2021-05-30 12:37:53', '2021-05-30 12:37:53'),
(164, '1622318868portret4.jpg', '2021-05-30 00:07:48', '2021-05-30 00:07:48'),
(165, '1622322430project5.jpg', '2021-05-30 01:07:10', '2021-05-30 01:07:10'),
(166, '1622322484project6.jpg', '2021-05-30 01:08:04', '2021-05-30 01:08:04'),
(167, '1622322572project1.jpg', '2021-05-30 01:09:32', '2021-05-30 01:09:32'),
(210, '1633178646testimonial3_1.webp', '2021-10-02 16:44:06', '2021-10-02 16:44:06'),
(208, '1633028114projectquin1jpg.webp', '2021-09-30 22:55:14', '2021-09-30 22:55:14'),
(209, '1633028145project3quin.webp', '2021-09-30 22:55:45', '2021-09-30 22:55:45'),
(207, '1633028074project2quin.webp', '2021-09-30 22:54:34', '2021-09-30 22:54:34'),
(206, '1633027856favicon.webp', '2021-09-30 22:50:56', '2021-09-30 22:50:56'),
(205, '1633027761logo.svg', '2021-09-30 22:49:21', '2021-09-30 22:49:21'),
(204, '1633027720quinheader.webp', '2021-09-30 22:48:40', '2021-09-30 22:48:40'),
(203, '163302763816327698011632602616Consult_header-10.webp', '2021-09-30 22:47:18', '2021-09-30 22:47:18'),
(190, '1632820172logo-white.svg', '2021-09-28 13:09:32', '2021-09-28 13:09:32'),
(191, '1632839112about-us-pic3.webp', '2021-09-28 18:25:12', '2021-09-28 18:25:12'),
(192, '1632839112about-us-pic2.webp', '2021-09-28 18:25:12', '2021-09-28 18:25:12'),
(193, '1632839113about-us-pic1.webp', '2021-09-28 18:25:13', '2021-09-28 18:25:13'),
(194, '1632921799quin-service-webdesign.webp', '2021-09-29 17:23:19', '2021-09-29 17:23:19'),
(195, '1632921978quin-service-webdesign1.webp', '2021-09-29 17:26:18', '2021-09-29 17:26:18'),
(196, '1632922118quin-service2.webp', '2021-09-29 17:28:38', '2021-09-29 17:28:38'),
(197, '1632922319quin-service1.webp', '2021-09-29 17:31:59', '2021-09-29 17:31:59'),
(198, '1632922413quin-service4.webp', '2021-09-29 17:33:33', '2021-09-29 17:33:33'),
(211, '1633178646testimonial2_1.webp', '2021-10-02 16:44:06', '2021-10-02 16:44:06'),
(212, '1633178648testimonial1_1.webp', '2021-10-02 16:44:08', '2021-10-02 16:44:08'),
(213, '1633250087blog-post1.webp', '2021-10-03 12:34:47', '2021-10-03 12:34:47'),
(214, '1633250107blog-post2.webp', '2021-10-03 12:35:07', '2021-10-03 12:35:07'),
(215, '1633250113blog-post3.webp', '2021-10-03 12:35:13', '2021-10-03 12:35:13'),
(216, '1633278274PSDFebFrameNot163 (1).webp', '2021-10-03 20:24:34', '2021-10-03 20:24:34'),
(217, '1633880725portf_header-16.webp', '2021-10-10 19:45:25', '2021-10-10 19:45:25'),
(218, '1633882008project1-test.webp', '2021-10-10 20:06:48', '2021-10-10 20:06:48'),
(219, '163388441262dd36111481101.6002db2f51eef.webp', '2021-10-10 20:46:52', '2021-10-10 20:46:52'),
(220, '1633884505project1quin.webp', '2021-10-10 20:48:25', '2021-10-10 20:48:25'),
(221, '1633884610fe1ac9110475937.5fee059e53bdf.webp', '2021-10-10 20:50:10', '2021-10-10 20:50:10'),
(222, '1633884677Project2quib.webp', '2021-10-10 20:51:17', '2021-10-10 20:51:17'),
(223, '1633885135ezgif.com-gif-maker (6) (1).webp', '2021-10-10 20:58:55', '2021-10-10 20:58:55'),
(224, '1633885230ezgif.com-gif-maker (7).webp', '2021-10-10 21:00:30', '2021-10-10 21:00:30'),
(225, '163388533314de21b7e74d5379a173b84119868006 (1).webp', '2021-10-10 21:02:13', '2021-10-10 21:02:13'),
(226, '1633885407ezgif.com-gif-maker (8).webp', '2021-10-10 21:03:27', '2021-10-10 21:03:27'),
(231, '1641902421logo3.png', '2022-01-11 17:00:21', '2022-01-11 17:00:21'),
(232, '1641910281logo3 (1).svg', '2022-01-11 19:11:21', '2022-01-11 19:11:21'),
(233, '1641916582image-2-icode.svg', '2022-01-11 20:56:22', '2022-01-11 20:56:22'),
(234, '1642597997web-design.png', '2022-01-19 18:13:17', '2022-01-19 18:13:17'),
(235, '1642598023infographic.png', '2022-01-19 18:13:43', '2022-01-19 18:13:43'),
(236, '1642598034coding.png', '2022-01-19 18:13:54', '2022-01-19 18:13:54'),
(237, '1642598042wireframe.png', '2022-01-19 18:14:02', '2022-01-19 18:14:02'),
(238, '1642859398image1-slider.svg', '2022-01-22 18:49:58', '2022-01-22 18:49:58'),
(239, '164286014020943546 [Converted].svg', '2022-01-22 19:02:20', '2022-01-22 19:02:20'),
(240, '1642887630logo-loader.svg', '2022-01-23 02:40:30', '2022-01-23 02:40:30'),
(241, '1643016131favicon.png', '2022-01-24 14:22:11', '2022-01-24 14:22:11'),
(247, '16883176001642597997web-design.png', '2023-07-02 17:06:40', '2023-07-02 17:06:40'),
(248, '16883177351642597997web-design.png', '2023-07-02 17:08:55', '2023-07-02 17:08:55'),
(249, '16883177731642597997web-design.png', '2023-07-02 17:09:33', '2023-07-02 17:09:33'),
(250, '16883179201642597997web-design.png', '2023-07-02 17:12:00', '2023-07-02 17:12:00'),
(251, '16883179471642597997web-design.png', '2023-07-02 17:12:27', '2023-07-02 17:12:27'),
(252, '16883179701642597997web-design.png', '2023-07-02 17:12:50', '2023-07-02 17:12:50'),
(253, '16883179961642597997web-design.png', '2023-07-02 17:13:16', '2023-07-02 17:13:16'),
(254, '16883180371642597997web-design.png', '2023-07-02 17:13:57', '2023-07-02 17:13:57'),
(264, '1688689529us-flag.png', '2023-07-07 00:25:29', '2023-07-07 00:25:29'),
(263, '1688689495usa-flag.jpeg', '2023-07-07 00:24:55', '2023-07-07 00:24:55'),
(262, '1688689484uk-flag.png', '2023-07-07 00:24:44', '2023-07-07 00:24:44'),
(258, '16883221401615631836niva2logo.png', '2023-07-02 18:22:20', '2023-07-02 18:22:20'),
(259, '1688397074nikeshh-logo.png', '2023-07-03 15:11:14', '2023-07-03 15:11:14'),
(261, '1688397328nikeshh-favicon.png', '2023-07-03 15:15:28', '2023-07-03 15:15:28'),
(265, '16886896481642598042wireframe.png', '2023-07-07 00:27:28', '2023-07-07 00:27:28'),
(266, '16886896801642598023infographic.png', '2023-07-07 00:28:00', '2023-07-07 00:28:00'),
(267, '16886896961642598034coding.png', '2023-07-07 00:28:16', '2023-07-07 00:28:16'),
(268, '16886897181642598042wireframe.png', '2023-07-07 00:28:38', '2023-07-07 00:28:38'),
(269, '16886897341642598023infographic.png', '2023-07-07 00:28:54', '2023-07-07 00:28:54'),
(270, '1688940036website-development.jpg', '2023-07-09 22:00:36', '2023-07-09 22:00:36'),
(271, '1688940967computer.jpg', '2023-07-09 22:16:07', '2023-07-09 22:16:07'),
(272, '1688942050mobile.jpg', '2023-07-09 22:34:10', '2023-07-09 22:34:10'),
(273, '1688942266website-development.jpg', '2023-07-09 22:37:46', '2023-07-09 22:37:46'),
(274, '1688947012seo.jpg', '2023-07-09 23:56:52', '2023-07-09 23:56:52'),
(275, '1688957707web-design.jpg', '2023-07-10 02:55:07', '2023-07-10 02:55:07'),
(276, '1689036920Test.jpeg', '2023-07-11 00:55:20', '2023-07-11 00:55:20'),
(277, '1689036994Test.jpeg', '2023-07-11 00:56:34', '2023-07-11 00:56:34'),
(278, '1689037091Test.jpeg', '2023-07-11 00:58:11', '2023-07-11 00:58:11'),
(279, '1689037140Test.jpeg', '2023-07-11 00:59:00', '2023-07-11 00:59:00'),
(280, '1689037212Test.jpeg', '2023-07-11 01:00:12', '2023-07-11 01:00:12'),
(281, '1689439678Test.jpeg', '2023-07-15 16:47:58', '2023-07-15 16:47:58'),
(282, '1689439830Test.jpeg', '2023-07-15 16:50:30', '2023-07-15 16:50:30'),
(283, '16895442751642859398image1-slider.svg', '2023-07-16 21:51:15', '2023-07-16 21:51:15'),
(284, '1690022718testimonial-1.jpg', '2023-07-22 10:45:18', '2023-07-22 10:45:18'),
(285, '1690022718testimonial-2.jpg', '2023-07-22 10:45:18', '2023-07-22 10:45:18'),
(286, '1690022718testimonial-3.jpg', '2023-07-22 10:45:18', '2023-07-22 10:45:18'),
(289, '1690023035testimonial-3.jpg', '2023-07-22 10:50:35', '2023-07-22 10:50:35'),
(290, '1695092556my avatar.JPG', '2023-09-19 03:02:36', '2023-09-19 03:02:36'),
(291, '1695092608my avatar.JPG', '2023-09-19 03:03:28', '2023-09-19 03:03:28'),
(292, '16950927311622050488home-version-five-banner-side-img1.png', '2023-09-19 03:05:31', '2023-09-19 03:05:31'),
(293, '16950928551622051367right-image-2.png', '2023-09-19 03:07:35', '2023-09-19 03:07:35'),
(294, '16950928881622318247portret6.jpg', '2023-09-19 03:08:08', '2023-09-19 03:08:08'),
(295, '1695093062164286014020943546 [Converted].svg', '2023-09-19 03:11:02', '2023-09-19 03:11:02');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_settings`
--

CREATE TABLE `portfolio_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` int(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `banner_img` varchar(255) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `banner_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolio_settings`
--

INSERT INTO `portfolio_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `title`, `description`, `banner_img`, `banner_title`, `banner_desc`, `created_at`, `updated_at`) VALUES
(1, 1, 'My Portfolio', 'Nikeshh Projects', 'portfolio', 'Home', '', '', 'https://icode.lucian.host/public/images/media/1633880725portf_header-16.webp', 'Our latest<span>projects</span>', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', NULL, '2023-07-09 22:45:34');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `meta_title` text NOT NULL,
  `meta_description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `language_id`, `user_id`, `category_id`, `photo_id`, `title`, `slug`, `body`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(18, 3, 1, 11, 215, 'أفضل 7 طرق إبداعية لتعزيز وسائل الإعلام الخاصة بك', '7-creative-ways-to-boost-your-social-media', '<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<blockquote>\r\n<p>يستخدم مصطلح تصميم الويب عادةً لوصف عملية التصميم المتعلقة بتصميم الواجهة الأمامية (جانب العميل) لموقع الويب بما في ذلك كتابة العلامات. يتداخل تصميم الويب جزئيًا مع هندسة الويب.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'أفضل 7 طرق إبداعية لتعزيز وسائل الإعلام الخاصة بك', 'كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"تحترق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على رد فعل \"الشعور الغريزي\" العاطفي الذي يمكن أن تثيره الشركة من عملائها', '2021-03-14 00:38:58', '2021-04-11 21:48:14'),
(17, 3, 1, 12, 213, 'أحدث تصميمات المصمم الفني جون دو', 'tech-designer-john-does-latest-creation', '<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<blockquote>\r\n<p>يستخدم مصطلح تصميم الويب عادةً لوصف عملية التصميم المتعلقة بتصميم الواجهة الأمامية (جانب العميل) لموقع الويب بما في ذلك كتابة العلامات. يتداخل تصميم الويب جزئيًا مع هندسة الويب.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'أحدث تصميمات المصمم الفني جون دو', 'كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"تحترق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على رد فعل \"الشعور الغريزي\" العاطفي الذي يمكن أن تثيره الشركة من عملائها', '2021-03-14 00:37:06', '2021-04-11 21:48:17'),
(16, 3, 1, 13, 214, 'قم ببناء موقع الويب الخاص بك باستخدام Venor CMS', 'top-6-articles-you-must-read-today-niva', '<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية. تشمل المجالات المختلفة لتصميم الويب تصميم رسومات الويب ؛ تصميم واجهة؛ التأليف ، بما في ذلك التعليمات البرمجية الموحدة.</p>\r\n<blockquote>\r\n<p>يستخدم مصطلح تصميم الويب عادةً لوصف عملية التصميم المتعلقة بتصميم الواجهة الأمامية (جانب العميل) لموقع الويب بما في ذلك كتابة العلامات. يتداخل تصميم الويب جزئيًا مع هندسة الويب.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"حرق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على الشعور العاطفي \"الغريزي\". رد الفعل الذي يمكن أن تثيره الشركة من عملائها</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'قم ببناء موقع الويب الخاص بك باستخدام Venor CMS', 'كانت العلامة التجارية موجودة منذ 350 م وهي مشتقة من كلمة \"براندر\" ، والتي تعني \"تحترق\" في اللغة الإسكندنافية القديمة. بحلول القرن السادس عشر ، أصبحت تعني العلامة التي أحرقها أصحاب المزارع على الماشية للدلالة على الملكية. ومع ذلك ، فإن العلامة التجارية اليوم هي أكثر من مجرد مظهر أو شعار. لقد حان للدلالة على رد فعل \"الشعور الغريزي\" العاطفي الذي يمكن أن تثيره الشركة من عملائها', '2021-03-14 00:35:52', '2021-04-11 21:48:21'),
(15, 2, 1, 9, 215, 'As 7 principais maneiras criativas de impulsionar sua mídia', '7-creative-ways-to-boost-your-social-media', '<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<blockquote>\r\n<p>O termo web design &eacute; normalmente usado para descrever o processo de design relacionado ao design do front-end (lado do cliente) de um site, incluindo a marca&ccedil;&atilde;o de escrita. O design da web se sobrep&otilde;e parcialmente &agrave; engenharia da web.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'As 7 principais maneiras criativas de impulsionar sua mídia', 'Branding existe desde 350 d.C. e é derivado da palavra “Brandr”, que significa “queimar” na língua nórdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje é mais do que apenas um visual ou um logotipo. Passou a significar a reação emocional de \"intuição\" que uma empresa pode provocar em seus clientes', '2021-03-14 00:38:58', '2022-01-24 15:03:43'),
(14, 2, 1, 8, 213, 'O mais recente design do designer de tecnologia John Doe', 'tech-designer-john-does-latest-creation', '<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<blockquote>\r\n<p>O termo web design &eacute; normalmente usado para descrever o processo de design relacionado ao design do front-end (lado do cliente) de um site, incluindo a marca&ccedil;&atilde;o de escrita. O design da web se sobrep&otilde;e parcialmente &agrave; engenharia da web.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'O mais recente design do designer de tecnologia John Doe', 'Branding existe desde 350 d.C. e é derivado da palavra “Brandr”, que significa “queimar” na língua nórdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje é mais do que apenas um visual ou um logotipo. Passou a significar a reação emocional de \"intuição\" que uma empresa pode provocar em seus clientes', '2021-03-14 00:37:06', '2022-01-24 15:03:47'),
(20, 1, 1, 1, 271, '10 Effective Strategies for Boosting Organic Traffic to Your Website', '10-effective-strategies-for-boosting-organic-traffic to-your-website', '<h2>Introduction</h2>\r\n<p>In today\'s digital landscape, driving organic traffic to your website is crucial for achieving online success. Organic traffic refers to the visitors who discover your website through search engine results pages (SERPs) without any paid advertising. While paid marketing can yield immediate results, implementing effective SEO strategies is a sustainable approach to increase your website\'s visibility and attract a relevant audience. In this article, we will explore ten powerful strategies that can help you boost organic traffic to your website. By implementing these techniques, you can enhance your website\'s search engine rankings and drive valuable organic traffic. Let\'s dive in!</p>\r\n<p>&nbsp;</p>\r\n<h2>Perform Comprehensive Keyword Research</h2>\r\n<p>Keyword research forms the foundation of any successful SEO strategy. Start by identifying relevant keywords and phrases that are commonly searched by your target audience. Utilize keyword research tools such as Google Keyword Planner, SEMrush, or Ahrefs to identify high-volume and low-competition keywords. Incorporate these keywords naturally into your website\'s content, including page titles, headings, meta descriptions, and throughout the body of your articles.</p>\r\n<p>&nbsp;</p>\r\n<h2>Optimize On-Page Elements</h2>\r\n<p>On-page optimization involves optimizing various elements within your website to make it more search engine-friendly. Ensure that each page has a unique and descriptive meta title and meta description. Optimize your URLs, headers (H1, H2, etc.), and image alt tags with relevant keywords. Additionally, focus on creating high-quality, valuable content that addresses the needs and interests of your target audience.</p>\r\n<p>&nbsp;</p>\r\n<h2>Create Engaging and Shareable Content</h2>\r\n<p>High-quality content is vital for attracting organic traffic and encouraging social sharing. Develop content that is informative, well-researched, and engaging. Use a mix of text, visuals, and multimedia to make your content visually appealing and interactive. Incorporate relevant keywords naturally into your content while ensuring it flows naturally for readers. Regularly publish fresh and original content to keep visitors coming back for more.</p>\r\n<h1>&nbsp;</h1>\r\n<h2>Optimize for Mobile Devices</h2>\r\n<p>In today\'s mobile-driven world, optimizing your website for mobile devices is no longer optional&mdash;it\'s essential. With the majority of internet users accessing websites through their smartphones or tablets, having a responsive design is crucial. Optimize your website\'s layout, images, and text to ensure they adapt well to different screen sizes. Mobile optimization improves user experience and can positively impact your website\'s search engine rankings.</p>\r\n<p>&nbsp;</p>\r\n<h2>Improve Website Speed</h2>\r\n<p>Website speed plays a critical role in both user experience and SEO. Slow-loading websites can frustrate visitors and lead to high bounce rates. Optimize your website\'s loading speed by compressing images, minimizing code, and utilizing caching techniques. Regularly monitor your website\'s performance using tools like Google PageSpeed Insights or GTmetrix, and make necessary optimizations to enhance speed.</p>\r\n<p>&nbsp;</p>\r\n<h2>Build High-Quality Backlinks</h2>\r\n<p>Backlinks, or incoming links from other websites, are a significant ranking factor in search engine algorithms. Focus on acquiring high-quality backlinks from reputable and relevant websites in your industry. Develop a link-building strategy that includes guest blogging, influencer outreach, and participating in industry forums. Ensure that the backlinks are from authoritative websites to enhance your website\'s credibility and organic visibility.</p>\r\n<p>&nbsp;</p>\r\n<h2>Leverage Social Media Channels</h2>\r\n<p>Social media platforms provide excellent opportunities for driving organic traffic to your website. Create a strong social media presence and regularly share your content across relevant platforms. Engage with your audience, respond to comments, and encourage social sharing. Social media signals can indirectly impact your website\'s search engine rankings, making it crucial to maintain an active and engaging presence.</p>\r\n<p>&nbsp;</p>\r\n<h2>Optimize for Local SEO</h2>\r\n<p>If you have a local business or target a specific geographic area, optimizing for local SEO can significantly boost your organic traffic. Claim and optimize your Google My Business listing with accurate information, including your address, phone number, and business hours. Encourage customers to leave reviews, and ensure your website includes location-specific keywords and content.</p>\r\n<p>&nbsp;</p>\r\n<h2>Implement Schema Markup</h2>\r\n<p>Schema markup is a structured data vocabulary that helps search engines understand your website\'s content better. Implementing schema markup can enhance the visibility of your website in search results by generating rich snippets. Rich snippets provide additional information about your content, such as reviews, ratings, and pricing, which can attract more clicks and organic traffic.</p>\r\n<p>&nbsp;</p>\r\n<h2>Regularly Monitor and Analyze Performance</h2>\r\n<p>To continuously improve your organic traffic, it\'s crucial to monitor and analyze your website\'s performance regularly. Utilize tools like Google Analytics and Google Search Console to track your organic traffic, keyword rankings, click-through rates, and other important metrics. Analyze the data and make informed decisions to optimize your SEO strategies and improve your website\'s visibility in search results.</p>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion</h2>\r\n<p>Driving organic traffic to your website requires implementing a well-rounded SEO strategy. By incorporating these ten effective strategies, you can enhance your website\'s visibility, attract relevant organic traffic, and achieve your online goals. Remember to stay up-to-date with SEO trends, adapt your strategies as search engine algorithms evolve, and consistently provide valuable content to your target audience. With dedication and persistence, your website\'s organic traffic will grow, leading to increased visibility, conversions, and success.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', '10 Effective Strategies for Boosting Organic Traffic to Your Website', 'Discover ten powerful strategies to boost organic traffic to your website. From comprehensive keyword research to mobile optimization and backlink building, learn how to improve your SEO and attract valuable visitors. Increase your website\'s visibility, rankings, and online success with these proven techniques.', '2023-07-09 22:16:07', '2023-07-09 22:35:26'),
(13, 2, 1, 10, 214, 'Incremente seu site com o Venor CMS', 'top-6-articles-you-must-read-today-niva', '<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><img class=\"img-fluid\" src=\"/public/images/media/1615661162project4.jpg\" alt=\"1615661162project4.jpg\" /></p>\r\n<p>O design da Web abrange muitas habilidades e disciplinas diferentes na produ&ccedil;&atilde;o e manuten&ccedil;&atilde;o de websites. As diferentes &aacute;reas de web design incluem web design gr&aacute;fico; design de interface; autoria, incluindo c&oacute;digo padronizado.</p>\r\n<blockquote>\r\n<p>O termo web design &eacute; normalmente usado para descrever o processo de design relacionado ao design do front-end (lado do cliente) de um site, incluindo a marca&ccedil;&atilde;o de escrita. O design da web se sobrep&otilde;e parcialmente &agrave; engenharia da web.</p>\r\n<footer class=\"blockquote-footer\">Michael Smith</footer></blockquote>\r\n<p>Branding existe desde 350 d.C. e &eacute; derivado da palavra Brandr, que significa queimar na l&iacute;ngua n&oacute;rdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje &eacute; mais do que apenas um visual ou um logotipo. Passou a significar a rea&ccedil;&atilde;o de sentimento emocional que uma empresa pode obter de seus clientes</p>\r\n<p><a title=\"adsense\" href=\"https://www.google.com/adsense/start/\" target=\"_blank\" rel=\"noreferrer noopener\"><img class=\"img-fluid img-ad\" src=\"/public/images/media/1615722163adplace-blog.jpg\" alt=\"1615722163adplace-blog.jpg\" /></a></p>', 'Incremente seu site com o Venor CMS', 'Branding existe desde 350 d.C. e é derivado da palavra “Brandr”, que significa “queimar” na língua nórdica antiga. Por volta de 1500, passou a significar a marca que os fazendeiros queimavam no gado para significar propriedade. Ainda assim, a marca hoje é mais do que apenas um visual ou um logotipo. Passou a significar a reação emocional de \"intuição\" que uma empresa pode provocar em seus clientes', '2021-03-14 00:35:52', '2022-01-24 15:03:51'),
(22, 1, 1, 1, 273, 'Unleashing the Power of Digital Success: Elevate Your Business with Website Development, SEO, and Online Advertising', 'elevate-your-business-with-website-development,-seo-and-online-advertising', '<h2><strong>Introduction</strong></h2>\r\n<p>Welcome to the digital revolution! In today\'s fast-paced world, companies prosper or falter depending on their internet presence. That\'s why it\'s vital to comprehend the power of website creation, web design, and SEO in attaining success in the digital sphere. But that\'s not all&mdash;we provide a variety of services to help you expand your company, from high-price product marketing and internet advertising to software development, app development, and more. Let\'s dig in and examine how these services may catapult your company to new heights!</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Website Development and Web Design: Crafting a Digital Identity</strong></h2>\r\n<p>Your website is the visage of your company in the digital realm. It\'s like your virtual storefront, enticing people to discover what you have to offer. Our skilled team of website developers and designers will work directly with you to produce a website that not only appears stunning but also operates correctly. From strategy to design, development to testing, we offer a faultless process. We\'ll make sure your website is mobile-friendly, straightforward to peruse, and aesthetically attractive. With a well-designed website, you\'ll create a lasting impression on your visitors and enhance your possibilities of converting them into devoted clients.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>SEO Solutions: Climbing the Ranks of Search Engines</strong></h2>\r\n<p>You may have the most stunning website, but it won\'t mean anything if people can\'t locate it. That\'s where SEO (Search Engine Optimisation) comes into action. Our SEO solutions are intended to enhance your website\'s exposure on search engines like Google. We\'ll do detailed keyword research, enhance your website\'s content, and generate authoritative backlinks to increase your search engine rankings. By exhibiting higher search results, you\'ll generate more organic traffic and enhance the possibilities of converting visitors into paying clients.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>High Ticket Product Promotion and Marketing: Scaling Your Revenue</strong></h2>\r\n<p>Are you offering premium-price products with big profit potential? We can help you advertise them successfully. Our marketing methods are developed exclusively for big-value products. We\'ll determine your target demographic and write convincing material that highlights the value and advantages of your items. Building trust and reputation is vital when selling high-cost products; therefore, we\'ll deploy social media marketing, email campaigns, and influencer partnerships to reach your prospective purchasers. With our professional mentoring, you\'ll be on your path to increasing your business and attaining more financial success.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Online Advertising: Amplify Your Reach</strong></h2>\r\n<p>Online advertising is a game-changer in today\'s digital environment. Unlike conventional advertising tactics, it enables you to reach a highly focused audience and monitor your campaign\'s effectiveness in real time. We\'ll help you comprehend the world of online advertising and discover the appropriate channels for your company, whether it\'s search advertisements, display ads, or social media ads. With enticing ad content and accurate targeting, we\'ll magnify your reach and maximise your return on investment. By retargeting prospective consumers and instituting data-driven modifications, you\'ll convert more leads into purchases.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Software and App Development: Custom Solutions for Digital Success</strong></h2>\r\n<p>In this digital era, having the correct software and applications may expedite your company processes and increase client experiences. Our software and app development services offer tailor-made solutions that respond to your individual demands. Whether you require a robust CRM system, a user-friendly e-commerce platform, or a mobile app for your company, our team of specialists will design and construct it with accuracy. We\'ll provide a seamless user interface and engaging user experience that corresponds precisely with your brand identity.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Business Growth Strategies and E-commerce Solutions: Thriving in the Digital Era</strong></h2>\r\n<p>As your firm expands, you need effective methods to maintain and enhance your success. Our company development methods can help you traverse the digital world with confidence. We\'ll study market growth options, diversification methods, and strategic alliances to take your organisation ahead. In addition, our e-commerce solutions will enable you to access the worldwide market, enhance sales, and deliver a flawless online purchasing experience for your clients. By exploiting consumer data and evaluating insights, you\'ll consistently enhance your company\'s performance and remain ahead of the competition.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Branding and Rebranding: Shaping Your Identity</strong></h2>\r\n<p>Your brand identity is the essence of your company. It\'s what sets you apart from the competition and generates a lasting impact on your consumers. Our branding and rebranding services concentrate on developing and enhancing your brand image. We\'ll do market research and competitive analysis to position your brand effectively. With an enthralling brand message and captivating storytelling, we\'ll connect with your target audience on a deeper level. Visual components such as logos, colour schemes, and typography will be meticulously created to provide consistent branding across all platforms.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Design Services: Visualising Success</strong></h2>\r\n<p>Good design is more than mere aesthetics; it\'s about delivering your message effectively. Our design services can help you develop aesthetically alluring marketing materials that have a lasting effect. From logo design to brochures, banners, and social media graphics, our qualified graphic designers will ensure that every visual aspect corresponds with your brand\'s overall appearance and message. With our design knowledge, you\'ll engage your audience and enhance their complete experience with your business.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Lead Generation and Marketing: Fueling Your Sales Funnel</strong></h2>\r\n<p>Leads are the essence of every company. Our lead generation and marketing methods can help you fuel your sales funnel and generate company development. We\'ll conduct content marketing, social media marketing, and email campaigns to acquire and cultivate prospects. By utilising marketing automation and CRM technologies, you\'ll simplify your lead management process and develop strong customer connections. With ongoing monitoring and analysis, we\'ll improve your lead generation efforts and increase your possibilities of converting leads into loyal clients.</p>\r\n<p>&nbsp;</p>\r\n<h2><strong>Conclusion</strong></h2>\r\n<p>In today\'s digital environment, the success of your organisation rests on leveraging the force of website construction, SEO, and online advertising. But it doesn\'t end there&mdash;our full variety of services, including high-ticket product promotion, software and app development, e-commerce solutions, branding and rebranding, design services, and lead generation and marketing, are tailored to elevate your company to new heights. So, why wait? Take the plunge into the digital sphere and unleash your business\'s maximum potential with our experience at your side. Together, let\'s design a prosperous future for your company!</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 'Elevate Your Business with Website Development, SEO, and Online Advertising', 'It\'s vital to comprehend the power of website creation, web design, and SEO in attaining success in the digital sphere. But that\'s not all—we provide a variety of services to help you expand your company, from high-price product marketing and internet advertising to software development, app development, and more. Let\'s dig in and examine how these services may catapult your company to new heights!', '2023-07-09 22:37:46', '2023-07-09 22:37:46'),
(21, 1, 1, 1, 272, 'The Importance of Mobile Optimization for SEO: Best Practices and Tools', 'the-importance-of-mobile-optimization-for-seo-best-practices-and-tools', '<h2>Introduction</h2>\r\n<p>In today\'s digital landscape, mobile devices have become the primary means for accessing the internet. With the increasing number of mobile users, optimizing your website for mobile has become crucial for SEO success. Mobile optimization refers to the process of designing and adapting your website to ensure it delivers an optimal user experience on smartphones and tablets. In this article, we will explore the importance of mobile optimization for SEO and provide you with best practices and tools to enhance your website\'s mobile performance. By implementing these strategies, you can improve your website\'s rankings, increase organic traffic, and cater to the needs of your mobile audience. Let\'s get started!</p>\r\n<p>&nbsp;</p>\r\n<h2>The Significance of Mobile Optimization</h2>\r\n<p>Mobile optimization plays a vital role in SEO because search engines, like Google, prioritize mobile-friendly websites in their search results. With the mobile-first indexing approach, Google primarily considers the mobile version of a website for indexing and ranking. By ensuring your website is optimized for mobile, you can improve its visibility and accessibility to mobile users, which can positively impact your search engine rankings.</p>\r\n<p>&nbsp;</p>\r\n<h2>Responsive Web Design</h2>\r\n<p>Responsive web design is an essential component of mobile optimization. It involves creating a website that automatically adjusts its layout, images, and content to fit different screen sizes and resolutions. With responsive design, you provide a seamless user experience across various devices, eliminating the need for separate mobile and desktop versions of your website. This approach simplifies maintenance and improves usability, leading to higher engagement and better SEO performance.</p>\r\n<p>&nbsp;</p>\r\n<h2>Mobile-Friendly Content</h2>\r\n<p>Creating mobile-friendly content is crucial for engaging your mobile audience. Mobile users often have different browsing habits and preferences compared to desktop users. Optimize your content for mobile by using concise and scannable paragraphs, clear headings, and bullet points. Ensure that fonts are legible, buttons and links are easily clickable, and images are appropriately sized for mobile screens. By adapting your content for mobile consumption, you provide a better user experience and encourage longer visit durations.</p>\r\n<p>&nbsp;</p>\r\n<h2>Mobile Page Speed Optimization</h2>\r\n<p>Page speed is a critical factor for both user experience and SEO. Mobile users expect websites to load quickly, and search engines consider page speed as a ranking factor. Optimize your website\'s mobile page speed by compressing images, minifying code, leveraging browser caching, and reducing unnecessary redirects. Regularly monitor your website\'s performance using tools like Google PageSpeed Insights or GTmetrix and make necessary optimizations to ensure fast loading times.</p>\r\n<p>&nbsp;</p>\r\n<h2>Mobile-Specific SEO Techniques</h2>\r\n<p>While many SEO techniques apply to both mobile and desktop, certain mobile-specific strategies can further enhance your website\'s mobile performance. For instance, optimize your local SEO efforts for mobile by including location-specific keywords and creating location-based landing pages. Additionally, leverage mobile app indexing if you have a mobile app associated with your website. By implementing these mobile-specific SEO techniques, you can tap into mobile search traffic and improve your overall SEO results.</p>\r\n<p>&nbsp;</p>\r\n<h2>Tools for Mobile Optimization</h2>\r\n<p>Several tools are available to assist you in optimizing your website for mobile. Google\'s Mobile-Friendly Test helps you identify mobile usability issues and provides recommendations for improvement. Mobile optimization plugins, such as WPtouch for WordPress, can help you create a mobile-friendly version of your website. Website analytics tools like Google Analytics offer mobile-specific reports to track your mobile traffic and user behavior. Explore these tools and leverage their functionalities to enhance your mobile optimization efforts.</p>\r\n<p>&nbsp;</p>\r\n<h2>Conclusion</h2>\r\n<p>Mobile optimization is no longer an option but a necessity for SEO success. By prioritizing mobile-friendly practices, you can improve your website\'s visibility, engage your mobile audience, and boost organic traffic. Implement responsive design, optimize your content for mobile consumption, and ensure fast page loading speeds. Leverage mobile-specific SEO techniques and utilize tools to monitor and enhance your mobile performance. With a mobile-optimized website, you can cater to the preferences of your mobile users, improve search engine rankings, and achieve long-term SEO success.</p>\r\n<p>&nbsp;</p>', 'The Importance of Mobile Optimization for SEO: Best Practices and Tools', 'Discover the importance of mobile optimization for SEO and learn best practices and tools to enhance your website\'s mobile performance. Increase your visibility, engage mobile users, and boost organic traffic with responsive design, mobile-friendly content, and fast page loading speeds.', '2023-07-09 22:34:10', '2023-07-09 22:34:10');

-- --------------------------------------------------------

--
-- Table structure for table `pricings`
--

CREATE TABLE `pricings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `title` text NOT NULL,
  `amount` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `button_text` text NOT NULL,
  `button_link` text NOT NULL,
  `pricing_switch` tinyint(1) NOT NULL DEFAULT 1,
  `popular_text` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pricings`
--

INSERT INTO `pricings` (`id`, `language_id`, `title`, `amount`, `description`, `button_text`, `button_link`, `pricing_switch`, `popular_text`, `created_at`, `updated_at`) VALUES
(1, 1, '<h3><strong>Basic Plan</strong> <span>No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.</span></h3>', '5', '<ul>\r\n<li><strong>10GB</strong> Disk Space</li>\r\n<li><strong>100GB</strong> Monthly Bandwith</li>\r\n<li><strong>20</strong> Email Accounts</li>\r\n<li>Unlimited Subdomains</li>\r\n</ul>', 'Get the offer', 'https://nikeshh.com/contact', 0, NULL, '2021-03-14 12:51:33', '2023-07-02 01:09:15'),
(2, 1, '<h3><strong>Professional Plan</strong> <span>No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.</span></h3>', '10', '<ul>\r\n<li><strong>10GB</strong> Disk Space</li>\r\n<li><strong>100GB</strong> Monthly Bandwith</li>\r\n<li><strong>20</strong> Email Accounts</li>\r\n<li>Unlimited Subdomains</li>\r\n</ul>', 'Get the offer', 'https://nikeshh.com/contact', 1, 'Popular', '2021-03-14 12:53:17', '2023-07-02 01:09:06'),
(3, 1, '<h3><strong>Advanced Plan</strong> <span>No coding skills required to create unique sites. Customize your site in real-time and see the results instantly.</span></h3>', '15', '<ul>\r\n<li><strong>10GB</strong> Disk Space</li>\r\n<li><strong>100GB</strong> Monthly Bandwith</li>\r\n<li><strong>20</strong> Email Accounts</li>\r\n<li>Unlimited Subdomains</li>\r\n</ul>', 'Get the offer', 'https://nikeshh.com/contact', 0, NULL, '2021-03-14 12:53:41', '2023-07-02 01:08:56'),
(7, 2, '<h3><strong>Plano Básico</strong> <span>Nenhuma habilidade de codificação necessária para criar sites exclusivos. Personalize seu site em tempo real e veja os resultados instantaneamente.</span></h3>', '5', '<ul>\r\n<li><strong>10GB</strong> Espaço em disco</li>\r\n<li><strong>100GB</strong> Largura de banda mensal</li>\r\n<li><strong>20</strong> Contas de e-mail</li>\r\n<li> Subdomínios ilimitados</li>\r\n</ul>', 'Pegue a oferta', 'https://icode.lucian.host/contact', 0, NULL, '2021-03-14 12:51:33', '2021-03-14 13:05:14'),
(8, 2, '<h3><strong>Plano Profissional</strong> <span>NNenhuma habilidade de codificação necessária para criar sites exclusivos. Personalize seu site em tempo real e veja os resultados instantaneamente.</span></h3>', '10', '<ul>\r\n<li><strong>10GB</strong> Espaço em disco</li>\r\n<li><strong>100GB</strong> Largura de banda mensal</li>\r\n<li><strong>20</strong> Contas de e-mail</li>\r\n<li> Subdomínios ilimitados</li>\r\n</ul>', 'Pegue a oferta', 'https://icode.lucian.host/contact', 1, 'Popular', '2021-03-14 12:53:17', '2021-03-14 13:05:25'),
(9, 2, '<h3><strong>Plano Avançado</strong> <span>Nenhuma habilidade de codificação necessária para criar sites exclusivos. Personalize seu site em tempo real e veja os resultados instantaneamente.</span></h3>', '15', '<ul>\r\n<li><strong>10GB</strong> Espa&ccedil;o em disco</li>\r\n<li><strong>100GB</strong> Largura de banda mensal</li>\r\n<li><strong>20</strong> Contas de e-mail</li>\r\n<li>Subdom&iacute;nios ilimitadosl</li>\r\n</ul>', 'Pegue a oferta', 'https://icode.lucian.host/contact', 0, NULL, '2021-03-14 12:53:41', '2021-04-18 14:22:06'),
(10, 3, '<h3><strong>الخطة الأساسية</strong> <span>لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.</span></h3>', '5', '<ul>\r\n<li><strong>10GB</strong> مساحة القرص</li>\r\n<li><strong>100GB</strong> النطاق الترددي الشهري</li>\r\n<li><strong>20</strong>حسابات البريد الإلكتروني</li>\r\n<li>نطاقات فرعية غير محدودة</li>\r\n</ul>', 'احصل على العرض', 'https://icode.lucian.host/contact', 0, NULL, '2021-03-14 12:51:33', '2021-03-14 13:05:14'),
(11, 3, '<h3><strong>الخطة المهنية</strong> <span>لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.</span></h3>', '10', '<ul>\r\n<li><strong>10GB</strong> مساحة القرص</li>\r\n<li><strong>100GB</strong> النطاق الترددي الشهري</li>\r\n<li><strong>20</strong>حسابات البريد الإلكتروني</li>\r\n<li>نطاقات فرعية غير محدودة</li>\r\n</ul>', 'احصل على العرض', 'https://icode.lucian.host/contact', 1, 'شائع', '2021-03-14 12:53:17', '2021-03-14 13:05:25'),
(12, 3, '<h3><strong>Advanced Plan</strong> <span>لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.</span></h3>', '15', '<ul>\r\n<li><strong>10GB</strong> مساحة القرص</li>\r\n<li><strong>100GB</strong> النطاق الترددي الشهري</li>\r\n<li><strong>20</strong>حسابات البريد الإلكتروني</li>\r\n<li>نطاقات فرعية غير محدودة</li>\r\n</ul>', 'احصل على العرض', 'https://icode.lucian.host/contact', 0, NULL, '2021-03-14 12:53:41', '2021-03-14 13:05:29');

-- --------------------------------------------------------

--
-- Table structure for table `pricing_settings`
--

CREATE TABLE `pricing_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `banner_img` text DEFAULT NULL,
  `banner_title` text DEFAULT NULL,
  `banner_desc` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pricing_settings`
--

INSERT INTO `pricing_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `title`, `description`, `banner_img`, `banner_title`, `banner_desc`, `created_at`, `updated_at`) VALUES
(1, 1, 'Pricing', 'Our recent pricing', 'pricing', 'Home', 'The best <span>pricing plans</span>', 'Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.', 'https://icode.lucian.host/public/images/media/1633956967pricing-tab-bg.webp', 'The best <span>pricing plans</span>', 'Whether you need a new logo, website, video, marketing campaign, or ebook created for your business, the key to making the project a success starts with having a well-thought-out creative brief.', NULL, '2021-10-11 16:56:13'),
(2, 2, 'Preços', 'Nossos preços recentes', 'pricing', 'Casa', 'Planos de Preços', 'Se você precisa de um novo logotipo, site, vídeo, campanha de marketing ou ebook criado para sua empresa, a chave para tornar o projeto um sucesso começa com um briefing criativo bem pensado.', 'https://icode.lucian.host/public/images/media/1633956967pricing-tab-bg.webp', NULL, NULL, NULL, '2021-04-10 22:52:03'),
(3, 3, 'التسعير', 'أسعارنا الأخيرة', 'pricing', 'بيت', 'خطط التسعير', 'سواء كنت بحاجة إلى شعار جديد أو موقع ويب أو مقطع فيديو أو حملة تسويقية أو كتاب إلكتروني تم إنشاؤه لعملك ، فإن مفتاح إنجاح المشروع يبدأ بامتلاك موجز إبداعي مدروس جيدًا.', 'https://icode.lucian.host/public/images/media/1633956967pricing-tab-bg.webp', NULL, NULL, NULL, '2021-03-20 18:34:04');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(10) UNSIGNED NOT NULL,
  `project_category_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `excerpt` text DEFAULT NULL,
  `image_featured2` text DEFAULT NULL,
  `img_gal1` text DEFAULT NULL,
  `img_gal2` text DEFAULT NULL,
  `img_gal3` text DEFAULT NULL,
  `img_gal4` text DEFAULT NULL,
  `date` text DEFAULT NULL,
  `client` text DEFAULT NULL,
  `button_text` text DEFAULT NULL,
  `button_link` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_categories`
--

CREATE TABLE `project_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_categories`
--

INSERT INTO `project_categories` (`id`, `language_id`, `name`, `created_at`, `updated_at`) VALUES
(18, 1, 'App', '2023-07-11 00:53:21', '2023-07-22 14:01:05');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'administrator', NULL, NULL),
(2, 'author', NULL, NULL),
(3, 'subscriber', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `photo_id` varchar(191) NOT NULL,
  `icon` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `button_text` varchar(255) DEFAULT NULL,
  `button_link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `language_id`, `photo_id`, `icon`, `title`, `description`, `button_text`, `button_link`, `created_at`, `updated_at`) VALUES
(1, 1, '234', '<i class=\"fas fa-crown\"></i>', 'Web Design', 'Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI & UX behaviors.', 'Read more', 'https://nikeshh.com/web-design', '2021-03-13 17:09:08', '2023-07-09 22:41:40'),
(2, 1, '235', '<i class=\"fab fa-google\"></i>', 'SEO Solutions', 'There’s some SEO in everything you do online. Search engine optimization, or SEO, is a strategy for improving your site’s rankings in engine results.', 'Read more', 'https://nikeshh.com/seo-solutions', '2021-03-13 17:20:59', '2023-07-09 22:41:51'),
(3, 1, '236', '<i class=\"fas fa-mobile\"></i>', 'High Ticket Products Promotion and Marketing', 'High Ticket Products Promotion and Marketing involves strategic efforts to promote and market valuable offerings to affluent audiences.', 'Read more', 'https://nikeshh.com/high-ticket-product-promotion-and-marketing', '2021-03-13 17:22:14', '2023-07-10 03:40:04'),
(4, 1, '237', '<i class=\"fas fa-bullhorn\"></i>', 'Online advertising', 'Online Advertising is the art of using the internet as a medium to deliver marketing messages to an identified and intended audience.', 'Read more', 'https://nikeshh.com/online-advertising', '2021-03-13 17:22:45', '2023-07-07 00:32:25'),
(8, 2, '235', '<i class=\"fab fa-google\"></i>', 'Soluções de SEO', 'Palavras-chave de pesquisa também. O primeiro lugar para começar quando se trata de soluções de SEO são as próprias palavras-chave.', 'Mais informações', 'https://icode.lucian.host/service-example', '2021-03-13 17:20:59', '2021-06-05 14:59:20'),
(7, 2, '234', '<i class=\"fas fa-crown\"></i>', 'Designer de Web', 'O design da Web abrange muitas habilidades e disciplinas diferentes na produção e manutenção de websites.', 'Mais informações', 'https://icode.lucian.host/service-example', '2021-03-13 17:09:08', '2021-04-10 21:01:45'),
(9, 2, '236', '<i class=\"fas fa-mobile\"></i>', 'Desenvolvimento', 'Palavras-chave de pesquisa também. O primeiro lugar para começar quando se trata de soluções de SEO.', 'Mais informações', 'https://icode.lucian.host/service-example', '2021-03-13 17:22:14', '2021-04-10 21:03:38'),
(10, 2, '237', '<i class=\"fas fa-bullhorn\"></i>', 'Anunciar', 'O design da Web abrange muitas habilidades e disciplinas diferentes na produção e manutenção de websites.', 'Mais informações', 'https://icode.lucian.host/service-example', '2021-03-13 17:22:45', '2021-04-10 21:01:03'),
(11, 3, '234', '<i class=\"fas fa-crown\"></i>', 'تصميم المواقع', 'يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية.', 'مزيد من المعلومات', 'https://icode.lucian.host/service-example', '2021-03-13 17:09:08', '2021-03-13 17:17:33'),
(12, 3, '235', '<i class=\"fab fa-google\"></i>', 'حلول تحسين محركات البحث', 'كلمات البحث حسنا. أول ما تبدأ به عندما يتعلق الأمر بحلول تحسين محركات البحث هي كلماتك الرئيسية نفسها.', 'مزيد من المعلومات', 'https://icode.lucian.host/service-example', '2021-03-13 17:20:59', '2021-03-13 17:23:53'),
(13, 3, '236', '<i class=\"fas fa-mobile\"></i>', 'تطوير التطبيق', 'يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية.', 'مزيد من المعلومات', 'https://icode.lucian.host/service-example', '2021-03-13 17:22:14', '2021-03-13 17:22:14'),
(14, 3, '237', '<i class=\"fas fa-bullhorn\"></i>', 'يعلن', 'يشمل تصميم الويب العديد من المهارات والتخصصات المختلفة في إنتاج وصيانة المواقع الإلكترونية.', 'مزيد من المعلومات', 'https://icode.lucian.host/service-example', '2021-03-13 17:22:45', '2021-03-13 17:22:45'),
(15, 1, '247', '<i class=\"fas fa-bullhorn\"></i>', 'Software Development', 'Crafting Innovative Solutions: Empower Your Business with Expert Software Development Services', 'Read more', 'https://nikeshh.com/software-development', '2023-07-02 17:06:40', '2023-07-07 00:31:47'),
(16, 1, '265', '<i class=\"fas fa-bullhorn\"></i>', 'Website Development', 'Transforming Ideas into Stunning Digital Experiences: Unleash Your Online Potential with Professional Website Development', 'Read more', 'https://nikeshh.com/website-development', '2023-07-02 17:08:55', '2023-07-07 00:31:31'),
(17, 1, '249', '<i class=\"fas fa-bullhorn\"></i>', 'App Development', 'Bringing Your Vision to Life: Ignite Success with Customized App Development Services', 'Read more', 'https://nikeshh.com/app-development', '2023-07-02 17:09:33', '2023-07-07 00:31:14'),
(18, 1, '266', '<i class=\"fas fa-bullhorn\"></i>', 'Business Growth', 'Fueling Your Journey to Success: Unleash the Potential of Your Business with Strategic Growth Solutions', 'Read more', 'https://nikeshh.com/business-growth', '2023-07-02 17:12:00', '2023-07-07 00:30:57'),
(19, 1, '251', '<i class=\"fas fa-bullhorn\"></i>', 'Ecommerce', 'Thriving in the Digital Marketplace: Power Up Your Business with Dynamic Ecommerce Solutions', 'Read more', 'https://nikeshh.com/ecommerce', '2023-07-02 17:12:27', '2023-07-07 00:30:45'),
(20, 1, '267', '<i class=\"fas fa-bullhorn\"></i>', 'Branding and Rebranding', 'Crafting Memorable Identities: Elevate Your Brand with Strategic Branding Solutions', 'Read more', 'https://nikeshh.com/branding', '2023-07-02 17:12:50', '2023-07-07 15:01:12'),
(21, 1, '268', '<i class=\"fas fa-bullhorn\"></i>', 'Design', 'Unlocking Creativity, Inspiring Engagement: Transform Your Vision with Cutting-Edge Design Services', 'Read more', 'https://nikeshh.com/design', '2023-07-02 17:13:16', '2023-07-07 00:30:08'),
(22, 1, '269', '<i class=\"fas fa-bullhorn\"></i>', 'Lead Generation and Marketing', 'Driving Growth Through Targeted Strategies: Amplify Your Business with Lead Generation and Marketing Expertise', 'Read more', 'https://nikeshh.com/lead-generation-and-marketing', '2023-07-02 17:13:57', '2023-07-07 00:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('FASoLhrwR3xWuNbanZWHomB6angvEl6NTWgkiTqv', NULL, '54.211.168.63', 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/531.3 (KHTML, like Gecko) Chrome/3.0.193.2 Safari/531.3', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiTzBDNTVMb2pWMkJlS2Q1U1dzd1R1SmxhY1ozVUJucnlNUHk1TEZpMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tL3ByaXZhY3ktcG9saWN5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo0OiJsYW5nIjtzOjI6ImVuIjt9', 1698671226),
('DUrCpnJNOR5a1At3oGVDZat7oMckohPbmfJcfrMm', NULL, '47.251.13.32', 'Mozilla/5.0 (Linux; Android 11; M2004J15SC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSjA4R3MwM0t3aDZkeUlWcGExYzdQVHphY1ZWQzllazF3Tkw4YlFtcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698671705),
('Wj0efOCuiCjOgxjoSV9AXs0EAvpuDY6KCCUhMaW2', NULL, '47.88.94.161', 'Mozilla/5.0 (Linux; Android 11; M2004J15SC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia0puSnlRR2pCMGxVZ3pWZ1Z0RW5NVERlanJIN3lOcUZqbGRSeU5sTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698671705),
('GrmcPYRtldkpxuo7VnWjeNAmHtVI4l1oOmz7ZKwH', NULL, '66.249.68.36', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMHJXZkFoeDhReFh4akl1NjQ4Y0VoVTZCUlBZR2FKbXZsUG5KcVRIdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698673514),
('80gNwIVMucc7U8x10PVjwosxxMMKWA75wAywB0rS', NULL, '66.249.68.37', 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWDdoUzdjRWw0ckJ4NTlaSmtBUU03dkhjSFhKZEptM01mRzhtZWE1YyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698673515),
('txFaudtBqhahTE1CvcwFbdHfrx5dj95gng16fN5t', NULL, '54.236.1.13', 'Mozilla/5.0 (compatible; Pinterestbot/1.0; +http://www.pinterest.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSUl2OFNkZjgzaFlBTlFWQXBwc081SG93eDh6S1l1UVFGWXJtSlRRNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698676652),
('WSXY9cz0tAPIco8WhV6EnRsUclTkTxwob4t9TH4i', NULL, '54.236.1.13', 'Mozilla/5.0 (compatible; Pinterestbot/1.0; +http://www.pinterest.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTExaeWtOVURSZmJwVVFkc0pqTjRhZW1lbjROZW1ObTRBNmY2TjNQaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698676680),
('gXOrpxLCIKK4r7j3eWF2w8e3WdZRNXhRrfEe35gR', NULL, '13.37.224.163', 'Opera/9.51 Beta (Microsoft Windows; PPC; Opera Mobi/1718; U; en)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZnBkVzFiV2M2anBBYW5Bc2tpZFVDc2k0ODA4VjlzSVJPNk02R29yTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vbmlrZXNoaC5jb20vLmVudiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698678021),
('WxtLR2zsrApV7AuqAqEprQR7e79UUO3T0Ez3Q7D6', NULL, '54.36.148.234', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRE1sTEZWRmNmenNYSjNtbUh1NVFid3NlOWlzQ2NzMEIzUnNSWEVNcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6OTk6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tL3Bvc3QvMTAtZWZmZWN0aXZlLXN0cmF0ZWdpZXMtZm9yLWJvb3N0aW5nLW9yZ2FuaWMtdHJhZmZpYyUyMHRvLXlvdXItd2Vic2l0ZSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698680290),
('coWMMP25QboaHsXJc8LPM0YN5M9Md9Tr6O7koe0d', NULL, '66.249.68.36', 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.117 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUld6U05zU1VQVHB2M3I1bHU5R3hEdzI2M3F3SlZwQWVhQjdTVlhpbiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHBzOi8vbmlrZXNoaC5jb20vcHJvamVjdC9ydHJpeC1tb2JpbGUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698681279),
('eR24zw9DVWPps6lQJLunRkh2x3SlJ6AaS8gF46OU', NULL, '65.154.226.167', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/117.0.5938.88 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMTlPY3pnTnJ0amw4SDNzYlgxM2V5eEEzNVVCZG9EOW9nNDZBbjEwciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698684270),
('xFpETZUDtgdJw6r3u55v3CybejsmA5U4hKqLCJLB', NULL, '54.36.148.59', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFVCc3VYSmVUWUpZOFhTUGFvV0ZJZWJRQkd1Tm82ajlKQmdhSUoxYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjg6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tL2dkcHIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698696521),
('u4NdBA0WgKBKh6qUzGxxEPPrvIwhaqBGx92ihy6D', NULL, '54.174.58.238', 'HubSpot Connect 2.0 (http://dev.hubspot.com/) (namespace: domainValidationHttpClient) - BizOpsCompanies-Tq2-BizCoDomainValidationAudit', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic25POGw4dE50SUZ4TE9GelRFbG9zUTI3N29lcG1yaXlWUlFXYTd5QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698706348),
('TcdHmKNlb60jzoTZ8xsxeVTsXnj5wn9A7xXOPLCH', NULL, '42.83.147.54', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/74.0.3729.169 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTnBKQXB1dWw1VW5TYUxBbnViNm5JNHFwalVZNEJmOWVLYlRuV2tkSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698711193),
('BhdQLSJVVpBv5rbGuN5y7E88hqO4KVlw0B4RoGGa', NULL, '52.167.144.16', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/103.0.5060.134 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieU9SOWFKRk1RQWJpeThnQWg0QklEek1xbG8xVmhYSjlOVmpxUHNkZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHBzOi8vbmlrZXNoaC5jb20vdGVybXMtYW5kLWNvbmRpdGlvbnMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698716079),
('yGyXbycHUN58tVQm38wKcrsEadvkJeMBYn17WL29', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaFJxY3pQcnRuODNMdUg5WTdFRXZYZHFSd24wcTRXWUVISFUwU2htTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzI6Imh0dHBzOi8vbmlrZXNoaC5jb20vYWxmYS1yZXgucGhwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698716197),
('0phWxmYPnCaOpzkSYrROteOUPwLL0DoNWmsLOpfg', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRGdIY1haeHpzd3FWUGtWSGVhQ1JhWWkyWk5MSEdvWmFCdjd4bnJOQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzI6Imh0dHBzOi8vbmlrZXNoaC5jb20vcmVwZWF0ZXIucGhwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698716199),
('n6dmeM2bDXsOugbNWW4nWv1ddUEJgWFh18M9fzzf', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN283dXVIVEhLd2JPZHBtT0lIQnJBdFptaE1XbGtEZ25YM2x4NTZ2bSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vbmlrZXNoaC5jb20vYWxmYS1yZXgucGhwNyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698716201),
('wF9XWzsMTweFYffzMElCWUfIB7tCOD40LxuceyhB', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTGx1c1ZBWEgzdDEyOEdaZHE3dkNGOWU1SVRFa0R3d1hTak85T0xVVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHBzOi8vbmlrZXNoaC5jb20vaW94aS1yZXg0LnBocDciO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698716203),
('fzQ1InY10JUavYou8SeV6NpyD8gVaDIajKkRqKdD', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia0JRQnR1NzNmcXA1TGNHYmFRU0l0Y3k4Sjljbk1EQVljMks1ZlBMQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHBzOi8vbmlrZXNoaC5jb20vcHVibGljL2luZGV4LnBocCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698716219),
('1fpYhqzljDLfb3JmPvwSBRZpC1NDutvzhMyOgOn1', NULL, '172.188.72.27', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTzhYSW91akJqUlRCUTRwY2VheG5VV2xqa0tIYlR5MnlvWG9MbEVObiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vbmlrZXNoaC5jb20vcmFkaW8ucGhwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698716220),
('nICH1fsuEJOHvjOejkdMfLfBz0MHftadOPT6fEd8', NULL, '54.36.148.66', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicE1yaUFEckRoZGYzd0ZxWkNrMlpNRHEzaHY1emhBbDllN3B6ODd1RSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vbmlrZXNoaC5jb20vd2Vic2l0ZS1kZXZlbG9wbWVudCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698716460),
('20o3zrlu8FNegqMtFsGmeyq2h7EfMttvaYLC5XZR', NULL, '66.249.68.39', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT1ppelZ4d2diOEgwS3ZwRjFhbTZ4b1lLZndjRndGakp2dDhkZll0NiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698721896),
('BSlcGi6Dhx1Cqp4NMItzVkCQZ6B6WOBSnbTwviY2', NULL, '2a02:4780:b:c0de::54', 'Go-http-client/2.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMjJvanBRYURhdGR5VFJuYXl3TTd4RWZxZmFRTzdhQkg0ejkzZ0ZmMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698738179),
('2HMXTBCg662j9I7CsmfpdrMUBEVagUzBG4o0Zkfz', NULL, '114.119.135.202', 'Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVDN5Wkt6M2NmR1VDVlZDek12R2hsOUFNbFF5ZHo0YTFmMTJlekI2cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vbmlrZXNoaC5jb20vZWNvbW1lcmNlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698740582),
('J35Z59mfBYmV0EBQgEXTXLDtMBh2LKrerAAZwnNs', NULL, '66.249.68.33', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNWdkNjR1QkVtTFpyTmJDdm91SGxOemJ2dnJVb2hab1NvYncxZElFUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698741189),
('uljBF6L00LoxLqALSGM2tvl68M9pa2rkeZmhmVdr', NULL, '66.249.68.32', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib1hCYjRTVkN3R2pMcEROSjV4a2phV3lCYkxlSXJXWVVSNFp2REVwQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHBzOi8vbmlrZXNoaC5jb20vc2l0ZW1hcC54bWwiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698744436),
('c7fhF8ZM7juiulMHDSvZQ4ckW41YpWkyMhuGXbIT', NULL, '54.36.148.103', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFlvNmhXbVR6dExlMFBzdzV2RWVDcTIwalhJZ3VWVHJoYjBnRWVINSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698744456),
('8yBUeNNhuI3pZsf8Om7i8zIxWNdAWZliWaQfuPNw', NULL, '54.36.148.1', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSHlIMG1hUFdwSWxGUUk4ODdWSzVUeU9PT3N3YmJnREM3eTFvaWZoUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698744460),
('3xOLojtRedSmQ5EWnUWFh9Gtw72uxdM4Z5qIQRDN', NULL, '2001:bc8:701:1e:46a8:42ff:fe1c:41ca', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN2JrbGxoRFc4SGZTeVVqd1Z5NDNmZDVZV2I1Z0FZY3l3M3ljdXVNaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698748681),
('Q8Q3ruC8JBJlqxWI7HOjsiXbYTWIm295gysKPRFv', NULL, '66.249.72.36', 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.117 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTVNxaWdObkM5b2FOcEYyaVZiUmxYbEpNV2I2Rnp0NWdlNENQWU80ZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698753729),
('RPOBpVzla3XEOHvgEOIEp3bBE66VZjvIje99P8Sg', NULL, '89.76.57.185', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZmxTc2hhbDJ6aVY5WjEycmtVSElEakhJd1Y4eXJnQ0ZwS3huWWEwbiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHBzOi8vbmlrZXNoaC5jb20vY29udGFjdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1698753975),
('gIEN062vlLCoczPqV3Zib6N8SIrVinQOuJltI8HC', NULL, '54.36.148.171', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT0QyN1NIblVDWjFCcndoankzNHYyWms3QU5xeFU3WDIwazJPcEVqVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDQ6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tL3Rlcm1zLWFuZC1jb25kaXRpb25zIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698766368),
('mCqvmBIGA6xpL06qwhFxMYRZNGTpbtc9sCkEUgJp', NULL, '141.98.255.149', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU2NyekpBRDNVTFJCWlI0RTdTU3NFWmVDVDMzc0hSbzFucVJ3Znd0cCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1698767642),
('GWb2aTQ0sviM2F8TpuqUPe5w2QzeVfcBybU4kUaX', 1, '2607:9880:11c7:ff73:44c0:8854:a8fb:2912', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ0FVbTlYQWx5T20yMXJHRkEyS0tCS3BJWXhPY1JFdTVETml2WEdDViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTk6Imh0dHBzOi8vbmlrZXNoaC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698770395),
('NonkAK5J4y9zxsB86tcdDwG88xRt8YB85zYLHplm', NULL, '54.36.148.147', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQVhwc0xvUlRNd3F1RXhyRVpKb2FyaW9IVEl2cWEzbGgyT0h2ckM5YSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHBzOi8vd3d3Lm5pa2VzaGguY29tL25ld3NsZXR0ZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1698670665);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `maintenance_status` tinyint(1) NOT NULL,
  `maintenance_text` text DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `favicon` text NOT NULL,
  `loader_status` tinyint(1) NOT NULL,
  `loader_img` varchar(255) DEFAULT NULL,
  `loader_color` varchar(255) DEFAULT NULL,
  `keywords` text DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `contact` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `price_range` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `whatsapp` tinyint(1) NOT NULL,
  `font` text NOT NULL,
  `facebook_pixel` text DEFAULT NULL,
  `facebook_pixel_switch` tinyint(1) NOT NULL DEFAULT 1,
  `analytics` text DEFAULT NULL,
  `analytics_switch` tinyint(1) NOT NULL DEFAULT 1,
  `SchmeaORG` text DEFAULT NULL,
  `SchmeaORG_switch` tinyint(1) NOT NULL DEFAULT 1,
  `OGgraph` text DEFAULT NULL,
  `OGgraph_switch` tinyint(1) NOT NULL DEFAULT 1,
  `photo_id` varchar(191) DEFAULT NULL,
  `custom_css` text DEFAULT NULL,
  `custom_js` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `language_id`, `maintenance_status`, `maintenance_text`, `title`, `favicon`, `loader_status`, `loader_img`, `loader_color`, `keywords`, `author`, `contact`, `phone`, `price_range`, `country`, `address`, `whatsapp`, `font`, `facebook_pixel`, `facebook_pixel_switch`, `analytics`, `analytics_switch`, `SchmeaORG`, `SchmeaORG_switch`, `OGgraph`, `OGgraph_switch`, `photo_id`, `custom_css`, `custom_js`, `created_at`, `updated_at`) VALUES
(1, 1, 0, '<h3 style=\"text-align: left;\">Under construction</h3>\r\n<p>&nbsp;</p>', 'Nikeshh Vijayabaskaran', 'https://nikeshh.com/public/images/media/1688397328nikeshh-favicon.png', 1, 'https://nikeshh.com/public/images/media/1688397074nikeshh-logo.png', 'white', 'website development, app development, branding, design', 'Nikeshh Vijayabaskaran', 'admin@nikeshh.com', '+14168345350', '100$ to 100000$', 'Canada', NULL, 1, 'https://fonts.googleapis.com/css2?family=DM+Sans&family=Quicksand:wght@300;400;600;700&display=swap', 'CODE-FACEBOOK', 0, 'G-9J8D52CREF', 1, '<div class=\"hidden\" itemscope=\"\" itemtype=\"http://schema.org/LocalBusiness\">\r\n   <span itemprop=\"description\">Laravel CMS Script with Frontend Website</span>\r\n   <span itemprop=\"priceRange\">The best prices.</span><br>\r\n   <a itemprop=\"url\" href=\"https://icode.lucian.host/\">\r\n   </a><a itemprop=\"sameAs\" href=\"https://icode.lucian.host\">Facebook</a> |\r\n   <span itemprop=\"name\">contact@niva.host</span>\r\n   <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\r\n      <span itemprop=\"streetAddress\">Street Name, Number 123</span> |\r\n      <span itemprop=\"addressLocality\">Bucharest</span> |\r\n      <span itemprop=\"addressCountry\">Romania</span> |\r\n      <span itemprop=\"telephone\">0722.123.456</span> |\r\n      <span itemprop=\"email\">contact@niva.host</span>\r\n   </div>\r\n   <img itemprop=\"logo\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" height=\"50px\">\r\n   <img itemprop=\"image\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n</div>', 1, '<meta property=\"og:title\" content=\"Niva Agency CMS\" />\r\n<meta property=\"og:type\" content=\"website\" />\r\n<meta property=\"og:url\" content=\"https://icode.lucian.host/\" />\r\n<meta property=\"og:image\" content=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n<meta property=\"og:site_name\" content=\"niva\" />\r\n<meta property=\"og:description\" content=\"Laravel CMS Script with Frontend Website\" />', 1, '259', 'body {\r\nbackground: #fff;\r\n}\r\n.page-content h1 {\r\ncolor: #000;\r\n}\r\n.page-content h2 {\r\ncolor: #000;\r\n}', 'console.log(\'working\');', NULL, '2023-09-19 02:20:52'),
(2, 2, 0, NULL, 'Quin CMS Tema', 'https://icode.lucian.host/public/images/media/1643016131favicon.png', 1, 'https://icode.lucian.host/public/images/media/1642887630logo-loader.svg', 'white', 'cms, laravel, niva, portugalia', 'Sweet Themes', 'contact@niva.host', '+40741395171', '300$ to 5000$', 'Romania', 'Rua Unirii, 191, Bucareste', 1, 'https://fonts.googleapis.com/css2?family=DM+Sans&family=Quicksand:wght@300;400;600;700&display=swap', 'CODE-FACEBOOK123-p', 0, 'UA-CODE-12-p2434', 0, '<div class=\"hidden\" itemscope=\"\" itemtype=\"http://schema.org/LocalBusiness\">\r\n   <span itemprop=\"description\">Laravel CMS Script with Frontend Website</span>\r\n   <span itemprop=\"priceRange\">The best prices.</span><br>\r\n   <a itemprop=\"url\" href=\"https://icode.lucian.host/\">\r\n   </a><a itemprop=\"sameAs\" href=\"https://icode.lucian.host\">Facebook</a> |\r\n   <span itemprop=\"name\">contact@niva.host</span>\r\n   <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\r\n      <span itemprop=\"streetAddress\">Street Name, Number 123</span> |\r\n      <span itemprop=\"addressLocality\">Bucharest</span> |\r\n      <span itemprop=\"addressCountry\">Romania</span> |\r\n      <span itemprop=\"telephone\">0722.123.456</span> |\r\n      <span itemprop=\"email\">contact@niva.host</span>\r\n   </div>\r\n   <img itemprop=\"logo\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" height=\"50px\">\r\n   <img itemprop=\"image\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n</div>', 1, '<meta property=\"og:title\" content=\"Niva Agency CMS\" />\r\n<meta property=\"og:type\" content=\"website\" />\r\n<meta property=\"og:url\" content=\"https://icode.lucian.host/\" />\r\n<meta property=\"og:image\" content=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n<meta property=\"og:site_name\" content=\"niva\" />\r\n<meta property=\"og:description\" content=\"Laravel CMS Script with Frontend Website\" />', 1, '232', 'body {\r\nbackground: #fff;\r\n}', 'console.log(\'working\');', NULL, '2022-01-24 14:56:58'),
(3, 3, 0, NULL, 'موضوع نيفا CMS', 'https://icode.lucian.host/public/images/media/1643016131favicon.png', 1, 'https://icode.lucian.host/public/images/media/1642887630logo-loader.svg', 'white', 'سم ، لارافيل ، نيفا ، إنجليزي', 'Sweet Themes', 'contact@niva.host', '+40741395171', '300$ to 5000$', 'رومانيا', 'Unirii Street، 191، بوخارست', 1, 'https://fonts.googleapis.com/css2?family=DM+Sans&family=Quicksand:wght@300;400;600;700&display=swap', 'CODE-FACEBOOK123', 0, 'UA-CODE-12', 0, '<div class=\"hidden\" itemscope=\"\" itemtype=\"http://schema.org/LocalBusiness\">\r\n   <span itemprop=\"description\">Laravel CMS Script with Frontend Website</span>\r\n   <span itemprop=\"priceRange\">The best prices.</span><br>\r\n   <a itemprop=\"url\" href=\"https://icode.lucian.host/\">\r\n   </a><a itemprop=\"sameAs\" href=\"https://icode.lucian.host\">Facebook</a> |\r\n   <span itemprop=\"name\">contact@niva.host</span>\r\n   <div itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\r\n      <span itemprop=\"streetAddress\">Street Name, Number 123</span> |\r\n      <span itemprop=\"addressLocality\">Bucharest</span> |\r\n      <span itemprop=\"addressCountry\">Romania</span> |\r\n      <span itemprop=\"telephone\">0722.123.456</span> |\r\n      <span itemprop=\"email\">contact@niva.host</span>\r\n   </div>\r\n   <img itemprop=\"logo\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" height=\"50px\">\r\n   <img itemprop=\"image\" src=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n</div>', 1, '<meta property=\"og:title\" content=\"Niva Agency CMS\" />\r\n<meta property=\"og:type\" content=\"website\" />\r\n<meta property=\"og:url\" content=\"https://icode.lucian.host/\" />\r\n<meta property=\"og:image\" content=\"https://icode.lucian.host/public/images/media/1615648164favicon.png\" />\r\n<meta property=\"og:site_name\" content=\"niva\" />\r\n<meta property=\"og:description\" content=\"Laravel CMS Script with Frontend Website\" />', 1, '232', 'body {\r\nbackground: #fff;\r\n}', 'console.log(\'working\');', NULL, '2022-01-24 14:57:04');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `photo_id` varchar(191) NOT NULL,
  `heading1` text NOT NULL,
  `heading2` text DEFAULT NULL,
  `typed_text` text DEFAULT NULL,
  `bodyslider` text NOT NULL,
  `button_text` varchar(191) DEFAULT NULL,
  `button_link` varchar(191) DEFAULT NULL,
  `button_text2` varchar(255) DEFAULT NULL,
  `button_link2` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `language_id`, `photo_id`, `heading1`, `heading2`, `typed_text`, `bodyslider`, `button_text`, `button_link`, `button_text2`, `button_link2`, `created_at`, `updated_at`) VALUES
(2, 2, '238', 'Uma agência de Marketing Digital e Web Design Personalizado', NULL, NULL, '<p>Voc&ecirc; est&aacute; procurando por Design Digital? A iCODE &eacute; uma ag&ecirc;ncia criativa constru&iacute;da com um prop&oacute;sito: ajudar voc&ecirc; a definir sua marca. Oferecemos um servi&ccedil;o impec&aacute;vel combinando um design agrad&aacute;vel e amig&aacute;vel com uma programa&ccedil;&atilde;o de qualidade.</p>', 'Entrar em contato', 'https://icode.lucian.host/contact', NULL, NULL, '2021-03-13 16:38:22', '2022-01-24 15:06:05'),
(12, 3, '238', 'وكالة تسويق رقمي وتصميم مواقع ويب مخصصة', NULL, '[\'تصميم المواقع؟\', \'وسائل التواصل الاجتماعي؟\', \'تصميم وطباعة؟\', \'تصميم رقمي؟\', \'تصميم وطباعة؟\']', '<p>هل تبحث عن تصميم رقمي؟ iCODE هي وكالة إبداعية تم إنشاؤها لغرض واحد: مساعدتك في تحديد علامتك التجارية. نحن نقدم خدمة لا تشوبها شائبة تجمع بين التصميم الجميل وسهل الاستخدام والبرمجة عالية الجودة.</p>', 'ابقى على تواصل', 'https://icode.lucian.host/contact', NULL, NULL, '2021-04-03 14:44:45', '2022-01-24 15:10:35'),
(13, 3, '239', 'البحث عن التميز الرقمي؟ قل لا زيادة.', NULL, NULL, '<p>نحن نساعد العلامات التجارية المتميزة على تحقيق مستقبلهم من خلال الابتكار ووجهات النظر الإبداعية. نحن ننمي شركتك من خلال الأفكار الداخلية الخاصة ، والتي تم اختبارها وإتقانها على مر السنين.</p>', 'اتصل بنا', 'https://icode.lucian.host/contact', 'عرض محفظتنا', 'https://icode.lucian.host/about-us', '2021-04-10 20:48:03', '2022-01-24 15:09:43'),
(11, 2, '239', 'Buscando excelência digital? Não digas mais nada.', NULL, NULL, '<p>Quer voc&ecirc; precise de um novo logotipo, site, v&iacute;deo, campanha de marketing ou ebook criado para sua empresa, a chave para tornar o projeto um sucesso come&ccedil;a com um briefing criativo bem pensado.</p>', 'Pegue a oferta', 'https://icode.lucian.host/contact', 'Veja nosso portfólio', 'https://icode.lucian.host/about-us', '2021-04-10 20:50:35', '2022-01-24 14:45:33'),
(9, 1, '295', 'Hi! I\'m Nikeshh. A Full Stack Developer and Digital Marketer.', NULL, '[\'Web Design\', \'Social Media\', \'Digital Marketing\', \'Digital Design\']', '<p><span class=\"mt_typed-beforetext\">Are you looking for </span><span class=\"mt_typed_text\">Digital Transformation?</span><span class=\"mt_typed-aftertext\"> I drive with one purpose: to help you define your brand. I offer impeccable service combining a nice and user-friendly design with quality programming<strong>.</strong></span></p>', 'Get in touch', 'https://nikeshh.com/contact', 'About me', 'https://nikeshh.com/about-us', '2021-04-03 14:44:45', '2023-09-19 03:11:02'),
(10, 1, '239', 'Seeking digital excellence? Say no more.', NULL, NULL, '<p><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">I help premium brands</span><strong style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\"> </strong><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">achieve their future through innovation and creative perspectives. Grow your company through proprietary in-house ideas, tested and perfected over the years.</span></p>\r\n<p>&nbsp;</p>', 'Get in touch', 'https://nikeshh.com/contact', 'About me', 'https://nikeshh.com/about-us', '2021-04-10 20:48:03', '2023-07-16 21:51:56'),
(14, 1, '283', 'My Current Interests', NULL, NULL, '<p><span class=\"mt_typed-aftertext\"><strong><a href=\"/strategic-and-creative-thinking\">Strategic and Creative thinking</a>, <a href=\"/ai\">AI</a>, <a href=\"/blockchain\">Blockchain</a>, <a href=\"/web-3.0\">Web 3.0</a>, <a href=\"/marketing\">Marketing</a></strong></span></p>\r\n<p>&nbsp;</p>', 'Get in touch', 'https://nikeshh.com/contact', 'About me', 'https://nikeshh.com/about-us', '2023-07-16 21:51:15', '2023-07-16 21:52:47');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `subtitle` text NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `name` text NOT NULL,
  `position` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `language_id`, `subtitle`, `profile_pic`, `title`, `description`, `name`, `position`, `created_at`, `updated_at`) VALUES
(2, 1, 'Clients Opinion', 'https://nikeshh.com/public/images/media/1690023035testimonial-3.jpg', 'Top quality agency', '<p class=\"testimonial-content\">I was blown away by the business growth strategies implemented by Nikeshh. He has a deep understanding of the market and was able to develop a plan that was tailored to my specific needs. Thanks to his guidance, my online business has seen tremendous success due to <em><strong>Search Engine optimization (SEO)</strong></em> and I couldn\'t be happier.</p>\r\n<p>&nbsp;</p>', 'Jacob Hughes', 'EdTech SAAS', '2021-03-13 19:24:51', '2023-07-22 10:50:42'),
(3, 1, 'Clients Opinion', 'https://nikeshh.com/public/images/media/1690022718testimonial-2.jpg', 'Professional team', '<p class=\"testimonial-content\">Nikeshh is a true expert in website development. He was able to take my vision and bring it to life with a <em><strong>beautiful and functional website</strong></em> that perfectly represents my business. I\'m so impressed with his work and would absolutely work with them again in the future.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 'Ryan Smith', 'Real estate SAAS on Blockchain product', '2021-03-13 19:25:31', '2023-07-22 10:45:39'),
(4, 1, 'Clients Opinion', 'https://nikeshh.com/public/images/media/1690022718testimonial-1.jpg', 'Absolutely awesome', '<p>I had the pleasure of working with Nikeshh on my <em><strong>lead generation and marketing efforts</strong></em>, and I couldn\'t be happier with the results. He helped me target my ideal audience and generate high-quality leads that converted into paying customers. His expertise and dedication to his craft is truly unmatched.</p>\r\n<p>&nbsp;</p>', 'Paul', 'Founder, ibConnects', '2021-03-13 19:26:20', '2023-07-22 10:45:30'),
(8, 2, 'Opinião dos clientes\r\n', 'https://icode.lucian.host/public/images/media/1633178646testimonial3_1.webp', 'Agência de alta qualidade', '<p> É a solução perfeita para o nosso negócio. <strong> Quin </strong> é o recurso comercial mais valioso que NUNCA compramos. Já vimos resultados incríveis. </p>', 'Michael Doe', 'Envato voluntário', '2021-03-13 19:24:51', '2021-03-13 19:24:51'),
(9, 2, 'Opinião dos clientes\r\n', 'https://icode.lucian.host/public/images/media/1633178646testimonial2_1.webp', 'Equipe profissional', '<p> É a solução perfeita para o nosso negócio. <strong> Quin </strong> é o recurso comercial mais valioso que NUNCA compramos. Já vimos resultados incríveis. </p>', 'Felix Doe', 'Scoro programador', '2021-03-13 19:25:31', '2021-03-13 19:25:31'),
(10, 2, 'Opinião dos clientes\r\n', 'https://icode.lucian.host/public/images/media/1633178648testimonial1_1.webp', 'Absolutamente incrível', '<p> É a solução perfeita para o nosso negócio. <strong> Quin </strong> é o recurso comercial mais valioso que NUNCA compramos. Já vimos resultados incríveis. </p>', 'Lucian Ionut', 'Sweet Themes programador', '2021-03-13 19:26:20', '2021-03-13 19:26:20'),
(12, 3, 'رأي العملاء', 'https://icode.lucian.host/public/images/media/1633178646testimonial3_1.webp', 'وكالة عالية الجودة', '<p> إنه الحل الأمثل لأعمالنا. <strong> Quin </strong> هو المورد التجاري الأكثر قيمة الذي اشتريناه على الإطلاق. لقد رأينا نتائج مذهلة بالفعل. </ p>', 'Michael Doe', 'متطوع Envato', '2021-03-13 19:24:51', '2021-03-13 19:24:51'),
(13, 3, 'رأي العملاء', 'https://icode.lucian.host/public/images/media/1633178646testimonial2_1.webp', 'فريق فني', '<p> إنه الحل الأمثل لأعمالنا. <strong> Quin </strong> هو المورد التجاري الأكثر قيمة الذي اشتريناه على الإطلاق. لقد رأينا نتائج مذهلة بالفعل. </ p>', 'Felix Doe', 'برامج النتيجة', '2021-03-13 19:25:31', '2021-03-13 19:25:31'),
(14, 3, 'رأي العملاء', 'https://icode.lucian.host/public/images/media/1633178648testimonial1_1.webp', 'رائع بكل تأكيد', '<p> إنه الحل الأمثل لأعمالنا. <strong> Quin </strong> هو المورد التجاري الأكثر قيمة الذي اشتريناه على الإطلاق. لقد رأينا نتائج مذهلة بالفعل. </ p>', 'Lucian Ionut', 'مبرمج ثيمات حلوة', '2021-03-13 19:26:20', '2021-03-13 19:26:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 3,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` text DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `photo_id` varchar(191) DEFAULT NULL,
  `fb_id` varchar(191) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role_id`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `address`, `city`, `phone`, `created_at`, `updated_at`, `photo_id`, `fb_id`) VALUES
(1, 'Nikeshh Vijayabaskaran', 1, 'admin@nikeshh.com', NULL, '$2y$10$t.NU7SzpFXERjYuDVN8WVurBA2PLU.X5wUhcf6HVKL8fsPeqPylOu', NULL, NULL, 'OXyGUh1C0DszeATYJjCEZDGvE4ei73bwPYpLe2FFZAEqv6OZZt05YrwRH0a3', NULL, NULL, NULL, NULL, NULL, '2021-03-13 15:29:44', '2023-07-22 17:34:27', '53', '3371932529579633');

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

CREATE TABLE `works` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `user_id` int(10) UNSIGNED NOT NULL,
  `work_category_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `excerpt` text DEFAULT NULL,
  `image_featured2` text DEFAULT NULL,
  `img_gal1` text DEFAULT NULL,
  `img_gal2` text DEFAULT NULL,
  `img_gal3` text DEFAULT NULL,
  `img_gal4` text DEFAULT NULL,
  `date` text DEFAULT NULL,
  `client` text DEFAULT NULL,
  `button_text` text DEFAULT NULL,
  `button_link` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`id`, `language_id`, `user_id`, `work_category_id`, `photo_id`, `title`, `slug`, `body`, `excerpt`, `image_featured2`, `img_gal1`, `img_gal2`, `img_gal3`, `img_gal4`, `date`, `client`, `button_text`, `button_link`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 17, 280, 'Test Work', 'test-work', '<p>Test work body</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', '<p>Test work description</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', 'https://nikeshh.com/public/images/media/1689037212Test.jpeg', 'https://nikeshh.com/public/images/media/1688957707web-design.jpg', 'https://nikeshh.com/public/images/media/1688957707web-design.jpg', 'https://nikeshh.com/public/images/media/1688957707web-design.jpg', 'https://nikeshh.com/public/images/media/1688957707web-design.jpg', '2', '2', 'Read more', 'https://nikeshh.com/public/images/media/1688957707web-design.jpg', 'Test title', 'Test description', '2023-07-11 01:00:12', '2023-07-11 01:24:59');

-- --------------------------------------------------------

--
-- Table structure for table `work_categories`
--

CREATE TABLE `work_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `work_categories`
--

INSERT INTO `work_categories` (`id`, `language_id`, `name`, `created_at`, `updated_at`) VALUES
(17, 1, 'Sample Work Category', '2023-07-11 00:53:04', '2023-07-11 00:53:04');

-- --------------------------------------------------------

--
-- Table structure for table `work_settings`
--

CREATE TABLE `work_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `language_id` int(4) NOT NULL DEFAULT 0,
  `meta_title` varchar(191) NOT NULL,
  `meta_description` text NOT NULL,
  `slug` varchar(191) NOT NULL,
  `breadcrumbs_anchor` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `banner_img` varchar(255) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `banner_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `work_settings`
--

INSERT INTO `work_settings` (`id`, `language_id`, `meta_title`, `meta_description`, `slug`, `breadcrumbs_anchor`, `title`, `description`, `banner_img`, `banner_title`, `banner_desc`, `created_at`, `updated_at`) VALUES
(1, 1, 'My Works', 'Nikeshh Works', 'work', 'Home', '', '', 'https://icode.lucian.host/public/images/media/1633880725portf_header-16.webp', 'Our latest<span>projects</span>', 'Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.', NULL, '2023-07-15 16:53:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_settings`
--
ALTER TABLE `about_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_settings`
--
ALTER TABLE `blog_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_user_id_index` (`user_id`),
  ADD KEY `projects_project_category_id_index` (`challenge_category_id`),
  ADD KEY `projects_photo_id_index` (`photo_id`);

--
-- Indexes for table `challenge_categories`
--
ALTER TABLE `challenge_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `challenge_settings`
--
ALTER TABLE `challenge_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_post_id_index` (`post_id`);

--
-- Indexes for table `comment_replies`
--
ALTER TABLE `comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_replies_comment_id_index` (`comment_id`);

--
-- Indexes for table `contact_settings`
--
ALTER TABLE `contact_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `header_footer_settings`
--
ALTER TABLE `header_footer_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_settings`
--
ALTER TABLE `home_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_order_unique` (`order`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pages_user_id_index` (`user_id`),
  ADD KEY `pages_photo_id_index` (`photo_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio_settings`
--
ALTER TABLE `portfolio_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_index` (`user_id`),
  ADD KEY `posts_category_id_index` (`category_id`),
  ADD KEY `posts_photo_id_index` (`photo_id`);

--
-- Indexes for table `pricings`
--
ALTER TABLE `pricings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pricing_settings`
--
ALTER TABLE `pricing_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_user_id_index` (`user_id`),
  ADD KEY `projects_project_category_id_index` (`project_category_id`),
  ADD KEY `projects_photo_id_index` (`photo_id`);

--
-- Indexes for table `project_categories`
--
ALTER TABLE `project_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_index` (`role_id`);

--
-- Indexes for table `works`
--
ALTER TABLE `works`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_user_id_index` (`user_id`),
  ADD KEY `projects_project_category_id_index` (`work_category_id`),
  ADD KEY `projects_photo_id_index` (`photo_id`);

--
-- Indexes for table `work_categories`
--
ALTER TABLE `work_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work_settings`
--
ALTER TABLE `work_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_settings`
--
ALTER TABLE `about_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_settings`
--
ALTER TABLE `blog_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `challenges`
--
ALTER TABLE `challenges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `challenge_categories`
--
ALTER TABLE `challenge_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `challenge_settings`
--
ALTER TABLE `challenge_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment_replies`
--
ALTER TABLE `comment_replies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_settings`
--
ALTER TABLE `contact_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `header_footer_settings`
--
ALTER TABLE `header_footer_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `home_settings`
--
ALTER TABLE `home_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=296;

--
-- AUTO_INCREMENT for table `portfolio_settings`
--
ALTER TABLE `portfolio_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `pricings`
--
ALTER TABLE `pricings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pricing_settings`
--
ALTER TABLE `pricing_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `project_categories`
--
ALTER TABLE `project_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `works`
--
ALTER TABLE `works`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `work_categories`
--
ALTER TABLE `work_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `work_settings`
--
ALTER TABLE `work_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
