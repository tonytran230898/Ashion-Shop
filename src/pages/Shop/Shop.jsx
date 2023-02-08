import React from "react";
import ShopItem from "./components/ShopItem";
import styles from "./Shop.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Shop() {
  return (
    <section className={cx("shop")}>
      <ShopItem />
    </section>
  );
}

export default Shop;
