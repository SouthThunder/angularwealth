import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import './Piechart.css';

const data = [
  { name: 'Gastos', value: 213068 },
  { name: 'Ingresos', value: 569230 },
];

const COLORS = ['#FC0D1B', '#78D330'];

export const Piechart = () => {
  return (
    <div className="piechart">
      <h2>Grafica de resumen</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend data={data} colors={COLORS} />
      </PieChart>
    </div>
  );
};

