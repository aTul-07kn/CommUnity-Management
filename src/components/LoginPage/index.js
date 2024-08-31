import React, { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <div className="login-left-sec"></div>
        <div className="login-right-sec">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1724905823/Group_315_gyjyyl.png"
            alt="main-logo"
            className="login-main-logo"
          />
          <div className="login-title-wrapper">
            <h1 className="login-title">Login</h1>
            <p className="login-welcome-text">Welcome Back</p>
          </div>
          <div className="login-input-group">
            <label htmlFor="emailInput" className="login-input-label">
              EMAIL
            </label>
            <input type="email" id="emailInput" className="login-input-field" />
          </div>
          <div className="login-input-group">
            <label htmlFor="passwordInput" className="login-input-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordInput"
              className="login-input-field"
            />
          </div>
          <button type="submit" className="login-submit-button">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
