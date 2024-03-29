import React from "react";
import Style from "./ItemAvaliable.module.css";
import Card from "../UI/Card";
import ListingItem from "./ListingItem/ListingItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const itemAvaliable = () => {
  const Itemlisting = DUMMY_MEALS.map((items) => (
    <ListingItem
      key={items.id + items.name}
      id={items.id}
      name={items.name}
      description={items.description}
      price={items.price}
    />
  ) 
  );
  return (
    <section className={Style.meals}>
      <Card>
        <ul>{Itemlisting}</ul>
      </Card>
    </section>
  );
};

export default itemAvaliable;
