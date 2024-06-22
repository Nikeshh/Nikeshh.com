import { Book } from "lucide-react";

const Resume = ({ activeNavbar }: { activeNavbar: string }) => {
  return (
    <article className={`resume ${activeNavbar == "Resume" ? "active" : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Book />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Lead Full Stack Developer - SME · Royal Bank Of Canada</h4>

            <span>Sep 2022 - Present</span>

            <ul className="timeline-text">
              <li>● Developed a banking asset management and delegation engine using Recurrent Neural Networks and Deep Learning. Focused on cleaning data, modelling, deployment and release management.</li>
              <li>● I worked on a highly intensive and important project with time constraints.</li>
              <li>● Worked in a fast-paced environment to complete the deliverables even before the deadline to cope with the incoming requirements from the client.</li>
              <li>● Followed scrum and agile methodologies and prepared departmental meetings, video conferences, and presentations using effective strategies.</li>
              <li>● Developed a banking purchase management and delegation system using VueJS, NodeJS, JavaScript and Typescript involving an admin panel written in AngularJs and end-to-end selenium UI testing written in Python. Deployed the product on the Redhat OpenShift container platform (Kubernetes pods).</li>
              <li>● Skills: Domain-Driven Design (DDD)</li>
            </ul>
          </li>
          
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer · Temenos, Canada</h4>

            <span>Feb 2022 - Sep 2022 · 8 months</span>

            <ul className="timeline-text">
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
              <li>● Always been a leader, team player, problem solver, transparent, curious, adaptable and flexible person.</li>
              <li>● Skills: Google Cloud Platform (GCP)</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer, Digital Marketer and Shopify Expert · PPE Supply Canada</h4>

            <span>Jan 2022 - Feb 2022 · 2 months</span>

            <ul className="timeline-text">
              <li>● I started to work as an Order Fulfillment Associate and then got transferred to the Website development department.</li>
              <li>● Developed and hosted a ReactJs with Redux based eCommerce website and an admin panel which shows analytical results from the Nodejs application connected to the MongoDB database and a system running on Ruby on Rails.</li>
              <li>● Taught the basics of Web development and Cloud Computing to juniors in the company.</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Software Engineer · Temenos, India</h4>

            <span>Jan 2019 - Dec 2021 · 3 years</span>

            <ul className="timeline-text">
              <li>● Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Full Stack Developer · Leadup Global, India</h4>

            <span>Jan 2015 - Jan 2019 · 4 years 1 month</span>

            <ul className="timeline-text">
              <li>● Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Intern · Qikonnect Technologies Pvt Ltd, India - NASSCOM 10K Startup</h4>

            <span>Jun 2017 - Jun 2018 · 1 year 1 month</span>

            <ul className="timeline-text">
              <li>● I was working as a software intern at Qikonnect Technologies Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Intern · Nexmoo Solutions Pvt Ltd, India</h4>

            <span>Jun 2017 - Jun 2018 · 1 year 1 month</span>

            <ul className="timeline-text">
              <li>● I was working as a software intern at Nexmoo Solutions Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Intern · Hewlett Packward Enterprise, India</h4>

            <span>Jun 2016 - Jul 2016 · 2 months</span>

            <ul className="timeline-text">
              <li>● During this internship, I developed an android application called HPADWEB which is a listing application that allows the end-users to list and interact with various data.</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Intern · Clhuble Pvt Ltd</h4>

            <span>Mar 2016 - Mar 2016 · 1 month</span>

            <ul className="timeline-text">
              <li>● I was responsible for creating a grocery android and ios application. I developed the Android application using Android Studio and IOS application using XCode.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Full Stack App Development</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Building Apps from Start to Finish</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Getting Your Brand Noticed Online</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Mobile App Development</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Digital Marketing</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Keeping Projects on Track</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <section className="timeline !mt-10">
        <div className="title-wrapper">
          <div className="icon-box">
            <Book />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Lambton College, Canada
            </h4>

            <span>2022 — 2023</span>

            <p className="timeline-text">
              Postgraduate Degree, Artificial Intelligence and Machine Learning 
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">PSG Institue Of Technology And Applied Research, India</h4>

            <span>2015 — 2019</span>

            <p className="timeline-text">
              Bachelor of Computer Science Engineering
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;