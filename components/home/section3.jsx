import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
function ContactUs() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const data = [
    {
      category: "",
      img: "../imgs/pexels-pixabay-265006.jpg",
      product_name: "Antic Pices",
      story:
        " If you are looking to buy our antique pieces or want to determine their value, rely on our experts for a free, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation.rely on our experts for a free,no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. evaluation.rely on our experts for afree, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. no-obligation evaluation.evaluation.rely on our experts for a free, no-obligationevaluation. rely on our experts for a free, no-obligation evaluation.",
    },
    {
      category: "",
      img: "../imgs/wp3487120.webp",
      product_name: "Antic Pices",
      story:
        " If you are looking to buy our antique pieces or want to determine their value, rely on our experts for a free, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation.rely on our experts for a free,no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. evaluation.rely on our experts for afree, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. no-obligation evaluation.evaluation.rely on our experts for a free, no-obligationevaluation. rely on our experts for a free, no-obligation evaluation.",
    },
    {
      category: "",
      img: "../imgs/antique-wood-clock-treasure-wallpaper-preview.jpg",
      product_name: "Antic Pices",
      story:
        " If you are looking to buy our antique pieces or want to determine their value, rely on our experts for a free, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation.rely on our experts for a free,no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. evaluation.rely on our experts for afree, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. no-obligation evaluation.evaluation.rely on our experts for a free, no-obligationevaluation. rely on our experts for a free, no-obligation evaluation.",
    },
    {
      category: "",
      img: "../imgs/pexels-pixabay-265006.jpg",
      product_name: "Antic Pices",
      story:
        " If you are looking to buy our antique pieces or want to determine their value, rely on our experts for a free, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation.rely on our experts for a free,no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. evaluation.rely on our experts for afree, no-obligation evaluation. rely on our experts for a free,no-obligation evaluation. no-obligation evaluation.evaluation.rely on our experts for a free, no-obligationevaluation. rely on our experts for a free, no-obligation evaluation.",
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

  
      window.addEventListener("resize", handleResize);

    return () => {
    
        window.removeEventListener("resize", handleResize);
    }}
  }, []);
  const truncateText = (story) => {
    return windowWidth < 1000 ? story.slice(0, 260) : story;
  };
  return (
    <div className="p-0 m-0 mt-3">
      {data.map((section, index) => (
        <div key={index} className="container-fluid mt-2 m-0 p-0">
          <div className="row">
            {index % 2 === 0 ? (
              // Render content for even indexes
              <>
                <div className=" m-0 p-0 col-6">
                  <img
                    src={section.img}
                    style={{ width: "100%", height: "100%" }}
                    alt="Your Image"
                  />
                </div>
                <div
                  className=" col-6  p-5 "
                  style={{ backgroundColor: "#030706" }}
                >
                  <div className="my-md-3 my-0">
                    <h2>
                      <span className="d-block">{section.product_name}</span>
                    </h2>
                 
                    <p className="my-md-4">{truncateText(section.story)}</p>
                    <button className="my-md-4 my-0" onClick={()=>router.push(`/product/${section.product_name}`)}>Read more</button>
                  </div>
                </div>
              </>
            ) : (
         
              <>
                <div
                  className=" col-6  p-5 "
                  style={{ backgroundColor: "#030706" }}
                >
                  <div className="my-md-3 my-0 ">
                    <h2>
                      <span className="d-block">{section.product_name}</span>
                    </h2>
                   
                    <p className="my-md-4">{ truncateText(section.story)}</p>
                    <button className="my-md-4 my-0" onClick={()=>router.push(`/product/${section.product_name}`)}>Read more</button>
                  </div>
                </div>
                <div className=" m-0 p-0 col-6">
                  <img
                    src={section.img}
                    style={{ width: "100%", height: "100%" }}
                    alt="Your Image"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <style jsx>
        {`
          span,
          h2,
          p {
            color: #ffffff;
          }
          p {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 300;
          }

          h2 {
            font-family: utopia std;
            font-size: 3rem;
            line-height: 3.5rem;
            font-style: normal;
          }
          .container-fluid {
            max-width: 99.1%; /* Set a maximum width for the container */
          }
          button {
            border: none;
            background: transparent;
            color: #fc9f0a;
            font-weight: 400;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            font-size: 1.12rem;
            line-height: 1.5rem;
            transition: min-width 0.5s ease-in-out;
          }
          button:hover {
            border-bottom: 1px solid #fc9f0a;
          }
          .row {
            height: fit-content; /* Adjust the height as needed */
          }
          @media screen and (max-width: 760px) {
            p {
              font-size: 0.73rem;
              line-height: 1rem;
            }

            h2 {
              font-size: 1.2rem;
              line-height: 1.5rem;
            }
            button {
              font-size: 0.9rem;
              line-height: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ContactUs;
