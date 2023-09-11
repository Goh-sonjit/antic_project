import React from "react";

const Section1 = () => {
  return (
    <>
      <section className="section1   ">
      <h1 className="mb-4">Categories</h1>
        <div className="wrapper ">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            <div className="info">
              <h2>Category 1 </h2>
              <p>
                Lorem Ipsum is simply dummy text from the printing and
                typeseting industry
              </p>
              <button>Show All</button>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            <div className="info">
              <h2>Category 2 </h2>
              <p>
                Lorem Ipsum is simply dummy text from the printing and
                typeseting industry
              </p>
              <button>Show All</button>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            <div className="info">
              <h2>Category 3</h2>
              <p>
                Lorem Ipsum is simply dummy text from the printing and
                typeseting industry
              </p>
              <button>Show All</button>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            <div className="info">
              <h2>Category 4</h2>
              <p>
                Lorem Ipsum is simply dummy text from the printing and
                typeseting industry
              </p>
              <button>Show All</button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
         h1{
          font-family: utopia std;
          font-size: 3rem;
          line-height: 3.7rem;
          font-style: normal;
         }
        `}
      </style>
    </>
  );
};

export default Section1;
