import { useState } from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';
import SeletorData from './components/SeletorData';


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
          

        </div>
      </main>
    </div>
  );
}

export default Home;