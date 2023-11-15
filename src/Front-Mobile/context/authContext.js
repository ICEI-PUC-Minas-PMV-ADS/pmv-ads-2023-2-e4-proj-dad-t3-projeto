import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const retrieveData = async () => {
      try {
        const storedUserLogged = await AsyncStorage.getItem('isLoggedIn');
        const storedToken = await AsyncStorage.getItem('token');

        if (storedUserLogged === '1' && storedToken) {
          const decodedToken = await jwt_decode(storedToken);

          // console.log(decodedToken.exp > Date.now() / 1000);

          if (decodedToken.exp > Date.now() / 1000) {
            setIsLoggedIn(true);
            setToken(storedToken);
          } else {
            logoutHandler();
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    retrieveData();
  }, []);

  const logoutHandler = async () => {
    console.log('DESLOGADO!!!!');
    try {
      await AsyncStorage.setItem('isLoggedIn', '0');
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Erro ao salvar dados no AsyncStorage:', error);
    }
  };

  const loginHandler = async (token) => {
    console.log('LOGADO!!!!');
    try {
      await AsyncStorage.setItem('isLoggedIn', '1');
      await AsyncStorage.setItem('token', token);
      setIsLoggedIn(true);
      setToken(token);
    } catch (error) {
      console.error('Erro ao salvar dados no AsyncStorage:', error);
    }
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
