import { Component } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiFileWarningFill } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./index.css";
import VendorSummaryCard from "../VendorSummaryCard";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";

const randomColors = ["#00A3FF", "#7C00C9", "#1974D9", "#01E032", "#EA7200"];

const dummyComplaints = [
  {
    name: "Vishal",
    block: "A",
    flatNo: "A-124",
    complaint: "Parking Lot Problem",
    date: "02/12/23",
    status: "Solved",
  },
  {
    name: "Charan",
    block: "A",
    flatNo: "A-105",
    complaint: "Lift Problem",
    date: "02/12/23",
    status: "Solved",
  },
  {
    name: "Kavitha",
    block: "B",
    flatNo: "B-240",
    complaint: "Lift Problem",
    date: "01/12/23",
    status: "Solved",
  },
  {
    name: "Balu",
    block: "A",
    flatNo: "A-138",
    complaint: "Wing Light Problem",
    date: "01/12/23",
    status: "Unsolved",
  },
  {
    name: "Varun",
    block: "B",
    flatNo: "B-225",
    complaint: "Gym Facility",
    date: "01/12/23",
    status: "Solved",
  },
  {
    name: "Karthick",
    block: "B",
    flatNo: "B-206",
    complaint: "Fire False Alarm",
    date: "25/11/23",
    status: "Solved",
  },
  {
    name: "Murugesan",
    block: "B",
    flatNo: "B-154",
    complaint: "Waste in the wings",
    date: "19/11/23",
    status: "Unsolved",
  },
  {
    name: "Aadhi",
    block: "A",
    flatNo: "A-125",
    complaint: "Gym Facility",
    date: "19/11/23",
    status: "Solved",
  },
];

const calculateComplaintsSummary = (complaints) => {
  const totalComplaints = complaints.length;
  const totalSolved = complaints.filter(
    (complaint) => complaint.status === "Solved"
  ).length;
  const totalUnsolved = totalComplaints - totalSolved;
  const totalBlockA = complaints.filter(
    (complaint) => complaint.block === "A"
  ).length;
  const totalBlockB = complaints.filter(
    (complaint) => complaint.block === "B"
  ).length;

  return [
    {
      title: "Total no of Complaints",
      value: totalComplaints,
      icon: <RiFileWarningFill />,
    },
    {
      title: "Total no of Complaints Solved",
      value: totalSolved,
      icon: <IoMdCheckmarkCircleOutline />,
    },
    {
      title: "Total no of Complaints Unsolved",
      value: totalUnsolved,
      icon: <MdOutlinePendingActions />,
    },
    {
      title: "Total no of Complaints in Block A",
      value: totalBlockA,
      icon: <RiFileWarningFill />,
    },
    {
      title: "Total no of Complaints in Block B",
      value: totalBlockB,
      icon: <RiFileWarningFill />,
    },
  ];
};

class Complaints extends Component {
  state = {
    activeFilter: "All", // Initial state is "All"
  };

  setActiveFilter = (filter) => {
    this.setState({ activeFilter: filter });
  };

  render() {
    const { activeFilter } = this.state;
    const complaints = dummyComplaints;
    const complaintsSummary = calculateComplaintsSummary(complaints);
    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Complaints" full={false} />
          <div className="apartment-right-main-sec">
            {" "}
            <div className="vendor-services-summary">
              {complaintsSummary.map((summary, index) => {
                const randomColor = randomColors[index % randomColors.length];
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
            <div className="complaints-filter">
              {["All", "Solved", "Unsolved"].map((filter) => (
                <button
                  key={filter}
                  className={`c-block-button ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => this.setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="ap-search-input"
                />
                <IoSearch className="ap-search-icon" />
              </div>
              <div className="complaints-display-sec">
                <h1 className="ap-head1">Complaints List</h1>

                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Block</th>
                      <th>Flat no</th>
                      <th>Complaint</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((complaint, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{complaint.name}</td>
                        <td>{complaint.block}</td>
                        <td>{complaint.flatNo}</td>
                        <td>{complaint.complaint}</td>
                        <td>{complaint.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Complaints;
