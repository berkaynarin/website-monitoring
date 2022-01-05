import React from "react";

const Card = () => {
  return (
    <div className="card-group">
      <div class="card bg-success bg-gradient" style={{ width: "10rem" }}>
        <div class="card-body">
          <h5 class="card-title">Success</h5>
          <p class="card-text">Your services is 99.99% up</p>
          <a href="www.google.com" class="btn btn-light">
            Show Services
          </a>
        </div>
      </div>
      <div class="card bg-warning bg-gradient" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Warning</h5>
          <p class="card-text">Your download time is slow</p>
          <a href="www.google.com" class="btn btn-primary btn-light">
            How Slow
          </a>
        </div>
      </div>
      <div class="card bg-danger bg-gradient" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Danger</h5>
          <p class="card-text">4 Broken Links were Found</p>
          <a href="www.google.com" class="btn btn-primary btn-light">
            Show Broken Links
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
