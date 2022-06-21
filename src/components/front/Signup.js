import React, { useState } from "react";
import "./Signup.css";
import ReactDOM from 'react-dom'
// import Data from './'
const Signup = ({productItems,AddProduct}) => {
  // const productItems=productItems;
  console.log("i am in admin",productItems)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const new_product = { id: id, name: name, image: image, price: price };
  console.log(new_product)
  console.log(new_product.image)

  return (
    <div className="product">
      <h1 className="heading">AddProduct</h1>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
        placeholder="Enter product id"
        className="inputbox"
      />
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="Enter product name"
        className="inputbox"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter product price"
        className="inputbox"
      />
      <input
        type="file"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
        placeholder="Enter product image"
        className="inputbox"
      />
      <button onClick={()=>AddProduct(new_product)} className="button">
        Add Product
      </button>
    </div>
  );
};

export default Signup;
