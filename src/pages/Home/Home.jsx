import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Categories from "./components/Categories/Categories";
import ProductSpad from "./components/ProductSpad/ProductSpad";
import Banner from "./components/Banner/Banner";
import Trend from "./components/Trend/Trend";
import Discount from "./components/Discount/Discount";
import ServicesSpad from "./components/ServicesSpad/ServicesSpad";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Categories />
      <ProductSpad />
      <Banner />
      <Trend />
      <Discount />
      <ServicesSpad />
    </div>
  );
}

export default Home;
