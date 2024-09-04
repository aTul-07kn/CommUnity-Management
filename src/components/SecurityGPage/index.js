import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Cookies from "js-cookie";
import "./index.css";

const dummySecurityData = [
  {
    name: "Kathir",
    block: "A",
    phoneNumber: "9626488117",
  },
  {
    name: "Murugan",
    block: "A",
    phoneNumber: "9445497450",
  },
  {
    name: "Iyyappan",
    block: "A",
    phoneNumber: "9888775670",
  },
  {
    name: "Siva",
    block: "A",
    phoneNumber: "9778868794",
  },
  {
    name: "Ganesh",
    block: "B",
    phoneNumber: "9080756453",
  },
  {
    name: "Kumar",
    block: "B",
    phoneNumber: "7896573580",
  },
  {
    name: "Sundharaj",
    block: "B",
    phoneNumber: "94630238576",
  },
  {
    name: "Nallasivam",
    block: "B",
    phoneNumber: "8903569358",
  },
];

const SecurityGPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const role = Cookies.get("role");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filterSecurityData = () => {
    if (activeFilter === "All") {
      return dummySecurityData;
    }
    // Convert "Block - A" to "A" and "Block - B" to "B"
    const blockFilter = activeFilter === "Block - A" ? "A" : "B";
    return dummySecurityData.filter((data) => data.block === blockFilter);
  };

  const filteredSecurityData = filterSecurityData();

  return (
    <>
      <h2 className="ap-head1 mar-top">Security Guard Details</h2>
      <div className="security-filter">
        {["All", "Block - A", "Block - B"].map((filter) => (
          <button
            key={filter}
            className={`c-block-button ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
        {role === "ADMIN" && (
          <button
            className="login-submit-button no-space align-end"
            onClick={toggleModal}
          >
            + Add Security
          </button>
        )}

        {showModal && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div
              className="s-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={toggleModal}>
                <MdClose />
              </button>
              <div className="modal">
                <h3 className="ap-head1">Add Security Guard</h3>
                <div className="vendor-form">
                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter Security Guard Name here..."
                  />

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter the Block here..."
                  />

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter the Phone Number here..."
                  />

                  <div className="modal-actions space-more">
                    <button
                      className="login-submit-button outline no-space size-less"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                    <button className="login-submit-button no-space size-less">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="security-display-sec">
        {/* Render blocks based on active filter */}
        {(activeFilter === "All" || activeFilter === "Block - A") && (
          <div>
            <h2 className="block-header">Block - A</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Block</th>
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
                      <td>{data.block}</td>
                      <td>{data.phoneNumber}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {(activeFilter === "All" || activeFilter === "Block - B") && (
          <div>
            <h2 className="block-header">Block - B</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Block</th>
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
                      <td>{data.block}</td>
                      <td>{data.phoneNumber}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default SecurityGPage;
