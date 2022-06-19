import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

export interface IErrorModal {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ErrorConfirm = ({ title, message, onConfirm }: IErrorModal) => {
  return (<div className="backdrop" onClick={onConfirm}></div>);
};

const ErrorCard = ({ title, message, onConfirm }: IErrorModal) => {
  return(
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
  );
};

const ErrorModals = ({ title, message, onConfirm }: IErrorModal) => {
  return (<Fragment>
   {ReactDom.createPortal(<ErrorConfirm title={title} message={message} onConfirm={onConfirm} />, document.getElementById("backdrop-component")!)}
    {ReactDom.createPortal(<ErrorCard title={title} message={message} onConfirm={onConfirm}/>, document.getElementById('modal-component')!)}
  </Fragment>);
};

export default ErrorModals;
