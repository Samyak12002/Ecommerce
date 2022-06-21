// this component will display products on the screen
import React from "react";
import "./Products.css";
export const Products = ({ productItems,handleAddProduct }) => {
  console.log("i am in Products");
  console.log(productItems);
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt="not found"
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">${productItem.price}</div>
          <div >
            <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
