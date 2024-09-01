import React, { useState } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import { HiPlusCircle } from "react-icons/hi2";
import { MdClose } from "react-icons/md"; // Import the close icon
import Card from "../Card";
import "./index.css";

const notices = [
  {
    id: 1,
    title: "Vendors Not Available for 2 Day",
    description:
      "Alert Every One as Account of Local Festival there is no Vendor services in our apartment for 2 days.",
    date: "02/12/23",
    time: "12:24 pm",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995144/Rectangle_44_armnls.png",
  },
  {
    id: 2,
    title: "Don't Use Lift",
    description:
      "Hello Everyone in our Block A No. 3 Lift Had Some problem which has a rope. we are really working hard to solve the problem. so don't use the Lift for 2 days. Thank you.",
    date: "01/11/23",
    time: "08:35 pm",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995136/Rectangle_44_1_om1bki.png",
  },
  {
    id: 3,
    title: "Theft Alert",
    description:
      "Alert Every One in A Block there is theft happening in the Block. So please Keep Your things Safe and Lock.",
    date: "09/11/23",
    time: "07:10 pm",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995129/Rectangle_44_2_v3crvp.png",
  },
];

const NoticePage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="apartment-container">
      <SideNavbar />
      <div className="apartment-right-sec">
        <TopNavbar heading="Notices" full={false} />
        <div className="apartment-right-main-sec">
          <div className="notice-board">
            <button className="add-notice-btn" onClick={toggleModal}>
              <span>
                <HiPlusCircle />
              </span>{" "}
              Add Notice
            </button>

            {showModal && (
              <div className="modal-overlay" onClick={toggleModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-btn" onClick={toggleModal}>
                    <MdClose />
                  </button>
                  <div className="modal">
                    <p className="head4 n-no-space">Add Notice</p>
                    <div className="notice-form">
                      <div className="notice-upper-sec">
                        <div className="n-img-upload">
                          <span>
                            <HiPlusCircle /> Add Image
                          </span>
                          <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="n-img-up-in"
                          />
                        </div>
                        <input
                          type="text"
                          className="n-inp"
                          placeholder="Enter Notice title here..."
                        />
                      </div>
                      <textarea
                        className="n-textarea"
                        placeholder="Enter the description here..."
                        rows={5}
                      />
                      <button className="login-submit-button no-space right-align">
                        Add Notice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h2 className="notice-title big">Notice List</h2>
            <div className="notice-list">
              {notices.map((notice) => (
                <Card key={notice.id} notice={notice} type="notice" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
