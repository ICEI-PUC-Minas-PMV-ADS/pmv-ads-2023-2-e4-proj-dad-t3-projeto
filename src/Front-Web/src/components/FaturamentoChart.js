import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const FaturamentoChart = ({ ano, mes }) => { // Receba 'ano' e 'mes' como props
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/Faturamento/data?Ano=${ano}&Mes=${mes}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados de faturamento: ', error);
      }
    };

    // Chame a função para buscar os dados
    fetchData();
  }, [ano, mes]);

  const chartData = {
    labels: data.map((item) => `Mês ${item.mesLancamento}`),
    datasets: [
      {
        label: 'Valor Faturado Mensal',
        data: data.map((item) => item.valorFaturadoMes),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Faturamento Mensal</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default FaturamentoChart;
