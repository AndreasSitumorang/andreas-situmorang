import React ,{useContext} from "react";
import Style from "./ListingItem.module.css"
import ItemForm from "./ListItemForm"
import ItemContext from "../../../DataStore/item-context";

const ListingItem = (props) => {
  const itemContext = useContext(ItemContext);
    const  newPrice = `$${props.price.toFixed(2)}`;
    const AddAmountHandler = (amount) =>{
      itemContext.AddItem({
        id : props.id,
        name : props.name,
        amount : amount,
        price : props.price,
      })
    };

  return (
    <li className={Style.meal}>
      <div>
        <h3> {props.name}</h3>
        <div className={Style.description}> {props.description}</div>
        <div className={Style.price}> {newPrice}</div>
      </div>
      <div>
      <ItemForm id = {props.id} onAddToCart = {AddAmountHandler}/>
      </div>
    </li>
  );
};

export default ListingItem;
