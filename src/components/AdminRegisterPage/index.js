import React, { Component } from "react";
import "./index.css";

class AdminRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNo: "",
      societyName: "",
      societyAddress: "",
      city: "",
      district: "",
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
      <div className="form-container">
        <div className="ad-img-sec"></div>
        <div className="ad-inp-sec">
          <div className="ad-inp-top-sec">
            <h3 className="ad-head1">Fill these details to continue</h3>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1724896011/logo-color_1_i3fzir.png"
              alt="logo"
              className="ad-logo-img"
            />
          </div>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              value={this.state.phoneNo}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="societyName"
              placeholder="Society Name"
              value={this.state.societyName}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="societyAddress"
              placeholder="Society Address"
              value={this.state.societyAddress}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={this.state.district}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="text"
              name="postal"
              placeholder="Postal"
              value={this.state.postal}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              className="ad-input-f"
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminRegisterPage;
