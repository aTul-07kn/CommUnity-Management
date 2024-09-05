import React, { useState, useEffect } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import Cookies from "js-cookie";
import { RotatingLines } from "react-loader-spinner";
import { MdImportExport } from "react-icons/md";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const BillingPage = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success);

  const handlePayment = async () => {
    const jwtToken = Cookies.get("jwt_token");

    try {
      const data = JSON.parse(localStorage.getItem("data"));

      const newPayment = {
        amount: 3500,
        description: `Maintenance bill for flat ${data.flatNo}`,
        email: data.email,
        name: data.name,
        phoneNo: data.phoneNo,
      };

      const createNoticeResponse = await fetch(
        "http://localhost:9999/api/community/payment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(newPayment),
        }
      );
      console.log(createNoticeResponse);

      if (createNoticeResponse.ok) {
        const paymentLink = await createNoticeResponse.text();
        console.log(paymentLink);
        console.log("Payment link created successfully");

        // Redirect to the payment link
        window.location.href = paymentLink;
      } else {
        setApiStatus(apiStatusConstants.failure);
      }
    } catch (error) {
      setApiStatus(apiStatusConstants.failure);
      console.error("Error creating notice:", error);
    }
  };

  const renderLoadingView = () => (
    <div className="loader-container">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#1a4258"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );

  const renderFailureView = () => (
    <div className="error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="failure"
        className="failure-img"
      />
      <h1 className="failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  const renderSuccessView = () => {
    const role = Cookies.get("role");
    return (
      <div className="apartment-right-main-sec full-height">
        <div className="billing-sec">
          <h1 className="ap-head1">Monthly Maintenance Bill: 3500/-</h1>
          <button className="red-btn" onClick={handlePayment}>
            Pay Money
          </button>
        </div>
      </div>
    );
  };

  const getView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div className="apartment-container">
      <SideNavbar />
      <div className="apartment-right-sec">
        <TopNavbar heading="Billings " full={false} />
        {getView()}
      </div>
    </div>
  );
};

export default BillingPage;
