import React from "react";
import NavBar from "./Components/Layout/NavBar.js";
import HomeComponent from "./Components/Home/";
import Cart from "./Components/Cart";
import ProductPage from "./Components/ProductDetail";
import Category from "./Components/Category";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product/:productId" component={ProductPage} />

        <Route path="/category" component={Category} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
