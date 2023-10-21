import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';

function Suporte() {
  return (
    <div className="main-all">
      <Sidebar />
      
      <main>
        <div className="main-header">
          <h1 className="main-title">Suporte</h1>
          <h2 className="main-subtitle">Contate-nos</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">projeto@gerenciar.com.br</h1>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Suporte;
