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
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                    <Landing />
                </div>
            </div>
            <div className="container">
                <MyStory />
                <SkillsAndServices />
                <ProjectsAndWorks />
                <NotesAndAction />
                <Testimonials />
                <Mentorship />
                <Blog />
                <Support />
                <Newsletter />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default HomeScreen;