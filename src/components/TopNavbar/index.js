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
