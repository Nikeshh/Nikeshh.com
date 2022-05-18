import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container header">
                <img src="./assets/images/Logo_Forum.svg" alt="logo" />
                <div className="header_logo_content">
                    <h4>Unity</h4>
                    <i className="fa fa-arrow-down"></i>
                    <nav className="header_logo_dropdown">
                        <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="single-topic.html">Single Topic Page</a></li>
                            <li><a href="simple-signup.html">Sign up Page</a></li>
                            <li><a href="create-topic.html">Create Topic Page</a></li>
                        </ul>
                    </nav>
                </div>
                <i className="fa fa-search"></i>
                <input placeholder="Search all forums"></input>
                <div className="topics_content">
                    <h4>Topics</h4>
                    <i className="fa fa-arrow-down"></i>
                    <nav className="topics_dropdown">
                        <ul>
                            <li><input type="checkbox" checked="true" />Search Titles Only</li>
                            <li><input type="checkbox" />Search Results as Posts</li>
                            <li><i className="fa fa-search"></i>Advanced Search</li>
                        </ul>
                    </nav>
                </div>
                <div className="latest_topics_content">
                    <h4>Latest Topics</h4>
                    <i className="fa fa-bars"></i>
                    <nav className="latest_topics_dropdown">
                        <div>
                            <ul className="row">
                                <li className="col-6"><a href="#">New</a></li>
                                <li className="col-6"><a href="#">Unread</a></li>
                                <li className="col-6"><a href="#">Groups</a></li>
                                <li className="col-6"><a href="#">Users</a></li>
                                <li className="col-6"><a href="#">Tags</a></li>
                                <li className="col-6"><a href="#">Shortcuts</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Categories</h3>
                            <ul className="row">
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-yellow"></i>
                                        Hobbies
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-dark-blue"></i>
                                        Social
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-blue"></i>
                                        Video
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-yellow"></i>
                                        Random
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-dark-blue"></i>
                                        Arts
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-blue"></i>
                                        Tech
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-yellow"></i>
                                        Gaming
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-dark-blue"></i>
                                        Science
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-blue"></i>
                                        Exchange
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-yellow"></i>
                                        Pets
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-dark-blue"></i>
                                        Entertainment
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-blue"></i>
                                        Education
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-yellow"></i>
                                        Q&As
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="#" className="category">
                                        <i className="bg-icon-dark-blue"></i>
                                        Politics
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="row">
                                <li className="col-6"><a href="#">Support</a></li>
                                <li className="col-6"><a href="#">Forum Rules</a></li>
                                <li className="col-6"><a href="#">Blog</a></li>
                                <li className="col-6"><a href="#">About</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="header__notification">
                    <div className="header__notification_btn">
                        <i className="fa fa-bell"></i>
                        <span>6</span>
                    </div>
                    <div className="header__notification_dropdown">
                        <a href="#">
                            <i className="fa fa-heart"></i>
                            <p>
                                Roswell . 16 feb, 17
                                <span>Which movie have you watched recently?</span>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="header__account">
                    <div className="header__account_btn">
                        <img src="./assets/images/A.svg" alt="user" />
                        azyrusmax
                        <i className="fa fa-arrow-down"></i>
                    </div>
                    <nav className="header__account_dropdown">
                        <div className="header__dropdown_icons">
                            <a href="#">
                                <i className="fa fa-bookmark"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-envelope"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-cog"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Badges</a></li>
                                <li><a href="#">My Groups</a></li>
                                <li><a href="#">Notifications</a></li>
                                <li><a href="#">Topics</a></li>
                                <li><a href="#">Likes</a></li>
                                <li><a href="#">Saved</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="header__create_topic">
                    <a href="create-topic.html">
                        <img src="./assets/images/Create_Topic.svg" alt="Create topic" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;