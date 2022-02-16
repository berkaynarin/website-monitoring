import React from "react";
import { ReactDOM } from "react";
import Chart from "react-apexcharts";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";

let responseItem = [];
const reqItems = [
  {
    id: 1,
    responseCode: "400",
    currentDate: "2022-02-15T23:27:11.982220",
    responseTime: "0.342",
  },
  {
    id: 2,
    responseCode: "201",
    currentDate: "2022-02-15T23:27:11.982220",
    responseTime: "0.423",
  },
];

class Histogram extends Component {
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/webMonitor/")
      .then(reqItems.map((item) => responseItem.push(item.responseTime)))
      .catch((err) => console.log(err));
  };
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["24H", "20H", "16H", "12H", "8H", "4H", "2H", "1H"],
        },
      },
      series: [
        {
          name: "series-1",
          data: responseItem,
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="700"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Histogram;
