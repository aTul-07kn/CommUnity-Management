import { Component } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import PersonCard from "../PersonCard";
import { IoSearch } from "react-icons/io5";
import "./index.css";

class Apartment extends Component {
  state = {
    selectedBlock: "Block A",
    members: [
      // Sample data. Replace this with actual data or props as needed.
      {
        name: "Arul",
        block: "Block B",
        apartment: "B - 101",
        phone: "7708912031",
        email: "arul123@gmail.com",
      },
      {
        name: "Aravind",
        block: "Block B",
        apartment: "B - 102",
        phone: "9909118099",
        email: "aravind198@gmail.com",
      },
      {
        name: "Akash",
        block: "Block B",
        apartment: "B - 103",
        phone: "8997077890",
        email: "arunraja0@gmail.com",
      },
      {
        name: "Aarav",
        block: "Block A",
        apartment: "A - 101",
        phone: "8987764321",
        email: "aarav123@gmail.com",
      },
      {
        name: "Ananya",
        block: "Block A",
        apartment: "A - 102",
        phone: "9876543210",
        email: "ananya567@gmail.com",
      },

      {
        name: "Amit",
        block: "Block A",
        apartment: "A - 103",
        phone: "8796543210",
        email: "amit789@gmail.com",
      },
      {
        name: "Aisha",
        block: "Block A",
        apartment: "A - 104",
        phone: "9988776655",
        email: "aisha890@gmail.com",
      },
      // Add more members here
    ],
  };
  handleBlockChange = (block) => {
    this.setState({ selectedBlock: block });
  };

  render() {
    const { selectedBlock, members } = this.state;
    const filteredMembers = members.filter(
      (member) => member.block === selectedBlock
    );
    return (
      <div className="user-container">
        <TopNavbar heading="Apartment Members" full={true} />
        <div className="user-main-sec left-space">
          <div className="top-bar">
            <button
              className={`block-button ${
                selectedBlock === "Block A" ? "active" : ""
              }`}
              onClick={() => this.handleBlockChange("Block A")}
            >
              Block A
            </button>
            <button
              className={`block-button ${
                selectedBlock === "Block B" ? "active" : ""
              }`}
              onClick={() => this.handleBlockChange("Block B")}
            >
              Block B
            </button>
          </div>
          {/* <div className="m-search-sec">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by name..."
                className="ap-search-input"
              />
              <IoSearch className="ap-search-icon" />
            </div>
          </div> */}

          <div className="members-grid">
            {filteredMembers.map((member, index) => (
              <PersonCard
                key={index}
                name={member.name}
                block={member.block}
                room={member.apartment}
                phone={member.phone}
                email={member.email}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Apartment;
