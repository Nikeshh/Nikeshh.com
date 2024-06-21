import React from "react";
import {
  Calendar,
  ChevronDown,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LocateIcon,
  MailPlusIcon,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Sidebar = ({ activeSidebar, setActiveSidebar }: {activeSidebar: boolean, setActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <aside className={`sidebar ${activeSidebar ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="./assets/images/my-avatar.png"
            alt="Nikeshh Vijayabaskaran"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name text-center" title="Nikeshh Vijayabaskaran">
            Nikeshh Vijayabaskaran
          </h1>
          <p className="title">Lead Full Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={() => setActiveSidebar(!activeSidebar)}>
          <span>Show contact details</span>
          <ChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailPlusIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:nikeshhbaskaran01@gmail.com" className="contact-link break-all">
                nikeshhbaskaran01@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+14168345350" className="contact-link">
                +1 (416) 834-5350
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 26</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocateIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Toronto, Canada</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link href="https://www.facebook.com/vnikeshh/" target="_blank" className="social-link">
              <Facebook />
            </Link>
          </li>
          <li className="social-item">
            <Link href="https://www.instagram.com/nikeshhvijayabaskaran/" target="_blank" className="social-link">
              <Instagram />
            </Link>
          </li>
          <li className="social-item">
            <Link href="https://x.com/NikeshhV" target="_blank" className="social-link">
              <Twitter />
            </Link>
          </li>
          <li className="social-item">
            <Link href="https://github.com/Nikeshh" target="_blank" className="social-link">
              <Github />
            </Link>
          </li>
          <li className="social-item">
            <Link href="https://www.linkedin.com/in/nikeshh/" target="_blank" className="social-link">
              <Linkedin />
            </Link>
          </li>
          <li className="social-item">
            <Link href="https://dribbble.com/nikeshh" target="_blank" className="social-link">
              <Dribbble />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
