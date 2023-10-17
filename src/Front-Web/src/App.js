// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estoque from './Estoque';
import Sidebar from './Sidebar';
import Despesas from './Despesas';
import Home from './Home';
import RecursosHumanos from './RecursosHumanos';
import Suporte from './Suporte';
import Faturamento from './Faturamento';
import Login from './Login';

const isLogged = true;

function App() {
  return (
    <Router>
      {!isLogged ? (
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
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
