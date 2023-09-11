import React, { useState, useEffect } from "react";
import { MdCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import MaterialTable from "@material-table/core";
const Dashboard2 = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-8 p-0 pe-3 ">
          <div className="card rounded-3 p-3 border-0 no-data">
            <h5 className="mb-0">
              Beds are going to be vacant soon
              {/* <p className="float-end text-mute ">Coustomer</p> */}
            </h5>
            <hr />
            {/* {allCamp.length > 0 && campPermission?.can_view == 1 ? (
              allCamp.map((data, i) => ( */}
            <div className="row">
              <div className="col-md-8 d-flex  p-2 py-1">
                <img
                  src="../../imgs/single-bed-s.png"
                  alt="Preview"
                  style={{
                    width: "40px",
                    height: "40px",
              
                  }}
                />

                <div className="text-start ps-3 pt-1">
                  <h6
                    className="name mb-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    ***
                  </h6>
                  <p className="text-mute">Last date ***</p>
                </div>
              </div>
              <div className="col-md-4 p-2  pt-3 ">
                <div
                  className="card p-1 ps-2 pe-2  float-end "
                  style={{
                    width: "10vw",
                    // backgroundColor: "#EEEFF4",
                    textAlign: "center",
                  }}
                >
                  <p
                    className=" mb-0 text-mute"
                    style={{ fontSize: ".7rem", letterSpacing: ".5px" }}
                  >
                    Detail
                  </p>
                </div>
              </div>
            </div>
            {/* ))
            ) : (
              <div className=" text-mute d-flex justify-content-center ">
                No campaign to show
              </div> */}
            {/* )} */}
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="card rounded-3 p-3 border-0 no-data">
            <h5 className="mb-0 ">Upcoming and outstanding rent</h5>

            <hr />

            {/* {posts.length > 0 && staffPermission?.can_view == 1 ? (
              posts.map((data, i) => ( */}
            <div className="row">
              <div className="col-md-9 d-flex  p-2 py-1">
                <img
                  src={"../../imgs/single-bed-s.png"}
                  alt="Preview"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />

                <div className="text-start ps-3 pt-1">
                <h6
                    className="name mb-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    ***
                  </h6>
                  <p className="text-mute">Date ***</p>
                  
                </div>
              </div>
              <div className="col-md-3 p-2  pt-3 d-flex">
                {/* WhatsApp Button */}
              </div>
            </div>
            {/* ))
            ) : ( */}
            {/* <div className=" text-mute d-flex justify-content-center ">
                No staff to show
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="row my-4 rounded-3">
        <div className="col-12 p-0 rounded-3">
 
            
            <MaterialTable
            data={posts}
            columns={[
              {
                title: "Location",
                field: "profile_image",
             
              },
              {
                title: "Room type",
                field: "firstname",
              },
              {
                title: "Floor no",
                field: "email",
              },
           
              {
                title: "Extra amenities",
                field: "role",
              },
          
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#FDEED9",
                color: "rgb(223 136 12)",
                padding: ".4em .7em",
                margin: "0px",
              },
              rowStyle: {
                backgroundColor: "#FFFFFF",
                fontSize: ".72rem",
              },
            }}
            title="All available beds"
          />
         
        </div>
      </div>
      <style jsx>{`
        .no-data {
          min-height: 55vh;
        }
        .name {
          color: #353e5d;
          font-size: 14px;
        }
        .text-mute {
          color: #9aabc3;
          font-size: 14px;
        }
        h5,
        p {
          font-size: 14px;
        }
        .card-hov {
          transition-duration: 0.3s;
        }
        .card-hov:hover {
          background-color: #eeeff4;
        }
      `}</style>
    </div>
  );
};

export default Dashboard2;
