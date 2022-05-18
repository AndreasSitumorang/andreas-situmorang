import React from "react";
import './UsersList.css';
import Card from "../UI/Card";

interface IAddUserListProps {
    names: string;
    usernames: string;
    children?: React.ReactNode;
}
export interface IAddUserListPropsExtendArray{
    names: string;
    usernames: string;
    children?: React.ReactNode;
    key: string;
}

interface Iusers {
    users : IAddUserListPropsExtendArray[];
}
const UsersListComponent : React.FC<Iusers> = function (children, users) {

  return (
    <Card styles="users">
    <ul>
        {children.users.map((obj) => {
            return <li key={obj.key}>{obj.names}{obj.usernames}</li>
        })}
    </ul>
    </Card>
  );
};

export default UsersListComponent;
