import React from "react";
import './loginandregister/loginandregister.css';

const LoginScreen = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <div className="sign-in-form">
                    <h1>Sign in form</h1>
                </div>
                <div className="sign-up-form">
                    <h1>Sign up form</h1>
                </div>
                <div className="forgot-password-form active">
                    <h1>Forgot Password?</h1>
                    <form action="">
                        <div class="form-group">
                            <label for="">E-mail</label>
                            <input type="email" placeholder="@mail.com" />
                        </div>
                        <div class="form-group">
                            <button>RESET PASSWORD</button>
                        </div>
                        <div class="create-account">
                            <a href="javascript:;" class="go-to-sign-in">Go Back</a>
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