import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";

export interface IAddUserListPropsExtendArray {
  names: string;
  usernames: string;
  key: string;
}

interface Iusers {
  users: IAddUserListPropsExtendArray[];
  children?: React.ReactNode;
}
const UsersListComponent = ({ children, users }: Iusers) => {

  return (
    <Card styles="users">
      <ul>
        {users.map((obj) => {
          return (
            <>
              <Card styles="users li">
                <li key={obj.key}> Name : {obj.names} </li>
                <li key={obj.key + 1}> UserName: {obj.usernames} </li>
              </Card>
            </>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersListComponent;
