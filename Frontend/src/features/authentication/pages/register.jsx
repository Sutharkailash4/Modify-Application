import React from "react";
import ".././style/register.css";
import "../../shared/style.global.css";

const Register = () => {
  return (
    <div className="register-page">
      <form>
        <div className="register-heading-box">
          <div className="register-heading-img-box">
            <img src="../../../.././public/face-id.png" alt="image not found" />
          </div>
          <div className="register-heading-text-box">
            <h2>
              Mood<span className="text-purple-color">ify</span>
            </h2>
            <p>Your Mood. Your Music.</p>
          </div>
        </div>
        <div className="register-heading-second-box">
          <h2>Create Account</h2>
          <p>Join modify and let your emotion</p>
          <p>find the perfect song for you.</p>
        </div>
        <div className="register-inputs-box">
          <img
            src="../../../.././public/user.png"
            alt="image not found"
            className="input-icon user-input-icon"
          />
          <span className="register-input-span register-username-span">
            Full Name
          </span>
          <input type="text" placeholder="Enter Your Full Name" />
          <img
            src="../../../.././public/email.png"
            alt="image not found"
            className="input-icon email-input-icon"
          />
          <span className="register-input-span register-email-span">
            Email Name
          </span>
          <input type="email" placeholder="Enter Your Email" />
          <img
            src="../../../.././public/lock.png"
            alt="image not found"
            className="input-icon password-input-icon"
          />
          <span className="register-input-span register-password-span">
            Password
          </span>
          <input type="password" placeholder="Create a Password" />
          <img
            src="../../../.././public/lock.png"
            alt="image not found"
            className="input-icon confirm-password-input-icon"
          />
          <span className="register-input-span register-confirm-password-span">
            Confirm Password
          </span>
          <input type="password" placeholder="Cofirm Your Password" />
        </div>
        <div className="register-terms-box">
          <input type="checkbox" />
          <p className="terms-para">
            I agree to the{" "}
            <span className="text-purple-color">Terms of Use</span> and{" "}
            <span className="text-purple-color">Private Policy</span>
          </p>
        </div>
        <button type="submit" className="register-btn form-btn">
          Create Account
          <i class="ri-arrow-right-long-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
