import React from "react";
import styles from "./PopupImg.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PopupImg({ handleHidePopup, imgPopup }) {
  return (
    <div className={cx("modal")}>
      <div className={cx("content")}>
        <div className={cx("content__icon")}>
          <span onClick={handleHidePopup}>X</span>
        </div>
        <div className={cx("content__img")}>
          <img src={imgPopup} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PopupImg;
