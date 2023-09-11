import React, { useEffect, useState } from "react";

const Dashboard1 = () => {
  useEffect(() => {}, []);
  return (
    <div className="container-fluid py-2 p-4 rounded-3">
      <div className="row">
      <div className="col-md-4 p-2">
          <div className="card p-3 py-2 border-0 ">
            <p className="text-dark">Start using our pg management tools</p>

            <h6 className="text-dark"> Learn More</h6>
          </div>
        </div>
        <div className="col-md-4 p-2">
          <div className="card p-3 py-2 border-0 ">
            <p className="text-dark">Start using our pg management tools</p>

            <h6 className="text-dark"> Learn More</h6>
          </div>
        </div>
        <div className="col-md-4 p-2">
          <div className="card p-3 py-2 border-0 ">
            <p className="text-dark">Start using our pg management tools</p>

            <h6 className="text-dark"> Learn More</h6>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container-fluid {
            background-color: #ffffff;
          }
          .card {
            background-color: #EEEFF4;
            height: 17vh;
            opacity: 0.85;
            box-shadow: #EEEFF4 -3px 7px 15px -4px;
          }
          .text-mute {
            color: #9aabc3;
            font-size: 14px;
          }
          h5,
          p {
            color: #353e5d;
            font-size: 14px;
          }
          h6 {
            cursor: pointer;
            border-bottom: 1.5px solid transparent;
            width: fit-content;
            font-size: 14px;
          }
          h6:hover {
            border-bottom: 1.5px solid #595349;
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard1;
