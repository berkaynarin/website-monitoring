import React from "react";

const inputBar = () => {
    return (
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    );
}

export default inputBar;