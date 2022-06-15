import React from "react";
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
                        <p><span>#Popular #Hot #Trend #Entertain ... </span><span>#Health #Politics #Sports #Science #Tech #Business #Weather</span></p>
                        <button>Add a new thread <i className="fa fa-add"></i></button>
                        <div className="row">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2">
                                <i className="fa fa-heart"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2">
                                <i className="fa fa-heart"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <ForumCard />
                            </div>
                            <div className="col-2">
                                <i className="fa fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forum;