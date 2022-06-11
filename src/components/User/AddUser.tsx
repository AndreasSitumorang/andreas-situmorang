import React, { useState, useRef } from "react";
import Cards from "../UI/Card";
import Button from "../UI/Button";
import ErrorModals from "../UI/ErrorModal";
import "./AddUser.css";

interface IProps_AddUsers {
  onAddUser: (name: string, username: string) => void;
}

const AddUser = ({ onAddUser }: IProps_AddUsers) => {
  const nameInputRef = useRef<HTMLInputElement>(null);   //<HTMLInputElement>();
  const usernameInputRef = useRef<HTMLInputElement | null>(null);     //<HTMLInputElement | null>(null)


  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  const [error, setError] = useState(false);

  const AddUserHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // if (name === "" || username === "") {
    //     setError(true);
    //     return;
    // }
    if (nameInputRef.current?.value === "" || usernameInputRef.current?.value === "") {
      setError(true);
      return;
  }
    // console.log(name, username);
    // onAddUser(name, username);
    onAddUser(usernameInputRef.current?.value.toString(), nameInputRef.current?.value.toString());
    // setName("");
    // setUsername("");
  };

console.log(nameInputRef.current?.value.toString());
console.log(usernameInputRef);

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const errorHandler = () => {
    setError(false);
  }

  return (
    <div>
      {error && <ErrorModals title="Wrong input data" message="Something error with input!" onConfirm={errorHandler} />}
      <Cards styles="input">
        <form onSubmit={(e) => AddUserHandler(e)}>
          <label htmlFor="Username">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => nameChangeHandler(e)}
            value= {nameInputRef.current?.value}  //{name}
            ref={nameInputRef}
          />
          <label htmlFor="Username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => userNameChangeHandler(e)}
            value= {usernameInputRef.current?.value}  //{username}
            ref={usernameInputRef}
          />
          <Button styles="button" type="submit" onClick={() => {}}>
            Add User
          </Button>
        </form>
      </Cards>
    </div>
  );
};

export default AddUser;
