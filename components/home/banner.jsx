import React from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";

const Banner = () => {
  const route = useRouter();

  return (
    <>
      <div className="body">
        <div
          className="parallax-container"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay={true}
            muted
            loop
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="../../../imgs/1069722058-preview.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
          </video>

          {/* Black overlay */}
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
              zIndex: 2, // Ensure it's above the video
            }}
          ></div>

          <div className="content">
            <Navbar />
            <div className="position-relative" style={{height:"75vh"}}>
              <h1 className="container-fluid pageWidth text-center">Discover & Buy Antiques </h1>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content {
            position: relative;
            z-index: 3; /* Adjust to appear above the overlay */
          }
          span {
            color: #737272;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.7px;
          }
          li {
            display: flex;
            align-items: center;
            line-height: 1.5rem;
          }
          .body {
            padding: 0vw;
          }
          h1{
            position: absolute;
            z-index: 3;
            color: var(--color-white);
            width: 100%;
            bottom: 10%;
            left: 0;
            right: 0;
            color: #fff;
            font-size: 4.5rem;
    line-height: 5rem;
    font-family: utopia std;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
