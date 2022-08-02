import React ,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import Styles from "./ButoonCart.module.css";
import ItemContext from '../../DataStore/item-context';


const ButtonCart = (props) => {
  const itemContext = useContext(ItemContext);
  console.log(itemContext);

  const numberItem = itemContext.items.reduce((curNumber, item) =>{ 
    console.log(item.amount);
    return curNumber + item.amount
  }, 0);

  return (
    <button className={Styles.button} onClick = {props.onPressCartButton}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{numberItem}</span>
    </button>
  );
};

export default ButtonCart;
