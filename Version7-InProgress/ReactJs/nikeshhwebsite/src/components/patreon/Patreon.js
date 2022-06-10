import React from "react";
import "./patreon.css";

const Patreon = () => {
    return (
        <div className="patreon">
            <span className="title">Support</span>
            <h3 className="subtitle">Like my work?</h3>
            <h2>If you like my work.</h2>
            <h2>You can always support me using the following links.</h2>
            <div className="patreon_links">
                <img src={"./assets/images/patreon.png"} className="patreon" alt="patreon" width="300px" style={{ borderRadius: '20px' }} />
                <img src={"./assets/images/buymeacoffee.png"} className="buymeacoffee" alt="buymeacoffee" width="300px" />
            </div>
            <div className="why_support">
                <p><i className="fa fa-eye"></i>Why Support</p>
                <h3>Supporters will get access to the premium content and much more</h3>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="row">
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Data in real-time</h4>
                        <p>
                            Collect data in real-time from multiple channels and 
                            move it into a data lake, in its original format.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Powerful Algorithms</h4>
                        <p>
                            With the help of powerful algorithms, quality rules 
                            & techniques, obtain simplified & enriched data.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Valuable business insights</h4>
                        <p>
                            Collect processed & cleansed data that is 
                            ready to be analyzed to gather valuable 
                            business insights.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Data in real-time</h4>
                        <p>
                            Collect data in real-time from multiple channels and 
                            move it into a data lake, in its original format.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Powerful Algorithms</h4>
                        <p>
                            With the help of powerful algorithms, quality rules 
                            & techniques, obtain simplified & enriched data.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-share"></i>
                        <h4>Valuable business insights</h4>
                        <p>
                            Collect processed & cleansed data that is 
                            ready to be analyzed to gather valuable 
                            business insights.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Patreon;