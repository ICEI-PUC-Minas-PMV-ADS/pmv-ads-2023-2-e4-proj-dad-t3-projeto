import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Style.css';
import SeletorData from './components/SeletorData';
import FaturamentoChart from './components/FaturamentoChart';

function Home() {
  const date = new Date();
  const [data, setData] = useState([date.getFullYear(), date.getMonth() + 1]); // Altere o valor padrão conforme necessário

  return (
    <div className="main-all">
      <Sidebar />
      
      <main>
        <div className="main-header">
          <h1 className="main-title">Dashboard</h1>
          <h2 className="main-subtitle">Acompanhe suas finanças</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2"></h1>
            <SeletorData getDate={setData} />
          </div>
          
          {/* Adicione o componente FaturamentoChart aqui e passe 'ano' e 'mes' como props */}
          <FaturamentoChart ano={data[0]} mes={data[1]} />
        </div>
      </main>
    </div>
  );
}

export default Home;
