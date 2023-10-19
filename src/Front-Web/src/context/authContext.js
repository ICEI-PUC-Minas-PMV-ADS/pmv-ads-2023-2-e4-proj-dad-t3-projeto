import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (token) => {},
  token: '',
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedUserLogged = localStorage.getItem('isLoggedIn');

    if (storedUserLogged === '1') {
      setIsLoggedIn(true);
    }

    //Validate expiration date of JWT token and take actions
  }, []);

  const logoutHandler = () => {
    console.log('DESLOGADO!!!!');
    localStorage.setItem('isLoggedIn', '0');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const loginHandler = (token) => {
    console.log('LOGADO!!!!');
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        token: token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
