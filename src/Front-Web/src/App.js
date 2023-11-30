// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './context/authContext';
import Estoque from './Estoque';
import Sidebar from './Sidebar';
import Despesas from './Despesas';
import Home from './Home';
import RecursosHumanos from './RecursosHumanos';
import Suporte from './Suporte';
import Faturamento from './Faturamento';
import Login from './Login';
import Admin from './Admin';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      {!authCtx.isLoggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecursosHumanos" element={<RecursosHumanos />} />
            <Route path="/Despesas" element={<Despesas />} />
            <Route path="/Estoque" element={<Estoque />} />
            <Route path="/Faturamento" element={<Faturamento />} />
            <Route path="/Suporte" element={<Suporte />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
