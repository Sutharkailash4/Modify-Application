import React from "react";
import ".././style/login.css";
import "../../shared/style.global.css";

const Login = () => {
  return (
    <div className="login-page">
      <form>
        <div className="login-heading-box">
          <div className="login-heading-img-box">
            <img src="../../../.././public/face-id.png" alt="image not found" />
          </div>

          <div className="login-heading-text-box">
            <h2>
              Mood<span className="text-purple-color">ify</span>
            </h2>

            <p>Your Mood. Your Music.</p>
          </div>
        </div>

        <div className="login-heading-second-box">
          <h2>Welcome Back</h2>
          <p>Login to continue your mood based</p>
          <p>music journey.</p>
        </div>

        <div className="login-inputs-box">
          <img
            src="../../../.././public/email.png"
            alt="image not found"
            className="input-icon email-input-icon"
          />

          <span className="login-input-span login-email-span">
            Email Address
          </span>

          <input type="email" placeholder="Enter Your Email" />

          <img
            src="../../../.././public/lock.png"
            alt="image not found"
            className="input-icon password-input-icon"
          />

          <span className="login-input-span login-password-span">
            Password
          </span>

          <input type="password" placeholder="Enter Your Password" />
        </div>

        <div className="login-remember-forgot-box">
          <div className="remember-box">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>

          <p className="forgot-password text-purple-color">
            Forgot Password?
          </p>
        </div>

        <button type="submit" className="login-btn form-btn">
          Login
          <i className="ri-arrow-right-long-fill"></i>
        </button>

        <div className="login-register-link">
          <p>
            Don't have an account?{" "}
            <span className="text-purple-color">Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;