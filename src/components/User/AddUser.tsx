import React, { useState, useRef } from "react";
import Cards from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModals from "../UI/Modal/ErrorModal";
import "./AddUser.css";

interface IProps_AddUsers {
  onAddUser: (name: string, username: string) => void;
}

const AddUser = ({ onAddUser }: IProps_AddUsers) => {
  var nameInputRef = useRef<HTMLInputElement>(null); //<HTMLInputElement>();
  var usernameInputRef = useRef<HTMLInputElement>(null); //<HTMLInputElement | null>(null)

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");

  const [error, setError] = useState(false);

  console.log(nameInputRef.current?.value);
  console.log(usernameInputRef.current?.value);
  const AddUserHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // if (name === "" || username === "") {
    //     setError(true);
    //     return;
    // }
    // const name = nameInputRef.current?.value;
    const name: string = nameInputRef.current?.value !== undefined ? nameInputRef.current?.value : '';
    const username: string = usernameInputRef.current?.value !== undefined ? usernameInputRef.current?.value : '';
    if (
      nameInputRef.current?.value.toString() === "" ||
      usernameInputRef.current?.value.toString() === ""
    ) {
      setError(true);
      return;
    }
    onAddUser(name?.toString(), username?.toString());
    // nameInputRef = React.Component.createRef<HTMLInputElement>();
    // usernameInputRef = useRef<HTMLInputElement>(null);
    // console.log(usernameInputRef.current?.value.valueOf());
    // console.log(nameInputRef.current?.value.toString());
  };


  // console.log(nameInputRef.current?.value.toString());
  // console.log(usernameInputRef);

  // const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };
  // const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value);
  // };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModals
          title="Wrong input data"
          message="Something error with input!"
          onConfirm={errorHandler}
        />
      )}
      <Cards styles="input">
        <form onSubmit={(e) => AddUserHandler(e)}>
          <label htmlFor="Username">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            // onChange={(e) => nameChangeHandler(e)}
            // value={''} //{name}
            ref={nameInputRef}
          />
          <label htmlFor="Username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            // onChange={(e) => userNameChangeHandler(e)}
            value={usernameInputRef.current?.value} //{username}
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
