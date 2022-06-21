import React, { useState } from "react";
import "./Login.css";

import Card from "../UI/Card/Card";
// import classes from './Login.module.css';
import Button from "../UI/Button/Button";
// import "..UI/Button/Button.css";

interface ILogin {
  onLogin: (
    enteredEmail: string,
    enteredPassword: string,
    emailIsValid: boolean,
    paswrodIsValid: boolean,
    fromisValid: boolean
  ) => void;
}

const Login = ({ onLogin }: ILogin) => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [fromIsValid, setFromIsValid] = useState(false);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
    setFromIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value);
    setFromIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onLogin(
      enteredEmail,
      enteredPassword,
      emailIsValid,
      passwordIsValid,
      fromIsValid
    );
  };

  //   const submitHandler = (e: React.SyntheticEvent) => {
  //     e.preventDefault();

  //     if (enteredEmail.length > 0 && enteredPassword.length > 0) {
  //       setEmailIsValid(true);
  //       setPasswordIsValid(true);
  //       setFromIsValid(true);
  //     }
  //     if (enteredEmail.length > 0 && enteredPassword.length > 0 && fromIsValid) {
  //       onLogin(
  //         enteredEmail,
  //         enteredPassword,
  //         emailIsValid,
  //         passwordIsValid,
  //         fromIsValid
  //       );
  //     }
  //   };

  return (
    // <Card styles="login__card">

    // </Card>
    <div>
      <form onSubmit={submitHandler} className="form-control">
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <Button
          type="submit"
          styles="button"
          fromIsValid={!(enteredEmail.length > 0 && enteredPassword.length > 0)}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
