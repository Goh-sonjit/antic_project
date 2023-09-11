import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlineDone } from "react-icons/md";

const Create_pg = () => {
  const form_data = {
    pg_name: "",
    total_floor: 1,   
    pg_address1: "",
    pg_landmark: "",
    city: "",
    pin: "",
    state: "",
    pg_for: "",
    food: "0",
    AC: "0",
    wi_fi: "0",
    Fridge: "0",
    Veg: "0",
    Non_Veg: "0",
    Parking: "0",
    Geyser: "0",
    Laundry: "0",
    Power_backup: "0",
    Washing_machine: "0",
    No_Smoking: "0",
    No_Drinking: "0",
    No_Girls_Entry: "0",
    No_Guardians_Stay: "0",
    Gate_Closing: "11.00 p.m",
    Room_details: [],
  };
  const [FormData, setFormData] = useState(form_data);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  //create pg   
  const save_data = async (event) => {
    event.preventDefault();
    // if (

    // ) {
    //   // All required fields are filled, proceed with saving data

    //   if (response.message === "Customer Added Successfully") {

    //     // toast.success('Coustomer created successfully!');
    //   }
    // } else {
    //   setIsFormSubmitted(true);
    // }
  };
  const [slide1, setSlide1] = useState(true);
  const handleClose3 = () => setSlide2(true);
  const handleShow3 = () => setSlide2(false);

  const [slide2, setSlide2] = useState(false);
  const handleClose2 = () => {
    setSlide2(false);
    setSlide1(true);
  };

  const handleShow2 = () => {
    // if (
    //   FormData.form_datapg_name != "" &&
    //   FormData.pg_address1 != "" &&
    //   FormData.pg_landmark != "" &&
    //   FormData.city != "" &&
    //   FormData.pin != "" &&
    //   FormData.state != "" &&
    //   FormData.pg_for != ""
    // ) {
    setSlide2(true);
    setSlide1(false);
    // } else {
    //   setIsFormSubmitted(true);
    // }
  };
  const [numFloors, setNumFloors] = useState(3);

  // Create an array of floor numbers based on user input
  const floorNumbers = Array.from(
    { length: numFloors },
    (_, index) => index + 1
  );

  const room = [
    {
      id: 1,
      type: "Private",
      img: "../../imgs/single-bed-s.png",
      img_Selected: "../../imgs/1_filled.png",
    },
    {
      id: 2,
      type: "Two sharing",
      img: "../../imgs/Group 1.png",
      img_Selected: "../../imgs/2_filled.png",
    },
    {
      id: 3,
      type: "Three sharing",
      img: "../../imgs/Group 2.png",
      img_Selected: "../../imgs/3_filled.png",
    },
    {
      id: 4,
      type: "Four sharing",
      img: "../../imgs/Group 3.png",
      img_Selected: "../../imgs/4.png",
    },
  ];

  // Function to add a new room details
  const [show, setShow] = useState(false);
  const [selectfloor, setSelectfloor] = useState();
  const [selectRoomType, setSelectRoomType] = useState();
  const handleClose = () => setShow(false);

  const room_form = {
    floor_no: "",
    room_type: "",
    total_room: "",
    available_bed: "",
    Private_balcony: "0",
    Private_tv: "0",
    Private_ac: "0",
    Private_bathroom: "0",
    Cupboard: "0",
    Study_table: "0",
    Private_bathroom: "0",
    Expected_rent: "",
    Expected_deposite: "",
  };
  const [roomData, setRoomData] = useState(room_form);
  const handleShow = (floorNumber, data) => {
    setSelectRoomType(data.type);
    setSelectfloor(floorNumber);
    setShow(true);
    setRoomData({
      ...roomData,
      floor_no: floorNumber,
      room_type: data.type,
    });
  };

  const handleChangeroom = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const addNewroom = () => {
    if (
      roomData.total_room > 0 &&
      roomData.total_room >= 0 &&
      roomData.Expected_rent >= 0
    ) {
      setFormData((prevUpdate) => ({
        ...prevUpdate,
        Room_details: [...prevUpdate.Room_details, roomData],
      }));

      handleClose();
    } else {
      alert("please type total room and available bed to save this");
    }
  };


  return (
    <>
      <div className="addpg-container p-3">
        {slide1 ? (
          <div className="container slide1">
            <h6>Please fill the below details</h6>
            <div className="row mt-2">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="PG Name"
                  className={`form-control ${
                    isFormSubmitted && FormData.pg_name === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  value={FormData.pg_name}
                  name="pg_name"
                  onChange={handleChange}
                />

                <div className="my-3 d-flex">
                  <label className="me-3">Floors in building</label>
                  <input
                    type="number"
                    className={`form-control number text-center ${
                      isFormSubmitted && FormData.total_floor === ""
                        ? "is-invalid"
                        : ""
                    }`}
                    name="total_floor"
                    value={FormData.total_floor}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue) && newValue >= 1) {
                        setNumFloors(newValue);
                        handleChange(e);
                      }
                    }}
                  />
                </div>
                <label className="mt-4">PG Address</label>
                <input
                  type="text"
                  placeholder="Address line 1"
                  className={`form-control my-3 mt-2${
                    isFormSubmitted && FormData.pg_address1 === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  value={FormData.pg_address1}
                  name="pg_address1"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className={`form-control my-3 mt-2${
                    isFormSubmitted && FormData.pg_landmark === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="landmark"
                  value={FormData.pg_landmark}
                  name="pg_landmark"
                  onChange={handleChange}
                />

                <div className="d-flex pt-0 mt-0">
                  <input
                    type="text"
                    className={`form-control my-2 w-50 me-2${
                      isFormSubmitted && FormData.city === ""
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="City"
                    value={FormData.city}
                    name="city"
                    onChange={handleChange}
                  />

                  <input
                    type="number"
                    className={`form-control my-2 w-50 ms-2 ${
                      isFormSubmitted && FormData.pin === "" ? "is-invalid" : ""
                    }`}
                    placeholder="Pin"
                    value={FormData.pin}
                    name="pin"
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  className={`form-control my-2 ${
                    isFormSubmitted && FormData.state === "" ? "is-invalid" : ""
                  }`}
                  placeholder="State"
                  value={FormData.state}
                  name="state"
                  onChange={handleChange}
                />
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <label className="mt-0">PG for</label>
                <div className="container-gender my-2">
                  <div className="card">
                    <input
                      type="radio"
                      name="pg_for"
                      className="checkbox"
                      value="men"
                      onChange={handleChange}
                    />{" "}
                    <img src="../../imgs/man2.png" />
                  </div>
                  <div className="card">
                    {" "}
                    <input
                      type="radio"
                      name="pg_for"
                      className="checkbox"
                      value="women"
                      onChange={handleChange}
                    />{" "}
                    <img src="../../imgs/woman.png" />
                  </div>
                  <div className="card">
                    <input
                      type="radio"
                      name="pg_for"
                      className="checkbox"
                      value="both"
                      onChange={handleChange}
                    />{" "}
                    <img src="../../imgs/parents.png" />
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.203386323958!2d77.31864131492027!3d28.59367469258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f0a89ce605%3A0xfd09bf1f744de96f!2sGohoardings!5e0!3m2!1sen!2sin!4v1667808584343!5m2!1sen!2sin"
                  className="google_map"
                  allowFullScreen={true}
                  loading="lazy"
                  title="google-map"
                ></iframe>
                <button
                  className="btn btn-create float-end ps-4 pe-4 mt-2"
                  onClick={handleShow2}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {slide2 ? (
              <div className="container slide2 position-relative">
                <>
                  <h6>
                    Amenities for all rooms
                    <TiArrowBackOutline
                      className="float-end  back-icon"
                      onClick={handleClose2}
                    />
                  </h6>
                  <div className="row my-2">
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input
                            type="checkbox"
                            name="food"
                            checked={FormData.food === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, food: newValue });
                            }}
                          />
                          <span className="ms-3">Food</span>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            name="AC"
                            checked={FormData.AC === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, AC: newValue });
                            }}
                          />
                          <span className="ms-3">AC</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="wi_fi"
                            checked={FormData.wi_fi === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, wi_fi: newValue });
                            }}
                          />
                          <span className="ms-3">wi-fi</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Fridge"
                            checked={FormData.Fridge === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Fridge: newValue });
                            }}
                          />
                          <span className="ms-3">Fridge</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Veg"
                            checked={FormData.Veg === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Veg: newValue });
                            }}
                          />
                          <span className="ms-3">Veg</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Non_Veg"
                            checked={FormData.Non_Veg === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Non_Veg: newValue });
                            }}
                          />
                          <span className="ms-3">Non-Veg</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input
                            type="checkbox"
                            name="Parking"
                            checked={FormData.Parking === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Parking: newValue });
                            }}
                          />
                          <span className="ms-3">Parking</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Geyser"
                            checked={FormData.Geyser === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Geyser: newValue });
                            }}
                          />
                          <span className="ms-3">Geyser</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Laundry"
                            checked={FormData.Laundry === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({ ...FormData, Laundry: newValue });
                            }}
                          />
                          <span className="ms-3">Laundry</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Power_backup"
                            checked={FormData.Power_backup === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                Power_backup: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">Power backup</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="Washing_machine"
                            checked={FormData.Washing_machine === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                Washing_machine: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">Washing machine</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>

                <>
                  <h6>PG rules</h6>
                  <div className="row my-2">
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input
                            type="checkbox"
                            name="No_Smoking"
                            checked={FormData.No_Smoking === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                No_Smoking: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">No Smoking</span>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            name="No_Drinking"
                            checked={FormData.No_Drinking === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                No_Drinking: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">No Drinking</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <input
                            type="checkbox"
                            name="No_Girls_Entry"
                            checked={FormData.No_Girls_Entry === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                No_Girls_Entry: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">No Girl's Entry</span>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            name="No_Guardians_Stay"
                            checked={FormData.No_Guardians_Stay === "1"}
                            onChange={(e) => {
                              const newValue = e.target.checked ? "1" : "0";
                              setFormData({
                                ...FormData,
                                No_Guardians_Stay: newValue,
                              });
                            }}
                          />
                          <span className="ms-3">No Guardians Stay</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="p-0">
                        <li>
                          <span className="me-3">Gate Closing Time</span>{" "}
                          <select
                            className="select"
                            aria-label="Default select example"
                            name="Gate_Closing"
                            onChange={handleChange}
                          >
                            <option value="11.00 pm" selected>
                              11.00 pm
                            </option>
                            <option value="11.30 pm">11.30 pm</option>
                            <option value="11.45 am">12.00 am</option>
                            <option value="12.30 am">12.30 am</option>
                            <option value="always open">Always Open</option>
                          </select>
                        </li>
                        {/* <li>
                        <input type="checkbox" name="food"  checked={FormData.food===1}  onChange={handleChange}  />
                      <span className="ms-3">No Guardians Stay</span>
                    </li> */}
                      </ul>
                    </div>
                  </div>
                </>

                <div style={{ marginTop: "18vh" }}>
                  <button
                    className="btn btn-create float-end ps-4 pe-4 "
                    onClick={handleShow3}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="container slide3">
                  <div className="row">
                    <div className="col-8 ">
                      <div style={{ overflow: "scroll", height: "78vh" }}>
                        <div
                          className=" heading-row"
                          style={{
                            borderTopLeftRadius: "6.5px",
                            borderTopRightRadius: "6.5px",
                          }}
                        >
                          <div className="text-center heading-f">Floor</div>
                          <div className="text-center heading">
                            Private room
                          </div>
                          <div className="text-center heading">Two sharing</div>
                          <div className="text-center heading">
                            Three sharing
                          </div>
                          <div className="text-center heading">
                            Four sharing
                          </div>
                        </div>
                        {floorNumbers
                          .slice()
                          .reverse()
                          .map((floorNumber) => (
                            <div className="room-row" key={floorNumber}>
                              <div className="text-center flor-head">
                                {floorNumber}st
                              </div>
                              {room.map((data, i) => {
                                const matchingRoom = FormData.Room_details.find(
                                  (roomDetail) =>
                                    roomDetail.floor_no === floorNumber &&
                                    roomDetail.room_type === data.type
                                );

                                return (
                                  <div className="text-center room-box" key={i}>
                                    {matchingRoom ? (
                                      <>
                                        <img
                                          key={`img-selected-${i}`}
                                          src={data.img_Selected}
                                        />
                                        <div>
                                          <button className="add-btn">
                                            <MdOutlineDone
                                              style={{ fontSize: ".95rem" }}
                                            />
                                          </button>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <img key={`img-${i}`} src={data.img} />
                                        <div>
                                          <button
                                            className="add-btn"
                                            onClick={(e) =>
                                              handleShow(floorNumber, data)
                                            }
                                          >
                                            add
                                          </button>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ))}

                        <div
                          className=" heading-row"
                          style={{
                            borderBottomLeftRadius: "6.5px",
                            borderBottomRightRadius: "6.5px",
                          }}
                        >
                          <div
                            className="text-center heading "
                            style={{ fontSize: "1rem" }}
                          >
                            Your Building
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 ps-4">
                      <h6
                        style={{
                          fontSize: "1rem",
                          color: "black",
                          lineHeight: "1.6",
                        }}
                      >
                        Add room details floor wise by clicking on “add” button.{" "}
                        <TiArrowBackOutline
                          className="float-end  back-icon"
                          onClick={handleClose3}
                        />
                      </h6>
                      <p style={{ fontWeight: "300" }}>
                        For help you can watch this video
                      </p>

                      <div
                        className="mx-md-auto my-3 my-md-5 p-0"
                        style={{ textAlign: "center" }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/_tAziy85tX0?controls=0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>

                      <button
                        className="btn-create w-100"
                        style={{ marginTop: "10vh" }}
                      >
                        Submit PG
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <style jsx>
        {`
          .select {
            color: #737272;
            font-size: 0.84rem;
            font-weight: 500;
            letter-spacing: 0.7px;
            color: #767676;
            border: 1px solid #ababbc;
            border-radius: 2px !important;
            height: 34px !important;
            transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          span {
            color: #737272;
            font-size: 0.84rem;
            font-weight: 500;
            letter-spacing: 0.7px;
          }
          // li {
          //   display: flex;
          //   align-items: center;
          //   line-height: 1.5rem;
          // }
          img {
            height: 3.8rem;
            margin-top: 3px;
          }
          .checkbox {
            width: fit-content;
            margin-left: auto;
          }
          .container-gender {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .addpg-container {
            height: 82vh;
            background-color: #ffffff;
            overflow: hidden;
            border-radius: 4px;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }
          h6 {
            font-size: 1.1rem;
            line-height: 2;
            font-weight: 400;
            color: #323d47;
            letter-spacing: 0.5px;
          }
          label {
            font-size: 0.9rem;

            color: #323d47;
            letter-spacing: 0.5px;
          }
          .number {
            width: 4vw;
          }
          .card {
            // background-color: #eeeff4;
            border-radius: 4px;
            padding: 0.5rem 0.8rem;
            cursor: pointer;
            border: none;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            background: linear-gradient(
              96deg,
              #fe5e21 0%,
              #f2a43a 100%
            ) !important;
          }

          .heading-row {
            background: linear-gradient(96deg, #fc6523 0%, #f8a52f 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .heading {
            width: 100%;
          }
          .heading-f {
            width: 45%;
          }
          .heading,
          .heading-f {
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            padding: 8.5px 10px;
          }

          .room-row {
            transition: transform 0.5s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .flor-head,
          .room-box {
            font-size: 0.8rem;
            font-weight: 500;
            padding: 8.5px 10px;
            height: 7.9rem;
            width: 100%;
          }
          .room-box {
            border: 0.7px solid #f8a52f;
            border-left: none;
          }
          .flor-head {
            background: linear-gradient(96deg, #fc6523 0%, #fc6c25 100%);
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45% !important;
          }
          .add-btn {
            border: 1px solid #f8a52f;
            margin-top: 1rem;
            color: #f8a52f;
            border-radius: 10px;
            font-size: 0.7rem;

            background-color: #fbfbfb;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0rem 0.5rem;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
          }
          .add-btn:hover {
            border: 1px solid #f8a52f;
            color: #fbfbfb;
            background-color: #f8a52f;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0rem 0.5rem;
          }
        `}
      </style>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 style={{ fontWeight: "600" }} className="text-light">
              {selectRoomType} room details at floor no {selectfloor}{" "}
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container room-detail">
            <div className="row">
              <div className="col-md-6">
                <div className="my-3 d-flex">
                  <label className="me-3">Total {selectRoomType} rooms </label>
                  <input
                    type="number"
                    className="form-control number text-center"
                    placeholder="0"
                    value={roomData.total_room}
                    name="total_room"
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue) && newValue >= 0) {
                        handleChangeroom(e);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-3 d-flex">
                  <label className="me-3">Expected rent</label>
                  <input
                    type="number"
                    className="form-control w-50 "
                    placeholder="0,000"
                    name="Expected_rent"
                    value={roomData.Expected_rent}
                    onChange={handleChangeroom}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="my-3 d-flex">
                  <label className="me-3">Total available beds </label>
                  <input
                    type="number"
                    className="form-control number text-center"
                    placeholder="0"
                    name="available_bed"
                    value={roomData.available_bed}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue) && newValue >= 0) {
                        handleChangeroom(e);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-3 d-flex">
                  <label className="me-3">Expected deposite</label>
                  <input
                    type="number"
                    className="form-control w-50 "
                    placeholder="0,000"
                    name="Expected_deposite"
                    value={roomData.Expected_deposite}
                    onChange={handleChangeroom}
                  />
                </div>
              </div>
            </div>
            <h6 style={{ fontWeight: "600" }}>Room amenities</h6>
            <div className="row">
              <div className="col-md-4">
                <ul className="p-0">
                  <li>
                    <input
                      type="checkbox"
                      name="Private_ac"
                      checked={roomData.Private_ac === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({ ...roomData, Private_ac: newValue });
                      }}
                    />
                    <span className="ms-3">AC room</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="room_type"
                      checked={roomData.room_type === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({ ...roomData, room_type: newValue });
                      }}
                    />
                    <span className="ms-3">Private balcony</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="p-0">
                  <li>
                    <input
                      type="checkbox"
                      name="Private_tv"
                      checked={roomData.Private_tv === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({ ...roomData, Private_tv: newValue });
                      }}
                    />
                    <span className="ms-3">TV</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Study_table"
                      checked={roomData.Study_table === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({
                          ...roomData,
                          Study_table: newValue,
                        });
                      }}
                    />
                    <span className="ms-3">Study table</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="p-0">
                  <li>
                    <input
                      type="checkbox"
                      name="Cupboard"
                      checked={roomData.Cupboard === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({ ...roomData, Cupboard: newValue });
                      }}
                    />
                    <span className="ms-3">Cupboard</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Private_bathroom"
                      checked={roomData.Private_bathroom === "1"}
                      onChange={(e) => {
                        const newValue = e.target.checked ? "1" : "0";
                        setRoomData({
                          ...roomData,
                          Private_bathroom: newValue,
                        });
                      }}
                    />
                    <span className="ms-3">Attached bathroom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-create" onClick={addNewroom}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Create_pg;
