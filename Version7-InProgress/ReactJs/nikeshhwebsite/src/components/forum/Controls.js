import React from "react";

const Controls = () => {
    return (
        <div className="controls__nav">
            <div className="controls__nav_categories">
                <div className="controls__nav_categories_btn">
                    All Categories
                    <i className="fa fa-arrow-down"></i>
                </div>
                <nav className="controls__nav_dropdown">
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
                </nav>
            </div>
            <div className="controls__nav_tags">
                <div className="controls__nav_tags_btn">
                    Tags
                    <i className="fa fa-arrow-down"></i>
                </div>
                <div className="controls__nav_tags_dropdown">
                    <a href="#" className="bg-icon-yellow">gaming</a>
                    <a href="#" className="bg-icon-dark-blue">nature</a>
                    <a href="#" className="bg-icon-blue">entertainment</a>
                    <a href="#" className="bg-icon-yellow">selfie</a>
                    <a href="#" className="bg-icon-dark-blue">camera</a>
                    <a href="#" className="bg-icon-blue">username</a>
                    <a href="#" className="bg-icon-yellow">funny</a>
                    <a href="#" className="bg-icon-dark-blue">photography</a>
                    <a href="#" className="bg-icon-blue">climbing</a>
                    <a href="#" className="bg-icon-yellow">adventure</a>
                    <a href="#" className="bg-icon-dark-blue">dreams</a>
                    <a href="#" className="bg-icon-blue">life</a>
                    <a href="#" className="bg-icon-yellow">reason</a>
                    <a href="#" className="bg-icon-dark-blue">social</a>
                </div>
            </div>
            <div className="controls__nav_menu">
                <ul>
                    <li className="active"><a href="#">Latest</a></li>
                    <li><a href="#">Unread</a></li>
                    <li><a href="#">Rising</a></li>
                    <li><a href="#">Most Liked</a></li>
                    <li><a href="#">Follow Feed</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Controls;