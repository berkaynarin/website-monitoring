import React from "react";
import NavsBar from "./components/navsBar";
import InputBar from "./components/inputBar";
import TimeTable from "./components/table";
import Histogram from "./components/chart";
import Card from "./components/card";

function App() {
  return (
    <div>
      <NavsBar />
      <InputBar />
      <TimeTable />
      <Histogram />
      <Card />
    </div>
  );
}

export default App;
