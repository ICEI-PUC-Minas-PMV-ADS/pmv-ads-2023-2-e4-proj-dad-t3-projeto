import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

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
    const storedToken = localStorage.getItem('token');

    if (storedUserLogged === '1' && storedToken) {
      try {
        const decodedToken = jwt_decode(storedToken);

        console.log(decodedToken.exp > Date.now() / 1000);

        if (decodedToken.exp > Date.now() / 1000) {
          setIsLoggedIn(true);
          setToken(storedToken);
        } else {
          logoutHandler();
        }
      } catch (error) {
        logoutHandler();
      }
    } else {
      setIsLoggedIn(false);
    }
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
