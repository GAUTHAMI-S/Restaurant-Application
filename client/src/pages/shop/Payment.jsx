import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/06/09/61/01/360_F_609610143_J1Q1aHc6z99Jq93GLdTJJ8OjQfdBGDL2.jpg",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Currently Payment functionality is not included.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
