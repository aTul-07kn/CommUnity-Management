import React, { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "resident", // default role
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
    console.log("Role:", this.state.role);
  };

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
            <h1 className="login-title">SignUp</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="new-form">
            <div className="login-input-group">
              <label htmlFor="email" className="login-input-label">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="login-input-field"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password" className="login-input-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="login-input-field"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="role" className="login-input-label">
                ROLE
              </label>
              <select
                id="role"
                className="login-input-field"
                value={this.state.role}
                onChange={this.handleInputChange}
              >
                <option value="admin">Admin</option>
                <option value="resident">Resident</option>
              </select>
            </div>
            <button type="submit" className="login-submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
