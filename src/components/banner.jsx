import React, { Component } from "react";
import "../sass/banner.scss";
import powerWallImage from "../images/powerwall.png";
import Usage from "./usage";
import { Script } from "vm";
import Overview from "./overview";

class Banner extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="banner text-white p-4">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-2">
              <div className="container">
                <img src={powerWallImage} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-5 p-md-4 mt-md-5">
              <Overview
                overview={{
                  temperature: 25,
                  voltage: 410,
                  current: 8.8,
                  power: 5.5
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
