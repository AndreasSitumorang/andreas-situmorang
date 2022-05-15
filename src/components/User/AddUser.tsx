import React from "react";
import Cards from "../UI/Card";
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
                <button type="submit">Add New User</button>
            </form>
        </Cards>
    );
};

export default AddUser;