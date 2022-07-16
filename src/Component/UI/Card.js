import React from "react";
import Style from "./Card.module.css";

const Card = (props) => {
  return <div className={Style.card}>{props.children}</div>;
};

export default Card;
