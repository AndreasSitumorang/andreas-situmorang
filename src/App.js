import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import contextAuth from './Context/auth-contrext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () => {
    const storedLocalUser = localStorage.getItem('isLogined');
    if(storedLocalUser === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {

    localStorage.setItem('isLogined', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <contextAuth.Provider value={{
      isLoggedIn : isLoggedIn,
      onLogout : logoutHandler,
  }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </contextAuth.Provider>
  );
}

export default App;
