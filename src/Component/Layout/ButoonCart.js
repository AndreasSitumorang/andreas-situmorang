import React ,{useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import Styles from "./ButoonCart.module.css";
import ItemContext from '../../DataStore/item-context';


const ButtonCart = (props) => {
  const itemContext = useContext(ItemContext);
  const {items} = itemContext;
  const [btBumped, setBtnBumped] = useState(false);
  
  const btnClasses = `${Styles.button} ${ btBumped ? Styles.bump : ''}`;

  useEffect( () => {
    if(items.length === 0){
      return;
    }
    setBtnBumped(true);
    const timer = setTimeout(() => {
      setBtnBumped(false);
    }, 300);
    
    return ()=>{
      clearTimeout (timer);
    };
 
  }, [items]);

  const numberItem = itemContext.items.reduce((curNumber, item) =>{ 
    console.log(item.amount);
    return curNumber + item.amount
  }, 0);

  return (
    <button className={btnClasses} onClick = {props.onPressCartButton}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{numberItem}</span>
    </button>
  );
};

export default ButtonCart;
