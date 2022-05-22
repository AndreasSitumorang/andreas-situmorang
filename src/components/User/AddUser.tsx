import React, { useState } from "react";
import Cards from "../UI/Card";
import Button from "../UI/Button";
import ErrorModals from "../UI/ErrorModal";
import "./AddUser.css";

interface IProps_AddUsers {
  onAddUser: (name: string, username: string) => void;
}

const AddUser = ({ onAddUser }: IProps_AddUsers) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const AddUserHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (name === "" || username === "") {
        setError(true);
        return;
    }
    console.log(name, username);
    onAddUser(name, username);
    setName("");
    setUsername("");
  };

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
            value={name}
          />
          <label htmlFor="Username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => userNameChangeHandler(e)}
            value={username}
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
