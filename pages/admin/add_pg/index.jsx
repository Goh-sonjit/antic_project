import React, { useState, useEffect } from "react";
import SideBar from "../../../components/dashboard_navbar/Sidebar";
import MaterialTable from "@material-table/core";
import withAuth from "../../../hoc/withAuth";
import Create_pg from "./create_pg";

const Index = () => {
  let emptyData = [];    
  const [posts, setPosts] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [staffPermission, setStaffPermission] = useState();
   
  // Create lead modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // if (staffPermission?.can_create == 1) {    
    //   setShow(true);
    // } else {
    //   alert("you don't have permission for this!");
    // }
  };

 
  //all pg get api
  const allData = async () => {
    // const data = await getAllStaffApi();
    // setPosts(data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="containers">
        <div className="container-sidebar">
          <SideBar handleClose={handleClose} />
        </div>
        <div className="container-pages ">
          {show? (
           <Create_pg/>
          ) : (
            <>
              <button className="btn btn-create mb-3" onClick={handleShow}>
                Add new PG
              </button>

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
                    title: "Room types",
                    field: "role",
                  },
                  {
                    title: "Total bed",
                    field: "role",
                  },
                  {
                    title: "Available bed",
                    field: "firstname",
                  },
                  {
                    title: "Aminites/Rules",
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
                  pageSize: 6, // Set the initial number of rows per page
                }}
                title="All PG you listed"
              />
            </>
          )}
        </div>
      </div>
   

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
