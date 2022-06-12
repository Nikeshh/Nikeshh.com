import React from "react";
import "./support.css";
import line from "../../images/line.png";

const Support = () => {
    return (
        <div className="support">
            <span className="title">Support</span>
            <h3 className="subtitle">Like My Work?</h3>
            <div className="content" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700', letterSpacing: '10px' }}>If you like my work</h3>
                <img src={line} alt="Line" className="line" width="300px" />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", marginTop: '20px' }}>You can always support me using the following links</h3>
                <div style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <img src={"./assets/images/patreon.png"} className="patreon" alt="patreon" style={{ borderRadius: '20px', marginRight: '30px' }} width="400px" />
                    <img src={"./assets/images/buymeacoffee.png"} className="buymeacoffee" alt="buymeacoffee" width="400px" />
                </div>
                <div className="button_with_line" style={{ position: 'relative' }}>
                    <button className="btn btn-warning">
                        <span>Know More</span>
                    </button>
                    <img src={line} alt="Line" className="line" style={{ position: 'absolute', left: '10%', top: '80%' }} width="300px" />
                </div>
            </div>
        </div>
    );
}

export default Support;