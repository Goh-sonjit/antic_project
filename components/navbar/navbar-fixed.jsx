import React from "react";
import Navbar from "./navbar";

const Fixednavbar = () => {

  return (
    <>
      <div
        className="new-search p-0 m-0"
      >
        <Navbar />
      </div>
      <style jsx>
        {`
          .new-search {
            position: fixed;
            z-index: 15;
            top: 0%;
            left: 0%;
            
            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            width: 100vw;
            background-color: #000000;
          }
          @media screen and (max-width: 500px) {
            .new-search {
              padding: 0.2vw 4vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default Fixednavbar;
