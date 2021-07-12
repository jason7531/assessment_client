import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState({});
  const params = useParams();
  const { id } = params;
  const getProducts = () => {
    fetch(`https://jasonassessment.herokuapp.com/api/v1/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <div className="row mt-5">
            <img src={products.image} alt="..." style={{ width: "100%" }} />
          </div>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div className="row mt-5">
            <div className="col-md-12">
              <h2>{products.name}</h2>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <p>{products.description}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <h3>Price: {products.price}</h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-3">
              <button className="btn btn-success pp-btn">
                <i class="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger pp-btn">
                <i class="fas fa-cart-arrow-down"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
