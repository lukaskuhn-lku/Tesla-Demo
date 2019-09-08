import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import UsageSection from "./components/usagesection";
import RoomStatisticsSection from "./components/roomstatisticssection";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <UsageSection />
      <RoomStatisticsSection />
    </React.Fragment>
  );
}

export default App;
