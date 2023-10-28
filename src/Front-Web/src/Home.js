import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Style.css';
import SeletorData from './components/SeletorData';
import FaturamentoChart from './components/FaturamentoChart';
import useAxios from './hooks/useAxios';

function Home() {
  const date = new Date();
  const [data, setData] = useState([date.getFullYear(), date.getMonth() + 1]); // Altere o valor padrão conforme necessário
  const token = localStorage.getItem('token');
  const [valorFaturado, setValorFaturado] = useState(null);
  const [valorVendas, setValorVendas] = useState(null);
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Faturamento/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setValorFaturado(response.map((item) => item.valorFaturadoMes));
      setValorVendas(response.map((item) => item.numeroVendas));
    } else if (error) {
      console.log(error);
      setValorFaturado(null);
    }
  }, [data, response, error]);

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
            <h1 className="main-title2"> </h1>
            <SeletorData getDate={setData} />
          </div>

          {/* Adicione o componente FaturamentoChart aqui e passe 'ano' e 'mes' como props */}
          <FaturamentoChart
            ano={data[0]}
            mes={data[1]}
            values={valorFaturado}
            title={'Valor Faturado Diário'}
            label={'Valor Vendas'}
            type={'line'}
            colorBackGround={'rgba(210, 55, 110,0.4)'}
            colorBorder={'rgba(220, 55, 110,0.8)'}
            titleCircle={'Total Valor Faturado'}
          />
          <FaturamentoChart
            ano={data[0]}
            mes={data[1]}
            values={valorVendas}
            title={'Número de Venas Diária'}
            label={'Número Vendas'}
            type={'bar'}
            colorBackGround={'rgba(10, 55, 110,0.4)'}
            colorBorder={'rgba(10, 55, 110,0.8)'}
            titleCircle={'Total Itens Vendidos'}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
