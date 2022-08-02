import React, { useRef, useState } from "react";
import style from "./ListItemForm.module.css";
import Input from "../../UI/Input";

const ListingItemForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setAmount] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const convertedAmount = +enteredAmount;
    if (
        enteredAmount.trim().length === 0 ||
      convertedAmount < 0 
      ||
      convertedAmount > 5
    ) {
        setAmount(false);
      return;
    }
    props.onAddToCart(convertedAmount);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> Add Item</button>
      {!isAmountValid  && <p> Please Set Your Amount</p>}
    </form>
  );
};

export default ListingItemForm;
