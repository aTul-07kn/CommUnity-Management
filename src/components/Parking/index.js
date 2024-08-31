import { Component } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import "./index.css";
import VendorSummaryCard from "../VendorSummaryCard";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";

const randomColors = ["#00A3FF", "#7C00C9", "#1974D9", "#01E032", "#EA7200"];

const dummyParkingData = [
  {
    id: "P-101,102",
    ownerName: "Karan",
    phoneNumber: "9080706050",
    vehicles: 2,
    block: "A",
  },
  {
    id: "P-103",
    ownerName: "Jawar",
    phoneNumber: "9998865780",
    vehicles: 1,
    block: "A",
  },
  {
    id: "P-104",
    ownerName: "Vijay",
    phoneNumber: "8900200022",
    vehicles: 1,
    block: "A",
  },
  {
    id: "P-105,106",
    ownerName: "Surya",
    phoneNumber: "9900077000",
    vehicles: 2,
    block: "A",
  },
  {
    id: "P-107",
    ownerName: "Saravanan",
    phoneNumber: "7890091234",
    vehicles: 1,
    block: "A",
  },
  {
    id: "P-108",
    ownerName: "Thangavel",
    phoneNumber: "9956789010",
    vehicles: 1,
    block: "B",
  },
  {
    id: "P-109,110",
    ownerName: "Kumar",
    phoneNumber: "9090808080",
    vehicles: 2,
    block: "B",
  },
];

const calculateParkingSummary = (parkingData) => {
  const totalParkingLots = parkingData.length;
  const occupiedLots = parkingData.filter((data) => data.vehicles > 0).length;
  const unoccupiedLots = totalParkingLots - occupiedLots;

  return [
    {
      title: "Total no of Parking lots",
      value: totalParkingLots,
      icon: <AiOutlineCar />,
    },
    {
      title: "No of Parking lots Occupied",
      value: occupiedLots,
      icon: <BsFillCarFrontFill />,
    },
    {
      title: "No of Parking lots Unoccupied",
      value: unoccupiedLots,
      icon: <AiOutlineCar />,
    },
  ];
};

class Parking extends Component {
  state = {
    activeFilter: "All",
    searchQuery: "",
  };

  setActiveFilter = (filter) => {
    this.setState({ activeFilter: filter });
  };

  setSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  filterParkingData = () => {
    const { activeFilter, searchQuery } = this.state;

    // Apply block filtering
    let filteredData = dummyParkingData;
    if (activeFilter !== "All") {
      filteredData = filteredData.filter(
        (data) => data.block === activeFilter.split(" - ")[1]
      );
    }

    // Apply search filtering
    if (searchQuery) {
      filteredData = filteredData.filter((data) =>
        data.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredData;
  };

  render() {
    const { activeFilter, searchQuery } = this.state;
    const parkingSummary = calculateParkingSummary(dummyParkingData);
    const filteredParkingData = this.filterParkingData();

    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Parking Lots" full={false} />
          <div className="apartment-right-main-sec">
            <div className="vendor-services-summary">
              {parkingSummary.map((summary, index) => {
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
              {["All", "Block - A", "Block - B"].map((filter) => (
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
                  placeholder="Search by owner name..."
                  value={searchQuery}
                  onChange={this.setSearchQuery}
                  className="ap-search-input"
                />
                <IoSearch className="ap-search-icon" />
              </div>
              <div className="complaints-display-sec">
                <div className="p-add-sec">
                  <h1 className="ap-head1">Parking Lot List</h1>
                  <button className="login-submit-button no-space">
                    + Add Parking Lot
                  </button>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Parking ID</th>
                      <th>Owner Name</th>
                      <th>Phone Number</th>
                      <th>No of Vehicles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredParkingData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.id}</td>
                        <td>{data.ownerName}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.vehicles}</td>
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

export default Parking;
