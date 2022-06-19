import React from "react";
import './Card.css';

interface ICard {
    children: React.ReactNode;// 👈️ type children
    styles :string;
}


const Cards = ({ children, styles }: ICard)  =>{
    return <div className= {`${styles} ${"cardo"}`}>{children}</div>;
};


export default Cards;
