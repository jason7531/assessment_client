import React, { useEffect, useState } from "react";
import ProductCard from "./Home/ProductCard";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const category = query.get("category");
  const getProducts = () => {
    fetch("https://jasonassessment.herokuapp.com/api/v1/product/category", {
      method: "POST",
      body: JSON.stringify({ category: category }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h1>Products</h1>
          </div>
        </div>
        <div className="row mt-5" style={{ textAlign: "-webkit-center" }}>
          {products.map((prod, i) => {
            return (
              <ProductCard
                key={i}
                name={prod.name}
                image={prod.imageurl}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
