import React from "react";
import "./forumheader.css";

const ForumHeader = (props) => {

    const page_name = props.page_name;

    const changeLanguage = () => {
        document.getElementById("language__nav").classList.toggle("show__language");
    }

    window.onclick = function(event) {
        if(!event.target.matches('.language__down__arrow')) {
            var dropdowns = document.getElementsByClassName("language__nav");
            var i;
            for (i=0; i < dropdowns.length; i++) {
                var dropdown = dropdowns[i];
                if(dropdown.classList.contains("show__language")) {
                    dropdown.classList.remove("show__language");
                }
            }
        }
    }

    return (
        <>
            <header>
                <div className="header">
                    <div className="row header__row">
                        <div className="header__logo">
                            <img src={"/assets/images/logo.svg"} alt="logo" />
                            <span>Nikeshh V</span>
                        </div>
                        <nav className="header__tabs__nav">
                            <ul className="header__tabs">
                                <li><a href="#" className={page_name == "home" ? 'active' : ''}>Home</a></li>
                                <li><a href="#" className={page_name == "about" ? 'active' : ''}>About</a></li>
                                <li><a href="#" className={page_name == "skills" ? 'active' : ''}>Skills</a></li>
                                <li><a href="#" className={page_name == "works" ? 'active' : ''}>Works</a></li>
                                <li><a href="#" className={page_name == "testimonials" ? 'active' : ''}>Testimonials</a></li>
                                <li><a href="#" className={page_name == "mentoship" ? 'active' : ''}>Mentorship</a></li>
                                <li><a href="#" className={page_name == "blog" ? 'active' : ''}>Blog</a></li>
                                <li><a href="#" className={page_name == "support" ? 'active' : ''}>Support</a></li>
                                <li><a href="#" className="header__button">Say Hello / Hire Me</a></li>
                                <li>
                                    <div className="language_dropdown">
                                        <span>EN</span>
                                        <img className="language__down__arrow" src={"/assets/images/Circle_arrow_down_font_awesome.svg"} alt="down_arrow" style={{width:"20px", height: "20px"}} onClick={(e) => changeLanguage()} />
                                        <nav id="language__nav" className="language__nav">
                                            <ul className="language">
                                                <li><a href="#" className="active">EN</a></li>
                                                <li><a href="#">FR</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default ForumHeader;