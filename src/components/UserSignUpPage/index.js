import React, { Component } from "react";
import "./index.css";

class UserSignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNo: "",
      isAResident: "",
      societyName: "",
      flatNo: "",
      postal: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Handle form submission logic
  };

  render() {
    return (
      <div className="u-form-container">
        <div className="u-img-sec"></div>
        <div className="u-inp-sec">
          <div className="u-inp-top-sec">
            <h3 className="u-head1">Sign Up</h3>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1724896011/logo-color_1_i3fzir.png"
              alt="logo"
              className="u-logo-img"
            />
          </div>
          <form className="u-register-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              value={this.state.phoneNo}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <select
              name="residentOrNot"
              value={this.state.societyName}
              onChange={this.handleChange}
              className="u-input-f u-select-f"
              placeholder=" Are you a resident?"
              required
            >
              <option value="" disabled>
                Are you a resident?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <input
              type="text"
              name="societyName"
              placeholder="Society Name"
              value={this.state.societyName}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <input
              type="text"
              name="flatNo"
              placeholder="flatNo"
              value={this.state.flatNo}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />

            <input
              type="text"
              name="postal"
              placeholder="Postal"
              value={this.state.postal}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              className="u-input-f"
              required
            />
            <button type="submit" className="u-submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserSignUpPage;
