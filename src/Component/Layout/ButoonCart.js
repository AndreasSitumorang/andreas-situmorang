import React from "react";
import CartIcon from "../Cart/CartIcon";
import Styles from "./ButoonCart.module.css";

const ButtonCart = (props) => {
  return (
    <button className={Styles.button}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>99</span>
    </button>
  );
};

export default ButtonCart;
