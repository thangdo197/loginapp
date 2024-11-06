import React from "react";

const PieChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12H22"
      stroke="currentColor"
      strokeWidth="props.strokeWidth"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PieChart;
