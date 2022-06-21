import React, { useState } from "react";
import "./Login.css";

import Card from "../UI/Card/Card";
// import classes from './Login.module.css';
import Button from "../UI/Button/Button";

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
    setEmailIsValid(true);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
    setPasswordIsValid(true);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (enteredEmail.length > 0 && enteredPassword.length > 0) {
      setEmailIsValid(true);
      setPasswordIsValid(true);
      setFromIsValid(true);
    }
    if (enteredEmail.length > 0 && enteredPassword.length > 0 && fromIsValid) {
      onLogin(
        enteredEmail,
        enteredPassword,
        emailIsValid,
        passwordIsValid,
        fromIsValid
      );
    }

    // onLogin(
    //   enteredEmail,
    //   enteredPassword,
    //   emailIsValid,
    //   passwordIsValid,
    //   fromIsValid
    // );
  };

  const fromChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromIsValid(event.target.value === "from");
  };

  return (
    <Card styles="login">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={emailChangeHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <Button
          type="submit"
          styles="button"
          fromIsValid={
            !(
              enteredEmail.length > 0 &&
              enteredPassword.length > 0 
            )
          }
        >
          Login
        </Button>
      </form>
    </Card>
  );
};


export default Login;