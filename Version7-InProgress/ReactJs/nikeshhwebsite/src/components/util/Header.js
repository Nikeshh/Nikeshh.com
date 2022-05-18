import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="container header">
                    <div className="row header__row">
                        <div className="header__logo">
                            <img src={"./assets/images/logo.svg"} alt="logo" />
                            <span>Nikeshh V</span>
                        </div>
                        <nav className="header__tabs__nav">
                            <ul className="header__tabs">
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Skills</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Mentorship</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#" className="header__button">Say Hello / Hire Me</a></li>
                                <li>
                                    <span>EN</span>
                                    <img src={"./assets/images/Circle_arrow_down_font_awesome.svg"} alt="down_arrow" style={{width:"20px", height: "20px"}} />
                                    <nav className="language__nav">
                                        <ul className="language">
                                            <li><a href="#" className="active">EN</a></li>
                                            <li><a href="#">FR</a></li>
                                        </ul>
                                    </nav>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;