import React from "react";
import Chart from "react-apexcharts";

import "./Linechart.css";

export class Linechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: props.data.map((gasto) => {
            return gasto.monto_gasto;
          }),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
        },
        forecastDataPoints: {
          count: 0,
        },
        stroke: {
          width: 5,
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: props.data.map((gasto) => {
            return gasto.fecha_gasto;
          }),
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
          },
        },
        title: {
          text: "Tu resumen este año",
          align: "left",
          style: {
            fontSize: "20px",
            color: "#000",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FF5BEF"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        yaxis: {
          min: Math.min(...props.data.map((gasto) => gasto.monto_gasto)),
          max: Math.max(...props.data.map((gasto) => gasto.monto_gasto)),
        },
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}
