import React from "react";
import NavsBar from "./components/navsBar";
import InputBar from "./components/inputBar";
import TimeTable from "./components/table";
import Histogram from "./components/chart";

function App() {
  return (
    <div>
      <NavsBar />
      <div className="monitor-content">
        <InputBar />
        <TimeTable />
        <Histogram />
      </div>
    </div>
  );
}

export default App;
