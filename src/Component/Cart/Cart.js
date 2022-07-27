import React from "react";
import Modal from "../UI/Modal";
import Style from "./Cart.module.css"

const Cart = (props) => {
  const cartItems = (
    <ul className={Style['cart-items']}>
      {[{ id: "C1", name: "Pizza", amount: 2, price: 12.93 }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
        {cartItems}
        <div className={Style.total}>
            <span> Total price</span>
            <span> 35.62 </span>
        </div>
        <div className={Style.actions}>
            <button className={Style['button--alt']} onClick = {props.onClose}> Close Bill</button>
            <button className={Style.button}> Order Food</button>
        </div>
    </Modal>
  );
};
export default Cart;
