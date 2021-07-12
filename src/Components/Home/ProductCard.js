import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const ProductCard = (props) => {
  // const history = useHistory()
  const link = "/product/" + props.id;
  const id = props.id;
  const addToCartHandler = async (id) => {
    const response = await fetch(
      "https://jasonassessment.herokuapp.com/api/v1/cart/add",
      {
        method: "PUT",
        body: JSON.stringify({ id: id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not add product.");
    }
  };
  return (
    <>
      <div className="col-md-4 mt-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={props.image} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">{props.name}</h5>
            <h3 class="card-text">{props.price}</h3>
            <div className="row">
              <div className="col-md-6">
                <Link to={`/products/${props.id}`} class="btn btn-primary btnc">
                  <i class="fas fa-eye"></i> View
                </Link>
              </div>
              <div className="col-md-6">
                <button
                  onClick={addToCartHandler}
                  href="/ca"
                  class="btn btn-danger btnc"
                >
                  <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
