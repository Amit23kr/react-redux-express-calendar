import React from "react";
import "./index.scss";

const headerWeekDays = (props) => (
  <header className="weekdays">
    {props.days.map((weekday, i) => (
      <strong key={i}>{weekday}</strong>
    ))}
  </header>
);

export default headerWeekDays;
