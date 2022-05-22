import React, {useState} from "react";
import Cards from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css';

interface IProps_AddUsers {
    onAddUser: (name: string, username: string) => void;
  }

const AddUser = ({onAddUser}: IProps_AddUsers) => {   
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const AddUserHandler = ( event : React.SyntheticEvent ) => {
        if (name === "" || username === "") {
        return;
        }
        event.preventDefault();
        console.log(name, username);
        onAddUser(name, username);
        setName('');
        setUsername('');
    }

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    return( 
        <Cards styles="input">
            <form  onSubmit={(e) => AddUserHandler (e)}>
                <label htmlFor="Username">Name</label>
                <input id="name" type="text" name="name" placeholder="Name" onChange={(e) => nameChangeHandler(e)} value = {name}/>
                <label htmlFor="Username">Username</label>
                <input id="username" type="text" name="username" placeholder="Username"  onChange={(e) => userNameChangeHandler (e)} value = {username}/>
                <Button styles="button" type="submit" onClick={() => {}}>Add User</Button> 
            </form>
        </Cards>
    );
};

export default AddUser;