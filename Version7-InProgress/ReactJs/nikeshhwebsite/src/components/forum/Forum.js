import React from "react";
import Favorite from "./Favorite";
import "./forum.css";
import ForumCard from "./ForumCard";

const Forum = () => {
    return (
        <div className="forum">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <ul>
                            <li><i className="fa fa-home"></i>Home</li>
                            <li><i className="fa fa-home"></i>Your threads</li> 
                            <li><i className="fa fa-home"></i>Saved</li> 
                        </ul>
                        <p>
                            Subscribe to get information, the latest news and other
                            interesting offers
                        </p>
                        <div>
                            <input type="email" id="your_email" name="your_email" placeholder="Your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <p>
                            <span style={{ textDecoration: 'underline', color: 'blue' }}>#Popular</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Hot</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Trend</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Entertain</span> ...
                        </p>
                        <button className="p-3 my-3" style={{ borderRadius: '5px' }}>Add a new thread <i className="fa fa-add mx-2"></i></button>
                        <div className="row my-4">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Favorite />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Favorite />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Favorite />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forum;