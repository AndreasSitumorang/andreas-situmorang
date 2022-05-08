import React from "react";
// import './Card.module.css';
// import * as css from "./Card.module.css";

type Cards = {
    children: React.ReactNode; // 👈️ type children
};


const Card: React.FC<Cards> = function ({ children }) {
    return <div className= "cardo">{children}</div>;
};


export default Card;
