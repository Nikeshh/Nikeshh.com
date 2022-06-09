import React from "react";
import './loading.css';

const Loading = () => {
    return (
        <>
            <img src={"/assets/images/loading.gif"} alt="loading_animation" />
            <h1>NIKESHH VIJAYABASKARAN</h1>
            <div className="loading">
                <span style={{ "--i":1 }}>L</span>
                <span style={{ "--i":2 }}>o</span>
                <span style={{ "--i":3 }}>a</span>
                <span style={{ "--i":4 }}>d</span>
                <span style={{ "--i":5 }}>i</span>
                <span style={{ "--i":6 }}>n</span>
                <span style={{ "--i":7 }}>g</span>
                <span style={{ "--i":8 }}>.</span>
            </div>
            <h1>HEY</h1>
        </>
    );
}

export default Loading;