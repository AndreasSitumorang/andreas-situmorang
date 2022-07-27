import React from "react";
import style from "./ListItemForm.module.css"
import Input from "../../UI/Input";

const listingItemForm = (props) => {
    return(
        <form className={style.form}>
            <Input label = "Amount" input ={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max : '5',
                step : '1',
                defaultValue : '1'
            }}/>
            <button> Add Item</button>
        </form>           
    );
};

export default listingItemForm;