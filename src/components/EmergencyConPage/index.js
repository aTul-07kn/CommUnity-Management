import { Component } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import SecurityGPage from "../SecurityGPage";
import { MdModeEdit } from "react-icons/md";

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

class EmergencyContacts extends Component {
  render() {
    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Emergency Contacts" full={false} />
          <div className="apartment-right-main-sec">
            <div className="ap-lst">
              <h3 className="ap-head1">Emergency Contacts</h3>
              <button className="login-submit-button">+ Add Contact</button>
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
                    <td>
                      <MdModeEdit className="em-ic" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <SecurityGPage />
          </div>
        </div>
      </div>
    );
  }
}

export default EmergencyContacts;
