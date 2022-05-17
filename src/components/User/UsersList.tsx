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

    var newArr = children.users.map(function(names){
        return names.names , names.usernames;
    })
    
    var newArrs = children.users.map(function(usernames){
        return usernames.usernames;
    })

  return (
    <Card styles="users">
    <ul>
        {newArr.map((name, index, username) => {
            return <li key={index}>{name}{username}</li>
        })}
    </ul>
    </Card>
  );
};

export default UsersListComponent;
