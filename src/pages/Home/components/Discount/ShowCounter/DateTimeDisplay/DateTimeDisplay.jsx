import React from "react";
import styles from "./DateTimeDisplay.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DateTimeDisplay({ value, type, isDanger }) {
  return (
    <div className={isDanger ? cx("countdown__danger") : cx("countdown__item")}>
      <span>{value}</span>
      <p>{type}</p>
    </div>
  );
}

export default DateTimeDisplay;
