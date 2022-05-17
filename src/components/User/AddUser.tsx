import React, {useState} from "react";
import Cards from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css';

// export interface IAddUserProps {
//     name: string;
//     username: string;
// }


interface IProps_AddUsers {
    onClick: (event: React.SyntheticEvent) => void;
  }

const AddUser: React.FC<IProps_AddUsers> = function ({onClick})  {   //<IAddUserProps> = function ()  {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const AddUserHandler = ( event : React.SyntheticEvent ) => {
        if (name === "" || username === "") {
        return;
        }
        
        event.preventDefault();

        console.log(name, username);

    }

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
 

    return( 
        <Cards styles="input">
            <form  onSubmit={(e) => AddUserHandler}>
                <label htmlFor="Username">Name</label>
                <input id="name" type="text" name="name" placeholder="Name" onChange={(e) => nameChangeHandler}/>
                <label htmlFor="Username">Username</label>
                <input id="username" type="text" name="username" placeholder="Username"  onChange={(e) => userNameChangeHandler}/>
                <Button styles="button" type="submit" onClick={()=> postMessage('domi doni')}>Add User</Button>
            </form>
        </Cards>
    );
};

export default AddUser;