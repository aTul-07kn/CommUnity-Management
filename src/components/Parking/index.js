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
    parkingLot: "P-101",
    FlatNo: "A102",
  },
  {
    parkingLot: "P-102",
    FlatNo: "B202",
  },
  {
    parkingLot: "P-103",
    FlatNo: "A203",
  },
  {
    parkingLot: "P-104",
    FlatNo: "B104",
  },
  {
    parkingLot: "P-105",
    FlatNo: "A105",
  },
  {
    parkingLot: "P-106",
    FlatNo: "B306",
  },
  {
    parkingLot: "P-107",
    FlatNo: "A107",
  },
  {
    parkingLot: "P-108",
    FlatNo: "B108",
  },
];

const calculateParkingSummary = (parkingData) => {
  const totalParkingLots = 50;
  const occupiedLots = parkingData.length;
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

    // Apply block filtering based on the first character of FlatNo
    let filteredData = dummyParkingData;
    if (activeFilter !== "All") {
      const block = activeFilter.split(" - ")[1]; // Get the block letter (e.g., "A" or "B")
      filteredData = filteredData.filter((data) => data.FlatNo[0] === block);
    }

    // Apply search filtering (if you have ownerName in your data)
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
              {/* <div className="search-container">
                <input
                  type="text"
                  placeholder="Search by owner name..."
                  value={searchQuery}
                  onChange={this.setSearchQuery}
                  className="ap-search-input"
                />
                <IoSearch className="ap-search-icon" />
              </div> */}
              <div className="complaints-display-sec">
                <div className="p-add-sec">
                  <h1 className="ap-head1">Parking Lot List</h1>
                  {/* <button className="login-submit-button no-space">
                    + Add Parking Lot
                  </button> */}
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Parking ID</th>
                      <th>Flat Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredParkingData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.parkingLot}</td>
                        <td>{data.FlatNo}</td>
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
