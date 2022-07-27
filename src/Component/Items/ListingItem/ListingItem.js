import React from "react";
import Style from "./ListingItem.module.css"
import ItemForm from "./ListItemForm"

const ListingItem = (props) => {
    const  newPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={Style.meal}>
      <div>
        <h3> {props.name}</h3>
        <div className={Style.description}> {props.description}</div>
        <div className={Style.price}> {newPrice}</div>
      </div>
      <div>
      <ItemForm id = {props.id}/>
      </div>
    </li>
  );
};

export default ListingItem;
