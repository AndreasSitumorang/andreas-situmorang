import React, {useState} from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

interface IAppProps {
  name: string;
  username: string;
}
// const listUser : IAppProps[] = [
//     {
//         name: "domi",
//         username: "domi"
//     },
//   ];
interface IAddUserListPropsExtendArray{
  names: string;
  usernames: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const [UsersListing, setUsersList] = useState<IAddUserListPropsExtendArray[]>([]);


const AddUserHandler = (name: string, username: string) => {
  const newUser: IAddUserListPropsExtendArray = {
    names: name,
    usernames: username
  };
  setUsersList([...UsersListing, newUser]);
};



const App: React.FC = function(setName, setUsername) {
  return <div> <AddUser/>
  <UsersList {...UsersListing}/>
  </div>;
}; 

export default App;
