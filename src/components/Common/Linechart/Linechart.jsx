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
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
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
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
            "7/11/2000",
            "8/11/2000",
            "9/11/2000",
            "10/11/2000",
            "11/11/2000",
            "12/11/2000",
            "1/11/2001",
            "2/11/2001",
            "3/11/2001",
            "4/11/2001",
            "5/11/2001",
            "6/11/2001",
          ],
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
          min: -10,
          max: 40,
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
