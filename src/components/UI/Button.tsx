import React from "react";

import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  styles: string;
  type?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = function ({ children, styles, onClick, type }) {
  return (
    <button
      className={styles}
      type={(type = null || "submit")}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;
