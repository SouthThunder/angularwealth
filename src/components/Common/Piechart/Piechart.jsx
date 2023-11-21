import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import randomColor from "randomcolor";
import "./Piechart.css";

export const Piechart = ({ inputs }) => {

  function getRandomColor() {
    return randomColor({
      luminosity: "dark",
      hue: "random",
    });
  }

  return (
    <div className="piechart">
      <h2>Grafica de resumen</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={inputs}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {inputs.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getRandomColor()} />
          ))}
        </Pie>
        <Legend data={inputs} />
      </PieChart>
    </div>
  );
};
