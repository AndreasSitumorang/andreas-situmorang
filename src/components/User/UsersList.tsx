import React from "react";
import './UsersList.css';
import Card from "../UI/Card";

interface IAddUserListProps {
    names: string;
    usernames: string;
    children?: React.ReactNode;
}
interface IAddUserListPropsExtendArray{
    names: string;
    usernames: string;
    children?: React.ReactNode;
    [key: string]: any;
}

const AddUser: React.FC<IAddUserListPropsExtendArray[]> = function (children, any) {

    var newArr = children.map(function(names){
        return names.names , names.usernames;
    })
    
    var newArrs = children.map(function(usernames){
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

export default AddUser;
