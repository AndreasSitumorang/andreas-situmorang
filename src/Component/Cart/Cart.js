import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Style from "./Cart.module.css";
import ItemContext from "../../DataStore/item-context";
import CartItem from "./ItemCart";

const Cart = (props) => {
  const itemCtx = useContext(ItemContext);
  const totalPrice = `$${itemCtx.totalAmount.toFixed(2)}`;

  const onRemoveHandler = (id) => {
    console.log(id);
    itemCtx.RemoveItem(id);
  };
  const onAddHandler = (items) => {
    itemCtx.AddItem(items)   //{...items, amount :1})
  };
  
  const cartItems = (
    <ul className={Style["cart-items"]}>
      {itemCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={onRemoveHandler.bind(null, items.id)}
          onAdd={onAddHandler.bind(null, items)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={Style.total}>
        <span> Total price</span>
        <span> {totalPrice} </span>
      </div>
      <div className={Style.actions}>
        <button className={Style["button--alt"]} onClick={props.onClose}>
          {" "}
          Close Bill
        </button>
        <button className={Style.button}> Order Food</button>
      </div>
    </Modal>
  );
};
export default Cart;
