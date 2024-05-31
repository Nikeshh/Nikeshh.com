import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export const getAuthUserDetails = async () => {
  const user = await currentUser();
  if (!user) {
    return;
  }

  const userData = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return userData;
};

export const getInfiniteProducts = () => {
  return [];
};

export const getTestimonials = cache(() => {
  let response = [
    {
      id: "1ebdc057-7cda-4536-bdec-269ae7ed4f84",
      content:
        "Had the opportunity to work with Nikeshh. Friendly and approachable. Was astonished they way in which he managed to resolve issues which i faced during an implementation with lightning speed . His knowledge on the area he is working is commendable . He would surely be an asset in which ever organisation he is in.",
      name: "Santhosh C S",
      designation: "Manager",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "4477d13a-1af7-4574-bd7b-18fc2bd36496",
      content:
        "A dynamic enthusiastic person who is always eager to learn new things and explore a lot from them. His innovative approaches to solving problems are always good. Nice to work with you.",
      name: "Felix Xavier F",
      designation: "Manager",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "a99a2a3c-607e-4568-906c-15f7cd9c1542",
      content:
        "He has shown a very keen interest to learn more and to share his knowledge with the rest of his colleagues. He has been at the forefront in all aspects relating to his work.  He is very dynamic and a cool person to work with.",
      name: "Ponmanikandan Boothalingam",
      designation: "Colleague",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "ace50c0f-a593-4005-ad7d-1b58991a4629",
      content:
        "I had the pleasure of working with Nikeshh on my lead generation and marketing efforts, and I couldn't be happier with the results. He helped me target my ideal audience and generate high-quality leads that converted into paying customers. His expertise and dedication to his craft is truly unmatched.",
      name: "Paul",
      designation: "Founder of ibConnects",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "dad67900-b6f3-4caf-a056-e3dc92afc550",
      content:
        "I highly recommend him for front end development and wish him all the best in his endeavors",
      name: "Kavitha Venkatachalam",
      designation: "",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "e508a2ce-9843-41a9-952e-ac334c66b007",
      content:
        "Nikeshh is a true expert in website development. He was able to take my vision and bring it to life with a beautiful and functional website that perfectly represents my business. I'm so impressed with his work and would absolutely work with them again in the future.",
      name: "Ryan Smith",
      designation: "Real estate SAAS on Blockchain product",
      avatarUrl: "",
      companyLogoUrl: "",
    },
    {
      id: "fba45c95-6cce-473a-bdff-31f8ec8f8209",
      content:
        "I was blown away by the business growth strategies implemented by Nikeshh. He has a deep understanding of the market and was able to develop a plan that was tailored to my specific needs. Thanks to his guidance, my online business has seen tremendous success due to Search Engine optimization (SEO) and I couldn't be happier.",
      name: "Jacob Hughes",
      designation: "EdTech SAAS",
      avatarUrl: "",
      companyLogoUrl: "",
    },
  ];
  return response;
});

export const getSkills = cache(() => {
  let techView = [
    {
      name: "Languages & Frameworks",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I develop robust applications using a variety of programming languages and frameworks to meet your specific needs.",
      points:
        "Technologies I Use: | ➮ Python: Django, Flask | ➮ JavaScript: Node.js | ➮ Java: Spring Boot | ➮ Ruby: Ruby on Rails | ➮ PHP: Laravel | ➮ C#: ASP.NET Core",
      view: "Technical Perspective",
    },
    {
      name: "Containerization and Orchestration",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I leverage containerization and orchestration to ensure scalable, efficient, and consistent environments for your applications.",
      points:
        "Technologies I Use: | ➮ Containerization: Docker | ➮ Orchestration: Kubernetes",
      view: "Technical Perspective",
    },
    {
      name: "Scripting & Automation",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I automate processes and enhance productivity through scripting and automation solutions.",
      points:
        "Technologies I Use: | ➮ Scripting Languages: Shell scripting, Python scripting",
      view: "Technical Perspective",
    },
    {
      name: "Database Management",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I manage and optimize databases to ensure reliable, efficient, and scalable data storage solutions.",
      points:
        "Technologies I Use: | ➮ SQL Databases: MySQL, PostgreSQL, SQLite | ➮ NoSQL Databases: MongoDB, Cassandra, Redis",
      view: "Technical Perspective",
    },
    {
      name: "Version Control & CI/CD",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I implement version control and CI/CD pipelines to streamline development, improve collaboration, and accelerate delivery.",
      points:
        "Technologies I Use: | ➮ Version Control: Git, GitHub, GitLab, Bitbucket | ➮ CI/CD Tools: Jenkins, Travis CI, CircleCI",
      view: "Technical Perspective",
    },
    {
      name: "Cloud Technologies",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I utilize cloud services to enhance scalability, flexibility, and cost-efficiency for your applications.",
      points:
        "Technologies I Use: | ➮ Cloud Providers: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) | ➮ Services: Compute (EC2, Lambda), Storage (S3, Azure Blob Storage), Databases (RDS, Firestore)",
      view: "Technical Perspective",
    },
    {
      name: "DevOps Monitoring",
      category: "Development, Deployment & Maintenance",
      imageUrl: "",
      description:
        "I implement monitoring and logging solutions to ensure the reliability and performance of your applications.",
      points:
        "Technologies I Use: | ➮ Monitoring Tools: Prometheus, Grafana, Nagios, Datadog | ➮ Logging Tools: ELK Stack (Elasticsearch, Logstash, Kibana), Splunk, Fluentd",
      view: "Technical Perspective",
    },
    {
      name: "Data Manipulation & Analysis",
      category: "Data Science and Analytics",
      imageUrl: "",
      description:
        "I provide comprehensive data manipulation and analysis to help you derive actionable insights and make data-driven decisions.",
      points: "Technologies I Use: | ➮ Pandas | ➮ NumPy | ➮ SQL",
      view: "Technical Perspective",
    },
    {
      name: "Big Data Technologies",
      category: "Data Science and Analytics",
      imageUrl: "",
      description:
        "I utilize big data technologies to manage and analyze large datasets, enabling you to uncover trends and gain a competitive edge.",
      points:
        "Technologies I Use: | ➮ Hadoop | ➮ Spark | ➮ Kafka | ➮ Hive | ➮ HBase",
      view: "Technical Perspective",
    },
    {
      name: "AI & Machine Learning Frameworks",
      category: "Data Science and Analytics",
      imageUrl: "",
      description:
        "I implement AI and machine learning frameworks to build intelligent systems that enhance your business capabilities.",
      points: "Technologies I Use: | ➮ TensorFlow | ➮ PyTorch | ➮ Scikit-learn",
      view: "Technical Perspective",
    },
    {
      name: "AI Tools & Libraries",
      category: "Data Science and Analytics",
      imageUrl: "",
      description:
        "I leverage advanced AI tools and libraries to create innovative solutions that solve complex problems.",
      points:
        "Technologies I Use: | ➮ OpenAI | ➮ IBM Watson | ➮ Microsoft Azure AI",
      view: "Technical Perspective",
    },
    {
      name: "Test Automation",
      category: "Quality Assurance and Testing",
      imageUrl: "",
      description:
        "I design and implement test automation frameworks to ensure your applications are reliable and bug-free.",
      points: "Technologies I Use: | ➮ Selenium | ➮ Cypress | ➮ Puppeteer",
      view: "Technical Perspective",
    },
    {
      name: "Behavior-Driven Development",
      category: "Quality Assurance and Testing",
      imageUrl: "",
      description:
        "I apply behavior-driven development practices to create tests that align with your business requirements.",
      points: "Technologies I Use: | ➮ Cucumber | ➮ Behave",
      view: "Technical Perspective",
    },
    {
      name: "Performance Testing",
      category: "Quality Assurance and Testing",
      imageUrl: "",
      description:
        "I conduct performance testing to ensure your applications run smoothly under high load and stress conditions.",
      points: "Technologies I Use: | ➮ JMeter | ➮ Gatling | ➮ LoadRunner",
      view: "Technical Perspective",
    },
    {
      name: "Identity & Access Management",
      category: "Security and Compliance",
      imageUrl: "",
      description:
        "I implement identity and access management solutions to secure your applications and protect sensitive data.",
      points: "Technologies I Use: | ➮ OAuth | ➮ JWT",
      view: "Technical Perspective",
    },
    {
      name: "Security Protocols",
      category: "Security and Compliance",
      imageUrl: "",
      description:
        "I apply industry-standard security protocols to safeguard your communications and data.",
      points: "Technologies I Use: | ➮ SSL/TLS | ➮ HTTPS",
      view: "Technical Perspective",
    },
    {
      name: "Compliance Standards",
      category: "Security and Compliance",
      imageUrl: "",
      description:
        "I ensure your applications meet regulatory requirements and industry standards for data protection and privacy.",
      points: "Technologies I Use: | ➮ GDPR | ➮ HIPAA | ➮ PCI DSS",
      view: "Technical Perspective",
    },
    {
      name: "Blockchain Development",
      category: "Emerging Technologies",
      imageUrl: "",
      description:
        "I develop blockchain solutions to enhance transparency, security, and efficiency in your business processes.",
      points:
        "Technologies I Use: | ➮ Ethereum | ➮ Hyperledger Fabric | ➮ Solidity",
      view: "Technical Perspective",
    },
    {
      name: "AR/VR Development",
      category: "Emerging Technologies",
      imageUrl: "",
      description:
        "I create immersive AR/VR experiences that transform how users interact with your products and services.",
      points:
        "Technologies I Use: | ➮ Unity | ➮ Unreal Engine | ➮ ARKit | ➮ ARCore",
      view: "Technical Perspective",
    },
    {
      name: "Design Tools",
      category: "Design and Product Development",
      imageUrl: "",
      description:
        "I utilize top design tools to create visually appealing and user-friendly interfaces for your applications.",
      points:
        "Technologies I Use: | ➮ Adobe XD | ➮ Sketch | ➮ Figma | ➮ InVision",
      view: "Technical Perspective",
    },
    {
      name: "Prototyping & Wireframing",
      category: "Design and Product Development",
      imageUrl: "",
      description:
        "I design detailed prototypes and wireframes to visualize your product's structure and functionality.",
      points: "Technologies I Use: | ➮ Proto.io | ➮ Axure RP | ➮ Balsamiq",
      view: "Technical Perspective",
    },
    {
      name: "User Research & Testing",
      category: "Design and Product Development",
      imageUrl: "",
      description:
        "I conduct user research and testing to gather insights and improve the user experience of your products.",
      points:
        "Technologies I Use: | ➮ Usability testing tools | ➮ UserZoom | ➮ Optimal Workshop",
      view: "Technical Perspective",
    },
    {
      name: "Project Management",
      category: "Design and Product Development",
      imageUrl: "",
      description:
        "I manage projects efficiently using advanced tools to ensure timely delivery and high-quality results.",
      points: "Technologies I Use: | ➮ Jira | ➮ Trello | ➮ Asana",
      view: "Technical Perspective",
    },
    {
      name: "Collaboration",
      category: "Design and Product Development",
      imageUrl: "",
      description:
        "I use collaboration tools to enhance team communication and streamline project workflows.",
      points: "Technologies I Use: | ➮ Slack | ➮ Microsoft Teams",
      view: "Technical Perspective",
    },
  ];

  let businessView = [
    {
      name: "Web App Development",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I can transform your ideas into dynamic and user-friendly web applications tailored to meet your business needs.",
      points:
        "Technologies I use: | ➮ Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js | ➮ Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel)",
      view: "Business Perspective",
    },
    {
      name: "Website Development (Landing / Static websites)",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I can create responsive and visually appealing websites that provide an engaging user experience and reflect your brand's identity.",
      points:
        "Technologies I use: | ➮ Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js | ➮ Back-end: PHP (WordPress, Laravel), Python (Django, Flask), JavaScript (Node.js), Ruby (Ruby on Rails)",
      view: "Business Perspective",
    },
    {
      name: "Chatbot Development And Integration",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I can develop intelligent chatbots that enhance customer interaction and streamline your business processes.",
      points:
        "Technologies I use: | ➮ Languages & Frameworks: Python (NLTK, Rasa), JavaScript (Node.js), Microsoft Bot Framework | ➮ Platforms: Dialogflow, IBM Watson, Amazon Lex, Microsoft Azure Bot Services",
      view: "Business Perspective",
    },
    {
      name: "Automation for various businesses",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I can implement automation solutions that optimize workflows, reduce operational costs, and increase productivity for your business.",
      points:
        "Technologies I use: | ➮ Tools & Frameworks: Python (Selenium, Automation Anywhere), RPA (UiPath, Blue Prism), JavaScript (Puppeteer), Bash/Shell scripting | ➮ Platforms: Zapier, Integromat, Microsoft Power Automate",
      view: "Business Perspective",
    },
    {
      name: "Mobile App Development",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I can design and develop mobile apps that deliver a seamless and engaging user experience on both iOS and Android platforms.",
      points:
        "Technologies I Use: | ➮ Languages & Frameworks: Swift, Objective-C (iOS), Kotlin, Java (Android), React Native, Flutter, Xamarin | ➮ Development Tools: Xcode, Android Studio, Visual Studio Code",
      view: "Business Perspective",
    },
    {
      name: "API Integration",
      category: "Development for Business Solutions",
      imageUrl: "",
      description:
        "I specialize in integrating APIs to enhance functionality, streamline processes, and enable seamless data exchange across your applications.",
      points:
        "Technologies I Use: | ➮ Languages & Tools: Python (Requests, Flask), JavaScript (Axios, Express), Java (Spring Boot, Retrofit), PHP (Guzzle) | ➮ API Standards: REST, GraphQL, SOAP",
      view: "Business Perspective",
    },
    {
      name: "Search Engine Optimization (SEO)",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I optimize your website to improve search engine rankings, increase organic traffic, and enhance online visibility.",
      points:
        "Techniques I Use: | ➮ On-Page SEO: Keyword research, Meta tags optimization, Content optimization, Internal linking | ➮ Off-Page SEO: Link building, Social media marketing, Guest blogging | ➮ Technical SEO: Site speed optimization, Mobile-friendliness, XML sitemaps, Structured data (Schema markup)",
      view: "Business Perspective",
    },
    {
      name: "Pay-Per-Click (PPC) Advertising",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I create and manage targeted PPC campaigns to drive immediate traffic, increase conversions, and maximize your advertising ROI.",
      points:
        "Platforms I Use: | ➮ Advertising Networks: Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads | ➮ Techniques: Keyword research, Ad copywriting, Bid management, A/B testing, Performance analytics",
      view: "Business Perspective",
    },
    {
      name: "Content Marketing",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I create and promote high-quality content that engages your audience, builds brand authority, and drives organic traffic.",
      points:
        "Strategies I Use: | ➮ Content Creation: Blog posts, Articles, Infographics, Videos, E-books | ➮ Content Promotion: Social media marketing, Email marketing, Influencer outreach | ➮ SEO Integration: Keyword optimization, Content structuring, Meta descriptions, Link building",
      view: "Business Perspective",
    },
    {
      name: "Social Media Marketing",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I can develop and execute social media strategies that increase brand awareness, engage your audience, and drive conversions.",
      points:
        "Platforms I Use: | ➮ Major Platforms: Facebook, Instagram, Twitter, LinkedIn, TikTok | ➮ Techniques: Content creation and curation, Social media advertising, Community management, Analytics and reporting",
      view: "Business Perspective",
    },
    {
      name: "Email Marketing",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I craft and implement email campaigns that nurture leads, engage customers, and drive conversions.",
      points:
        "Techniques I Use: | ➮ Campaign Types: Newsletters, Promotional emails, Automated drip campaigns, Transactional emails | ➮ Tools & Platforms: Mailchimp, SendGrid, Constant Contact, HubSpot, ActiveCampaign | ➮ Strategies: List segmentation, Personalization, A/B testing, Performance analytics",
      view: "Business Perspective",
    },
    {
      name: "Affiliate Marketing",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I manage affiliate marketing programs that expand your reach, increase sales, and build strong partnerships.",
      points:
        "Strategies I Use: | ➮ Program Management: Recruiting and onboarding affiliates, Affiliate communication, Performance tracking | ➮ Tools & Platforms: ShareASale, CJ Affiliate, Rakuten Marketing, Impact Radius, Amazon Associates | ➮ Techniques: Commission structuring, Promotional support, Analytics and reporting, Compliance monitoring",
      view: "Business Perspective",
    },
    {
      name: "Conversion Rate Optimization (CRO)",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I optimize your website and marketing strategies to increase conversions and maximize ROI.",
      points:
        "Techniques I Use: | ➮ Data Analysis: User behavior analytics, Heatmaps, A/B testing, Funnel analysis | ➮ User Experience (UX): Landing page optimization, User interface improvements, Simplified navigation, Mobile optimization | ➮ Content Strategy: Persuasive copywriting, Call-to-action (CTA) enhancement, Trust-building elements, Testimonials and reviews",
      view: "Business Perspective",
    },
    {
      name: "Web Analytics and Reporting",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I provide in-depth web analytics and reporting to track performance, understand user behavior, and guide data-driven decisions.",
      points:
        "Tools I Use: | ➮ Analytics Platforms: Google Analytics, Adobe Analytics, Matomo, Mixpanel | ➮ Reporting Tools: Google Data Studio, Tableau, Power BI | ➮ Techniques: KPI tracking, Custom dashboards, Conversion tracking, Traffic source analysis",
      view: "Business Perspective",
    },
    {
      name: "Influencer Marketing",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I connect your brand with influential voices to amplify your message, reach target audiences, and drive engagement.",
      points:
        "Strategies I Use: | ➮ Influencer Identification: Research and vetting, Audience alignment, Authenticity assessment | ➮ Campaign Management: Partnership negotiation, Content collaboration, Performance tracking | ➮ Platforms & Tools: Instagram, YouTube, TikTok, Influencer marketing platforms (e.g., AspireIQ, Upfluence)",
      view: "Business Perspective",
    },
    {
      name: "Online Reputation Management",
      category: "Digital Marketing",
      imageUrl: "",
      description:
        "I manage and improve your online reputation to build trust, address concerns, and enhance your brand's image.",
      points:
        "Techniques I Use: | ➮ Monitoring & Analysis: Social media monitoring, Review tracking, Sentiment analysis | ➮ Engagement & Response: Addressing negative feedback, Promoting positive reviews, Engaging with customers | ➮ Content Strategy: Positive content creation, SEO for reputation management, Crisis management plans",
      view: "Business Perspective",
    },
  ];
  return [...techView, ...businessView];
});

export const getServices = cache(async () => {
  let response: any[] = [];
  if (process.env.QUERY_FROM_DB) {
    response = await db.services.findMany({
      select: {
        id: true,
        name: true,
        subtitle: true,
        category: true,
        subcategory: true,
      },
      orderBy: {
        category: "asc",
      },
    });
  } else {
    response = [];
  }
  return response;
});

const businessPrespectiveProjects = [
  {
    id: "alt-interiors",
    name: "ALT Interiors",
    subtitle:
      "ALT | Interiors specializes in award-winning interior design, expert home staging, and curated home furnishings. Their experienced team blends beauty and functionality to create personalized, impactful spaces. Trust them to elevate your home and ensure it stands out in the real estate market.",
    category: "Ecommerce",
    link: "https://altinteriors.ca/",
    imageUrl: "/projects/alt-interiors.png",
    tags: ["Shopify", "Liquid", "Ecommerce"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">ALT | Interiors</h1>
      <p className="mb-4">ALT | Interiors specializes in award-winning interior design, expert home staging, and curated home furnishings. Their experienced team blends beauty and functionality to create personalized, impactful spaces. Trust them to elevate your home and ensure it stands out in the real estate market.</p>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Shopify</td>
                  <td className="border px-4 py-2">A robust e-commerce platform powering our online store.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Liquid</td>
                  <td className="border px-4 py-2">A flexible template language used for building our Shopify themes and customizing our website.</td>
              </tr>
          </tbody>
      </table>
    </div>
    `,
  },
  {
    id: "skinessence",
    name: "SkinEssence",
    subtitle:
      "Skin Essence Organics, a pioneer in organic skincare developed over 25 years ago. Their journey began with a deep commitment to studying and balancing organic oils and extracts to achieve the best possible results for healthy skin.",
    category: "Ecommerce",
    link: "https://www.skinessence.ca/",
    imageUrl: "/projects/skin-essence.png",
    tags: ["Shopify", "Liquid", "Ecommerce"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Skin Essence Organics</h1>
        <p className="mb-4"><strong>Skin Essence Organics</strong>, a pioneer in organic skincare developed over 25 years ago. Their journey began with a deep commitment to studying and balancing organic oils and extracts to achieve the best possible results for healthy skin.</p>

        <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
        <table className="table-auto w-full mb-6">
            <thead>
                <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Technology</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Shopify</td>
                    <td className="border px-4 py-2">A powerful e-commerce platform that powers our online store, providing a seamless shopping experience.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Liquid</td>
                    <td className="border px-4 py-2">The flexible and robust template language used to customize our Shopify themes and enhance the website's functionality.</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
  },
  {
    id: "spades-brand",
    name: "Spades Brand",
    subtitle:
      "Spades Brand No. 15, a premium skincare brand created in Los Angeles and brought to life in Canada. After years of researching organic ingredients and using industry-leading extraction methods, they tested fourteen different prototypes to arrive at our unique and effective formulation, lucky No. 15.",
    category: "Ecommerce",
    link: "https://www.spadesbrand.com/",
    imageUrl: "/projects/spades-brand.png",
    tags: ["Shopify", "Liquid", "Ecommerce"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Spades Brand No. 15</h1>
      <p className="mb-4"><strong>Spades Brand No. 15</strong>, a premium skincare brand created in Los Angeles and brought to life in Canada. After years of researching organic ingredients and using industry-leading extraction methods, they tested fourteen different prototypes to arrive at our unique and effective formulation, lucky No. 15.</p>

      <h2 className="text-2xl font-semibold text-purple-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Shopify</td>
                  <td className="border px-4 py-2">The robust e-commerce platform that powers our online store, ensuring a seamless shopping experience.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Liquid</td>
                  <td className="border px-4 py-2">The flexible and powerful template language used to customize our Shopify themes and enhance website functionality.</td>
              </tr>
          </tbody>
      </table>
  </div>
    `,
  },
  {
    id: "ppe-supply-canada",
    name: "PPE Supply Canada",
    subtitle:
      "PPE Supply Canada is your go-to retailer for high-quality N95/KN95 masks and rapid test kits. Our team is dedicated to keeping communities in Canada and the US safe by providing reliable personal protective equipment.",
    category: "Ecommerce",
    link: "https://www.ppe-supply.com/",
    imageUrl: "/projects/ppe-supply-canada.png",
    tags: ["Shopify", "Liquid", "Ecommerce"],
    view: "Business Perspective",
    content: `
      <div className="container mx-auto p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">PPE Supply Canada</h1>
        <p className="mb-4"><strong>PPE Supply Canada</strong> is your go-to retailer for high-quality N95/KN95 masks and rapid test kits. Our team is dedicated to keeping communities in Canada and the US safe by providing reliable personal protective equipment.</p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Technologies</h2>
        <table className="table-auto w-full mb-6">
            <thead>
                <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Technology</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Shopify</td>
                    <td className="border px-4 py-2">The robust e-commerce platform that powers our online store, ensuring a seamless shopping experience.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Liquid</td>
                    <td className="border px-4 py-2">The flexible and powerful template language used to customize our Shopify themes and enhance website functionality.</td>
                </tr>
            </tbody>
        </table>
      </div>
    `,
  },
  {
    id: "learnify---lms-platform",
    name: "Learnify - LMS Platform",
    subtitle:
      "Learnify an advanced Learning Management System (LMS). Built with Nextjs and MySQL, platform stands out!",
    category: "Web App",
    link: "https://lms-platform-red.vercel.app/",
    imageUrl: "/projects/lms-platform.png",
    tags: ["LMS", "Nextjs", "React", "Mux", "MySQL"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Learnify LMS Platform</h1>
        <p className="mb-4">Learnify an advanced Learning Management System (LMS)</p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Technologies</h2>
        <table className="table-auto w-full mb-6">
            <thead>
                <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Technology</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Next.js 13</td>
                    <td className="border px-4 py-2">A modern React framework for optimal performance and scalability.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Stripe</td>
                    <td className="border px-4 py-2">Secure and easy-to-use payment processing.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Mux</td>
                    <td className="border px-4 py-2">High-quality video and data streaming.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">UploadThing</td>
                    <td className="border px-4 py-2">Effortless uploading of multimedia content.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">TIDBCloud</td>
                    <td className="border px-4 py-2">Robust and scalable database management.</td>
                </tr>
            </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Features Overview</h2>
        <table className="table-auto w-full mb-6">
            <thead>
              <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Course Interaction</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Browse & Filter Courses</li>
                            <li>Purchase Courses using Stripe</li>
                            <li>Mark Chapters as Completed or Uncompleted</li>
                            <li>Progress Tracking</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Student Experience</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Student Dashboard</li>
                            <li>Progress Calculation</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Educator Tools</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Teacher Mode</li>
                            <li>Course Creation</li>
                            <li>Drag & Drop Chapter Reordering</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Content Management</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Multimedia Uploads</li>
                            <li>Video Processing & Playback</li>
                            <li>Rich Text Editor</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Technical Infrastructure</h2>
        <table className="table-auto w-full mb-6">
            <thead>
            <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Component</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Authentication</td>
                    <td className="border px-4 py-2">Secure login and user management with Clerk.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">ORM</td>
                    <td className="border px-4 py-2">Simplified database interactions using Prisma.</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Database</td>
                    <td className="border px-4 py-2">Reliable MySQL database managed by Planetscale.</td>
                </tr>
            </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose Learnify?</h2>
        <ul className="list-disc ml-6 mb-6">
            <li><strong>User-Centric Design</strong>: Built with the user in mind for an intuitive and engaging experience.</li>
            <li><strong>Scalability</strong>: Designed to grow with your needs, supporting thousands of users seamlessly.</li>
            <li><strong>Security</strong>: Top-tier security practices to protect your data and transactions.</li>
            <li><strong>Performance</strong>: Optimized for speed and reliability to ensure a smooth user experience.</li>
        </ul>
    </div>`,
  },
  {
    id: "karking",
    name: "Karking",
    subtitle:
      "Karking is India’s finest domestic parking sharing service company. They offer efficient parking solutions to people in all locations, enabling both users and landlords to benefit from our platform.",
    category: "Website",
    link: "https://karking.in/",
    imageUrl: "/projects/karking.png",
    tags: ["ReactJS", "Node.js", "Mongodb", "Stripe", "AWS"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
    <h1 className="text-3xl font-bold text-green-600 mb-6">Karking</h1>
    <p className="mb-4"><strong>Karking</strong> is India’s finest domestic parking sharing service company. They offer efficient parking solutions to people in all locations, enabling both users and landlords to benefit from our platform.</p>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
    <table className="table-auto w-full mb-6">
        <thead>
            <tr className="bg-gray-200 text-black">
                <th className="px-4 py-2">Technology</th>
                <th className="px-4 py-2">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-4 py-2">React Native</td>
                <td className="border px-4 py-2">Cross-platform mobile app development for both iOS and Android, ensuring a seamless user experience.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Node.js</td>
                <td className="border px-4 py-2">Backend server for handling data and transactions efficiently.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">MongoDB</td>
                <td className="border px-4 py-2">Database solution for storing user data, parking slots, and transaction records.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Stripe</td>
                <td className="border px-4 py-2">Secure and reliable payment processing for cashless transactions.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">AWS</td>
                <td className="border px-4 py-2">Cloud services for hosting, ensuring high availability and scalability.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Features</h2>
    <table className="table-auto w-full mb-6">
        <thead>
        <tr className="bg-gray-200 text-black">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-4 py-2">For Users</td>
                <td className="border px-4 py-2">
                    <ul className="list-disc ml-6">
                        <li>Quick Parking: Find parking slots instantly in dense areas, saving time and reducing stress.</li>
                        <li>Affordability: Avoid paying hefty prices for parking. Enjoy budget-friendly parking options.</li>
                        <li>Cashless Transactions: Use the inbuilt wallet system for hassle-free payment processes.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="border px-4 py-2">For Landlords</td>
                <td className="border px-4 py-2">
                    <ul className="list-disc ml-6">
                        <li>Monetize Your Land: Start earning money with your unused lands by registering on the Karking app, even if the space is small.</li>
                        <li>Passive Income: Earn money without any hard work. Let your empty spaces generate income for you.</li>
                        <li>Easy Withdrawal: Withdraw the money earned by your space directly to your bank account without hassle.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">Why Choose Karking?</h2>
    <ul className="list-disc ml-6 mb-6">
        <li><strong>Efficient Solutions</strong>: Quick and easy parking solutions for users, monetization opportunities for landlords.</li>
        <li><strong>User-Friendly App</strong>: Seamless user experience with our cross-platform mobile app.</li>
        <li><strong>Secure Payments</strong>: Reliable and secure payment processing with Stripe integration.</li>
        <li><strong>Community Focus</strong>: Helping communities utilize their spaces efficiently and economically.</li>
    </ul>
</div>
    `,
  },
  {
    id: "immunuts",
    name: "Immunuts",
    subtitle:
      "Immunuts is dedicated to sourcing, manufacturing, and supplying the highest quality dried fruits. They bring families together through our fine food, crafted for your wellbeing.",
    category: "Website",
    link: "https://immunuts.in/",
    imageUrl: "/projects/immunuts.png",
    tags: ["Shopify", "Liquid", "Stripe", "Mongodb", "ExpressJS"],
    view: "Business Perspective",
    content: `
      <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Immunuts</h1>
      <p className="mb-4"><strong>Immunuts</strong> is dedicated to sourcing, manufacturing, and supplying the highest quality dried fruits. They bring families together through our fine food, crafted for your wellbeing.</p>

      <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Shopify</td>
                  <td className="border px-4 py-2">Our robust e-commerce platform that powers our online store, ensuring a seamless shopping experience.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Liquid</td>
                  <td className="border px-4 py-2">The flexible and powerful template language used to customize our Shopify themes and enhance website functionality.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">React</td>
                  <td className="border px-4 py-2">Provides a dynamic and responsive user interface for an engaging shopping experience.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Node.js</td>
                  <td className="border px-4 py-2">Backend server for efficient handling of data and transactions.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">MongoDB</td>
                  <td className="border px-4 py-2">Database solution for storing product information, user data, and transaction records.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Stripe</td>
                  <td className="border px-4 py-2">Secure and reliable payment processing for smooth transactions.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">AWS</td>
                  <td className="border px-4 py-2">Cloud services for hosting, ensuring high availability and scalability.</td>
              </tr>
          </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Features</h2>
      <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">High-Quality Dried Fruits</td>
                  <td className="border px-4 py-2">
                      <ul className="list-disc ml-6">
                          <li>Superior Sourcing: We grow the fruit we dry and market, ensuring complete control over quality from the initial growing phase to the final packaging and delivery.</li>
                          <li>Health Benefits: Our dried fruits are packed with nutritional benefits, offering a healthy snack option for everyone.</li>
                          <li>Wide Variety: Offering a diverse selection of dried fruits to cater to different tastes and preferences.</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Customer-Centric Services</td>
                  <td className="border px-4 py-2">
                      <ul className="list-disc ml-6">
                          <li>Seamless Shopping Experience: Our user-friendly online store, powered by Shopify and enhanced with Liquid, ensures an enjoyable and hassle-free shopping experience.</li>
                          <li>Secure Payments: Utilize Stripe for secure and smooth payment processes.</li>
                          <li>Fast Delivery: Efficient delivery systems to ensure your dried fruits arrive fresh and on time.</li>
                      </ul>
                  </td>
              </tr>
          </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-green-500 mb-4">Why Choose Immunuts?</h2>
      <ul className="list-disc ml-6 mb-6">
          <li><strong>Commitment to Quality</strong>: From growing to packaging, we ensure the highest quality dried fruits.</li>
          <li><strong>Customer Focused</strong>: Dedicated to providing excellent service and high-quality products.</li>
          <li><strong>Health Conscious</strong>: Offering products that are not only delicious but also beneficial for your health.</li>
      </ul>
  </div>
    `,
  },
  {
    id: "norte-damepavillion",
    name: "Norte-Damepavillion",
    subtitle:
      "Notre Dame Pavilion Hospital (NDPH) is a 44-bed healthcare facility located in Vitré. Serving approximately 50,000 Québec city residents and a large seasonal population of cottagers and tourists, NDPH offers a comprehensive array of acute care services.",
    category: "Website",
    link: "https://www.notre-damepavillionhospital.ca/",
    imageUrl: "/projects/notre-damepavillionhospital.png",
    tags: ["Shopify", "Liquid", "Stripe", "Mongodb", "ExpressJS"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Notre Dame Pavilion Hospital (NDPH)</h1>
      <p className="mb-4"><strong>Notre Dame Pavilion Hospital (NDPH)</strong> is a 44-bed healthcare facility located in Vitré. Serving approximately 50,000 Québec city residents and a large seasonal population of cottagers and tourists, NDPH offers a comprehensive array of acute care services.</p>

      <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Shopify</td>
                  <td className="border px-4 py-2">E-commerce platform used for managing hospital-related merchandise and services.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Liquid</td>
                  <td className="border px-4 py-2">Template language used to customize Shopify themes for the hospital's website.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">React</td>
                  <td className="border px-4 py-2">Ensures a dynamic and responsive user interface for better user engagement.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Node.js</td>
                  <td className="border px-4 py-2">Backend server for handling data and transactions efficiently.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">MongoDB</td>
                  <td className="border px-4 py-2">Database solution for storing patient information, service details, and transaction records.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Stripe</td>
                  <td className="border px-4 py-2">Secure payment processing for hospital donations and transactions.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">AWS</td>
                  <td className="border px-4 py-2">Cloud services for hosting, ensuring high availability and scalability.</td>
              </tr>
          </tbody>
      </table>
  </div>
    `,
  },
  {
    id: "mitaz-consulting",
    name: "Mitaz Consulting",
    subtitle:
      "Mitaz Immigration Consulting is a premier firm dedicated to providing high-quality immigration services to clients globally who wish to study, work, live, or invest in Canada. We assist clients in creating their future and living their dream as temporary or permanent residents by keeping abreast of federal immigration laws and various Provincial Nominee Programs (PNPs).",
    category: "Website",
    link: "https://mitazconsulting.ca/",
    imageUrl: "/projects/mitazconsulting.png",
    tags: ["ReactJS", "Stripe", "Mongodb", "ExpressJS"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mitaz Immigration Consulting</h1>
      <p className="mb-4"><strong>Mitaz Immigration Consulting</strong> is a premier firm dedicated to providing high-quality immigration services to clients globally who wish to study, work, live, or invest in Canada. We assist clients in creating their future and living their dream as temporary or permanent residents by keeping abreast of federal immigration laws and various Provincial Nominee Programs (PNPs).</p>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Shopify</td>
                  <td className="border px-4 py-2">Used for managing client interactions and service transactions.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Liquid</td>
                  <td className="border px-4 py-2">Template language for customizing the Shopify-based website.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">React</td>
                  <td className="border px-4 py-2">Ensures a dynamic and responsive user interface for better engagement.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Node.js</td>
                  <td className="border px-4 py-2">Backend server for handling client data and transaction processes efficiently.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">MongoDB</td>
                  <td className="border px-4 py-2">Database solution for storing client information and service details.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Stripe</td>
                  <td className="border px-4 py-2">Secure payment processing for service fees.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">AWS</td>
                  <td className="border px-4 py-2">Cloud services for hosting, ensuring high availability and scalability.</td>
              </tr>
          </tbody>
      </table>
  </div>
    `,
  },
  {
    id: "elkrest-farm",
    name: "Elkrest Farm",
    subtitle:
      "Elkrest Farm has grown significantly over the past 18 years, expanding its land, quota, and building a Holstein thoroughbred herd along with a new barn. This growth has been supported by improved processes, including technological and mechanical advancements, driven by a desire for continuous improvement.",
    category: "Website",
    link: "https://elkrestsfarm.ca/",
    imageUrl: "/projects/elkrests-farm.png",
    tags: ["HTML", "CSS", "Javascript"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
    <h1 className="text-3xl font-bold text-green-600 mb-6">Elkrest Farm</h1>
    <p className="mb-4"><strong>Elkrest Farm</strong> has grown significantly over the past 18 years, expanding its land, quota, and building a Holstein thoroughbred herd along with a new barn. This growth has been supported by improved processes, including technological and mechanical advancements, driven by a desire for continuous improvement.</p>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
    <table className="table-auto w-full mb-6">
        <thead>
            <tr className="bg-gray-200 text-black">
                <th className="px-4 py-2">Technology</th>
                <th className="px-4 py-2">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-4 py-2">Shopify</td>
                <td className="border px-4 py-2">Manages e-commerce capabilities for product sales and client interactions.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Liquid</td>
                <td className="border px-4 py-2">Template language for customizing the Shopify-based website.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">React</td>
                <td className="border px-4 py-2">Ensures a dynamic and responsive user interface for better engagement.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Node.js</td>
                <td className="border px-4 py-2">Backend server for handling client data and transaction processes efficiently.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">MongoDB</td>
                <td className="border px-4 py-2">Database solution for storing client and livestock information.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Stripe</td>
                <td className="border px-4 py-2">Secure payment processing for transactions.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">AWS</td>
                <td className="border px-4 py-2">Cloud services for hosting, ensuring high availability and scalability.</td>
            </tr>
        </tbody>
    </table>
  </div>
    `,
  },
  {
    id: "island-national-medical-center",
    name: "Island National Medical Center",
    subtitle:
      "Island National Medical Center is a premier healthcare facility owned and operated by the Quebec Regional Health Authority. They are dedicated to providing the best health care to every person we serve. Through compassionate, timely, and quality health services, we aim to meet the needs of our patients, clients, and residents whenever and wherever they require care.",
    category: "Website",
    link: "https://inamc.ca/",
    imageUrl: "/projects/inamc.png",
    tags: ["Healthcare", "Business website", "HTML", "CSS", "Javascript"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Island National Medical Center</h1>
      <p className="mb-4"><strong>Island National Medical Center</strong> is a premier healthcare facility owned and operated by the Quebec Regional Health Authority. They are dedicated to providing the best health care to every person we serve. Through compassionate, timely, and quality health services, we aim to meet the needs of our patients, clients, and residents whenever and wherever they require care.</p>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">React</td>
                  <td className="border px-4 py-2">Ensures a dynamic and responsive user interface for better engagement.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Node.js</td>
                  <td className="border px-4 py-2">Backend server for handling patient data and appointment scheduling efficiently.</td>
              </tr>
          </tbody>
      </table>
  </div>
    `,
  },
  {
    id: "market-farm",
    name: "Market Farm",
    subtitle:
      "MarketFarm is a premier destination offering a wide range of services and fresh produce, all grown with sustainable and organic practices. Whether you are looking to pick your own fruits and flowers, create a beautiful bouquet, or get a head start on your gardening, MarketFarm has something for everyone.",
    category: "Website",
    link: "https://marketfarm.ca/",
    imageUrl: "/projects/marketfarm.png",
    tags: ["HTML", "CSS", "Javascript"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-green-600 mb-6">MarketFarm</h1>
      <p className="mb-4"><strong>MarketFarm</strong> is a premier destination offering a wide range of services and fresh produce, all grown with sustainable and organic practices. Whether you are looking to pick your own fruits and flowers, create a beautiful bouquet, or get a head start on your gardening, MarketFarm has something for everyone.</p>

      <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Technologies</h2>
      <table className="table-auto w-full mb-6">
          <thead>
              <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Technology</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">HTML</td>
                  <td className="border px-4 py-2">Structure of our website, ensuring semantic and accessible content.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">CSS</td>
                  <td className="border px-4 py-2">Styling and layout, providing a visually appealing and responsive design.</td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">JavaScript</td>
                  <td className="border px-4 py-2">Enhancing user interactions and dynamic content on the website.</td>
              </tr>
          </tbody>
      </table>
    </div>
    `,
  },
  {
    id: "placement-nursing",
    name: "Placement Nursing",
    subtitle:
      "Nursing Placement Agency is a healthcare and patient support personnel selection and placement agency. This agency offers specialized and competent staff who are trained to respond to the requirements of the healthcare environment while considering the well-being of its employees. With over 12 years of experience, Nursing Placement Agency has established itself as a leading placement agency in Quebec, recognized for its effective service in Montreal and other regions.",
    category: "Website",
    link: "https://www.placementnursing.ca/",
    imageUrl: "/projects/placementnursing.png",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "MySQL",
      "Managed Cloud Hosting",
    ],
    view: "Business Perspective",
    content: `
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Nursing Placement Agency</h1>
        <div className="shadow-md rounded-lg p-6 mb-8">
            <p className="mb-4">
                Nursing Placement Agency is a healthcare and patient support personnel selection and placement agency. 
                This agency offers specialized and competent staff who are trained to respond to the requirements of the 
                healthcare environment while considering the well-being of its employees. With over 12 years of experience, 
                Nursing Placement Agency has established itself as a leading placement agency in Quebec, recognized for 
                its effective service in Montreal and other regions.
            </p>
        </div>
        <div className="shadow-md rounded-lg p-6 mb-8 border border-blue-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Technologies Used</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2">Technology</th>
                        <th className="py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">HTML</td>
                        <td className="border px-4 py-2">Markup language for structuring web content.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">CSS</td>
                        <td className="border px-4 py-2">Stylesheet language used for describing the presentation of a document.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">JavaScript</td>
                        <td className="border px-4 py-2">Programming language for creating interactive web content.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">PHP</td>
                        <td className="border px-4 py-2">Server-side scripting language for web development.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">MySQL</td>
                        <td className="border px-4 py-2">Database management system for storing and retrieving data.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Managed Cloud Hosting</td>
                        <td className="border px-4 py-2">Hosting service that provides scalability and reliability.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
  },
  {
    id: "learns-point",
    name: "Learns Point",
    subtitle:
      "Learners Point Academy is one of Dubai's leading training institutes. With technology and automation transforming industries and creating new job opportunities, we aim for the evolution of professional training education in the MENA region. Guided by a strong purpose and desire, we help professionals unlock their true potential.",
    category: "Website",
    link: "https://learnerspoint.org/",
    imageUrl: "/projects/learnerspoint.png",
    tags: ["HTML", "CSS", "Javascript"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Learners Point Academy</h1>
      <div className="shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">
              Learners Point Academy is one of Dubai's leading training institutes. With technology and automation 
              transforming industries and creating new job opportunities, they aim for the evolution of professional 
              training education in the MENA region. Guided by a strong purpose and desire, they help professionals unlock 
              their true potential.
          </p>
          <p className="mb-4">
              Founded in 2001, Learners Point has been offering customized training solutions to individuals and 
              corporates to build skills that can help them become successful in today's dynamic and competitive world. 
              As a KHDA-accredited training institute located in the heart of Dubai, we are one of the leading providers 
              of certified courses and have been pioneering the professional training industry for more than two decades. 
              We pride ourselves on our long-standing relationships with our clients and partners, and on being the top 
              providers of innovative and diversified training courses in the MENA region.
          </p>
      </div>
      <div className="shadow-md rounded-lg p-6 mb-8 border border-white">
          <h2 className="text-2xl font-semibold text-white-700 mb-4">Technologies Used</h2>
          <table className="min-w-full">
              <thead>
                  <tr>
                      <th className="py-2">Technology</th>
                      <th className="py-2">Description</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border px-4 py-2">HTML</td>
                      <td className="border px-4 py-2">Markup language for structuring web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">CSS</td>
                      <td className="border px-4 py-2">Stylesheet language used for describing the presentation of a document.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">JavaScript</td>
                      <td className="border px-4 py-2">Programming language for creating interactive web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">React.js</td>
                      <td className="border px-4 py-2">JavaScript library for building user interfaces.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">MongoDB</td>
                      <td className="border px-4 py-2">Database management system for storing and retrieving data.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">AWS Cloud</td>
                      <td className="border px-4 py-2">Hosting service that provides scalability and reliability.</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
    `,
  },
  {
    id: "riderush---cross-platform-bike-taxi-booking-app",
    name: "RideRush - Cross-Platform Bike Taxi Booking App",
    subtitle:
      "R-TRIX is an innovative network providing the best quality service in the area of e-mobility, promoting green mobility, and encouraging public involvement in sustainable transportation through our renting scheme. Our mission is to establish a significant impact in promoting e-vehicles, ensuring that every individual can contribute to a better tomorrow.",
    category: "Website",
    link: "https://www.rtrix.in/",
    imageUrl: "/projects/rtrix.png",
    tags: ["E-Bike", "HTML", "CSS", "Javascript"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">R-TRIX</h1>
      <div className="shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">
              R-TRIX is an innovative network providing the best quality service in the area of e-mobility, promoting green 
              mobility, and encouraging public involvement in sustainable transportation through our renting scheme. Our mission 
              is to establish a significant impact in promoting e-vehicles, ensuring that every individual can contribute to a 
              better tomorrow.
          </p>
      </div>
      <div className="shadow-md rounded-lg p-6 mb-8 border border-white">
          <h2 className="text-2xl font-semibold text-white-700 mb-4">Technologies Used</h2>
          <table className="min-w-full">
              <thead>
                  <tr>
                      <th className="py-2">Technology</th>
                      <th className="py-2">Description</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border px-4 py-2">HTML</td>
                      <td className="border px-4 py-2">Markup language for structuring web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">CSS</td>
                      <td className="border px-4 py-2">Stylesheet language used for describing the presentation of a document.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">JavaScript</td>
                      <td className="border px-4 py-2">Programming language for creating interactive web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">React.js</td>
                      <td className="border px-4 py-2">JavaScript library for building user interfaces.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">Node.js</td>
                      <td className="border px-4 py-2">JavaScript runtime built on Chrome's V8 JavaScript engine.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">MongoDB</td>
                      <td className="border px-4 py-2">Database management system for storing and retrieving data.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">AWS Cloud</td>
                      <td className="border px-4 py-2">Hosting service that provides scalability and reliability.</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
    `,
  },
  {
    id: "nikeshh.com",
    name: "Nikeshh.com",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://nikeshh.com/",
    imageUrl: "/projects/nikeshh.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "digital-ecommerce",
    name: "Digital Ecommerce",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://digital-ecommerce-production.up.railway.app/",
    imageUrl: "/projects/digital-ecommerce.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "learning-portal",
    name: "Learning Portal",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://learning-portal-murex.vercel.app/",
    imageUrl: "/projects/learning-portal.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "modern-ecommerce",
    name: "Modern Ecommerce",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://modern-ecommerce-tawny.vercel.app/",
    imageUrl: "/projects/modern-ecommerce.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "nikeshhcodes.com",
    name: "NikeshhCodes.com",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://nikeshhcodes.com/",
    imageUrl: "/projects/nikeshhcodes.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "ecommerce-marketplace",
    name: "Ecommerce Marketplace",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://ecommerce-marketplace-two.vercel.app/",
    imageUrl: "/projects/ecommerce-marketplace.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "suzan-peltekian",
    name: "Suzan Peltekian",
    subtitle:
      "A super passionate lover of life, suzan helps people to supercharge their life.",
    category: "Wordpress",
    link: "https://superchargewithsuzan.com/",
    imageUrl: "/projects/suzan-peltekian.png",
    tags: ["Wordpress", "Elementor", "Yoast SEO"],
    view: "Business Perspective",
    content: `
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Supercharge with SuZan</h1>
        <div className="shadow-md rounded-lg p-6 mb-8">
            <p className="mb-4">
                A super passionate lover of life, suzan helps people to supercharge their life.
            </p>
            <p className="mb-4">
                An avid reader, a fast learner, and a dedicated personal/professional development junkie, I’ve done it all—from Fire-walker to a 10-day silent meditation retreat (yes, I couldn’t open my mouth for 10 FULL days & it was torture). From Real Estate Coaching & NLP to Spiritual Healing and everything in between, I am committed to your success and to serving you become your best self. I study it all and bring you the very best every single day so you can dive into your divine living, loving the life you live fiercely and passionately.
            </p>
        </div>
        <div className="shadow-md rounded-lg p-6 mb-8 border border-white">
            <h2 className="text-2xl font-semibold text-white-700 mb-4">Technologies Used</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2">Technology</th>
                        <th className="py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">HTML</td>
                        <td className="border px-4 py-2">Markup language for structuring web content.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">CSS</td>
                        <td className="border px-4 py-2">Stylesheet language used for describing the presentation of a document.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">JavaScript</td>
                        <td className="border px-4 py-2">Programming language for creating interactive web content.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">WordPress</td>
                        <td className="border px-4 py-2">CMS used for building and managing the website.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Elementor</td>
                        <td className="border px-4 py-2">WordPress plugin for building custom page layouts.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Yoast SEO</td>
                        <td className="border px-4 py-2">WordPress plugin for optimizing SEO.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">WooCommerce</td>
                        <td className="border px-4 py-2">WordPress plugin for e-commerce functionality.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Bluehost</td>
                        <td className="border px-4 py-2">Hosting service for the website.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
  },
  {
    id: "suzan-peltekian---manifest-millions",
    name: "Suzan Peltekian - Manifest Millions",
    subtitle:
      "A super passionate lover of life, suzan helps people to supercharge their life.",
    category: "GHL",
    link: "https://register.suzanpeltekian.com/manifest-millions",
    imageUrl: "/projects/suzan-peltekian-manifest-millions.png",
    tags: ["GHL"],
    view: "Business Perspective",
    content: `
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Supercharge with SuZan</h1>
      <div className="shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">
              A super passionate lover of life, suzan helps people to supercharge their life.
          </p>
          <p className="mb-4">
              An avid reader, a fast learner, and a dedicated personal/professional development junkie, I’ve done it all—from Fire-walker to a 10-day silent meditation retreat (yes, I couldn’t open my mouth for 10 FULL days & it was torture). From Real Estate Coaching & NLP to Spiritual Healing and everything in between, I am committed to your success and to serving you become your best self. I study it all and bring you the very best every single day so you can dive into your divine living, loving the life you live fiercely and passionately.
          </p>
      </div>
      <div className="shadow-md rounded-lg p-6 mb-8 border border-white">
          <h2 className="text-2xl font-semibold text-white-700 mb-4">Technologies Used</h2>
          <table className="min-w-full">
              <thead>
                  <tr>
                      <th className="py-2">Technology</th>
                      <th className="py-2">Description</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border px-4 py-2">HTML</td>
                      <td className="border px-4 py-2">Markup language for structuring web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">CSS</td>
                      <td className="border px-4 py-2">Stylesheet language used for describing the presentation of a document.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">JavaScript</td>
                      <td className="border px-4 py-2">Programming language for creating interactive web content.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">WordPress</td>
                      <td className="border px-4 py-2">CMS used for building and managing the website.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">Elementor</td>
                      <td className="border px-4 py-2">WordPress plugin for building custom page layouts.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">Yoast SEO</td>
                      <td className="border px-4 py-2">WordPress plugin for optimizing SEO.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">WooCommerce</td>
                      <td className="border px-4 py-2">WordPress plugin for e-commerce functionality.</td>
                  </tr>
                  <tr>
                      <td className="border px-4 py-2">Bluehost</td>
                      <td className="border px-4 py-2">Hosting service for the website.</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    `,
  },
  {
    id: "docgenius---documentation-platform",
    name: "DocGenius - Documentation Platform",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://documentation-platform-production.up.railway.app/",
    imageUrl: "/projects/docgenius.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "flowforge---saas-automation-builder",
    name: "FlowForge - SAAS Automation Builder",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://saas-automation-builder.vercel.app/",
    imageUrl: "/projects/fuzzie.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "glisten-ai---ai-powered-document-search-and-website-customization",
    name: "Glisten AI - AI-Powered Document Search and Website Customization",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Automation",
    link: "https://glisten-ai-website.vercel.app/",
    imageUrl: "/projects/glisten-ai.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "nextnews---newsletter-creation-and-email-marketing-platform",
    name: "NextNews - Newsletter Creation and Email Marketing Platform",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://newsletter-platform.vercel.app/",
    imageUrl: "/projects/newsletter-platform.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "stayspot---house-booking-platform",
    name: "StaySpot - House Booking Platform",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://house-booking-platform.vercel.app/",
    imageUrl: "/projects/stayspot.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "sitesprint---saas-website-builder-for-agencies",
    name: "SiteSprint - SAAS Website Builder for Agencies",
    subtitle: "Need to write content. Thanks for checking.",
    category: "Web App",
    link: "https://saaswebsitebuilder.vercel.app/",
    imageUrl: "/projects/sitesprint.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
  {
    id: "vectorchat---pdf-interaction-platform",
    name: "VectorChat - PDF Interaction Platform",
    subtitle: "Need to write content. Thanks for checking.",
    category: "AI",
    link: "https://chat-pdf-lemon.vercel.app/",
    imageUrl: "/projects/vectorchat.png",
    tags: ["LMS"],
    view: "Business Perspective",
    content: "",
  },
];

export const getProjects = cache(() => {
  return [...businessPrespectiveProjects];
});

export const getProject = (id: string) => {
  const filteredProjects = [...businessPrespectiveProjects].filter(
    (project) => project.id == id
  );
  if (filteredProjects && filteredProjects.length > 0) {
    return filteredProjects[0];
  }
  return {
    name: "Not found",
    subtitle: "Not found",
    category: "Not found",
    link: "",
    imageUrl: "",
    tags: [],
    view: "Business Perspective",
    content: "",
  };
};

export const getBlogs = cache(() => {
  let response = [
    {
      id: "0b5df545-cb7c-498c-81b1-71cdd5a5e83a",
      title: "Top 7 No-Code AI Platforms That Are Making ML Accessible",
      subtitle:
        "No-code AI platforms are a hot trend that can be leveraged by businesses to help them automate tasks and...",
      imageUrl: "/blogs/blog1.png",
      category: "AI",
    },
    {
      id: "0dfd3d74-89bc-43cf-9b40-123bbfcd005f",
      title: "Edge AI for Secure AI Applications That are highly important",
      subtitle:
        "Edge AI is the future of artificial intelligence. This blog post will explore what Edge AI is and why it and why it could be...",
      imageUrl: "/blogs/blog2.png",
      category: "AI",
    },
    {
      id: "135ac670-7057-47d5-92fd-55110b6143e7",
      title: "Geospatial AI: A Data-Centric Approach for Growth & Development",
      subtitle:
        "GeospatialAI or GeoAI is an evolving field aiming to help organize, process, and analyze spatial big data with...",
      imageUrl: "/blogs/blog3.png",
      category: "AI",
    },
  ];
  return response;
});
