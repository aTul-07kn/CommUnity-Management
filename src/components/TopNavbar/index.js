import React from "react";
import { Link } from "react-router-dom";
import { IoPeople } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import "./index.css";

function TopNavbar({ heading, full }) {
  return (
    <nav className="top-nav-bar-container">
      <h3 className="n-head">{heading}</h3>
      <Link to="/user-profile" style={{ textDecoration: "none" }}>
        <button className="av-sec">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abdd184c42e67fb5d925e7701b8a9ea52c401fb586babe92070a58e33e1aca97?placeholderIfAbsent=true&apiKey=c0675f285b7e411a80445cebc7c0b8d3"
            alt="avatar"
            className="avathar"
          />
          <p className="n-text">Swathi</p>
        </button>
      </Link>
      <Link to="/apartment">
        <IoPeople
          style={{
            height: "25px",
            width: "25px",
            marginLeft: "30px",
            cursor: "pointer",
            color: "#1a4258",
          }}
        />
      </Link>
      <IoNotifications className="t-icon" />

      {full && (
        <Link to="/posts">
          <HiOutlineLogout className="t-icon" />
        </Link>
      )}
    </nav>
  );
}

export default TopNavbar;
