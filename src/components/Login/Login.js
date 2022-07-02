import React, { useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const reduceState = (state, actions) =>{
  if(actions.type === 'USER_INPUT'){
    return {value : actions.val, isValid: actions.val.includes('@')};
  }
  if(actions.type === 'INPUT_BLUR'){
    return {value: state.value, isValid : state.value.includes('@')};
  }

  return { value : '', isValid : false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [starState, dispacth] = useReducer(reduceState, {value : '', isValid : false});

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispacth({type : 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // dispacth({type : ''});
    setFormIsValid(
      starState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispacth({type :'INPUT_BLUR'})
    // setEmailIsValid(starState.isValid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(starState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            starState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={starState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
