import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Fixednavbar from "@/components/navbar/navbar-fixed";
import Footer from "@/components/footer";
const Index = () => {
  const router = useRouter();
  const data = [
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
  const [itemList, setItemList] = useState(data);
  const filterForm = {
    sort_by: "",
    category: "",
  };
  const [filter, setFilter] = useState(filterForm);

  // store filter input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Perform filtering based on user's input
  const handleSearch = () => {
    const filteredData = data.filter((data) => {
      // Apply filters based on the user's input
      if (filter.category && data.category !== filter.category) {
        return false;
      }
      return true;
    });

    // Sort the filtered data based on the selected sorting option
    if (filter.sort_by === "Newest") {
      // Sort by newest
      filteredData.sort(
        (a, b) => new Date(b.create_date) - new Date(a.create_date)
      );
    } else if (filter.sort_by === "Lowest Price First") {
      // Sort by lowest price
      filteredData.sort(
        (a, b) => parseInt(a.productPrice) - parseInt(b.productPrice)
      );
    } else if (filter.sort_by === "Highest Price First") {
      // Sort by highest price
      filteredData.sort(
        (a, b) => parseInt(b.productPrice) - parseInt(a.productPrice)
      );
    } else if (filter.sort_by === "Fastest Shipping") {
      // Sort by fastest shipping
      filteredData.sort(
        (a, b) => parseInt(a.productShipping) - parseInt(b.productShipping)
      );
    } else if (filter.sort_by === "Coustomer Ratings") {
      filteredData.sort(
        (a, b) => parseInt(b.productRating) - parseInt(a.productRating)
      );
    }
    setItemList(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [filter]);

  // Reset filter logic here
  const handleReset = () => {
    setItemList(filterForm);
    setFilter(data);
  };

  console.log(filter);
  return (
    <>
      <Fixednavbar />
      <section className="body container-fluid  m-0 ">
        <div className="container-max-width">
          <h1 className=" pageWidth text-center ">Discover & Buy Antiques </h1>
          <p className="my-md-4">
            If you are looking to buy our antique pieces or want to determine
            their value, rely on our experts for a free, no-obligation
            evaluation. rely on our experts for a free, no-obligation
            evaluation.rely on our experts for a free, no-obligation evaluation.
            rely on our experts for a free, no-obligation.
          </p>

          <section className="my-3 p-2 product-container pb-3">
            <div className="filter-container my-2 mb-3">
              <span className="">
                <span style={{ color: "#FC9F0A" }} className="me-2">
                  Categories
                </span>
                <button
                  className="select-category me-2"
                  name="category"
                  value={"A"}
                  onClick={handleChange}
                >
                  Cat-A
                </button>
                <button
                  className="select-category me-2 "
                  name="category"
                  value={"B"}
                  onClick={handleChange}
                >
                  Cat-B
                </button>
                <button
                  className="select-category me-2"
                  name="category"
                  value={"C"}
                  onClick={handleChange}
                >
                  Cat-C
                </button>
                <button
                  className="select-category"
                  name="category"
                  value={"D"}
                  onClick={handleChange}
                >
                  Cat-D
                </button>
              </span>
              <span className="float-end">
                <span style={{ color: "#FC9F0A" }} className="me-2">
                  Sort By{" "}
                </span>
                <select
                  className="select"
                  aria-label="Default select example"
                  name="sort_by"
                  onChange={handleChange}
                >
                  <option value="Newest" selected={true}>
                    Newest
                  </option>
                  <option value="Lowest Price First">Lowest Price First</option>
                  <option value="Highest Price First">
                    Highest Price First
                  </option>
                  <option value="Fastest Shipping">Fastest Shiping</option>

                  <option value="Coustomer Ratings">Coustomer Ratings</option>
                </select>
              </span>
            </div>
            <div className="all-product">
              {itemList.map((card, index) => (
                <div
                  className="card my-2 rounded-0"
                  key={index}
                  onClick={() => router.push(`product/${card.productName}`)}
                >
                  <img
                    className="card-img-top rounded-0"
                    src={card.imageUrl}
                    alt={card.productName}
                  />

                  <div className="product-card-bottom p-2">
                    <div className="marginBottom-4">
                      <h3 className="product-name mb-0">{card.productName}</h3>

                      <div className="product-rating-wrapper">
                        <div className="product-brand">
                          {card.productRating}
                          <span className="text-small font-normal">
                            ( {card.productSold} Sold )
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="color-green">Today's Deal</div>
                    <div className="product-price">
                      <span className="product-price me-2">
                        ₹{card.productPrice}
                      </span>
                      <span className="product-mrp">{card.productMRP}</span>
                    </div>
                    <div className="product-discount color-green ">
                      <span className="color-secondary">
                        {card.productDiscount}
                      </span>
                    </div>
                    <div className="product-cashback color-blue ">
                      <span className="font-normal">
                        {card.productCashback}
                      </span>
                    </div>
                    <div className="product-brand">
                      <span className="fw-bold">
                        Ships in {card.productShipping} days
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <style jsx>
        {`
          .select {
            background-size: 20px;
            border: none;

            box-shadow: 0 0 1px #12121233, 0 1px 2px #12121214;
            padding: 12px;
            border-radius: 0;
            font-size: 14px;
            font-weight: 500;
            color: #121212;
            width: 180px;
          }
          .select-category {
            border: none;
            background-color: #ffff;
            border-radius: 0px;
            box-shadow: 0 0 1px #12121233, 0 1px 2px #12121214;
            padding: 12px;
            border-radius: 0;
            font-size: 14px;
            font-weight: 500;
            color: #121212;
          }
          .product-price {
            font-size: 1.25rem;
            line-height: 2rem;
            font-weight: 500;
          }
          .product-mrp {
            font-size: 1rem;
            line-height: 2rem;
            color: #afafaf;
            text-decoration: line-through;
          }
          .color-green {
            color: #67ad5b;
            font-size: 0.75rem;
            font-weight: 700;
          }
          .color-blue {
            font-size: 0.75rem;
            font-weight: 500;
            color: #1979b5;
          }
          .product-name {
            color: #5b5b5b;
            font-size: 0.9rem;
            font-weight: 400;
            line-height: 1.3rem;
          }
          .product-brand {
            color: #5b5b5b;
            font-size: 0.75rem;
            line-height: 1.3rem;
          }
          .card-img-top {
            height: 200px;
          }
          .product-container {
            background-color: #f5f5f5;
          }
          .all-product {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; /* Allow cards to wrap to the next row */
          }
          .card {
            width: 22.5vw;
            cursor: pointer;
            border: none;
          }
          .card:hover {
            box-shadow: 0 0 8px #0003;
          }
          .body {
            padding: 4vh 1.8vw;
          }
          .container-max-width {
            max-width: 100%; /* Set your desired maximum width here */
            margin: 3.1rem auto; /* Center the container horizontally */
          }
          h1 {
            color: #000000;
            font-size: 3.2rem;
            margin-top: 5.5rem;
            font-family: utopia std;
          }
          p {
            padding: 0 var(--bs-gutter-x, 0.75rem) 15px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: var(--color-black);
            max-width: 950px;
            margin: auto;
            font-family: proxima_nova_rgregular, sans-serif;
          }
          @media screen and (max-width: 1080px) {
            .card {
              flex: 0 0 calc(50% - 10px); /* Two cards in a row with a small gap */
            }
          }
          @media screen and (max-width: 760px) {
            .card {
              flex: 0 0 calc(99%); /* Two cards in a row with a small gap */
              margin-bottom: 2rem; /* Add space between cards */
            }
            .filter-container {
              display: none;
            }
          }
        `}
      </style>
      <Footer/>
    </>
  );
};

export default Index;
