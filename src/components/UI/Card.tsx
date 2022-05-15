import React from "react";
import './Card.css';

type Cards = {
    children: React.ReactNode;// 👈️ type children
    styles :string;
};


const Card: React.FC<Cards> = function ({ children, styles }) {
    return <div className= {`${styles} ${"cardo"}`}>{children}</div>;
};


export default Card;
