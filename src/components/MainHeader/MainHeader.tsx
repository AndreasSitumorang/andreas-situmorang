import React, { Children, useState } from "react";
import Navigation from "./Navigation";
import "./MainHeader.css";

interface IMainHeaderProps {
    // children: React.ReactNode;
    onLogout: (
        isAuthenticated: boolean,
      ) => void;
      isAuthenticated?: boolean;
}

const MainHeader = ({onLogout}: IMainHeaderProps) => {
    // const [isAuthenticated, setisAuthenticated] = useState(true);
    // const [fromIsValid, setFromIsValid] = useState(false);
    // const [onLogout, setOnLogout] = useState(false);
    const logoutHandler = () => {
        onLogout(true);
    }
    return (
        <header className="main-header">
            <h1>A Typical Page</h1>
            <Navigation  onlogout={logoutHandler} />
        </header>
    );
}

export default MainHeader;