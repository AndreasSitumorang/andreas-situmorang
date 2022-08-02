import React from "react";

const ItemContext = React.createContext({
 items : [],
 totalAmount : 0,
 AddItem : (item) => {},
 RemoveItem : (id) =>{},
});

export default ItemContext;
