import React, { Component } from "react";
import "./index.css";

const dummySecurityData = [
  {
    id: "S - 001",
    name: "Kathir",
    block: "A",
    gateNo: 1,
    phoneNumber: "9626488117",
  },
  {
    id: "S - 002",
    name: "Murugan",
    block: "A",
    gateNo: 2,
    phoneNumber: "9445497450",
  },
  {
    id: "S - 005",
    name: "Iyyappan",
    block: "A",
    gateNo: 1,
    phoneNumber: "9888775670",
  },
  {
    id: "S - 006",
    name: "Paramasivam",
    block: "A",
    gateNo: 2,
    phoneNumber: "9778868794",
  },
  {
    id: "S - 003",
    name: "Ganesh",
    block: "B",
    gateNo: 1,
    phoneNumber: "9080756453",
  },
  {
    id: "S - 004",
    name: "Kumar",
    block: "B",
    gateNo: 2,
    phoneNumber: "7896573580",
  },
  {
    id: "S - 007",
    name: "Sundharaj",
    block: "B",
    gateNo: 1,
    phoneNumber: "94630238576",
  },
  {
    id: "S - 008",
    name: "Nallasivam",
    block: "B",
    gateNo: 2,
    phoneNumber: "8903569358",
  },
];

class SecurityGPage extends Component {
  state = {
    activeFilter: "All",
  };

  setActiveFilter = (filter) => {
    this.setState({ activeFilter: filter });
  };

  filterSecurityData = () => {
    const { activeFilter } = this.state;
    if (activeFilter === "All") {
      return dummySecurityData;
    }
    // Convert "Block - A" to "A" and "Block - B" to "B"
    const blockFilter = activeFilter === "Block - A" ? "A" : "B";
    return dummySecurityData.filter((data) => data.block === blockFilter);
  };

  render() {
    const { activeFilter } = this.state;
    const filteredSecurityData = this.filterSecurityData();

    return (
      <>
        <h2 className="ap-head1 mar-top">Security Gaurd Details</h2>
        <div className="security-filter">
          {["All", "Block - A", "Block - B"].map((filter) => (
            <button
              key={filter}
              className={`c-block-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => this.setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button className="login-submit-button no-space align-end">
            + Add Security
          </button>
        </div>
        <div className="security-display-sec">
          {/* Render blocks based on active filter */}
          {activeFilter === "All" || activeFilter === "Block - A" ? (
            <div>
              <h2 className="block-header">Block - A</h2>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Block</th>
                    <th>Gate no</th>
                    <th>Phone no</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSecurityData
                    .filter((data) => data.block === "A")
                    .map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.id}</td>
                        <td>{data.block}</td>
                        <td>{data.gateNo}</td>
                        <td>{data.phoneNumber}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {activeFilter === "All" || activeFilter === "Block - B" ? (
            <div>
              <h2 className="block-header">Block - B</h2>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Block</th>
                    <th>Gate no</th>
                    <th>Phone no</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSecurityData
                    .filter((data) => data.block === "B")
                    .map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.id}</td>
                        <td>{data.block}</td>
                        <td>{data.gateNo}</td>
                        <td>{data.phoneNumber}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default SecurityGPage;
