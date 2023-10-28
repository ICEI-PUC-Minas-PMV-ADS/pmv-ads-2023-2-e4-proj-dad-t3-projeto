import React, { useEffect, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FaturamentoChart = ({
  ano,
  mes,
  values,
  title,
  label,
  type,
  colorBackGround,
  colorBorder,
  titleCircle,
}) => {
  const [dias, setDias] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  let charValues = values;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  useEffect(() => {
    try {
      if (values) {
        charValues = [];
        setTotalValue(values.reduce((a, b) => a + b, 0));
        const diasLength = [];
        for (let i = 0; i < values.length; i++) {
          diasLength.push(i + 1);
        }
        setDias(diasLength);
      }
    } catch (error) {
      console.log(error);
    }
  }, [ano, mes, values]);

  const chartData = {
    labels: dias.map((item) => `Dia ${item}`),
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: colorBackGround,
        borderColor: colorBorder,
        borderWidth: 5,
        borderRadius: 10,
        maxBarThickness: 80,
        hoverBackgroundColor: colorBorder,
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="chart-item">
        {type === 'line' ? (
          <Line options={options} data={chartData} width={200} height={60} />
        ) : (
          <Bar options={options} data={chartData} width={200} height={60} />
        )}
      </div>
      <div className="circle-container">
        <h3>{titleCircle}</h3>
        <div className="circle" style={{ border: `14px solid ${colorBorder}` }}>
          <h1>{totalValue}</h1>
        </div>
      </div>
    </div>
  );
};

export default FaturamentoChart;
