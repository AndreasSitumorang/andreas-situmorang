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
  ///React.FC<Iusers> = function (children) {

  return (
    <Card styles="users">
      <ul>
        {users.map((obj) => {
          return (
            <div>
              <Card styles="users li">
                <li key={obj.key}> Name : {obj.names} </li>
                <li key={obj.key + 1}> UserName: {obj.usernames} </li>
              </Card>
            </div>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersListComponent;
