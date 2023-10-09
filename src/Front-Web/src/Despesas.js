import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';

function Despesas() {
  return (
    <div className="despesas">
      <Sidebar />
      <h1>Despesas</h1>
      {/* Adicione o conteúdo da página Despesas aqui */}
    </div>
  );
}

export default Despesas;
