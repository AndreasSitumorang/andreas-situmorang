import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

export interface IErrorModal {
  title: string;
  message: string;
  onConfirm : () => void;
}

const ErrorModals = ({ title, message, onConfirm }: IErrorModal) => {
  return (
    <div>
      <div className="backdrop" onClick={onConfirm}>
        <Card styles="modal">
          <header className="header">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>{message}</p>
          </div>
          <footer className="actions">
            <Button styles="button:active" onClick={onConfirm}>
              {" "}
              Ok!{" "}
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModals;
