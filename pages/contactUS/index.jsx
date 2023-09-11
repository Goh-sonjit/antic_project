import React from "react";
import Footer from "@/components/footer";
import Fixednavbar from "@/components/navbar/navbar-fixed";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Index = () => {
  return (
    <>
      <Fixednavbar />
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!.
                        </p>
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Phone number"
                        />
                        <textarea
                          className="form-control form-group"
                          placeholder="Message"
                        ></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <div className="socil_item_inner d-flex">
                        <li>
                          <a href="#">
                            <FaFacebookF/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                           <FiInstagram/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaTwitter/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaLinkedinIn/>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset"></i>
                    <span>+91 0000000000</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>info@gmail.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quo beatae.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quo beatae quasi assumenda, expedita aliquam minima
                  tenetur maiores neque incidunt repellat aut voluptas hic
                  dolorem sequi ab porro, quia error.
                </p>
                <div className="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .right_conatct_social_icon {
            background-color: #000000;
          }
          .contact_us {
            background-color: #FFFFF;
            padding: 120px 0px;
          }

          .contact_inner {
            position: relative;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
            border-radius: 25px;
          }
          .contact_field {
            padding: 60px 340px 90px 100px;
          }
          .right_conatct_social_icon {
            height: 100%;
          }

          .contact_field h3 {
            color: #000;
            font-family: utopia std;
            font-size: 3rem;
            line-height: 3.5rem;
            font-style: normal;
            letter-spacing: 1px;
          }
          .contact_field p {
            color: #000;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 1px;
            margin-bottom: 35px;
          }
          .contact_field .form-control {
            border-radius: 0px;
            border: none;
            border-bottom: 1px solid #ccc;
          }
          .contact_field .form-control:focus {
            box-shadow: none;
            outline: none;
            border-bottom: 2px solid #1325e8;
          }
          .contact_field .form-control::placeholder {
            font-size: 13px;
            letter-spacing: 1px;
          }

          .contact_info_sec {
            position: absolute;
            background-color: #fc9f0a;
            right: 0px;
            top: 18%;
            height: 340px;
            width: 340px;
            padding: 40px;
            border-radius: 25px 0 0 25px;
          }
          .contact_info_sec h4 {
            letter-spacing: 1px;
            padding-bottom: 15px;
          }

          .info_single {
            margin: 30px 0px;
          }
          .info_single i {
            margin-right: 15px;
          }
          .info_single span {
            font-size: 14px;
            letter-spacing: 1px;
          }

          button.contact_form_submit {
            cursor: pointer;
            color: #ffc107;
            background: black;
            width: 100%;
            text-transform: uppercase;
            border: none;
            color: #fff;
            padding: 10px 15px;
            width: 100%;
            margin-top: 25px;

            font-size: 14px;
            letter-spacing: 2px;
          }
          .socil_item_inner li {
            list-style: none;
          }
          .socil_item_inner li a {
            color: #fff;
            margin: 0px 12px;
            font-size: 16px;
          }
          .socil_item_inner {
            padding-bottom: 10px;
          }

          .map_sec {
            padding: 50px 0px;
          }
          .map_inner h4,
          .map_inner p {
            color: #000;
            text-align: center;
          }
          .map_inner p {
            font-size: 13px;
          }
          .map_bind {
            margin-top: 50px;
            border-radius: 30px;
            overflow: hidden;
          }
          @media only screen and (max-width: 768px) {
            .contact_field h3 {
              font-size: 1.5rem;
              line-height: 2.5rem;
            }
            .contact_field p {
              display: none;
            }
            .contact_info_sec {
              height: 15rem;
              width: 14.5rem;
              padding: 0.95rem;
              border-radius: 25px 0 0 25px;
            }
            .contact_field {
              padding: 3.8rem 250px 1.9rem 0.4rem;
            }
            .contact_us {
              background-color: #FFFFF;
              padding: 20px 0px;
            }
            .info_single {
              margin: 12px 0px;
            }
          }
        `}
      </style>
      <Footer />
    </>
  );
};

export default Index;
