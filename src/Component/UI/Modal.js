import Styles from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  return <div className={Styles.backdrop} onClick = {props.onClose}/>;
};

const OverLay = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};
const OverLayID = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick = {props.onClose} />, OverLayID)}
      {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, OverLayID)}
    </Fragment>
  );
};

export default Modal;
