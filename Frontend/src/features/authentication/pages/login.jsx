import React, { useState } from "react";
import ".././style/login.css";
import "../../shared/style.global.css";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email.trim() === "" && password.trim() === "") {
      return toast.error("Email and Password is Required");
    } else if (email.trim() === "") {
      return toast.error("Email is Required");
    } else if (password.trim() === "") {
      return toast.error("Password is Required");
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return toast.error("Invalid Email");
    }

    if (password.length < 6) {
      return toast.error("Password Must Be At Least 6 Characters");
    }

    try {
      const data = await handleLogin({ email, password });

      toast.success("Login Successful");

      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="login-page">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="login-heading-box">
          <div className="login-heading-img-box">
            <img src="/face-id.png" alt="image not found" />
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
            src="/email.png"
            alt="image not found"
            className="input-icon email-input-icon"
          />

          <span className="login-input-span login-email-span">
            Email Address
          </span>

          <input
            type="email"
            placeholder="Enter Your Email"
            id="login-email"
            name="login-email"
            value={email}
            onChange={(text) => {
              setEmail(text.target.value);
            }}
          />

          <img
            src="/lock.png"
            alt="image not found"
            className="input-icon password-input-icon"
          />

          <span className="login-input-span login-password-span">Password</span>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            id="login-password"
            name="login-password"
            value={password}
            onChange={(text) => {
              setPassword(text.target.value);
            }}
          />

          <i
            className={
              showPassword
                ? "ri-eye-line password-eye"
                : "ri-eye-off-line password-eye"
            }
            id="show-password-login"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          ></i>
        </div>

        <div className="login-remember-forgot-box">
          <div className="remember-box">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />

            <p>Remember me</p>
          </div>

          <p
            className="forgot-password text-purple-color"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password?
          </p>
        </div>

        <button type="submit" className="login-btn form-btn" disabled={loading}>
          {loading ? (
            "Logging In..."
          ) : (
            <>
              Login
              <i className="ri-arrow-right-long-fill"></i>
            </>
          )}
        </button>

        <div className="login-register-link">
          <p>
            Don't have an account?{" "}
            <NavLink to={"/register"} className="text-purple-color">
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
