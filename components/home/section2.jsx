import React from "react";
import { useRouter } from "next/router";
const Section2 = () => {
  const router=useRouter();
  const cardData = [
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 1",
      text: "Some example text 1",
      category:"antic_1"
    },
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 2",
      text: "Some example text 2",
      category:"antic_1"
    },
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 2",
      text: "Some example text 2",
      category:"antic_2"
    },
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 2",
      text: "Some example text 2",
      category:"antic_2"
    },
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 2",
      text: "Some example text 2",
      category:"antic_3"
    },
    {
      imgSrc: "../imgs/antic.png",
      title: "Card title 2",
      text: "Some example text 2",
      category:"antic_4"
    },
  ];
  return (
    <div className="my-5 py-2 body">
      <>
        <h2 className="">UPDATED DAILY</h2>
        <h1 className="">New Arrivals</h1>

        <section className="section2 my-md-4">
          {cardData.map((card, index) => (
            <div className="card" key={index} onClick={()=>router.push(`/${card.category}`)}>
              <img
                className="card-img-top"
                src={card.imgSrc}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </section>
      </>

      <style jsx>
        {`
          .body {
            padding: 10vh 1.8vw;
          }
          h1 {
            font-family: utopia std;
            font-size: 3rem;
            line-height: 3.7rem;
            font-style: normal;
          }
          h2 {
            font-size: 1rem;
            line-height: 1.5rem;
            letter-spacing: 2px;
            font-family: proxima_nova_semibold, sans-serif;
          }
          @media screen and (max-width: 1080px) {
            .card {
              flex: 0 0 calc(33.33% - 10px) !important; /* Three cards in a row with a small gap */
            }
          }
          @media screen and (max-width: 760px) {
            .card {
              flex: 0 0 calc(50% - 10px) !important; /* Two cards in a row with a small gap */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Section2;
