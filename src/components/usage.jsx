import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Usage extends Component {
  render() {
    return (
      <Line
        data={{
          labels: ["0 am", "4 am", "8 am", "12 am", "4 pm", "8 pm", "12 pm"],
          datasets: [
            {
              data: [20, 10, 30, 70, 90, 70, 40],
              label: "",
              borderColor: "#f54e42",
              fill: false
            }
          ]
        }}
        options={{
          legend: { display: false },
          elements: { point: { radius: 0 } },
          scales: {
            yAxes: [
              {
                display: false,
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "black"
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default Usage;
