import React from "react";
import Controls from "./forum/Controls";
import Header from "./forum/Header";
import Posts from "./forum/Posts";
import './forum/style.css';

const ForumScreen = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Controls />
                    <Posts />
                </div>
            </main>
        </>
    );
}

export default ForumScreen;