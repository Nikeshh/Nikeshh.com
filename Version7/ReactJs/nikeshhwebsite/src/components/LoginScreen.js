import React from "react";
import './loginandregister/loginandregister.css';

const LoginScreen = () => {

    const toggleForgotPassword = () => {
        var signInFormClasses = document.getElementById("sign-in-form").classList;
        signInFormClasses.remove("active");
        var forgotPassFormClasses = document.getElementById("forgot-password-form").classList;
        forgotPassFormClasses.add("active");
    }

    const toggleGoToSignIn = () => {
        var signInFormClasses = document.getElementById("sign-in-form").classList;
        signInFormClasses.add("active");
        var forgotPassFormClasses = document.getElementById("forgot-password-form").classList;
        forgotPassFormClasses.remove("active");
    }

    const toggleSignUpFormBtn = () => {
        var signInFormClasses = document.getElementById("sign-in-form").classList;
        signInFormClasses.remove("active");
        var signUpFormClasses = document.getElementById("sign-up-form").classList;
        signUpFormClasses.add("active");
    }

    const toggleSignInFormBtn = () => {
        var signInFormClasses = document.getElementById("sign-in-form").classList;
        signInFormClasses.add("active");
        var signUpFormClasses = document.getElementById("sign-up-form").classList;
        signUpFormClasses.remove("active");
    }

    const toggleDarkMode = (e) => {
        var darkModeBtnClasses = document.getElementById("dark-mode-btn").classList;
        darkModeBtnClasses.toggle("active");
        var bodyClasses = document.body.classList;
        bodyClasses.toggle("dark-mode-on");
    }

    return (
        <div className="wrapper loginregister">
            <div className="left">
                <div id="sign-in-form" className="sign-in-form active">
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
                                <a href="#" className="forgot-pass-link" onClick={(e) => toggleForgotPassword()}>Forgot Password?</a>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="form_button">SIGN IN</button>
                        </div>
                        <div className="create-account">
                            Not registered yet? <a href="#" className="text-underline sign-up-form-btn" onClick={(e) => toggleSignUpFormBtn()}> Create an Account</a>
                        </div>
                    </form>
                </div>
                <div id="sign-up-form" className="sign-up-form">
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
                        <div className="sign-in">
                            Already registered? <a href="#" className="text-underline sign-in-form-btn" onClick={(e) => toggleSignInFormBtn()}>Sign In</a>
                        </div>
                    </form>
                </div>
                <div id="forgot-password-form" className="forgot-password-form">
                    <h1 className="form_header">Forgot Password?</h1>
                    <form action="">
                        <div className="form-group">
                            <label for="">E-mail</label>
                            <input type="email" placeholder="@mail.com" />
                        </div>
                        <div className="form-group">
                            <button className="form_button">RESET PASSWORD</button>
                        </div>
                        <div className="go-back">
                            <a href="#" className="go-to-sign-in" onClick={(e) => toggleGoToSignIn()}>Go Back</a>
                        </div>
                    </form>
                </div>
                <a href="#" id="dark-mode-btn" className="dark-mode-btn" onClick={(e) => toggleDarkMode(e)}>
                    <img src={"./assets/images/dark_mode.svg"} alt="Dark Mode" />
                </a>
            </div>
            <div className="right">
                <img src={"/assets/images/loginandregister.svg"} alt="Login and Register" />
                <p style={{ fontFamily: "'Dancing Script', cursive", fontWeight: '700', letterSpacing: '2px', fontSize: '40px' }}>Maybe you will get more if you have a account!</p>
            </div>
        </div>
    );
}

export default LoginScreen;