// NoticeCard.jsx

import React from "react";
import { MdEdit, MdDelete, MdDateRange } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";

import "./index.css";

const Card = ({ notice, type }) => {
  return (
    <div className="notice-card">
      <img src={notice.image} alt={notice.title} className="notice-image" />
      <div className="notice-content">
        <h3 className="notice-title">{notice.title}</h3>
        <p className="notice-description">{notice.description}</p>
      </div>

      <div className="notice-date">
        <IoTimerSharp className="date-icon" />
        {notice.date} - {notice.time}
      </div>
      <div
        className="notice-actions"
        style={{ right: type === "posts" ? "150px" : "20px" }}
      >
        {type === "posts" && (
          <span className="interested-text">
            <p className="in-p">I am Interested</p>
            <FaRegThumbsUp
              style={{ color: "#1A4258", height: "20px", width: "20px" }}
            />
          </span>
        )}

        <button className="edit-btn">
          <MdEdit style={{ color: "white" }} />
        </button>
        <button className="edit-btn">
          <MdDelete style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Card;
