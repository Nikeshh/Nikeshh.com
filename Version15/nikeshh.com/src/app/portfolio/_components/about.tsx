import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const About = ({ activeNavbar }: { activeNavbar: string }) => {

  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [testimonial, setTestimonial] = useState("");

  return (
    <article className={`about ${activeNavbar == "About" ? "active" : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
        I'm a Lead Full Stack Developer and Digital Marketer with over 10 years of experience, primarily working in software, web app development, and digital media. I enjoy turning complex problems into simple, beautiful, and intuitive <span className="underline inline">functional</span> software applications.
        </p>

        <p>
          I specialize in building intuitive web applications, softwares or websites. I make sure that the product is eye-catching, functional and
          easy to use.
        </p>

        <p>I love to work in AI, Web3 and Automation space. You can check out my works in the portfolio section. I am a developer who built skills with a great passion for technologies and creating impact for the end users.</p>
        <p>More info about me:<Link href="https://nikeshh.com/about" className="hover:text-blue-500 inline"> Click here</Link></p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg
                "
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web App Development</h4>

              <p className="service-item-text">
                The most modern and high-quality websites and applications made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile App Development</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Digital Marketing</h4>

              <p className="service-item-text">
                Promoting your product or service online through social media, SEO, and, more.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-photo.svg"
                alt="camera icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Education & Certifications</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg
                "
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Post graduation in Artificial Intelligence and Machine Learning</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Bachelor of Engineering in Computer Science</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Google Data Analytics Professional Certificate</h4>

              <p className="service-item-text">
                Issued: Nov 2021
              </p>
              <Link href="https://www.credly.com/badges/39aaaa1e-6676-4854-b8e6-1fe8aab100c0/linked_in_profile" target="_blank" className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline text-sm">
                  Check Credential
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Google Project Management: Professional Certificate</h4>

              <p className="service-item-text">
                Issued: Nov 2021
              </p>

              <Link href="https://www.credly.com/badges/adc3e6e6-4072-4154-92a8-777c1abc2dc4/linked_in_profile" target="_blank" className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline text-sm">
                  Check Credential
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item" onClick={() => {
            setOpen(true);
            setProfileImage("./assets/images/avatar-1.png");
            setName("Daniel lewis");
            setDate("July 12, 2022");
            setTestimonial("I am very happy with the template. It looks professional and intuitive. I can't wait to start using it in my next project. Thank you. ");
          }}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Daniel lewis
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item" onClick={() => {
            setOpen(true);
            setProfileImage("./assets/images/avatar-2.png");
            setName("Jessica miller");
            setDate("May 28, 2022");
            setTestimonial("I am very happy with the template. It looks professional and intuitive. I can't wait to start using it in my next project. Thank you. ");
          }}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-2.png"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Jessica miller
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item" onClick={() => {
            setOpen(true);
            setProfileImage("./assets/images/avatar-3.png");
            setName("Emily evans");
            setDate("March 12, 2022");
            setTestimonial("I am very happy with the template. It looks professional and intuitive. I can't wait to start using it in my next project. Thank you. ");
          }}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-3.png"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Emily evans
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item" onClick={() => {
            setOpen(true);
            setProfileImage("./assets/images/avatar-4.png");
            setName("Henry william");
            setDate("June 14, 2022");
            setTestimonial("I am very happy with the template. It looks professional and intuitive. I can't wait to start using it in my next project. Thank you. ");
          }}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-4.png"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Henry william
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

        <div className={`modal-container ${open ? "active" : ""}`} data-modal-container>
          <div className={`overlay ${open ? "active" : ""}`} data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <X onClick={() => setOpen(false)} />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={profileImage}
                  alt={name}
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {name}
              </h4>

              <time dateTime="2021-06-14">{date}</time>

              <div data-modal-text>
                <p>
                  {testimonial}
                </p>
              </div>
            </div>
          </section>
        </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
