import React from "react";
import srcLogo from "../images/navsBar-logo.png";

const NavsBar = () => {
  return (
    <ul class="navsBar nav flex-column bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={srcLogo} alt="" width="80" height="65" />
          <br />
          Website Monitoring
        </a>
      </div>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Download Time
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Availability Time
        </a>
      </li>
    </ul>
  );
};

export default NavsBar;
