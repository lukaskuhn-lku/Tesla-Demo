import React, { Component } from "react";
import "../sass/roomstatistics.scss";

import RoomStatistics from "./roomstatistics";

class RoomStatisticsSection extends Component {
  state = {};
  render() {
    return (
      <div className="section bg-red">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-center pt-4">
              <h1 class="subtitle">Usage by Room (yesterday)</h1>
            </div>
            <div className="col-12 col-md-6 offset-md-3 text-center p-0">
              <h1 class="subtitle" style={{ fontSize: "100%" }}>
                in kWh
              </h1>
            </div>
            <div className="col-12 col-md-8 offset-md-2 p-4">
              <RoomStatistics />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomStatisticsSection;
