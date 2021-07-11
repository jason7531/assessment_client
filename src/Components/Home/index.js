import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";

const Index = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://jasonassessment.herokuapp.com/api/v1/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

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
