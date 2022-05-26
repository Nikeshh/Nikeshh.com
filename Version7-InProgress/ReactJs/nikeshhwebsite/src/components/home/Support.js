import React from "react";
import "./support.css";
import line from "../../images/line.png";

const Support = () => {
    return (
        <div className="support">
            <span className="title">Support</span>
            <h3 className="subtitle">Like My Work?</h3>
            <div className="content">
                <div className="content_with_line">
                    <h3>If you like my work.</h3>
                    <img src={line} alt="Line" className="line" />
                </div>
                <h3>You can always support me using the following links.</h3>
                <img src={"./assets/images/patreon.png"} className="patreon" alt="patreon" />
                <img src={"./assets/images/buymeacoffee.png"} className="buymeacoffee" alt="buymeacoffee" />
                <div className="button_with_line">
                    <button className="btn btn-warning"><span>Know More</span></button>
                    <img src={line} alt="Line" className="line" />
                </div>
            </div>
        </div>
    );
}

export default Support;