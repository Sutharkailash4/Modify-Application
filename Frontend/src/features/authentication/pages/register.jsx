import React, { useState } from "react";
import ".././style/register.css";
import "../../shared/style.global.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      username.trim() === "" &&
      email.trim() === "" &&
      password.trim() === "" &&
      confirmPassword.trim() === ""
    ) {
      return toast.error("All Filed Are Required");
    } else if (username.trim() === "") {
      return toast.error("Username is Required");
    } else if (email.trim() === "") {
      return toast.error("Email is Required");
    } else if (password.trim() === "") {
      return toast.error("Password is Required");
    } else if (confirmPassword.trim() === "") {
      return toast.error("Confirm Password is Required");
    } else {
      const data = await handleRegister({ username, email, password });
    }
  };

  return (
    <div className="register-page">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
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
          <input
            type="text"
            placeholder="Enter Your Full Name"
            id="register-name"
            name="register-name"
            value={username}
            onChange={(text) => {
              setUsername(text.target.value);
            }}
          />
          <img
            src="../../../.././public/email.png"
            alt="image not found"
            className="input-icon email-input-icon"
          />
          <span className="register-input-span register-email-span">
            Email Name
          </span>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="register-email"
            name="register-email"
            value={email}
            onChange={(text) => {
              setEmail(text.target.value);
            }}
          />
          <img
            src="../../../.././public/lock.png"
            alt="image not found"
            className="input-icon password-input-icon"
          />
          <span className="register-input-span register-password-span">
            Password
          </span>
          <input
            type="password"
            placeholder="Create a Password"
            id="register-password"
            name="register-password"
            value={password}
            onChange={(text) => {
              setPassword(text.target.value);
            }}
          />
          <img
            src="../../../.././public/lock.png"
            alt="image not found"
            className="input-icon confirm-password-input-icon"
          />
          <span className="register-input-span register-confirm-password-span">
            Confirm Password
          </span>
          <input
            type="password"
            placeholder="Cofirm Your Password"
            id="register-confirm-password"
            name="register-confirm-password"
            value={confirmPassword}
            onChange={(text) => {
              setConfirmPassword(text.target.value);
            }}
          />
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
          <i className="ri-arrow-right-long-fill"></i>
        </button>
        <div className="login-register-link">
          <p>
            Don't have an account?{" "}
            <NavLink to={"/login"} className="text-purple-color">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
