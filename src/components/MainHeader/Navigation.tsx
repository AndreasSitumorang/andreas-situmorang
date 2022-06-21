import React from "react";
import "./Navigation.css";

interface INavigationProps {
  isLoggedIn: boolean;
  onlogout: () => void;
}

const Navigation = ({ isLoggedIn, onlogout }: INavigationProps) => {
  return (
    <nav className="nav button">
      <ul className="nav-ul">
        {isLoggedIn && (
          <li className="nav-li">
            <a> Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li className="nav-li">
            <a> Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button className="nav-button " onClick={onlogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
