import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const NewsletterScreen = () => {
    return (
        <>
            <Header />
            <div className="row">
                <h4>NEWSLETTER</h4>
                <p>I write on topics like Technology, Coding, Product Development etc.</p>
            </div>
            <section>
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Newsletter Signup</h1>
                    </div>
                    <div className="col-lg-8">
                        <input type="email" placeholder="Your email address" />
                        <button>&#8594;</button>
                    </div>
                </div>
            </section>
            <section>
                <h4>Newsletter Downloads</h4>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>01</h1>
                    </div>
                    <div className="col-lg-4">
                        <h4>Organize the Content Moderators</h4>
                        <p>Eric Ravensoft in UI / UX Design</p>
                        <p>MAR 20 . <span>5 MIN READ <i className="fa fa-star"></i> <button>SAVE</button></span></p>
                    </div>
                    <div className="col-lg-5">
                        <button>PREVIEW</button>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>02</h1>
                    </div>
                    <div className="col-lg-4">
                        <h4>Organize the Content Moderators</h4>
                        <p>Eric Ravensoft in UI / UX Design</p>
                        <p>MAR 20 . <span>5 MIN READ <i className="fa fa-star"></i> <button>SAVE</button></span></p>
                    </div>
                    <div className="col-lg-5">
                        <button>PREVIEW</button>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>03</h1>
                    </div>
                    <div className="col-lg-4">
                        <h4>Organize the Content Moderators</h4>
                        <p>Eric Ravensoft in UI / UX Design</p>
                        <p>MAR 20 . <span>5 MIN READ <i className="fa fa-star"></i> <button>SAVE</button></span></p>
                    </div>
                    <div className="col-lg-5">
                        <button>PREVIEW</button>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>04</h1>
                    </div>
                    <div className="col-lg-4">
                        <h4>Organize the Content Moderators</h4>
                        <p>Eric Ravensoft in UI / UX Design</p>
                        <p>MAR 20 . <span>5 MIN READ <i className="fa fa-star"></i> <button>SAVE</button></span></p>
                    </div>
                    <div className="col-lg-5">
                        <button>PREVIEW</button>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>05</h1>
                    </div>
                    <div className="col-lg-4">
                        <h4>Organize the Content Moderators</h4>
                        <p>Eric Ravensoft in UI / UX Design</p>
                        <p>MAR 20 . <span>5 MIN READ <i className="fa fa-star"></i> <button>SAVE</button></span></p>
                    </div>
                    <div className="col-lg-5">
                        <button>PREVIEW</button>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default NewsletterScreen;