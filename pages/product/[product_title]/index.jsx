import Footer from '@/components/footer';
import Section4 from '@/components/home/section4';
import Fixednavbar from '@/components/navbar/navbar-fixed';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const imgs = document.querySelectorAll(".img-select a");
    const imgBtns = [...imgs];

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        setImgId(imgItem.dataset.id);
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector(".img-showcase img:first-child").clientWidth;
      document.querySelector(".img-showcase").style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
    }

    typeof window !== "undefined" &&  window.addEventListener("resize", slideImage);

    return () => {
        typeof window !== "undefined" && window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  return (
    <>
    <Fixednavbar/>
    <div className="card-wrapper detail_pg p-md-4 m-0 ">
      <div className="card p-2 ">
      
        <div className="product-imgs" style={{height:"fit-content"}}>
          <div className="img-display">
            <div className="img-showcase ">
              <img src="../imgs/wp3487120.webp" alt="shoe image" />
              <img src="../imgs/pexels-pixabay-265006.jpg" alt="shoe image" />
              <img src="../imgs/antique-wood-clock-treasure-wallpaper-preview.jpg" alt="shoe image" />
              <img src="../imgs/pexels-pixabay-265006.jpg" alt="shoe image" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img src="../imgs/wp3487120.webp" alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img src="../imgs/pexels-pixabay-265006.jpg" alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img src="../imgs/antique-wood-clock-treasure-wallpaper-preview.jpg" alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src="../imgs/pexels-pixabay-265006.jpg" alt="shoe image" />
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title ">Story of brown wood vintage camera</h2>
          <div className="product-detail">
          
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consecte turLorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur  adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
           
            <ul>
              <li> Color: <span>yellow and red</span></li>
              <li> Category: <span>Antic watch</span></li>
              <li> Shipping Area: <span>All over India</span></li>
              <li> Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div className="product-price">
            <p className="new-price">Price : ₹8,000 <span>₹13,728</span></p>
            <p className="save-price">You Save ₹5,728 (60% off)</p>
          </div>
        
          <div className="purchase-info">
            <input type="number" min="0" defaultValue="1" className='' />
            <button type="button" className="btn mt-3 ms-2">
              Add to Bag
            </button>
           
          </div>
        
        </div>
      </div>
      <style jsx>
        {`
         .product-detail ul li {
          margin: 0;
          list-style: none;
          background: url("../imgs/checked yellow.png")
            left center no-repeat;
          background-size: 18px;
          padding-left: 1.7rem;
          margin: 0.4rem 0;
          font-weight: 600;
          opacity: 0.9;
        }
        
        `}
      </style>
    </div>
    <Section4/>
    <Footer/>
    </>
  );
};

export default ProductDetail;
