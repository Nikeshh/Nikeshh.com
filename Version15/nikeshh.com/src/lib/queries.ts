import { currentUser } from '@clerk/nextjs/server';
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

export const getInfiniteProducts = () => {
  return [];
}

export const getTestimonials = cache(() => {
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

export const getSkills = cache(() => {
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
      name: 'Web App Development',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js, Ember.js | Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel), C# (ASP.NET Core)',
      view: "Business Perspective"
    },
    {
      name: 'Website Development',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js, Ember.js | Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel), C# (ASP.NET Core)',
      view: "Business Perspective"
    },
    {
      name: 'Chatbot Development And Integration',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js, Ember.js | Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel), C# (ASP.NET Core)',
      view: "Business Perspective"
    },
    {
      name: 'Automation for various businesses',
      category: 'Development for Business Solutions',
      imageUrl: '',
      description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.',
      points: 'Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Vue.js, Ember.js | Back-end: Python (Django, Flask), JavaScript (Node.js), Java (Spring Boot), Ruby (Ruby on Rails), PHP (Laravel), C# (ASP.NET Core)',
      view: "Business Perspective"
    },
    {
      name: 'Mobile App Development',
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

const businessPrespectiveProjects = [
  {
    id: "alt-interiors",
    name: 'ALT Interiors',
    subtitle: 'ALT | Interiors specializes in award-winning interior design, expert home staging, and curated home furnishings. Their experienced team blends beauty and functionality to create personalized, impactful spaces. Trust them to elevate your home and ensure it stands out in the real estate market.',
    category: 'Ecommerce',
    link: 'https://altinteriors.ca/',
    imageUrl: '/projects/alt-interiors.png',
    tags: ['Shopify', 'Liquid', 'Ecommerce'],
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

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Services</h2>
      <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200 text-black">
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Interior Design</td>
                  <td className="border px-4 py-2">
                      <ul className="list-disc ml-6">
                          <li>Expert Team: Our passionate, experienced designers bring a wealth of creativity and knowledge.</li>
                          <li>Innovative Solutions: Blending aesthetics with functionality to reflect your personality and lifestyle.</li>
                          <li>Award-Winning Designs: Numerous awards recognizing our high standards and customer satisfaction.</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td className="border px-4 py-2">Home Staging</td>
                  <td className="border px-4 py-2">
                      <ul className="list-disc ml-6">
                          <li>Competitive Edge: Top-tier staging solutions tailored to all property types and styles.</li>
                          <li>Proven Success: Over a decade of experience ensuring properties attract potential buyers and achieve optimal results.</li>
                          <li>Trusted by Many: Preferred choice for homeowners, developers, and realtors in the area.</li>
                      </ul>
                  </td>
              </tr>
          </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose ALT | Interiors?</h2>
      <ul className="list-disc ml-6 mb-6">
          <li><strong>Excellence in Design</strong>: Their history of excellence ensures each project meets the highest standards.</li>
          <li><strong>Personalized Approach</strong>: They create spaces that resonate with your unique essence and lifestyle.</li>
          <li><strong>Market Leadership</strong>: Established as the leading expert and preferred choice for home staging.</li>
      </ul>
    </div>
    `
  },
  {
    id: "skinessence",
    name: 'SkinEssence',
    subtitle: 'Skin Essence Organics, a pioneer in organic skincare developed over 25 years ago. Their journey began with a deep commitment to studying and balancing organic oils and extracts to achieve the best possible results for healthy skin.',
    category: 'Ecommerce',
    link: 'https://www.skinessence.ca/',
    imageUrl: '/projects/skin-essence.png',
    tags: ['Shopify', 'Liquid', 'Ecommerce'],
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

        <h2 className="text-2xl font-semibold text-green-500 mb-4">Key Services</h2>
        <table className="table-auto w-full mb-6">
            <thead>
            <tr className="bg-gray-200 text-black">
                    <th className="px-4 py-2">Service</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Certified Organic</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Highest Standards: Adhering to the highest standard of quality and purity in every aspect of our company.</li>
                            <li>Organic Certification: Verified by independent organizations to ensure chemical-free farming, accurate labeling, and sustainable packaging.</li>
                            <li>Health and Safety: Meeting and exceeding certification requirements to help people make the healthiest cosmetic choices.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Certifications</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>USDA & ECOCERT Organic: Proudly certified by ECOCERT and USDA.</li>
                            <li>ECOCERT: Recognizes both organic plant ingredients and essential non-agricultural ingredients like Clay, Zinc, and Vitamin E.</li>
                            <li>USDA: The most recognized organic certification program in North America, setting the benchmark for high-quality, sustainable products.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Considering the Planet</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Sustainable Practices: Utilizing sustainable resources and reducing the use of environmentally damaging materials at every step of our manufacturing, packaging, and shipping process.</li>
                            <li>Energy Efficiency: Our facility is equipped to ensure the lowest carbon footprint, creating a healthier world for future generations.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Packaging with the Environment in Mind</td>
                    <td className="border px-4 py-2">
                        <ul className="list-disc ml-6">
                            <li>Recyclable Materials: Using recycled paper for packaging and shipping, originating from sustainable forests.</li>
                            <li>Tinted Glass: Products are packaged in recyclable, eco-friendly glass that protects from UV rays and is non-toxic.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-green-500 mb-4">Why Choose Skin Essence Organics?</h2>
        <ul className="list-disc ml-6 mb-6">
            <li><strong>Over 25 Years of Excellence</strong>: Trusted expertise in organic skincare.</li>
            <li><strong>Locally Produced</strong>: Small batch production for quality and freshness.</li>
            <li><strong>Eco-Friendly</strong>: Dedicated to sustainable and environmentally friendly practices.</li>
        </ul>
    </div>
    `
  },
  {
    id: "spades-brand",
    name: 'Spades Brand',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Ecommerce',
    link: 'https://www.spadesbrand.com/',
    imageUrl: '/projects/spades-brand.png',
    tags: ['Shopify', 'Liquid', 'Ecommerce'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "ppe-supply-canada",
    name: 'PPE Supply Canada',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Ecommerce',
    link: 'https://www.ppe-supply.com/',
    imageUrl: '/projects/ppe-supply-canada.png',
    tags: ['Shopify', 'Liquid', 'Ecommerce'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "learnify---lms-platform",
    name: 'Learnify - LMS Platform',
    subtitle: 'Learnify an advanced Learning Management System (LMS). Built with Nextjs and MySQL, platform stands out!',
    category: 'Web App',
    link: 'https://lms-platform-red.vercel.app/',
    imageUrl: '/projects/lms-platform.png',
    tags: ['LMS', 'Nextjs', 'React', 'Mux', 'MySQL'],
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
    </div>`
  },
  {
    id: "karking",
    name: 'Karking',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://karking.in/',
    imageUrl: '/projects/karking.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "immunuts",
    name: 'Immunuts',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://immunuts.in/',
    imageUrl: '/projects/immunuts.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "norte-damepavillion",
    name: 'Norte-Damepavillion',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://www.notre-damepavillionhospital.ca/',
    imageUrl: '/projects/notre-damepavillionhospital.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "mitaz-consulting",
    name: 'Mitaz Consulting',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://mitazconsulting.ca/',
    imageUrl: '/projects/mitazconsulting.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "elkrest-farm",
    name: 'Elkrest Farm',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://elkrestsfarm.ca/',
    imageUrl: '/projects/elkrests-farm.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "island-national-medical-center",
    name: 'Island National Medical Center',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://inamc.ca/',
    imageUrl: '/projects/inamc.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "market-farm",
    name: 'Market Farm',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://marketfarm.ca/',
    imageUrl: '/projects/marketfarm.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "placement-nursing",
    name: 'Placement Nursing',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://www.placementnursing.ca/',
    imageUrl: '/projects/placementnursing.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "learns-point",
    name: 'Learns Point',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://learnerspoint.org/',
    imageUrl: '/projects/learnerspoint.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "riderush---cross-platform-bike-taxi-booking-app",
    name: 'RideRush - Cross-Platform Bike Taxi Booking App',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Website',
    link: 'https://www.rtrix.in/',
    imageUrl: '/projects/rtrix.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "nikeshh.com",
    name: 'Nikeshh.com',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://nikeshh.com/',
    imageUrl: '/projects/nikeshh.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "digital-ecommerce",
    name: 'Digital Ecommerce',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://digital-ecommerce-production.up.railway.app/',
    imageUrl: '/projects/digital-ecommerce.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "learning-portal",
    name: 'Learning Portal',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://learning-portal-murex.vercel.app/',
    imageUrl: '/projects/learning-portal.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "modern-ecommerce",
    name: 'Modern Ecommerce',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://modern-ecommerce-tawny.vercel.app/',
    imageUrl: '/projects/modern-ecommerce.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "nikeshhcodes.com",
    name: 'NikeshhCodes.com',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://nikeshhcodes.com/',
    imageUrl: '/projects/nikeshhcodes.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "ecommerce-marketplace",
    name: 'Ecommerce Marketplace',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://ecommerce-marketplace-two.vercel.app/',
    imageUrl: '/projects/ecommerce-marketplace.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "suzan-peltekian",
    name: 'Suzan Peltekian',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Wordpress',
    link: 'https://superchargewithsuzan.com/',
    imageUrl: '/projects/suzan-peltekian.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "suzan-peltekian---manifest-millions",
    name: 'Suzan Peltekian - Manifest Millions',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'GHL',
    link: 'https://register.suzanpeltekian.com/manifest-millions',
    imageUrl: '/projects/suzan-peltekian-manifest-millions.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "docgenius---documentation-platform",
    name: 'DocGenius - Documentation Platform',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://documentation-platform-production.up.railway.app/',
    imageUrl: '/projects/docgenius.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "flowforge---saas-automation-builder",
    name: 'FlowForge - SAAS Automation Builder',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://saas-automation-builder.vercel.app/',
    imageUrl: '/projects/fuzzie.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "glisten-ai---ai-powered-document-search-and-website-customization",
    name: 'Glisten AI - AI-Powered Document Search and Website Customization',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Automation',
    link: 'https://glisten-ai-website.vercel.app/',
    imageUrl: '/projects/glisten-ai.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "nextnews---newsletter-creation-and-email-marketing-platform",
    name: 'NextNews - Newsletter Creation and Email Marketing Platform',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://newsletter-platform.vercel.app/',
    imageUrl: '/projects/newsletter-platform.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "stayspot---house-booking-platform",
    name: 'StaySpot - House Booking Platform',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://house-booking-platform.vercel.app/',
    imageUrl: '/projects/stayspot.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "sitesprint---saas-website-builder-for-agencies",
    name: 'SiteSprint - SAAS Website Builder for Agencies',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'Web App',
    link: 'https://saaswebsitebuilder.vercel.app/',
    imageUrl: '/projects/sitesprint.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
  {
    id: "vectorchat---pdf-interaction-platform",
    name: 'VectorChat - PDF Interaction Platform',
    subtitle: 'VectorChat revolutionizes communication by enabling seamless interaction with PDF documents through vector data. Enhance collaboration and productivity with intuitive chat-based PDF interactions.',
    category: 'AI',
    link: 'https://chat-pdf-lemon.vercel.app/',
    imageUrl: '/projects/vectorchat.png',
    tags: ['LMS'],
    view: "Business Perspective",
    content: ""
  },
]

export const getProjects = cache(() => {
  return [...businessPrespectiveProjects];
})

export const getProject = (id: string) => {
  const filteredProjects =  [...businessPrespectiveProjects].filter((project) => project.id == id);
  if(filteredProjects && filteredProjects.length > 0) {
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
    content: ""
  };
}

export const getBlogs = cache(() => {
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