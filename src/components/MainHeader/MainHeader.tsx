import React, { Children, useState } from "react";
import Navigation from "./Navigation";
import "./MainHeader.css";

interface IMainHeaderProps {
    // children: React.ReactNode;
    onLogout: ( ) => void;
    isAuthenticate: boolean;
}

const MainHeader = ({onLogout, isAuthenticate}: IMainHeaderProps) => {
    // const [isAuthenticated, setisAuthenticated] = useState(true);
    // const [fromIsValid, setFromIsValid] = useState(false);
    // const [onLogout, setOnLogout] = useState(false);
    // const logoutHandler = () => {
    //     onLogout(false);
    // }
    return (
        <header className="main-header">
            <h1>A Typical Page</h1>
            <Navigation isLoggedIn = {isAuthenticate}  onlogout={onLogout} />
        </header>
    );
}

export default MainHeader;