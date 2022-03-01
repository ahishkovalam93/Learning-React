import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.getDay();
  const year = props.date.getYear();
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
