import React from "react";
import styles from "./ShowCounter.module.scss";
import classNames from "classnames/bind";
import DateTimeDisplay from "./DateTimeDisplay/DateTimeDisplay";

const cx = classNames.bind(styles);

function ShowCounter({ days, hours, minutes, seconds }) {
  return (
    <div className={cx("discount__countdown")}>
      <DateTimeDisplay
        value={days >= 10 ? days : `0${days}`}
        type={"Days"}
        isDanger={days <= 10}
      />
      <DateTimeDisplay
        value={hours >= 10 ? hours : `0${hours}`}
        type={"Hours"}
        isDanger={hours <= 10}
      />
      <DateTimeDisplay
        value={minutes >= 10 ? minutes : `0${minutes}`}
        type={"Min"}
        isDanger={minutes <= 10}
      />
      <DateTimeDisplay
        value={seconds >= 10 ? seconds : `0${seconds}`}
        type={"Sec"}
        isDanger={seconds <= 10}
      />
    </div>
  );
}

export default ShowCounter;
