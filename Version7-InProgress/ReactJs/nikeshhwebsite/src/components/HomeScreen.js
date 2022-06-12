import React from "react";
import "./home/style.css";
import Header from "./util/Header";
import Landing from "./home/Landing";
import MyStory from "./home/MyStory";
import SkillsAndServices from "./home/SkillsAndServices";
import ProjectsAndWorks from "./home/ProjectsAndWorks";
import NotesAndAction from "./home/NotesAndAction";
import Testimonials from "./home/Testimonials";
import Mentorship from "./home/Mentorship";
import Blog from "./home/Blog";
import Support from "./home/Support";
import Newsletter from "./home/Newsletter";
import Contact from "./home/Contact";
import Footer from "./util/Footer";

const HomeScreen = () => {
    return (
        <>
            <div style={{ height: '100vh', position: 'relative' }}>
                <Header page_name="home" />
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', marginTop: '40px' }}>
                    <Landing />
                </div>
                <div className="comment_and_info">
                    <a href="#" className="social-icon"><i className="fa-solid fa-comment"></i></a>
                    <a href="#" className="social-icon"><i className="fa-solid fa-info"></i></a>
                </div>
            </div>
            <div className="container">
                <MyStory />
                <SkillsAndServices />
                <ProjectsAndWorks />
                <NotesAndAction />
                <Testimonials /> {/* Need to do */}
                <Mentorship />
                <Blog /> {/* Need to do */}
                <Support />
                <Newsletter /> {/* Need to do */}
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default HomeScreen;