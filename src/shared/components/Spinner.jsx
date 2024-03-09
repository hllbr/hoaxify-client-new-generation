import React from "react";

const Spinner = ({ size, styleType }) => {
  return (
    <div className={`text-center alert alert-${styleType || "primary"} `}>
      <span
        className={`spinner-border ${size ? `spinner-border-sm` : ""} `}
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default Spinner;
