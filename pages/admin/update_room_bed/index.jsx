import React, { useState, useEffect } from "react";
import SideBar from "../../../components/dashboard_navbar/Sidebar";
import MaterialTable from "@material-table/core";
import withAuth from "../../../hoc/withAuth";
import { toast } from "react-toastify";


const Index = () => {
  let emptyData = [];
  const [posts, setPosts] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [staffPermission, setStaffPermission] = useState();

  // Create lead modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    // if (staffPermission?.can_create == 1) {
    //   setShow(true);
    // } else {
    //   alert("you don't have permission for this!");
    // }
  };
  // Edit lead modal
  const [showe, setShowe] = useState(false);
  const handleClosee = () => {
    setShowe(false);
    setSelectRow(null);
  };
  const handleShowe = () => setShowe(true);

  //all pg get api
  const allData = async () => {
    // const data = await getAllStaffApi();
    // setPosts(data);
  };




  useEffect(() => {
 
  }, []);

  return (
    <>
      <div className="containers">
        <div className="container-sidebar">
          <SideBar />
        </div>
        <div className="container-pages ">
         

          <MaterialTable
            data={posts}
            columns={[
              {
                title: "Location",
                field: "profile_image",
             
              },
              {
                title: "Total room",
                field: "email",
              },
              {
                title: "Available bed",
                field: "firstname",
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
              pageSize: 7, // Set the initial number of rows per page
            }}
            title="Update your PG room and bed"
          />
        </div>
      </div>
      {/* <Create_user show={show} handleClose={handleClose} allData={allData} /> */}

      <style jsx>
        {`
          .containers {
            height: 100vh;
            display: flex;
          }
          
        `}
      </style>
    </>
  );
};

export default Index;
