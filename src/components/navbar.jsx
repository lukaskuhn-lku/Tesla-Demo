import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
          <img
            src="https://deimling-solar.de/wp-content/uploads/2013/05/Powerwall-Logo.png"
            height="30"
            alt=""
          />
        </span>
      </nav>
    );
  }
}

export default NavBar;
