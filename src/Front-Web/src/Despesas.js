import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Style.css';
import SeletorData from './components/SeletorData';

function Despesas() {
  const date = new Date();
  const [data, setData] = useState([date.getMonth(), date.getFullYear()]);
  return (
    <div className="main-all">
      <Sidebar />
      
      <main>
        <div className="main-header">
          <h1 className="main-title">Despesas</h1>
          <h2 className="main-subtitle">Gerencie suas despesas</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">Tipo de despesa</h1>
            <SeletorData getDate={setData} />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Despesas;
