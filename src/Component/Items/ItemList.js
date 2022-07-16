import React from "react";
import ItemAvaliable from "./ItemAvaliable";
import ItemSummary from "./ItemSummary";

const itemList = () => {
  return (
    <React.Fragment>
      <ItemSummary />
        <ItemAvaliable />
    </React.Fragment>
  );
};

export default itemList;
