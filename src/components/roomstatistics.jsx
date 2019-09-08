import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class RoomStatistics extends Component {
  state = {};
  render() {
    return (
      <HorizontalBar
        data={{
          labels: ["Living Room", "Kitchen", "Bedroom", "Bathroom"],
          datasets: [
            {
              backgroundColor: ["#7ec6f2", "#2da3eb", "#027cc7", "#015b91"],
              data: [4.3, 3.1, 1.4, 0.5]
            }
          ]
        }}
        options={{
          legend: { display: false },
          elements: { point: { radius: 0 } },
          scales: {
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                  fontColor: "white"
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  min: 0,
                  stepSize: 1,
                  fontColor: "white"
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default RoomStatistics;
