import React from "react";
import "./header.css";

const Header = (props) => {

    const page_name = props.page_name;

    const changeLanguage = (event) => {
        document.getElementById("language_nav").classList.toggle("show_language");
    }

    window.onclick = function(event) {
        if(!event.target.matches('#language_and_down_arrow')) {
            var dropdowns = document.getElementsByClassName("language_nav");
            var i;
            for (i=0; i < dropdowns.length; i++) {
                var dropdown = dropdowns[i];
                if(dropdown.classList.contains("show_language")) {
                    dropdown.classList.remove("show_language");
                }
            }
        }
    }

    return (
        <>
            <header className="header">
                <div className="header_logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={"/assets/images/loading.gif"} alt="logo" width="100px" />
                    <span style={{ fontWeight: '700', fontSize: '25px' }}>Nikeshh Vijayabaskaran</span>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><a href="#" className={page_name == "home" ? 'active' : ''}>Home</a></li>
                        <li><a href="#" className={page_name == "about" ? 'active' : ''}>About</a></li>
                        <li><a href="#" className={page_name == "skills" ? 'active' : ''}>Skills</a></li>
                        <li><a href="#" className={page_name == "works" ? 'active' : ''}>Works</a></li>
                        <li><a href="#" className={page_name == "testimonials" ? 'active' : ''}>Testimonials</a></li>
                        <li><a href="#" className={page_name == "mentoship" ? 'active' : ''}>Mentorship</a></li>
                        <li><a href="#" className={page_name == "blog" ? 'active' : ''}>Blog</a></li>
                        <li><a href="#" className={page_name == "support" ? 'active' : ''}>Support</a></li>
                        <li><a href="#" className="say_hello_or_hire">Say Hello / Hire Me</a></li>
                        <li>
                            <div className="language_dropdown">
                                <span id="language_and_down_arrow" onClick={(e) => changeLanguage(e)}>EN &#709;</span>
                                <nav id="language_nav" className="language_nav">
                                    <ul className="language">
                                        <li><a href="#" className="active">EN</a></li>
                                        <li><a href="#">FR</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;