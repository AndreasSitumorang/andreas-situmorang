import React from "react";

import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  styles: string;
  type?: string;
  fromIsValid? : boolean;
  onClick?: () => void;
}

const Button = ({ children, styles, fromIsValid, onClick, type }:IButtonProps) =>{
  return (
    <button
      className={styles}
      type={(type = null || "submit")}
      disabled = {fromIsValid}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;
