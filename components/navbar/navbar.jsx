import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";

function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState([
    typeof window !== "undefined" && window.pageYOffset,
  ]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition([typeof window !== "undefined" && window.pageYOffset]);
    };
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loged, setLogged] = useState();
  const router = useRouter();
  const [scroll] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleCss = () => {
      if (scroll > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    handleCss();
  }, [scroll]);

  return (
    <>
      <nav className="navbar dekstop-nav">
        <div className="nav-container w-100">
          <form className="nav-search nav-search-mbil">
            {/* <GoLocation className="nav-link-item" /> */}
            <span className="text-nav"  onClick={()=>router.push("/contactUS")} >
              <MdOutlineCall className="nav-link-item me-1" /> Contact Us
            </span>
          </form>
          <section >
            <img

              src="../../../imgs/logo.png"
              className="brand-logo"
              onClick={() => router.push("/")}
          
            />
          </section>

          <form className="nav-search">
            <AiOutlineSearch className="nav-link-item" onClick={handleShow} />
            <HiOutlineShoppingBag className="nav-link-item" onClick={()=>router.push("/cart")}  />
            <FaRegUserCircle className="nav-link-item" />
          </form>
        </div>
      </nav>
      {/* searchbar modal */}
      <Modal show={show} onHide={handleClose}    size="lg">
        <Modal.Body className="modal-body">
          <div className="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <AiOutlineSearch style={{ fontSize: "1.5rem", color: "#979696" }} />
            </button>
          </div>
          <div className="searchResult ">
            <span className="noSearch">No recent searches</span>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <style jsx>
        {`
        .brand-logo{
          height: 37.5px;
          cursor: pointer;
        }
          .searchResult {
            
            margin: 0 auto;
            padding: 36px 0;
            text-align: center;
            width: 80%;
          }
          .noSearch {
            font-size: 0.9em;
        color:#969FAF;
          }
          .searchBar {
            width: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
          }

          #searchQueryInput {
            width: 100%;
            height: 2.8rem;
            background: #f5f5f5;
            outline: none;
            background-color: #ffffff;
            border-radius: 2.5px;
            border: 1.2px solid #e1dede;
            padding: 0 3.5rem 0 1.5rem;
            font-size: 1rem;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }

          #searchQuerySubmit {
            width: 3.5rem;
            height: 2.8rem;
            margin-left: -3.5rem;
            background: none;
            border: none;
            outline: none;
          }

          #searchQuerySubmit:hover {
            cursor: pointer;
          }
          .text-nav {
            font-family: proxima_nova_rgregular, sans-serif;
            cursor: pointer;
            color: #ffffff;
            font-size: 14px;
            letter-spacing: 1px;
          }

          .navbar {
            background-color: transparent;
            padding: 1.12vw 1.8vw;
          }
        
  
          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            vertical-align: middle;
          }
          @media only screen and (max-width: 768px) {
            .brand-logo{
              height: 35px;
            }
            .nav-search-mbil{
              display: none;
            }
          }

        `}
      </style>
    </>
  );
};

export default Navbar;
