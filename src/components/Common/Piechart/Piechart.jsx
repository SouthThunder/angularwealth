import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import './Piechart.css';



const COLORS = ['#FC0D1B', '#78D330'];

export const Piechart = ({inputs}) => {
  const user = useSelector(state => state.user)

  const data = [
    {name: 'Gastos' , value: (inputs.monto_gasto)*2},
    {name: 'Ingresos' , value: user.sueldo}
  ]

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

