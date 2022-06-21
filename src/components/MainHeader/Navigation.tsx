import React from "react";
import "./Navigation.css";

interface INavigationProps {
  isAuthenticated?: boolean;
  onlogout?: () => void;
  onLogout?: boolean;
}

const Navigation = ({ isAuthenticated, onlogout }: INavigationProps) => {
  return (
    <nav className="nav button">
      <ul className="nav-ul">
        {isAuthenticated && (
          <li className="nav-li">
            <a ref={"/"}> Users</a>
          </li>
        )}
        {isAuthenticated && (
            <li className="nav-li">
                <a ref={"/"}> Admin</a>
            </li>
        )}
        {isAuthenticated && (
            <li className="nav-li">
                <button onClick={onlogout}>Logout</button>
            </li>)}
      </ul>
    </nav>
  );
};

export default Navigation;
