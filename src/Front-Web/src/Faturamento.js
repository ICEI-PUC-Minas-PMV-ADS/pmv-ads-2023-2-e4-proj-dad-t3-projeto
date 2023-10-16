import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';

function Faturamento() {
  return (
    <div className="faturamento">
      <Sidebar />
      <h1>Faturamento</h1>
      {/* Adicione o conteúdo da página Despesas aqui */}
    </div>
  );
}

export default Faturamento;