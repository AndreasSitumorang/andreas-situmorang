import React, { useReducer } from "react";
import ItemContext from "./item-context";

const defaultItemCartState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ANDREAS") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];
    // let updateItem;
    let updateItems;
    console.log(action.item);
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
      console.log(updateItems[existingCartItem]);
    } else {
      updateItems = state.items.concat(action.item);
    }
    console.log(updateItems);
    // const udpatedItem = state.items.concat(action.item);
    const udpatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: udpatedTotalAmount,
    };
  }
  return defaultItemCartState;
};

const ItemProvider = (props) => {
  const [itemState, dispatchItemAction] = useReducer(
    itemReducer,
    defaultItemCartState
  );

  const AddItemHandler = (item) => {
    dispatchItemAction({ type: "ADD_ANDREAS", item: item });
  };

  const RemoveItemHandler = (id) => {
    dispatchItemAction({ type: "REMOVE_ANDREAS", id: id });
  };

  const ItemContextNeed = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    AddItem: AddItemHandler,
    RemoveItem: RemoveItemHandler,
  };

  return (
    <div>
      <ItemContext.Provider value={ItemContextNeed}>
        {props.children}
      </ItemContext.Provider>
    </div>
  );
};

export default ItemProvider;
