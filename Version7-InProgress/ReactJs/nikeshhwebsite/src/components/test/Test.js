import React from "react";
import './test.css';

const Test = () => {
    return (
        <div className="test">
            <nav className="sidebar">
                <header>
                    <div className="logo-with-text">
                        <img src={"/assets/images/testlogo.png"} alt="Logo" className="logo" />
                        <div className="logo-text">
                            <span className="title">CodingLab</span>
                            <span className="subtitle">Web Developer</span>
                        </div>
                    </div>
                    <span className="open-close"><i class='bx bx-chevron-right'></i></span>
                </header>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <i class='bx bx-search-alt-2'></i>
                </div>
                <div className="top_list">
                    <ul>
                        <li>
                            <a href="#">
                                <i class='bx bx-home' ></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-bar-chart-alt-2' ></i>
                                Revenue
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-bell' ></i>
                                Notifications
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-signal-5' ></i>
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-like' ></i>
                                Likes
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-wallet' ></i>
                                Wallets
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom_list">
                    <ul>
                        <li>
                            <a href="#">
                                <i class='bx bx-log-out-circle'></i>
                                Logout
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-sun'></i>
                                <i class='bx bx-moon'></i>
                                DarkMode
                                <span className="toggle"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="home">
                <h1 style={{ margin: '50px' }}>Dashboard</h1>
            </div>
        </div>
    );
};

export default Test;