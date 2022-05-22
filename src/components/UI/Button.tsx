import React from "react";

import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  styles: string;
  type?: string;
  onClick: () => void;
}

const Button = ({ children, styles, onClick, type }:IButtonProps) =>{
  return (
    <button
      className={styles}
      type={(type = null || "submit")}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;
