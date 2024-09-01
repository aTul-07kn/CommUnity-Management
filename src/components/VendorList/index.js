import React, { useState } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import "./index.css";
import VendorSummaryCard from "../VendorSummaryCard";

const randomColors = ["#00A3FF", "#7C00C9", "#1974D9", "#EA7200", "#01E032"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
};

const calculateVendorSummary = (vendors) => {
  const uniqueServices = new Set(vendors.map((vendor) => vendor.service));
  const totalVendors = vendors.length;

  return [
    {
      title: "Total No of Services",
      value: uniqueServices.size,
      icon: <MdMiscellaneousServices />,
    },
  ];
};

const VendorList = ({ vendors }) => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const vendorSummary = calculateVendorSummary(vendors);

  return (
    <div className="vendor-list">
      <h2 className="ap-head1">Vendor Services</h2>
      <div className="vendor-services-summary">
        {vendorSummary.map((summary, index) => {
          const randomColor = getRandomColor();
          return (
            <VendorSummaryCard
              key={index}
              title={summary.title}
              value={summary.value}
              color={randomColor}
              icon={summary.icon}
            />
          );
        })}
      </div>
      <div className="vendors-header">
        <h3>Vendors List</h3>
        <button className="login-submit-button" onClick={toggleModal}>
          Add Vendor
        </button>
        {showModal && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div
              className="v-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={toggleModal}>
                <MdClose />
              </button>
              <div className="modal">
                <div className="vendor-form">
                  <div className="image-upload-container">
                    <div
                      className="image-upload"
                      onClick={() =>
                        document.getElementById("imageUploadInput").click()
                      }
                    >
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="uploaded-image"
                        />
                      ) : (
                        <FaCirclePlus className="add-icon" />
                      )}
                    </div>
                    <input
                      type="file"
                      id="imageUploadInput"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                  </div>

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter Vendor Name here..."
                  />

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter Company here..."
                  />

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter Service here..."
                  />

                  <input
                    type="text"
                    className="n-inp"
                    placeholder="Enter Phone Number here..."
                  />
                  <div className="modal-actions">
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
            <th>Profile</th>
            <th>Name</th>
            <th>Service</th>
            <th>Company</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={vendor.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={`https://randomuser.me/api/portraits/med/men/${vendor.id}.jpg`}
                  alt="profile"
                  className="profile-image"
                />
              </td>
              <td>{vendor.name}</td>
              <td>{vendor.service}</td>
              <td>{vendor.company}</td>
              <td>{vendor.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorList;
