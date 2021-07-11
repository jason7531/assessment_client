import React from "react";

const CartItems = (props) => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-md-2">
          <img className="cart-product-image" src={props.image} alt="..." />
        </div>
        <div className="col-md-3">
          <p>{props.name}</p>
        </div>
        <div className="col-md-2">
          <p>{props.price}</p>
        </div>
        <div className="col-md-2">
          <p>2</p>
        </div>
        <div className="col-md-3">
          <p>$1000</p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
