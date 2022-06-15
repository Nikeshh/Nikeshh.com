import React from "react";
import './loginandregister/loginandregister.css';

const LoginScreen = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <div className="sign-in-form active">
                    <h1 className="form_header">Sign in to Your Brand</h1>
                    <div className="social-buttons">
                        <a href="#" title="Sign up via Google"><img src={"/assets/images/google.svg"} alt="Google" /></a>
                        <a href="#" title="Sign up via Apple"><img src={"/assets/images/apple.svg"} alt="Apple" /></a>
                        <a href="#" title="Sign up via Facebook"><img src={"/assets/images/facebook.svg"} alt="Facebook" /></a>
                    </div>
                    <div className="seperator">
                        <span>or do it via E-mail</span>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label for="">E-mail</label>
                            <input type="email" placeholder="@mail.com" />
                        </div>
                        <div className="form-group">
                            <label for="">Password</label>
                            <input type="password" className="error" placeholder="password" />
                            <div className="error-text">Must be 8 characters at least</div>
                        </div>
                        <div className="form-group remember-forgot">
                            <div className="remember">
                                <input type="checkbox" id="remember_me" name="bydefault" value="yes" className="form-checkbox" />
                                <label for="remember_me">Remember me</label>
                            </div>
                            <div className="forgot">
                                <a href="#" className="forgot-pass-link">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="form_button">SIGN IN</button>
                        </div>
                        <div className="create-aacount">
                            Not registered yet? <a href="#" className="text-underline sign-up-form-btn"> Create an Account</a>
                        </div>
                    </form>
                </div>
                <div className="sign-up-form">
                    <h1 className="form_header">Sign up to Your Brand</h1>
                    <div className="social-buttons">
                        <a href="#" title="Sign up via Google"><img src={"/assets/images/google.svg"} alt="Google" /></a>
                        <a href="#" title="Sign up via Apple"><img src={"/assets/images/apple.svg"} alt="Apple" /></a>
                        <a href="#" title="Sign up via Facebook"><img src={"/assets/images/facebook.svg"} alt="Facebook" /></a>
                    </div>
                    <div className="seperator">
                        <span>or do it via E-mail</span>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label for="">Name Surname</label>
                            <input type="input" placeholder="Name Surname" />
                        </div>
                        <div className="form-group">
                            <label for="">E-mail</label>
                            <input type="email" placeholder="@mail.com" />
                        </div>
                        <div className="form-group">
                            <label for="">Password</label>
                            <input type="password" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <button className="form_button">SIGN UP</button>
                        </div>
                        <div className="create-account">
                            Already registered? <a href="#" className="text-underline sign-in-form-btn">Sign In</a>
                        </div>
                    </form>
                </div>
                <div className="forgot-password-form">
                    <h1 className="form_header">Forgot Password?</h1>
                    <form action="">
                        <div className="form-group">
                            <label for="">E-mail</label>
                            <input type="email" placeholder="@mail.com" />
                        </div>
                        <div className="form-group">
                            <button className="form_button">RESET PASSWORD</button>
                        </div>
                        <div className="create-account">
                            <a href="#" className="go-to-sign-in">Go Back</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <img src={"/assets/images/loginandregister.svg"} alt="Login and Register" />
                <p style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700', letterSpacing: '2px', fontSize: '40px' }}>Maybe you will get more if you have a account!</p>
            </div>
        </div>
    );
}

export default LoginScreen;