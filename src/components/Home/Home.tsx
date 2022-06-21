import { homedir } from 'os';
import React from 'react';
import "./Home.css";

import Card from '../UI/Card/Card';
// import classes from './Home.module.css';

interface Home {
    // children?: React.ReactNode;
    onLogout: (
        isAuthenticated: boolean,
      ) => void
};

const Home = ({ onLogout }: Home) => {
    return (
        <Card styles="home">
            <h1>Welcome back!</h1>
        </Card> 
    );
};

export default Home;


