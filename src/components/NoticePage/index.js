import { Component } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import { MdEdit, MdDelete, MdDateRange } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi2";
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

class NoticePage extends Component {
  render() {
    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Notices" full={false} />
          <div className="apartment-right-main-sec">
            <div className="notice-board">
              <button className="add-notice-btn">
                <span>
                  <HiPlusCircle />
                </span>{" "}
                Add Notice
              </button>
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
  }
}

export default NoticePage;
