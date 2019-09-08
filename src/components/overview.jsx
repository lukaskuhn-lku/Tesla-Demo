import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "../sass/overview.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf, faBolt } from "@fortawesome/free-solid-svg-icons";

class Overview extends Component {
  render() {
    const percentage = 80;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 text-center p-2">
            <h2 class="subtitle">Overview</h2>
          </div>
          <div className="col-3 col-md-3 text-center">
            <CircularProgressbar
              value={this.props.overview.temperature}
              text={this.props.overview.temperature + "°C"}
              minValue="0"
              maxValue="45"
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "25dp",
                pathTransitionDuration: 0.5,
                pathColor: "#4260f5",
                trailColor: "#212121",
                textColor: "#f2f2f2",
                backgroundColor: "#00000000"
              })}
            ></CircularProgressbar>
            <FontAwesomeIcon icon={faThermometerHalf} className="m-2" />
          </div>
          <div className="col-3 col-md-3 text-center">
            <CircularProgressbar
              value={this.props.overview.voltage}
              text={this.props.overview.voltage + "V"}
              minValue="0"
              maxValue="500"
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "25dp",
                pathTransitionDuration: 0.5,
                pathColor: "#f54254",
                trailColor: "#212121",
                textColor: "#f2f2f2",
                backgroundColor: "#00000000"
              })}
            ></CircularProgressbar>
            V
          </div>
          <div className="col-3 col-md-3 text-center">
            <CircularProgressbar
              value={this.props.overview.current}
              text={this.props.overview.current + "A"}
              minValue="0"
              maxValue="14"
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "25dp",
                pathTransitionDuration: 0.5,
                pathColor: "#2bf035",
                trailColor: "#212121",
                textColor: "#f2f2f2",
                backgroundColor: "#00000000"
              })}
            ></CircularProgressbar>
            A
          </div>
          <div className="col-3 col-md-3 text-center">
            <CircularProgressbar
              value={this.props.overview.power}
              text={this.props.overview.power + "kWh"}
              minValue="0"
              maxValue="7"
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "25dp",
                pathTransitionDuration: 0.5,
                pathColor: "#f0e92b",
                trailColor: "#212121",
                textColor: "#f2f2f2",
                backgroundColor: "#00000000"
              })}
            ></CircularProgressbar>
            <FontAwesomeIcon icon={faBolt} className="m-2" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Overview;
