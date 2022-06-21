import React from "react";
import { Route, Switch } from "react-router-dom";
import { Products } from "../Products";
import Signup from "../Signup";
import Cart from "../../Cart";
export default function Routes({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  AddProduct
}) {
  console.log(productItems);
  console.log("in route", cartItems);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/signup" exact>
          <Signup productItems={productItems}
          AddProduct={AddProduct} />
        </Route>
        <Route path="/Cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
      </Switch>
    </div>
  );
}
