import React, { Fragment, useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";
import Logins from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import UsersList, {
  IAddUserListPropsExtendArray,
} from "./components/User/UsersList";
import Cards from "./components/UI/Card/Card";

const App = () => {
  const [UsersListing, setUsersList] = useState<IAddUserListPropsExtendArray[]>(
    []
  );

  const AddUserHandler = (name: string, username: string) => {
    const newUser: IAddUserListPropsExtendArray = {
      names: name,
      usernames: username,
      key: Math.random().toString(),
    };
    setUsersList([...UsersListing, newUser]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (enteredEmail: string, enteredPassword: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      {/* {" "}
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={UsersListing} /> */}
      <div>
        <MainHeader isAuthenticate= {isLoggedIn} onLogout={logoutHandler} />
      </div>

      <Cards styles="App-header">
        <main>
          {!isLoggedIn && <Logins onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </Cards>
    </Fragment>
  );
};

export default App;
