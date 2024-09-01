import React, { Component } from "react";
import VendorList from "../VendorList";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import "./index.css";

class RequestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: "All",
      vendors: [
        {
          id: 1,
          name: "Prakesh",
          service: "Water Can",
          company: "Pure Water Limited",
          phone: "9022569918",
        },
        {
          id: 2,
          name: "Nethanel",
          service: "House Keeping",
          company: "A to Z Home Needs",
          phone: "8978243438",
        },
        {
          id: 3,
          name: "Pavith",
          service: "House Keeping",
          company: "A to Z Home Needs",
          phone: "8978243439",
        },
        {
          id: 4,
          name: "Kavitha",
          service: "House Keeping",
          company: "A to Z Home Needs",
          phone: "8769265804",
        },
        {
          id: 5,
          name: "Thudor",
          service: "Laundry",
          company: "Wassher Needs",
          phone: "8798465381",
        },
        {
          id: 6,
          name: "Namish",
          service: "Sun Filter",
          company: "Sun Blaset",
          phone: "9580912891",
        },
        {
          id: 7,
          name: "Saraswathi",
          service: "Fiber Net",
          company: "Jio Fiber",
          phone: "9746291263",
        },
        {
          id: 8,
          name: "Poongodi",
          service: "Home Keeper",
          company: "Infinity Cleaning",
          phone: "9750025870",
        },
        {
          id: 9,
          name: "Sundaram",
          service: "AC Service",
          company: "M.Cool",
          phone: "9864489301",
        },
        {
          id: 10,
          name: "Thahir",
          service: "House Keeping",
          company: "Infinity Cleaning",
          phone: "9750025870",
        },
        {
          id: 11,
          name: "Muhsin",
          service: "Plumbing",
          company: "Arun Services",
          phone: "9098215678",
        },
        {
          id: 12,
          name: "Vani",
          service: "Electrician",
          company: "High Voltage",
          phone: "9887632122",
        },
        {
          id: 13,
          name: "Gurun",
          service: "Fiber Net",
          company: "SOUL",
          phone: "9552268850",
        },
        {
          id: 14,
          name: "Prebu",
          service: "Daily Milk",
          company: "Aavin Milk",
          phone: "9625656788",
        },
      ],
      formDetails: {
        address: "",
        phoneNumber: "",
        additionalNotes: "",
      },
    };
  }

  componentDidMount() {
    // Set default service type to the first service in the dynamic list
    const uniqueServiceTypes = this.getUniqueServiceTypes();
    this.setState({ serviceType: uniqueServiceTypes[0] });
  }

  getUniqueServiceTypes = () => {
    const { vendors } = this.state;
    const serviceTypes = vendors.map((vendor) => vendor.service);
    return ["All", ...new Set(serviceTypes)]; // Adds "All" option and removes duplicates
  };

  handleServiceTypeChange = (type) => {
    this.setState({ serviceType: type });
  };

  handleInputChange = (e) => {
    this.setState({
      formDetails: {
        ...this.state.formDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { serviceType, vendors, formDetails } = this.state;
    const uniqueServiceTypes = this.getUniqueServiceTypes(); // Get unique services dynamically
    const filteredVendors =
      serviceType === "All"
        ? vendors
        : vendors.filter((vendor) => vendor.service === serviceType);

    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Request Services" full={false} />
          <div className="apartment-right-main-sec">
            <h2 className="ap-head1">Select Service Type</h2>
            <div className="service-types">
              {uniqueServiceTypes.map((type) => (
                <button
                  key={type}
                  className={`round-button ${
                    serviceType === type ? "active" : ""
                  }`}
                  onClick={() => this.handleServiceTypeChange(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="service-request-details">
              <h3 className="ap-head1">Service Request Details</h3>
              <label className="ap-label">Address</label>
              <input
                type="text"
                placeholder="Enter your Address here"
                name="address"
                value={formDetails.address}
                onChange={this.handleInputChange}
                className="req-input"
              />
              <label className="ap-label">Phone no</label>
              <input
                type="text"
                placeholder="Enter the Phone no"
                name="phoneNumber"
                value={formDetails.phoneNumber}
                onChange={this.handleInputChange}
                className="req-input"
              />
              <label className="ap-label">Additional Notes</label>
              <textarea
                placeholder="Any Specific details"
                name="additionalNotes"
                value={formDetails.additionalNotes}
                onChange={this.handleInputChange}
                rows={4}
                className="req-input-text"
              />
              <button className="login-submit-button">Send Request</button>
            </div>
            <VendorList vendors={filteredVendors} />
          </div>
        </div>
      </div>
    );
  }
}

export default RequestsPage;
