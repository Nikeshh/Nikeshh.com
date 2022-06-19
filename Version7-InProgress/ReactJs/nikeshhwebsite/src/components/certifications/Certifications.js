import React from "react";
import "./certifications.css";

const Certifications = () => {
    return (
        <>
            <div className="certifications container">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ marginBottom: '30px' }}>Certifications</h2>
                    <ul className="certifications_tags" style={{  display: 'flex' }}>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            Web Development
                        </li>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            App Development
                        </li>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            AI & ML
                        </li>
                    </ul>
                </div>
                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col-lg-6" style={{ position: 'relative' }}>
                        <div className="certificate_frame">
                            <img src={"./assets/images/loading.gif"} alt="Certification Image" style={{ width: '100%' }} />
                        </div>
                        <div className="certificate_number" style={{ position: 'absolute', top: '0', left: '80px' }}>
                            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', fontSize: '100px' }}>1</h1>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Certificate Title</h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" , marginTop: '30px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                            eu tortor euismod, quis vehicula velit dictum. 
                            Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                            ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                            Sed a ex a ante ultricies fermentum ac eget nibh. 
                            Maecenas nec odio volutpat, scelerisque leo non, 
                            efficitur mauris.
                        </p>
                        <a href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certificate link</a>
                        <a href="#" style={{ display: 'block', fontFamily: "'Montserrat', sans-serif" }}>Certificate credential id</a>
                        <div style={{ marginTop: '10px' }} className="certificate_actions">
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>More</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Projects</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Tutorials</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col-lg-6" style={{ position: 'relative' }}>
                        <div className="certificate_frame">
                            <img src={"./assets/images/loading.gif"} alt="Certification Image" style={{ width: '100%' }} />
                        </div>
                        <div className="certificate_number" style={{ position: 'absolute', top: '0', left: '80px' }}>
                            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', fontSize: '100px' }}>2</h1>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Certificate Title</h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" , marginTop: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                            eu tortor euismod, quis vehicula velit dictum. 
                            Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                            ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                            Sed a ex a ante ultricies fermentum ac eget nibh. 
                            Maecenas nec odio volutpat, scelerisque leo non, 
                            efficitur mauris.
                        </p>
                        <a href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certificate link</a>
                        <a href="#" style={{ display: 'block', fontFamily: "'Montserrat', sans-serif" }}>Certificate credential id</a>
                        <div style={{ marginTop: '10px' }} className="certificate_actions">
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>More</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Projects</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Tutorials</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="awards container" style={{ marginTop: '100px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ marginBottom: '30px' }}>Awards</h2>
                    <ul className="awards_tags" style={{  display: 'flex' }}>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            Web Development
                        </li>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            App Development
                        </li>
                        <li style={{ backgroundColor: '#FFF1DA', padding: '10px', borderRadius: '5px', border: '1px solid #D66464' }}>
                            AI & ML
                        </li>
                    </ul>
                </div>
                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col-lg-6" style={{ position: 'relative' }}>
                        <img src={"./assets/images/loading.gif"} alt="Certification Image" style={{ width: '100%' }} />
                        <img src={"./assets/images/trophy.gif"} alt="Trophy" height="50px" style={{ position: 'absolute', left: '50px' }} />
                        <div className="certificate_number" style={{ position: 'absolute', top: '30px', left: '60px' }}>
                            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', fontSize: '100px' }}>1</h1>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Certificate Title</h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" , marginTop: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                            eu tortor euismod, quis vehicula velit dictum. 
                            Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                            ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                            Sed a ex a ante ultricies fermentum ac eget nibh. 
                            Maecenas nec odio volutpat, scelerisque leo non, 
                            efficitur mauris.
                        </p>
                        <a href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certificate link</a>
                        <a href="#" style={{ display: 'block', fontFamily: "'Montserrat', sans-serif" }}>Certificate credential id</a>
                        <div style={{ marginTop: '10px' }} className="certificate_actions">
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>More</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Projects</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Tutorials</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div className="col-lg-6" style={{ position: 'relative' }}>
                        <img src={"./assets/images/loading.gif"} alt="Certification Image" style={{ width: '100%' }} />
                        <img src={"./assets/images/trophy.gif"} alt="Trophy" height="50px" style={{ position: 'absolute', left: '50px' }} />
                        <div className="certificate_number" style={{ position: 'absolute', top: '30px', left: '60px' }}>
                            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', fontSize: '100px' }}>2</h1>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700' }}>Certificate Title</h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" , marginTop: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam at ultricies dui, eu mattis nisl. Etiam placerat orci 
                            eu tortor euismod, quis vehicula velit dictum. 
                            Morbi vehicula, tortor et cursus sollicitudin, massa lectus 
                            ornare lectus, ut gravida eros velit a libero. In a eros felis. 
                            Sed a ex a ante ultricies fermentum ac eget nibh. 
                            Maecenas nec odio volutpat, scelerisque leo non, 
                            efficitur mauris.
                        </p>
                        <a href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certificate link</a>
                        <a href="#" style={{ display: 'block', fontFamily: "'Montserrat', sans-serif" }}>Certificate credential id</a>
                        <div style={{ marginTop: '10px' }} className="certificate_actions">
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>More</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Projects</button>
                            <button className="btn btn-warning" style={{ fontFamily: "'Shadows Into Light', cursive", letterSpacing: '5px', fontWeight: '700' }}>Tutorials</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certifications;