import React from "react";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">      
        <div class="container-fluid">            
        <a class="navbar-brand">Website Monitoring</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav text-start">
                <li class="nav-item">
                <a class="nav-link">Availability Time</a>
                </li>
                <li class="nav-item">
                <a class="nav-link">Download Time</a>
                </li>
            </ul>
            </div>
        </div>


    </nav>
    );
}

export default Header;