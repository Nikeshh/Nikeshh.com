import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";
import Image from 'next/image';

const ExpertJourneys = () => {
    return (
        <section id="work-experience" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>EXPERT JOURNEYS</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              WORK EXPERIENCE
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {workExperiences.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger><p className="lg:min-w-[800px] flex text-left">{item.title}</p></AccordionTrigger>
                      <AccordionContent>
                        <p className={twMerge("text-xl mb-4 flex justify-between items-end")}>
                          <span className='italic text-sm'>{item.type}</span>
                        </p>
                        <p className={twMerge("text-md mb-4 italic underline")}>
                          {item.company}
                        </p>
            
                        <div className="text-sm  prose prose-sm dark:prose-invert">
                          {item?.image && (
                            <Image
                              src={item.image}
                              alt="blog thumbnail"
                              height="1000"
                              width="1000"
                              className="rounded-lg mb-10 object-cover"
                            />
                          )}
                          {item.description}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
        </div>
      </section>
    );
}

const workExperiences = [
    {
      title: "Senior Full Stack Developer - SME ( AI and ML FOCUSED )",
      company: "Royal Bank Of Canada",
      type: "Contract Full Time",
      description: (
        <>
          <ul>
            <li>● Developed a banking asset management and delegation engine using Recurrent Neural Networks and Deep Learning. Focused on cleaning data, modelling, deployment and release management.</li>
            <li>● I worked on a highly intensive and important project with time constraints.</li>
            <li>● Worked in a fast-paced environment to complete the deliverables even before the deadline to cope with the incoming requirements from the client.</li>
            <li>● Followed scrum and agile methodologies and prepared departmental meetings, video conferences, and presentations using effective strategies.</li>
          </ul>
          <p>💎 Primary skill: Domain-Driven Design (DDD)</p>
        </>
      ),
      badge: "Feb 2023 - Present",
      image: ""
    },
    {
      title: "Senior Full Stack Developer - SME",
      company: "Royal Bank Of Canada",
      type: "Contract Full Time",
      description: (
        <>
          <ul>
            <li>● Developed a banking purchase management and delegation system using VueJS, NodeJS, JavaScript and Typescript involving an admin panel written in AngularJs and end-to-end selenium UI testing written in Python. Deployed the product on the Redhat OpenShift container platform (Kubernetes pods).</li>
            <li>● I worked on a highly intensive and important project with time constraints.</li>
            <li>● Worked in a fast-paced environment to complete the deliverables even before the deadline to cope with the incoming requirements from the client.</li>
            <li>● Followed scrum and agile methodologies and prepared departmental meetings, video conferences, and presentations using effective strategies.</li>
          </ul>
        </>
      ),
      badge: "Sep 2022 - Feb 2023",
      image: ""
    },
    {
      title: "Software Engineer",
      company: "Temenos, Canada",
      type: "Contract Full Time",
      description: (
        <>
          <ul>
            <li>● Developed a data payload streaming and monitoring application using Java8 and Spring Boot framework involving Event-driven architecture / Microservices / Monolithic Architecture, which supports streaming data to and from Kafka, Kinesis and EventHub with support for H2, Oracle, PostgreSQL, MySQL and NuoDB databases</li>
            <li>● Automated deployment process using Helm charts in Kubernetes by Jenkins pipeline.</li>
            <li>● Created custom common Helm Charts to support a custom project using CNCF Landscape tools.</li>
            <li>● Provisioning and working with AWS resources as per the need while saving cost by doing extensive research.</li>
            <li>● Troubleshoot issues related to networking and deployment in the SDLC. Troubleshooting the Kubernetes resources to keep it up and running.</li>
            <li>● Deployed observability stack to support monitoring (Prometheus) and tracing in the Kubernetes Cluster.</li>
            <li>● Created and deployed a fully automated Ansible playbook to provision using Terraform and configure various environments to fulfill the specific needs like DynamoDB and EKS upgrade for the project with the team.</li>
            <li>● Implemented ELK Stack on Kubernetes cluster using Filebeat agent.</li>
            <li>● Led my team for better performance and reliable application development. Solved various problems while working on algorithmic instances of an application. Implemented a responsive UI along with Firebase authentication and state management for data payload monitoring Webapp, Android and IOS.</li>
            <li>● Improved the UI of the application with my creative skills of Adobe XD. Implemented Material Design User Interface in ReactJs and NextJS. Managed the team workflow and project using Project Management software, JIRA.</li>
            <li>● Mentored and managed a team of 5 junior developers with cross-domain expertise.</li>
            <li>● Always been a leader, team player, problem solver, transparent, curious, adaptable and flexible person</li>
          </ul>
          <p>💎 Google Cloud Platform (GCP)</p>
        </>
      ),
      badge: "Feb 2022 - Sep 2022",
      image: ""
    },
    {
      title: "Web Developer, Digitial Marketer and Shopify Expert",
      company: "PPE Supply Canada",
      type: "Contract Full Time",
      description: (
        <>
          <ul>
            <li>● I started to work as an Order Fulfillment Associate and then got transferred to the Website development department.</li>
            <li>● Developed and hosted a ReactJs with Redux based eCommerce website and an admin panel which shows analytical results from the Nodejs application connected to the MongoDB database and a system running on Ruby on Rails.</li>
            <li>● Taught the basics of Web development and Cloud Computing to juniors in the company.</li>
          </ul>
        </>
      ),
      badge: "Jan 2022 - Feb 2022",
      image: ""
    },
    {
      title: "Senior Software Engineer",
      company: "Temenos India Pvt Ltd",
      type: "Full Time",
      description: (
        <>
          <p>Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</p>
          <p>💎 Spring Framework and Full-Stack Development</p>
        </>
      ),
      badge: "July 2021 - December 2021",
      image: ""
    },
    {
      title: "Software Engineer",
      company: "Temenos India Pvt Ltd",
      type: "Full Time",
      description: (
        <>
          <p>Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</p>
          <p>💎 Spring Framework and Full-Stack Development</p>
        </>
      ),
      badge: "June 2019 - July 2021",
      image: ""
    },
    {
      title: "Intern",
      company: "Temenos India Pvt Ltd",
      type: "Full Time",
      description: (
        <>
          <p>Primary language : Java</p>
          <p>💎 Spring Framework and Full-Stack Development</p>
        </>
      ),
      badge: "Jan 2019 - June 2019",
      image: ""
    },
    {
      title: "Senior Full Stack Developer - Freelancer",
      company: "Leadup Global",
      type: "Full Time",
      description: (
        <>
        </>
      ),
      badge: "Jan 2015 - Jan 2019",
      image: ""
    },
    {
      title: "Software Intern",
      company: "Qikonnect - NASSCOM 10K Startup",
      type: "Full Time",
      description: (
        <>
          <p>I was working as a software intern at Qikonnect Technologies Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</p>
        </>
      ),
      badge: "Jun 2017 - Jun 2018",
      image: ""
    },
    {
      title: "Software Intern",
      company: "Nexmoo Solutions (India) Private Limited",
      type: "Full Time",
      description: (
        <>
          <p>I was working as a software intern at Nexmoo Solutions Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</p>
        </>
      ),
      badge: "Jun 2017 - Jun 2018",
      image: ""
    },
    {
      title: "Software Intern",
      company: "Hewlett Packard Enterprise",
      type: "Full Time",
      description: (
        <>
          <p>During this internship, I developed an android application called HPADWEB which is a listing application that allows the end-users to list and interact with various data.</p>
        </>
      ),
      badge: "Jun 2016 - July 2016",
      image: ""
    },
    {
      title: "Software Intern",
      company: "Clhuble Pvt Ltd",
      type: "Full Time",
      description: (
        <>
          <p>I was responsible for creating a grocery android and ios application. I developed the Android application using Android Studio and IOS application using XCode.</p>
        </>
      ),
      badge: "March 2016 - March 2016",
      image: ""
    }
  ];

export default ExpertJourneys;