import React from "react";
import Cards from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css';

// export interface IAddUserProps {
//     name: string;
//     username: string;
// }


const AddUser: React.FC = function ()  {

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

    return( 
        <Cards styles="input">
            <form onSubmit={(e) => handleSubmit}>
                <label htmlFor="Username">Name</label>
                <input type="text" name="name" placeholder="Name"/>
                <label htmlFor="Username">Username</label>
                <input type="text" name="username" placeholder="Username"/>
                <Button styles="button" type="submit" onClick={()=> alert()}> Add New User</Button>
            </form>
        </Cards>
    );
};

export default AddUser;