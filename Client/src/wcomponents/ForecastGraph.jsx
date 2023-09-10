import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

const ForecastGraph = (props) => {
  const { chartLabels, chartData, chartMin, chartMax } = props;

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
         
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#522BFF",
        align: "top",
        offset: 15,
        font: {
          size: "23.63",
          family: "Poppins",
          weight: "600",
          letterSpacing: "-0.81",
        },
        display: function (context, i) {
          return (
            !(context.dataIndex % 2) &&
            context.dataIndex < context.dataset.data.length - 1
          );
        },
        formatter: function (value, ctx) {
          return ctx.active ? value + "°C" : value + "°C";
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        position: "top",
        gridLines: {
          offsetGridLines: true,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 9,
          color: "#1C1C1C",
          align: "left",
          backdropPadding: "20",
          font: {
            size: "16",
            family: "Ubuntu",
            weight: "300",
          },
        },
        grid: {
          borderWidth: "2",
          borderDash: [8, 4],
          color: "#20512E",
          drawBorder: false,
          lineWidth: 2,
          tickLength: 0,
          offset: true,
        },
      },
      y: {
        suggestedMin: chartMin ? chartMin - 5 : 0,
        suggestedMax: chartMax ? chartMax + 10 : 100,
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        label: "Temperature",
        borderColor: "#20512E",
        fill: true,
        backgroundColor: "#D3F1D2",
        pointRadius: [7, 0, 7, 0, 7, 0 ],
        pointHoverRadius: 7.1,
        pointBackgroundColor: "#20512E",
        pointBorderColor: "white",
        pointBorderWidth: "3",
      },
    ],
  };

  return <Line data={data} options={options} width={600} height={300} />;
};

export default ForecastGraph;
