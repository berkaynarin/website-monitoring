import React from "react";

const InputBar = () => {
  return (
    <div class="input-group m-auto">
      <input
        type="text"
        class="form-control"
        placeholder="Enter a URL"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <span class="input-group-text" id="basic-addon2">
        Send Request
      </span>
    </div>
  );
};

export default InputBar;
