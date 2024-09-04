import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import SecurityGPage from "../SecurityGPage";
import { MdModeEdit } from "react-icons/md";
import Cookies from "js-cookie";
import "./index.css";

const contacts = [
  { id: 1, name: "Kathir", service: "Plumbing", phone: "9626488117" },
  { id: 2, name: "Murugan", service: "Fire Station", phone: "9445497450" },
  { id: 3, name: "Iyyappan", service: "Pharmacy", phone: "9888775670" },
  {
    id: 4,
    name: "Paramasivam",
    service: "Police Station",
    phone: "9778688794",
  },
  { id: 5, name: "Dev", service: "Doctor", phone: "8659434445" },
];

const EmergencyContacts = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const role = Cookies.get("role");
  return (
    <div className="apartment-container">
      <SideNavbar />
      <div className="apartment-right-sec">
        <TopNavbar heading="Emergency Contacts" full={false} />
        <div className="apartment-right-main-sec">
          <div className="ap-lst">
            <h3 className="ap-head1">Emergency Contacts</h3>
            {role === "ADMIN" && (
              <button className="login-submit-button" onClick={toggleModal}>
                + Add Contact
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
                    <h3 className="ap-head1 space-above">
                      Add Emergency Contact
                    </h3>
                    <div className="vendor-form">
                      <input
                        type="text"
                        className="n-inp"
                        placeholder="Enter the service here..."
                      />

                      <input
                        type="text"
                        className="n-inp"
                        placeholder="Enter the Name here..."
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

          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Service</th>
                <th>Phone no</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.service}</td>
                  <td>{contact.phone}</td>
                  {role === "ADMIN" && (
                    <td>
                      <MdModeEdit className="em-ic" />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <SecurityGPage />
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
