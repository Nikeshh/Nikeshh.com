import React from "react";
import Favorite from "./Favorite";
import "./forum.css";
import ForumCard from "./ForumCard";

const Forum = () => {

    const toggleForumSidebar = () => {
        var bodyClasses = document.body.classList;
        bodyClasses.toggle("forum-sidebar-on");
    }

    return (
        <div className="forum">
            <div className="container-fluid">
                <div className="row">
                    <div id="forum-left-back" className="col-1">
                        <i className="fa fa-arrow-right p-3 my-3" style={{ border: '1px solid #000000', borderRadius: '50%' }} onClick={(e) => toggleForumSidebar()}></i>
                    </div>
                    <div id="forum-left" className="col-12 col-md-3">
                        <i className="fa fa-arrow-left p-3 my-3" style={{ border: '1px solid #000000', borderRadius: '50%' }} onClick={(e) => toggleForumSidebar()}></i>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            <li><i className="fa fa-home" style={{ marginRight: '10px' }}></i>Home</li>
                            <li><i className="fa fa-home" style={{ marginRight: '10px' }}></i>Your threads</li> 
                            <li><i className="fa fa-home" style={{ marginRight: '10px' }}></i>Saved</li> 
                        </ul>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Subscribe to get information, the latest news and other
                            interesting offers
                        </p>
                        <div className="row">
                            <div className="col-8">
                                <input type="email" id="your_email" name="your_email" placeholder="Your email" className="form-control" />
                            </div>
                            <div className="col-4">
                                <button className="p-2" style={{ borderRadius: '4px' }}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div id="forum-right" className="col-12 col-md-9">
                        <p>
                            <span style={{ textDecoration: 'underline', color: 'blue' }}>#Popular</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Hot</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Trend</span> <span style={{ textDecoration: 'underline', color: 'blue' }}>#Entertain</span> ...
                        </p>
                        <button className="p-3 my-3" style={{ borderRadius: '5px' }}>Add a new thread <i className="fa fa-add mx-2"></i></button>
                        <div className="row my-4">
                            <div className="col-12 col-md-10">
                                <ForumCard />
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center my-2">
                                <Favorite />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12 col-md-10">
                                <ForumCard />
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center my-2">
                                <Favorite />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12 col-md-10">
                                <ForumCard />
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center my-2">
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