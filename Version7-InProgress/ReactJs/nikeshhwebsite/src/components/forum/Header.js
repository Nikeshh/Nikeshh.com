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
            </div>
        </header>
    );
};

export default Header;