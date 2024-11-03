import React from "react";

const Database = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <ellipse
      cx="12"
      cy="5"
      rx="8"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 10.842C7.60158 11.0229 8.27434 11.1718 9 11.282"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 17.842C7.60158 18.0229 8.27434 18.1718 9 18.282"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
      stroke="currentColor"
      strokeWidth="props.strokeWidth"
    />
  </svg>
);

export default Database;