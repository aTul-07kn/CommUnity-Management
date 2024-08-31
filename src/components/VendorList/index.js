// VendorList.jsx

import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
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
    {
      title: "Total No of Vendors",
      value: totalVendors,
      icon: <IoPerson />,
    },
  ];
};

const VendorList = ({ vendors }) => {
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
        <button className="login-submit-button">Add Vendor</button>
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
