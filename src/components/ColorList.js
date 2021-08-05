import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      {
        colors.map(eachColor => {
          return <li key={eachColor} style={{ color: eachColor }}>{eachColor}</li>;
        })
      }
    </div>
  );
}

export default ColorList;
