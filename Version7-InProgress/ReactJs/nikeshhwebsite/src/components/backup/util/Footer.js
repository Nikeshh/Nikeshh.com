const Footer = () => {
    return (
       <>
            <div id="footer" className="d-flex">
                <img src={"/logo192.png"} alt="logo" />
                <h1>Nikeshh V</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Testimonials</li>
                    <li>Mentorship</li>
                    <li>Blog</li>
                    <li>Support</li>
                    <li>SAY HELLO / HIRE ME</li>
                    <li>Profile</li>
                </ul>
            </div>
            <hr />
            <div className="d-flex">
                <p>TERMS OF USE</p>
                <i className="fa fa-info"></i>
                <p>INFO ABOUT WEBSITE</p>
                <ul>
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Discord</li>
                    <li>Slack</li>
                    <li>Email</li>
                </ul>
                <p>COPYRIGHT 2022. MADE WITH LOVE BY NIKESHH VIJAYABASKARAN.</p>
            </div>
       </>
    );
}

export default Footer;