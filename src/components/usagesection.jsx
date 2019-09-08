import React, { Component } from "react";
import Usage from "./usage";

class UsageSection extends Component {
  render() {
    return (
      <div className="section bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-center p-4">
              <h1 class="subtitle">Usage (yesterday)</h1>
            </div>
            <div className="col-12 col-md-8 offset-md-2 p-4">
              <Usage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsageSection;
