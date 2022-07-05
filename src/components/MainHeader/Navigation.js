import React, {useContext} from 'react';
import contextAuth from '../../Context/auth-contrext';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const contexts = useContext(contextAuth);
  //return (
    //<contextAuth.Consumer>
     // { (contexts) => {
        return(
          <nav className={classes.nav}>
            <ul>
              {contexts.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {contexts.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {contexts.isLoggedIn && (
                <li>
                  <button onClick={contexts.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );            
//      }}
    //</contextAuth.Consumer>
//  );
};

export default Navigation;
