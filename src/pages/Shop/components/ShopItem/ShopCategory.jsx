import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import styles from "../ShopItem.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "@mui/material";

const cx = classNames.bind(styles);

export const ShopCategory = ({ item }) => {
  const [showBody, setShowBody] = useState(false);

  const handleHideCardBody = () => setShowBody(false);

  const handleShowCardBody = () => setShowBody(true);

  return (
    <div key={item.id} className={cx("card")}>
      <div
        onClick={showBody ? handleHideCardBody : handleShowCardBody}
        className={cx("card__heading")}
      >
        <span>{item.name}</span>
        {showBody ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
      {showBody && (
        <div className={cx("hide")}>
          <div className={cx("card__body")}>
            <ul>
              {item.listItem.map((listItem) => (
                <li>
                  <Link href="">{listItem}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
