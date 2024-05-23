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

export const getInfiniteProducts = async () => {
  return [];
}

export const getTestimonials = cache(async () => {
  let response = [
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
  return response;
})

export const getSkills = cache(async () => {
  let techView = [
    {
      name: 'Containerization and Orchestration',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Docker | Kubernetes',
      view: "Technical Perspective"
    },
    {
      name: 'Languages & Frameworks',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Python (Django, Flask) | JavaScript (Node.js) | Java (Spring Boot) | Ruby (Ruby on Rails) | PHP (Laravel) | C# (ASP.NET Core)',
      view: "Technical Perspective"
    },
    {
      name: 'Scripting & Automation',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Shell scripting | Python scripting',
      view: "Technical Perspective"
    },
    {
      name: 'Database Management',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'SQL: MySQL, PostgreSQL, SQLite | NoSQL: MongoDB, Cassandra, Redis',
      view: "Technical Perspective"
    },
    {
      name: 'Version Control & CI/CD',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Git | GitHub | GitLab | Bitbucket | Jenkins | Travis CI | CircleCI',
      view: "Technical Perspective"
    },
    {
      name: 'Cloud Technologies',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'AWS | Azure | GCP',
      view: "Technical Perspective"
    },
    {
      name: 'DevOps Monitoring',
      category: 'Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Prometheus | Grafana | ELK Stack | Splunk',
      view: "Technical Perspective"
    },
    {
      name: 'Data Manipulation & Analysis',
      category: 'Data Science and Analytics',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Pandas | NumPy | SQL',
      view: "Technical Perspective"
    },
    {
      name: 'Big Data Technologies',
      category: 'Data Science and Analytics',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Hadoop | Spark | Kafka | Hive | HBase',
      view: "Technical Perspective"
    },
    {
      name: 'AI & Machine Learning Frameworks',
      category: 'Data Science and Analytics',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'TensorFlow | PyTorch | Scikit-learn',
      view: "Technical Perspective"
    },
    {
      name: 'AI Tools & Libraries',
      category: 'Data Science and Analytics',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'OpenAI | IBM Watson | Microsoft Azure AI',
      view: "Technical Perspective"
    },
    {
      name: 'Test Automation',
      category: 'Quality Assurance and Testing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Selenium | Cypress | Puppeteer',
      view: "Technical Perspective"
    },
    {
      name: 'Behavior-Driven Development',
      category: 'Quality Assurance and Testing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Cucumber | Behave',
      view: "Technical Perspective"
    },
    {
      name: 'Performance Testing',
      category: 'Quality Assurance and Testing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'JMeter | Gatling | LoadRunner',
      view: "Technical Perspective"
    },
    {
      name: 'Identity & Access Management',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'OAuth | JWT',
      view: "Technical Perspective"
    },
    {
      name: 'Security Protocols',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'SSL/TLS | HTTPS',
      view: "Technical Perspective"
    },
    {
      name: 'Compliance Standards',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'GDPR | HIPAA | PCI DSS',
      view: "Technical Perspective"
    },
    {
      name: 'Blockchain Development',
      category: 'Emerging Technologies',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Ethereum | Hyperledger Fabric | Solidity',
      view: "Technical Perspective"
    },
    {
      name: 'AR/VR Development',
      category: 'Emerging Technologies',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Unity | Unreal Engine | ARKit | ARCore',
      view: "Technical Perspective"
    },
    {
      name: 'Design Tools',
      category: 'Design and Product Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Adobe XD | Sketch | Figma | InVision',
      view: "Technical Perspective"
    },
    {
      name: 'Prototyping & Wireframing',
      category: 'Design and Product Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Proto.io | Axure RP | Balsamiq',
      view: "Technical Perspective"
    },
    {
      name: 'User Research & Testing',
      category: 'Design and Product Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Usability testing tools | UserZoom | Optimal Workshop',
      view: "Technical Perspective"
    },
    {
      name: 'Project Management',
      category: 'Design and Product Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Jira | Trello | Asana',
      view: "Technical Perspective"
    },
    {
      name: 'Collaboration',
      category: 'Design and Product Development',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Slack | Microsoft Teams',
      view: "Technical Perspective"
    },
  ];

  let businessView = [
    {
      name: 'Web Development',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js, Ember.js | Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel), C# (ASP.NET Core)',
      view: "Business Perspective"
    },
    {
      name: 'Mobile Development',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Android: Java, Kotlin | iOS: Swift, Objective-C | Cross-platform: React Native, Flutter, Xamarin',
      view: "Business Perspective"
    },
    {
      name: 'API Integration',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'RESTful APIs | GraphQL',
      view: "Business Perspective"
    },
    {
      name: 'Design Tools',
      category: 'Product Design and User Experience',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Adobe XD | Sketch | Figma | InVision',
      view: "Business Perspective"
    },
    {
      name: 'Prototyping & Wireframing',
      category: 'Product Design and User Experience',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Proto.io | Axure RP | Balsamiq',
      view: "Business Perspective"
    },
    {
      name: 'User Research & Testing',
      category: 'Product Design and User Experience',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Usability testing tools | UserZoom | Optimal Workshop',
      view: "Business Perspective"
    },
    {
      name: 'Search Engine Optimization (SEO)',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "On-Page SEO: Optimization of website content, HTML, and structure to improve rankings in search engine results. | Off-Page SEO: Building backlinks and promoting content to improve the site's authority. | Technical SEO: Ensuring the website meets technical requirements for search engines like fast load times, mobile friendliness, and secure connections (HTTPS).",
      view: "Business Perspective"
    },
    {
      name: 'Pay-Per-Click (PPC) Advertising',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Google Ads: Creating and managing ads that appear in Google search results and on partner websites. | Social Media Ads: Advertising on platforms like Facebook, Instagram, LinkedIn, and Twitter. | Display Ads: Banner ads on various websites to increase brand visibility and drive traffic.",
      view: "Business Perspective"
    },
    {
      name: 'Content Marketing',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Blogging: Writing and publishing articles that provide value to the target audience and improve SEO. | Video Marketing: Creating videos for platforms like YouTube or social media to engage users. | Infographics and Visual Content: Designing visually appealing content to convey information effectively. | E-books and Whitepapers: Producing in-depth content to establish thought leadership and generate leads.",
      view: "Business Perspective"
    },
    {
      name: 'Social Media Marketing',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Profile Management: Creating and maintaining social media profiles on platforms like Facebook, Instagram, Twitter, LinkedIn, etc. | Content Creation and Posting: Regular posting of relevant content to engage the audience. | Community Management: Interacting with followers, responding to comments, and managing brand reputation. | Social Media Analytics: Monitoring and analyzing performance metrics to refine strategies.",
      view: "Business Perspective"
    },
    {
      name: 'Email Marketing',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Campaign Creation: Designing and sending targeted email campaigns to subscribers. | Automation: Setting up automated email sequences for lead nurturing and customer retention. | List Management: Growing and segmenting email lists to improve targeting. | Analytics: Tracking open rates, click-through rates, and conversions to optimize campaigns.",
      view: "Business Perspective"
    },
    {
      name: 'Affiliate Marketing',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Program Setup: Establishing affiliate programs where partners promote products/services for a commission. | Partner Management: Recruiting and managing affiliates to ensure productive partnerships. | Tracking and Reporting: Monitoring affiliate performance and managing payouts.",
      view: "Business Perspective"
    },
    {
      name: 'Conversion Rate Optimization (CRO)',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "A/B Testing: Testing different versions of webpages or ads to determine which performs better. | User Experience (UX) Design: Improving the usability and functionality of websites to enhance user experience. | Landing Page Optimization: Creating and refining landing pages to increase conversion rates.",
      view: "Business Perspective"
    },
    {
      name: 'Web Analytics and Reporting',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Data Analysis: Using tools like Google Analytics to track and analyze website traffic and user behavior. | Performance Reporting: Creating reports to measure the effectiveness of digital marketing campaigns. | Insight Generation: Providing actionable insights based on data analysis to inform future strategies.",
      view: "Business Perspective"
    },
    {
      name: 'Influencer Marketing',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Campaign Planning: Identifying and collaborating with influencers to promote products or services. | Content Coordination: Ensuring influencers create content that aligns with brand messaging. | Performance Tracking: Monitoring the impact of influencer campaigns on brand awareness and sales.",
      view: "Business Perspective"
    },
    {
      name: 'Online Reputation Management',
      category: 'Digital Marketing',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: "Review Monitoring: Keeping track of customer reviews and responding appropriately. | Crisis Management: Handling negative publicity or social media crises to protect brand image. | Positive Promotion: Encouraging satisfied customers to leave positive reviews and testimonials.",
      view: "Business Perspective"
    },
    {
      name: 'Project Management Tools',
      category: 'Project and Team Management',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Jira | Trello | Asana',
      view: "Business Perspective"
    },
    {
      name: 'Collaboration Tools',
      category: 'Project and Team Management',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Slack | Microsoft Teams',
      view: "Business Perspective"
    },
    {
      name: 'Version Control & CI/CD',
      category: 'Project and Team Management',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Git | GitHub | GitLab | Bitbucket | Jenkins | Travis CI | CircleCI',
      view: "Business Perspective"
    },
    {
      name: 'Data Analysis Tools',
      category: 'Data-Driven Decision Making',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Pandas | NumPy | SQL',
      view: "Business Perspective"
    },
    {
      name: 'Big Data Technologies',
      category: 'Data-Driven Decision Making',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Hadoop | Spark | Kafka | Hive | HBase',
      view: "Business Perspective"
    },
    {
      name: 'AI & Machine Learning Frameworks',
      category: 'Data-Driven Decision Making',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'TensorFlow | PyTorch | Scikit-learn',
      view: "Business Perspective"
    },
    {
      name: 'Business Intelligence',
      category: 'Data-Driven Decision Making',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'OpenAI | IBM Watson | Microsoft Azure AI',
      view: "Business Perspective"
    },
    {
      name: 'Security Protocols',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'SSL/TLS | HTTPS',
      view: "Business Perspective"
    },
    {
      name: 'Compliance Standards',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'GDPR | HIPAA | PCI DSS',
      view: "Business Perspective"
    },
    {
      name: 'Identity & Access Management',
      category: 'Security and Compliance',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'OAuth | JWT',
      view: "Business Perspective"
    },
    {
      name: 'Blockchain Applications',
      category: 'Emerging Business Technologies',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Ethereum | Hyperledger Fabric',
      view: "Business Perspective"
    },
    {
      name: 'AR/VR Solutions',
      category: 'Emerging Business Technologies',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Unity | Unreal Engine | ARKit | ARCore',
      view: "Business Perspective"
    },
  ]
  return [...techView, ...businessView];
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
  let response = [
      {
        name: 'ALT Interiors',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Ecommerce',
        link: 'alt',
        imageUrl: '/projects/alt-interiors.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'SkinEssence',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Ecommerce',
        link: 'https://www.skinessence.ca/',
        imageUrl: '/projects/skin-essence.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Spades Brand',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Ecommerce',
        link: 'https://www.spadesbrand.com/',
        imageUrl: '/projects/spades-brand.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'PPE Supply Canada',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Ecommerce',
        link: 'https://www.ppe-supply.com/',
        imageUrl: '/projects/ppe-supply-canada.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'LMS Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://lms-platform-red.vercel.app/',
        imageUrl: '/projects/lms-platform.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Karking',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://karking.in/',
        imageUrl: '/projects/karking.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Immunuts',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://immunuts.in/',
        imageUrl: '/projects/immunuts.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Norte-Damepavillion',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://www.notre-damepavillionhospital.ca/',
        imageUrl: '/projects/notre-damepavillionhospital.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Mitaz Consulting',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://mitazconsulting.ca/',
        imageUrl: '/projects/mitazconsulting.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Elkrest Farm',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://elkrestsfarm.ca/',
        imageUrl: '/projects/elkrests-farm.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Island National Medical Center',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://inamc.ca/',
        imageUrl: '/projects/inamc.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Market Farm',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://marketfarm.ca/',
        imageUrl: '/projects/marketfarm.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Placement Nursing',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://www.placementnursing.ca/',
        imageUrl: '/projects/placementnursing.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Learns Point',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://learnerspoint.org/',
        imageUrl: '/projects/learnerspoint.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'RideRush - Cross-Platform Bike Taxi Booking App',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Website',
        link: 'https://www.rtrix.in/',
        imageUrl: '/projects/rtrix.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Nikeshh.com',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://nikeshh.com/',
        imageUrl: '/projects/nikeshh.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Digital Ecommerce',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://digital-ecommerce-production.up.railway.app/',
        imageUrl: '/projects/digital-ecommerce.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Learning Portal',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://learning-portal-murex.vercel.app/',
        imageUrl: '/projects/learning-portal.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Modern Ecommerce',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://modern-ecommerce-tawny.vercel.app/',
        imageUrl: '/projects/modern-ecommerce.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'NikeshhCodes.com',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://nikeshhcodes.com/',
        imageUrl: '/projects/nikeshhcodes.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Ecommerce Marketplace',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://ecommerce-marketplace-two.vercel.app/',
        imageUrl: '/projects/ecommerce-marketplace.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Suzan Peltekian',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Wordpress',
        link: 'https://superchargewithsuzan.com/',
        imageUrl: '/projects/suzan-peltekian.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Suzan Peltekian',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'GHL',
        link: 'https://register.suzanpeltekian.com/manifest-millions',
        imageUrl: '/projects/suzan-peltekian-manifest-millions.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'DocGenius - Documentation Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://documentation-platform-production.up.railway.app/',
        imageUrl: '/projects/docgenius.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'FlowForge - SAAS Automation Builder',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://saas-automation-builder.vercel.app/',
        imageUrl: '/projects/fuzzie.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'Glisten AI - AI-Powered Document Search and Website Customization',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Automation',
        link: 'https://glisten-ai-website.vercel.app/',
        imageUrl: '/projects/glisten-ai.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'NextNews - Newsletter Creation and Email Marketing Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://newsletter-platform.vercel.app/',
        imageUrl: '/projects/newsletter-platform.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'StaySpot - House Booking Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://house-booking-platform.vercel.app/',
        imageUrl: '/projects/stayspot.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'SiteSprint - SAAS Website Builder for Agencies',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'Web App',
        link: 'https://saaswebsitebuilder.vercel.app/',
        imageUrl: '/projects/sitesprint.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
      {
        name: 'VectorChat - PDF Interaction Platform',
        subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
        category: 'AI',
        link: 'https://chat-pdf-lemon.vercel.app/',
        imageUrl: '/projects/vectorchat.png',
        tags: ['LMS'],
        view: "Business Perspective"
      },
    ]
    return response;
})

export const getBlogs = cache(async () => {
  let response = [
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
    return response
})