import React from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Search({ handleHideSearchModel }) {
  return (
    <div className={cx("search-model")}>
      <div
        className={cx("h-100 d-flex align-items-center justify-content-center")}
      >
        <div
          className={cx("icon-close")}
          onClick={() => handleHideSearchModel()}
        >
          X
        </div>
        <form className={cx("search-model-form")}>
          <input type="text" placeholder="Search here..." />
        </form>
      </div>
    </div>
  );
}

export default Search;
