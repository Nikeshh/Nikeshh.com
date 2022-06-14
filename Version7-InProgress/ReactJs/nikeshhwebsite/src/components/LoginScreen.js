import React from "react";
import './loginandregister/loginandregister.css';

const LoginScreen = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <div className="sign-in-form active">
                    <h1>Sign in form</h1>
                </div>
                <div className="sign-up-form">
                    <h1>Sign up form</h1>
                </div>
                <div className="forgot-password-form">
                    <h1>Forgot password form</h1>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    );
}

export default LoginScreen;