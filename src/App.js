import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import data from "./Data/Data";
import Header from "./components/Header";
import Routes from "./components/front/Routes/Routes";

import Signup from "./components/front/Signup";
export default function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  console.log("in app cartitms", cartItems);

  const handleAddProduct = (product) => {
    console.log("i am clicked");
    const ProductExist = cartItems.find((item) => item.id === product.id);
    // if item is present in the cart then increment its quantity
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    }
    // if item is not present inthe cart then add inthe cart
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const AddProduct =(new_product) =>{
    console.log("button is clicked.")
    productItems.push(new_product)
    console.log(productItems)
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
   const handleCartClearance = () =>{
    setCartItems([]);
   }

  return (
    <div>
      <Router>
        <Header />
        {/* passing data to the routes component */}
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          AddProduct={AddProduct}
        />
      </Router>
    </div>
  );
}
