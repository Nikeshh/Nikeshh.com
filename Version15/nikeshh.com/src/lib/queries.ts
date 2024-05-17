import { currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { cache } from 'react'

export const revalidate = 3600 // revalidate the data at most every hour

export const getAuthUserDetails = async () => {
    const user = await currentUser()
    if (!user) {
      return
    }
  
    const userData = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      }
    })
  
    return userData
}

export const getTestimonials = cache(async () => {
  let response = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.testimonials.findMany({
      select: {
        id: true,
        content: true,
        name: true,
        designation: true,
        avatarUrl: true,
        companyLogoUrl: true
      },
    });
  } else {
    response = [
      {
        id: '1ebdc057-7cda-4536-bdec-269ae7ed4f84',
        content: 'Had the opportunity to work with Nikeshh. Friendly and approachable. Was astonished they way in which he managed to resolve issues which i faced during an implementation with lightning speed . His knowledge on the area he is working is commendable . He would surely be an asset in which ever organisation he is in.',
        name: 'Santhosh C S',
        designation: 'Manager',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: '4477d13a-1af7-4574-bd7b-18fc2bd36496',
        content: 'A dynamic enthusiastic person who is always eager to learn new things and explore a lot from them. His innovative approaches to solving problems are always good. Nice to work with you.',
        name: 'Felix Xavier F',
        designation: 'Manager',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: 'a99a2a3c-607e-4568-906c-15f7cd9c1542',
        content: 'He has shown a very keen interest to learn more and to share his knowledge with the rest of his colleagues. He has been at the forefront in all aspects relating to his work.  He is very dynamic and a cool person to work with.',
        name: 'Ponmanikandan Boothalingam',
        designation: 'Colleague',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: 'ace50c0f-a593-4005-ad7d-1b58991a4629',
        content: "I had the pleasure of working with Nikeshh on my lead generation and marketing efforts, and I couldn't be happier with the results. He helped me target my ideal audience and generate high-quality leads that converted into paying customers. His expertise and dedication to his craft is truly unmatched.",
        name: 'Paul',
        designation: 'Founder of ibConnects',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: 'dad67900-b6f3-4caf-a056-e3dc92afc550',
        content: 'I highly recommend him for front end development and wish him all the best in his endeavors',
        name: 'Kavitha Venkatachalam',
        designation: '',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: 'e508a2ce-9843-41a9-952e-ac334c66b007',
        content: "Nikeshh is a true expert in website development. He was able to take my vision and bring it to life with a beautiful and functional website that perfectly represents my business. I'm so impressed with his work and would absolutely work with them again in the future.",
        name: 'Ryan Smith',
        designation: 'Real estate SAAS on Blockchain product',
        avatarUrl: '',
        companyLogoUrl: ''
      },
      {
        id: 'fba45c95-6cce-473a-bdff-31f8ec8f8209',
        content: "I was blown away by the business growth strategies implemented by Nikeshh. He has a deep understanding of the market and was able to develop a plan that was tailored to my specific needs. Thanks to his guidance, my online business has seen tremendous success due to Search Engine optimization (SEO) and I couldn't be happier.",
        name: 'Jacob Hughes',
        designation: 'EdTech SAAS',
        avatarUrl: '',
        companyLogoUrl: ''
      }
    ];
  }
  return response;
})

export const getSkills = cache(async () => {
  let response = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.skills.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        imageUrl: true,
        points: true
      },
      orderBy: {
        category: 'asc',
      },
    });
  } else {
    response = [
      {
        id: '87adf1db-271f-4b69-a2c2-26baa2ef6135',
        name: 'Big Data Technologies',
        category: 'Data Science and Analytics',
        imageUrl: '',
        points: 'Hadoop | Spark | Kafka | Hive | HBase'
      },
      {
        id: 'e6c27a4b-2253-4d03-acb3-cb333c6d6dd2',
        name: 'Tools & Libraries',
        category: 'Data Science and Analytics',
        imageUrl: '',
        points: 'OpenAI | IBM Watson | Microsoft Azure AI'
      },
      {
        id: 'd83f61c5-aca5-41e5-a8db-f9ce7fd714a5',
        name: 'Frameworks',
        category: 'Data Science and Analytics',
        imageUrl: '',
        points: 'TensorFlow | PyTorch | Scikit-learn'
      },
      {
        id: 'c3fa167a-c0d2-4d09-9d24-445398d3e2c5',
        name: 'Manipulation & Analysis',
        category: 'Data Science and Analytics',
        imageUrl: '',
        points: 'Pandas | NumPy | SQL'
      },
      {
        id: '10694fb9-f614-40a5-bf6c-75144aa6f003',
        name: 'User Research & Testing',
        category: 'Design and Product Development',
        imageUrl: '',
        points: 'Usability testing tools | UserZoom | Optimal Workshop'
      },
      {
        id: '197a029c-cddd-4e8f-a14f-c51d81a327fa',
        name: 'Prototyping & Wireframing',
        category: 'Design and Product Development',
        imageUrl: '',
        points: 'Proto.io | Axure RP | Balsamiq'
      },
      {
        id: 'e45c82f1-f8d3-4f49-97a6-e0bd27737af0',
        name: 'Project Management',
        category: 'Design and Product Development',
        imageUrl: '',
        points: 'Jira | Trello | Asana'
      },
      {
        id: 'a4c46e8a-0141-47d2-9cc6-590d96514656',
        name: 'Collaboration',
        category: 'Design and Product Development',
        imageUrl: '',
        points: 'Slack | Microsoft Teams'
      },
      {
        id: '494557c2-2e68-46f3-b515-431ded4700c0',
        name: 'Design Tools',
        category: 'Design and Product Development',
        imageUrl: '',
        points: 'Adobe XD | Sketch | Figma | InVision'
      },
      {
        id: '93f84fd8-2508-4d25-9084-0ccd9fddb903',
        name: 'DevOps Monitoring',
        category: 'Development',
        imageUrl: '',
        points: 'Prometheus | Grafana | ELK Stack | Splunk'
      },
      {
        id: '3a898f84-b2f5-4f42-9789-55ce8201e9a2',
        name: 'Cloud Technologies',
        category: 'Development',
        imageUrl: '',
        points: 'AWS | Azure | GCP'
      },
      {
        id: '6878f45d-1def-4dba-9efe-7fbed5b1669d',
        name: 'Scripting & Automation',
        category: 'Development',
        imageUrl: '',
        points: 'Shell scripting | Python scripting'
      },
      {
        id: '4adf8afc-fd50-435d-b2cb-36c1b13f865d',
        name: 'API Integration',
        category: 'Development',
        imageUrl: '',
        points: 'RESTful APIs | GraphQL'
      },
      {
        id: 'fa276ef8-1ff7-4a5b-8c06-50ce1da8c681',
        name: 'Languages & Frameworks',
        category: 'Development',
        imageUrl: '',
        points: 'Python (Django, Flask) | JavaScript (Node.js) | Java (Spring Boot) | Ruby (Ruby on Rails) | PHP (Laravel) | C# (ASP.NET Core)'
      },
      {
        id: '8e44e67f-bf0c-4eb8-9aa4-f9a137ea2621',
        name: 'Web Development',
        category: 'Development',
        imageUrl: '',
        points: 'React.js | Angular | Vue.js | Ember.js'
      },
      {
        id: 'ef22d2cc-e011-4cc8-9391-3bc6bbbd25f9',
        name: 'Android Development',
        category: 'Development',
        imageUrl: '',
        points: 'Java | Kotlin | Android Studio'
      },
      {
        id: '23f13aad-4131-44b4-8c5d-ab80031cd710',
        name: 'Database Management',
        category: 'Development',
        imageUrl: '',
        points: 'SQL (MySQL, PostgreSQL, SQLite) | NoSQL (MongoDB, Cassandra, Redis)'
      },
      {
        id: '9fd2df92-bc7f-4de1-9aef-77abf63bf76c',
        name: 'iOS Development',
        category: 'Development',
        imageUrl: '',
        points: 'Swift | Objective-C | Xcode'
      },
      {
        id: 'a104ea3c-b053-459f-930f-e1a12cfbfb74',
        name: 'Client-side Technologies',
        category: 'Development',
        imageUrl: '',
        points: 'HTML5 | CSS3 | JavaScript (ES6+) | TypeScript'
      },
      {
        id: '3a79e8dd-69d7-46c7-8a16-ca9fd633e270',
        name: 'Version Control & CI/CD',
        category: 'Development',
        imageUrl: '',
        points: 'Git | GitHub | GitLab | Bitbucket | Jenkins | Travis CI | CircleCI'
      },
      {
        id: 'd1715acf-add1-44d9-8ae2-6aba67763fd0',
        name: 'Cross-platform Development',
        category: 'Development',
        imageUrl: '',
        points: 'React Native | Flutter | Xamarin'
      },
      {
        id: 'cec17a2e-a5ed-4418-ad36-450f9cd29fe4',
        name: 'Containerization and Orchestration',
        category: 'Development',
        imageUrl: '',
        points: 'Docker | Kubernetes'
      },
      {
        id: '93eb29cb-cc74-4b59-9b3d-8dbb096d8571',
        name: 'Game Development',
        category: 'Emerging Technologies',
        imageUrl: '',
        points: 'Unity | Unreal Engine | Godot Engine'
      },
      {
        id: 'ef830a49-486e-4692-8680-a8627979976a',
        name: 'Blockchain Development',
        category: 'Emerging Technologies',
        imageUrl: '',
        points: 'Ethereum | Hyperledger Fabric | Solidity'
      },
      {
        id: '89b1449d-d4bd-4914-ab05-2ea9fd29bc35',
        name: 'AR/VR Development',
        category: 'Emerging Technologies',
        imageUrl: '',
        points: 'Unity | Unreal Engine | ARKit | ARCore'
      },
      {
        id: 'fbc9dbf0-9615-4e7b-82cd-4c21656e2be6',
        name: 'Embedded Systems',
        category: 'Emerging Technologies',
        imageUrl: '',
        points: 'Raspberry Pi | Arduino | Microcontrollers'
      },
      {
        id: 'a586a2c6-4c3d-4417-b25b-d5eb4c9b6727',
        name: 'Performance Testing',
        category: 'Quality Assurance and Testing',
        imageUrl: '',
        points: 'JMeter | Gatling | LoadRunner'
      },
      {
        id: '0b3e6dc9-ae9e-4848-83ee-8e322d29ef1a',
        name: 'Behavior-Driven Development',
        category: 'Quality Assurance and Testing',
        imageUrl: '',
        points: 'Cucumber | Behave'
      },
      {
        id: '66041962-53fe-4b30-a6d8-4e1eb57013d9',
        name: 'Test Automation',
        category: 'Quality Assurance and Testing',
        imageUrl: '',
        points: 'Selenium, Cypress | Puppeteer'
      },
      {
        id: 'ae7ddde8-048b-4f42-b715-62f0aa0e3c48',
        name: 'Compliance Standards',
        category: 'Security and Compliance',
        imageUrl: '',
        points: 'GDPR | HIPAA | PCI DSS'
      },
      {
        id: '3fa6841d-89a5-4d39-a149-1d9944b812dc',
        name: 'Identity & Access Management',
        category: 'Security and Compliance',
        imageUrl: '',
        points: 'OAuth | JWT'
      },
      {
        id: '207ab8bd-415b-42f1-86ec-7960a54285da',
        name: 'Security Protocols',
        category: 'Security and Compliance',
        imageUrl: '',
        points: 'SSL/TLS | HTTPS'
      }
    ]
  }
  return response
})

export const getServices = cache(async () => {
  let response: any[] = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.services.findMany({
      select: {
        id: true,
        name: true,
        subtitle: true,
        category: true,
        subcategory: true
      },
      orderBy: {
        category: 'asc',
      },
    });
  } else {
    response = [];
  }
  return response
})

export const getProjects = cache(async () => {
  let response = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.projects.findMany({
      select: {
        id: true,
        name: true,
        subtitle: true,
        category: true
      },
      orderBy: {
        category: 'asc',
      },
    });
  } else {
    response = [
      {
        id: 'cc661afb-be4a-431c-9419-dae8d1afd791',
        name: 'VectorChat - PDF Interaction Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'AI'
      },
      {
        id: '03fcc2c3-555a-4f7d-ada1-c3d0fd70a4c6',
        name: 'MavenMind - AI SAAS Platform',
        subtitle: 'MavenMind is a versatile AI-powered SAAS platform designed to assist marketing agencies in website creation and automation. Streamline your marketing efforts with intuitive tools and harness the power of automation to drive growth and engagement.',
        category: 'AI'
      },
      {
        id: '07346be2-8021-4b1d-bb7e-0c9c1f83ee27',
        name: 'BalanceBuddy - Automated Bank Statement Collection',
        subtitle: 'BalanceBuddy automates the collection of bank account balance sheets and delivers them directly to your email inbox. Stay effortlessly updated on your financial status with BalanceBuddy.',
        category: 'Automation'
      },
      {
        id: '9ce6d882-73e8-494d-8d07-f5b019a2cbec',
        name: 'Glisten AI - AI-Powered Document Search and Website Customization',
        subtitle: 'Glisten AI offers advanced document search capabilities powered by AI, coupled with customizable website content management using Prismic CMS. Empower your business with intelligent insights and seamless content management.',
        category: 'CMS'
      },
      {
        id: 'd5ccb773-8361-41c3-9428-30b11970620c',
        name: 'HeritageHub - Heritage Data Retrieval System',
        subtitle: 'HeritageHub is a data retrieval system powered by Elastic Search, designed specifically for heritage sites. Retrieve historical data and artifacts swiftly, preserving cultural heritage effectively.',
        category: 'Enterprise System'
      },
      {
        id: '06ef2289-a795-4b7f-95c6-f6c7930a08ff',
        name: 'ChemCrafter - Comprehensive Calibration System',
        subtitle: "ChemCrafter is a comprehensive data analysis and recording system tailored for calibration processes in various industries. Ensure precision and compliance with ChemCrafter's advanced analytical tools.",
        category: 'Enterprise System'
      },
      {
        id: 'b170a7b2-0d6d-452c-b9f3-7dd6f174754a',
        name: 'RideRush - Cross-Platform Bike Taxi Booking App',
        subtitle: 'RideRush offers seamless bike taxi booking services across multiple platforms. Simplify urban transportation and enjoy efficient and eco-friendly travel experiences with RideRush.',
        category: 'Mobile App'
      },
      {
        id: 'd67a80a1-d956-4f4d-99bf-616765535c83',
        name: 'ChatterEase - Intelligent Chatbot App',
        subtitle: "ChatterEase is an intelligent chatbot app designed to provide personalized assistance and streamline communication. Enhance customer support and engagement with ChatterEase's AI-powered features.",
        category: 'Mobile App'
      },
      {
        id: '2fd19d3a-ed0f-4b69-a7e6-3edfb577ae90',
        name: 'SchoolSavvy - Student and Teacher Management System',
        subtitle: 'SchoolSavvy is an Android application designed for student and teacher management in educational institutions. Streamline administrative tasks and foster collaboration with SchoolSavvy.',
        category: 'Mobile App'
      },
      {
        id: 'ec65a0bf-f106-47c8-8775-ee72ecf1d4da',
        name: 'ShopShip - Comprehensive Ecommerce Solution',
        subtitle: 'ShopShip provides a comprehensive ecommerce solution, offering mobile apps and websites for food delivery and ecommerce ventures. Empower your business with ShopShip and elevate your online presence.',
        category: 'Mobile App'
      },
      {
        id: '85f9e6c8-30ba-4f9a-ba9c-dc868d732d26',
        name: 'FeastFinder - Food Delivery and Ecommerce Solution',
        subtitle: 'FeastFinder offers a complete food delivery and ecommerce solution, comprising mobile apps, websites, and analytics tools. Empower restaurants and food businesses to succeed in the digital landscape with FeastFinder.',
        category: 'Mobile App'
      },
      {
        id: '3ebd8236-4bcf-4004-aa62-44c55b053ed4',
        name: 'DineDeliver - Restaurant Management App',
        subtitle: "DineDeliver streamlines food ordering and delivery processes for restaurants. Enhance customer satisfaction and boost sales with DineDeliver's intuitive features.",
        category: 'Mobile App'
      },
      {
        id: 'b4b412a2-9d6d-4ade-ac8c-5d8b64943167',
        name: 'TaskTrack - Task Management App',
        subtitle: 'TaskTrack is a simple yet powerful todo app that helps users organize their tasks and boost productivity. Stay organized and focused on your goals with TaskTrack.',
        category: 'Mobile App'
      },
      {
        id: 'c1a5dcc8-9cdd-44f9-bb20-e4b9f7d1f054',
        name: 'PPE-Supply - Mask Manufacturing Company Website',
        subtitle: 'PPE-Supply is a Shopify website dedicated to a mask manufacturing company. Crafted with Liquid programming language, PPE-Supply showcases a range of protective products with a seamless shopping experience.',
        category: 'Shopify Website'
      },
      {
        id: '630e0c21-1c7c-4752-b8f6-2e50331ec81b',
        name: 'Spades Brand - Deodorant and Skincare Products Website',
        subtitle: 'Spades Brand presents a curated selection of deodorants and skincare products through its Shopify website. Designed with Liquid programming language, Spades Brand offers a refreshing and user-friendly online shopping experience.',
        category: 'Shopify Website'
      },
      {
        id: '6e7d3134-259b-45f5-8df0-39a80a1e05b6',
        name: 'Alt Interiors - Interior Design Company Website',
        subtitle: 'Alt Interiors is an interior design company website designed and written in Liquid programming language. Showcase your design expertise and inspire clients with stunning visuals and immersive experiences on Alt Interiors.',
        category: 'Shopify Website'
      },
      {
        id: 'b69c868f-8c14-4bff-8e38-4a1192a39422',
        name: 'TailwindTreasure - Tailwind CSS Template Pack',
        subtitle: 'TailwindTreasure offers a treasure trove of web components written in Tailwind CSS, simplifying integration into SAAS applications with minimal effort. Empower your development projects with TailwindTreasure and accelerate your time-to-market.',
        category: 'Templates & Themes'
      },
      {
        id: '33ecbef3-b8da-4f04-90c0-e7f4763d3a9f',
        name: 'StoreSpark - WordPress Theme for Ecommerce Websites',
        subtitle: 'StoreSpark is a WordPress theme designed for building various ecommerce websites with drag-and-drop features and simple no-code solutions. Empower businesses to create stunning online stores effortlessly with StoreSpark.',
        category: 'Templates & Themes'
      },
      {
        id: '7486e9e1-9ec6-4c43-8b66-25f1e414204d',
        name: 'PowerPlay - Shopify Theme for Ecommerce Websites',
        subtitle: 'PowerPlay is a robust Shopify theme equipped with drag-and-drop features and no-code solutions. Empower ecommerce businesses with customizable design elements and seamless storefront management capabilities.',
        category: 'Templates & Themes'
      },
      {
        id: 'a667055b-65f8-4501-bb41-9bce69822567',
        name: 'TalentQuest - Job Portal',
        subtitle: 'TalentQuest is a job portal powered by Next.js, MongoDB, and Elastic Search. Streamline the hiring process, connect employers with top talent, and empower job seekers to find their dream opportunities with ease, efficiency, and transparency.',
        category: 'Web App'
      },
      {
        id: '3917cd23-a1e3-40f3-9ac7-c8522c6d615e',
        name: 'MarketSquare - Software Digital Product Marketplace',
        subtitle: 'MarketSquare is a digital product marketplace powered by Next.js, MongoDB, and Elastic Search. Connect buyers and sellers of software products seamlessly, with advanced search and discovery features that facilitate transactions and drive revenue growth.',
        category: 'Web App'
      },
      {
        id: '7fda7d26-7bf5-4978-9913-d0a4f46e0580',
        name: 'BloodWatch - Real-Time Blood Bank Monitoring System',
        subtitle: 'BloodWatch is a comprehensive monitoring system used by blood banks to track blood inventory, donations, and transfusions in real-time. Ensure efficient blood supply management, enhance patient care, and save lives with BloodWatch.',
        category: 'Web App'
      },
      {
        id: '681f0056-3fda-4658-a1be-3c7eeda0f133',
        name: 'SalePoint - Point Of Sale Desktop Application',
        subtitle: 'SalePoint is a desktop-based point of sale (POS) system designed for retail businesses. Simplify sales transactions, inventory management, and customer interactions with SalePoint.',
        category: 'Web App'
      },
      {
        id: '5c7d3193-ec1c-462f-b957-a0b2f76ba0cf',
        name: 'Stream Lens - Event Monitoring System',
        subtitle: 'Stream Lens is an event monitoring system powered by Next.js, Kafka, Kinesis, and Event Hub. Monitor and analyze real-time data streams with precision and efficiency, empowering businesses to make informed decisions and respond swiftly to emerging opportunities and threats.',
        category: 'Web App'
      },
      {
        id: '3a261b6b-4913-4810-917f-1c5f42e96c6d',
        name: 'BloodTrack - Blood Bank Data Acquisition System',
        subtitle: 'BloodTrack is a data acquisition system used by blood banks to manage blood inventory, donations, and distribution. Streamline blood bank operations, ensure regulatory compliance, and save lives with BloodTrack.',
        category: 'Web App'
      },
      {
        id: 'ba5d1b74-ada4-4fec-a150-debf6f168b97',
        name: 'MedAppoint - Doctor Appointment Web App',
        subtitle: 'MedAppoint is a doctor appointment web app powered by Next.js, MongoDB, and Elastic Search. Streamline appointment scheduling, patient management, and medical records with MedAppoint, empowering healthcare providers and patients alike.',
        category: 'Web App'
      },
      {
        id: 'a39b6bc7-853c-47fa-b789-d4226676c4d5',
        name: 'HomeHive - Home Service Provider Platform',
        subtitle: 'HomeHive is a home service provider platform powered by Next.js, MongoDB, and Elastic Search. Connect homeowners with service professionals, schedule appointments, and manage bookings seamlessly with HomeHive.',
        category: 'Web App'
      },
      {
        id: 'c51b5bd9-a4ae-4888-9dd5-d10de1994465',
        name: 'StaySpot - House Booking Platform',
        subtitle: 'StaySpot is a house booking platform powered by Next.js, MongoDB, and Elastic Search. Discover, book, and manage vacation rentals and accommodations effortlessly with StaySpot.',
        category: 'Web App'
      },
      {
        id: 'ca51b4c0-9e0f-416f-afd8-9534eddbc765',
        name: 'VidGenius - Video Course Creation Platform',
        subtitle: 'VidGenius is a video course creation platform powered by Next.js, MongoDB, and Elastic Search. Create, publish, and monetize online courses effortlessly with VidGenius, empowering educators and learners to engage with high-quality educational content.',
        category: 'Web App'
      },
      {
        id: '6dbe63fb-ed4c-4d8a-ba91-79bc0d308542',
        name: 'TeamTrack - Employee Management System',
        subtitle: 'TeamTrack is a comprehensive employee management system designed to streamline HR processes and enhance workforce productivity. From attendance tracking to performance evaluation, TeamTrack empowers businesses to manage their human resources effectively.',
        category: 'Web App'
      },
      {
        id: 'cf930824-1d52-4246-9610-7629748cef1e',
        name: 'SiteSprint - SAAS Website Builder for Agencies',
        subtitle: 'SiteSprint is a SAAS website builder designed to streamline website development for agencies. Empower your team with intuitive tools for creating dynamic websites that captivate audiences and drive conversions.',
        category: 'Web App'
      },
      {
        id: '288bad70-94c4-426e-8d09-6ef867e25ac8',
        name: 'PropSmart - SAAS Application for Real Estate Agents',
        subtitle: 'PropSmart is a SAAS application that helps real estate agents close deals faster and manage leads effectively. With its intuitive interface and powerful features, PropSmart streamlines property listings, client communications, and transaction management, empowering real estate professionals to succeed in a competitive market.',
        category: 'Web App'
      },
      {
        id: '168c349e-d3b7-4cfb-9879-84fd448c161a',
        name: 'NextNews - Newsletter Creation and Email Marketing Platform',
        subtitle: 'NextNews is a newsletter creation and email marketing platform built with Next.js. Simplify newsletter creation, distribution, and analytics tracking with NextNews, empowering businesses to engage and nurture their audience effectively.',
        category: 'Web App'
      },
      {
        id: 'e45209fc-2057-4be4-8211-0267b3631dfa',
        name: 'FlowForge - SAAS Automation Builder for Business Owners',
        subtitle: 'FlowForge is a SAAS automation builder tailored for business owners, offering intuitive tools for streamlining workflows and automating repetitive tasks. Empower your team with customizable automation flows and drive operational efficiency with FlowForge.',
        category: 'Web App'
      },
      {
        id: '070ae99c-ef6b-44b5-89d8-2202708935cb',
        name: 'DocGenius - Documentation Platform',
        subtitle: 'DocGenius is a documentation platform that enables users to create software documentation with zero to little effort, powered by easy-to-use drag-and-drop builders. Streamline the documentation process, empower collaboration, and enhance productivity with DocGenius.',
        category: 'Web App'
      }
    ]
  }
  return response
})

export const getBlogs = cache(async () => {
  let response = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.blogs.findMany({
      select: {
        id: true,
        title: true,
        subtitle: true,
        imageUrl: true,
        category: true
      },
    });
  } else {
    response = [
      {
        id: '0b5df545-cb7c-498c-81b1-71cdd5a5e83a',
        title: 'Top 7 No-Code AI Platforms That Are Making ML Accessible',
        subtitle: 'No-code AI platforms are a hot trend that can be leveraged by businesses to help them automate tasks and...',
        imageUrl: '/blogs/blog1.png',
        category: 'AI'
      },
      {
        id: '0dfd3d74-89bc-43cf-9b40-123bbfcd005f',
        title: 'Edge AI for Secure AI Applications That are highly important',
        subtitle: 'Edge AI is the future of artificial intelligence. This blog post will explore what Edge AI is and why it and why it could be...',
        imageUrl: '/blogs/blog2.png',
        category: 'AI'
      },
      {
        id: '135ac670-7057-47d5-92fd-55110b6143e7',
        title: 'Geospatial AI: A Data-Centric Approach for Growth & Development',
        subtitle: 'GeospatialAI or GeoAI is an evolving field aiming to help organize, process, and analyze spatial big data with...',
        imageUrl: '/blogs/blog3.png',
        category: 'AI'
      }
    ]
  }
  return response
})