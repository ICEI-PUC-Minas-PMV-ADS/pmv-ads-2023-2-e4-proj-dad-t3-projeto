import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';

function Estoque() {
  return (
    <div className="Estoque">
      <Sidebar />
      <main>
        <div className="estoque-header">
          <h1 className="estoque-title">Estoque</h1>
          <h2 className="estoque-subtitle">Gerencie Seus Produtos</h2>
        </div>
        {/* Outro conteúdo da página aqui */}

        <div className="estoque-container">
      <div className="page-header">
        <h1 className="estoque-title2">Produtos Cadastrados</h1>
        <button className="add-button">Adicionar +</button>
      </div>
      </div>

      </main>
    </div>
  );
}

export default Estoque;
