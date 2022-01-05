import React from "react";

const TimeTable = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">URL</th>
          <th scope="col">Download Time</th>
          <th scope="col">HTTP Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>www.google.com</td>
          <td>5 second</td>
          <td>200</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>www.facebook.com</td>
          <td>10 second</td>
          <td>401</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>www.twitter.com</td>
          <td>13 second</td>
          <td>503</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeTable;
