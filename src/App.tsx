import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";
import UsersList, { IAddUserListPropsExtendArray } from "./components/User/UsersList";


const App: React.FC = function () {
  const [UsersListing, setUsersList] = useState<IAddUserListPropsExtendArray[]>(
    []
  );

  const AddUserHandler = (name: string, username: string) => {
    const newUser: IAddUserListPropsExtendArray = {
      names: name,
      usernames: username,
      key : Math.random().toString() 
    };
    setUsersList([...UsersListing, newUser]);
  };

  return (
    <div>
      {" "}
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={UsersListing} />
    </div>
  );
};

export default App;
