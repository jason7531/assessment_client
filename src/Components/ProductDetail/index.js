    import React from 'react'

    const index = () => {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="row mt-5">
                        <img src="https://demo.weblizar.com/explora-premium/wp-content/uploads/sites/81/2016/09/dummy-product_2.png" alt="..."  style={{width: "100%"}} />
                        </div>
                    </div>

                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h2>Product Name</h2>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <h3>Price: $500</h3>
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
        )
    }

    export default index
