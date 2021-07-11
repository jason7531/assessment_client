import React, { useState, useEffect } from "react";
import CartItems from "./CartItems.js";

const Index = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://jasonassessment.herokuapp.com/api/v1/cart")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-5">
            <h1>Cart Items</h1>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-2">
            <h4>Product Image</h4>
          </div>
          <div className="col-md-3">
            <h4>Product Title</h4>
          </div>
          <div className="col-md-2">
            <h4>Price</h4>
          </div>
          <div className="col-md-2">
            <h4>Quantity</h4>
          </div>
          <div className="col-md-3">
            <h4>Sub total</h4>
          </div>
        </div>
        {products.map((data, i) => {
          return (
            <CartItems
              key={i}
              image={data.imageurl}
              name={data.name}
              description={data.description}
              price={data.price}
            />
          );
        })}

        <hr />
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-2">
            <h3>Total</h3>
          </div>
          <div className="col-md-3">
            <h3>$900</h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <button className="btn btn-success proceed-checkout-btn">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
