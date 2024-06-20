import { X } from "lucide-react";
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
          I&apos;m Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
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
              <h4 className="h4 service-item-title">Web design</h4>

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
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
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
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
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
