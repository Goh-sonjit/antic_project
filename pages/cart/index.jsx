import Footer from "@/components/footer";
import Fixednavbar from "@/components/navbar/navbar-fixed";
import React from "react";

const ShoppingCart = () => {
  const items = [
    {
      imageUrl: "../imgs/wp3487120.webp",
      productLink:
        "/product/brown-wood-vintage-camera-pop-culture-curio-1700583.html?type=clip&pos=1&total_result=53&fromId=98&sort=sorting_score%7Cdesc&filter=%7C&cat=98",
      productName: "Brown Wood Vintage Camera Pop Culture Curio",
      productBrand: "Tu Casa",
      productRating: "4.5",
      productSold: "39",
      productPrice: "3749",
      productMRP: "₹9,477",
      productDiscount: "You Save ₹5,728 (60% off)",
      productCashback: "Earn 75 Extra  Credits (Worth ₹75)",
      productShipping: "5",
      category: "A",

      create_date: "10/5/2023",
    },
    {
      imageUrl: "../imgs/pexels-pixabay-265006.jpg",
      productLink:
        "/product/brown-wood-vintage-camera-pop-culture-curio-1700583.html?type=clip&pos=1&total_result=53&fromId=98&sort=sorting_score%7Cdesc&filter=%7C&cat=98",
      productName: "Brown Wood Vintage Camera Pop Culture Curio",
      productBrand: "Tu Casa",
      productRating: "2",
      productSold: "39",
      productPrice: "5700",
      productMRP: "₹9,477",
      productDiscount: "You Save ₹5,728 (60% off)",
      productCashback: "Earn 75 Extra  Credits (Worth ₹75)",
      productShipping: "8",
      category: "B",

      create_date: "25/8/2023",
    },
    {
      imageUrl: "../imgs/antique-wood-clock-treasure-wallpaper-preview.jpg",
      productLink:
        "/product/brown-wood-vintage-camera-pop-culture-curio-1700583.html?type=clip&pos=1&total_result=53&fromId=98&sort=sorting_score%7Cdesc&filter=%7C&cat=98",
      productName: "Brown Wood Vintage Camera Pop Culture Curio",
      productBrand: "Tu Casa",
      productRating: "3.5",
      productSold: "39",
      productPrice: "1010",
      productMRP: "₹9,477",
      productDiscount: "You Save ₹5,728 (60% off)",
      productCashback: "Earn 75 Extra  Credits (Worth ₹75)",
      productShipping: "1",
      category: "C",

      create_date: "5/9/2023",
    },
    {
      imageUrl: "../imgs/pexels-pixabay-265006.jpg",
      productLink:
        "/product/brown-wood-vintage-camera-pop-culture-curio-1700583.html?type=clip&pos=1&total_result=53&fromId=98&sort=sorting_score%7Cdesc&filter=%7C&cat=98",
      productName: "Brown Wood Vintage Camera Pop Culture Curio",
      productBrand: "Tu Casa",
      productRating: "5",
      productSold: "39",
      productPrice: "8600",
      productMRP: "₹9,477",
      productDiscount: "You Save ₹5,728 (60% off)",
      productCashback: "Earn 75 Extra  Credits (Worth ₹75)",
      productShipping: "0",
      category: "D",

      create_date: "8/9/2023",
    },
  ];

  return (
    <>
      <Fixednavbar />
      <div className="container">
        <div className="row p-md-4">
          <div className="col-md-9 col-12">
            {" "}
            <div className="header cart-container">
              <div className="cart ">
                <ul className="items">
                  {items.map((item, index) => (
                    <li className="item" key={index}>
                      <a href="#" className="btn-remove">
                        <i className="far fa-trash-alt"></i>
                      </a>
                      <div className="preview">
                        <img src={item.imageUrl} alt="Product" />
                      </div>
                      <div className="details">
                        <h3>{item.productName}</h3>
                        <p>{item.productDiscount}</p>
                      </div>
                      <div className="inner_container">
                        <div className="picker">
                          <p  className="btn-quantity plus">
                            +
                          </p>

                          <p className="quantity-text">
                            <span className="current_quantity">1 at </span>
                            {item.productPrice}
                          </p>

                          <p className="btn-quantity minus">
                            -
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="my-3">
              <span className="pg-heading-location">TOTAL ITEM :</span>
              <span className="float-end  pg-heading-location">4</span>
            </div>
            <div className="my-3">
              <span className="pg-heading-location">SUB TOTAL :</span>
              <span className="float-end  pg-heading-location">₹39,980</span>
            </div>
            <div className="my-3">
              <span className="pg-heading-location">TOTAL GST :</span>
              <span className="float-end  pg-heading-location">₹3,150</span>
            </div>
            <div className="my-3">
              <span className="pg-heading-location">GRAND TOTAL :</span>
              <span className="float-end  pg-heading-location">₹43,130</span>
            </div>
            <button type="button" className="btn checkoutBtn my-2 rounded-0">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .checkoutBtn{
            cursor: pointer;
            color: #fff;
            background: black;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .container {
            margin-top: 5.5%;
            margin-bottom: 4.5%;
          }
        `}
      </style>
      <Footer />
    </>
  );
};

export default ShoppingCart;
