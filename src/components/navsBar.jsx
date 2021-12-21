import React from "react";

const NavsBar = () => {
  return (
    <ul class="navsBar nav nav-tabs flex-column bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src="public/assets/images/navsBar-logo.png"
          alt="navbar-logo"
          width="30"
          height="24"
        />
      </a>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Active
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  );
};

export default NavsBar;
