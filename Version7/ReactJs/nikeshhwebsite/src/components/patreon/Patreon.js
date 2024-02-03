import React from "react";
import line from "../../images/line.png";
import "./patreon.css";

const Patreon = () => {
    return (
        <div className="patreon container" style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
                <span className="title">Support</span>
                <h3 className="subtitle">Like my work?</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px', position: 'relative' }}>
                <h2 style={{ marginBottom: '30px'}}>If you like my work.</h2>
                <img src={line} alt="Line" className="like_my_work_line" width="300px" />
                <h2>You can always support me using the following links.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '150px', position: 'relative' }}>
                <img src={"./assets/images/patreon.png"} className="patreon" alt="patreon" width="300px" style={{ borderRadius: '20px', marginRight: '30px' }} />
                <img src={"./assets/images/buymeacoffee.png"} className="buymeacoffee" alt="buymeacoffee" width="300px" />
            </div>
            <div className="why_support" style={{ marginTop: '10px', position: 'relative' }}>
                <div className="why_support_header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '70px' }}>
                    <p className="why_support_tag"><i className="fa fa-eye"></i>Why Support</p>
                    <h3 style={{ fontWeight: '700' }}>Supporters will get access to the premium content and much more</h3>
                    <p style={{ width: '500px', marginTop: '30px', textAlign: 'center', fontStyle: 'italic' }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
                <div className="row" style={{ marginBottom: '100px' }}>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
                        <h4>Data in real-time</h4>
                        <p>
                            Collect data in real-time from multiple channels and 
                            move it into a data lake, in its original format.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
                        <h4>Powerful Algorithms</h4>
                        <p>
                            With the help of powerful algorithms, quality rules 
                            & techniques, obtain simplified & enriched data.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
                        <h4>Valuable business insights</h4>
                        <p>
                            Collect processed & cleansed data that is 
                            ready to be analyzed to gather valuable 
                            business insights.
                        </p>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '100px' }}>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
                        <h4>Data in real-time</h4>
                        <p>
                            Collect data in real-time from multiple channels and 
                            move it into a data lake, in its original format.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
                        <h4>Powerful Algorithms</h4>
                        <p>
                            With the help of powerful algorithms, quality rules 
                            & techniques, obtain simplified & enriched data.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="why_support_tag_icon fa fa-share"></i>
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