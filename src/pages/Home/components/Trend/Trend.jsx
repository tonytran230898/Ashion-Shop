import React from "react";
import styles from "./Trend.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const cx = classNames.bind(styles);

function Trend() {
  const listCategoryTrend = [
    {
      id: 1,
      title: "HOT TREND",
    },
    {
      id: 2,
      title: "BEST SELLER",
    },
    {
      id: 3,
      title: "FEATURE",
    },
  ];

  const listHotTrend = [
    {
      name: "Chain bucket bag",
      img: "https://technext.github.io/ashion/img/trend/ht-1.jpg",
      price: 69,
    },
    {
      name: "Pendant earrings",
      img: "https://technext.github.io/ashion/img/trend/ht-2.jpg",
      price: 39,
    },
    {
      name: "Cotton T-Shirt",
      img: "https://technext.github.io/ashion/img/trend/ht-3.jpg",
      price: 59,
    },
  ];

  const listBestSeller = [
    {
      name: "Ripped jeans",

      img: "https://technext.github.io/ashion/img/trend/bs-1.jpg",

      price: 69,
    },
    {
      name: "Zip-pockets pebbled totebriefcase",
      img: "https://technext.github.io/ashion/img/trend/bs-2.jpg",
      price: 89,
    },
    {
      name: "Round leather bag",
      img: "https://technext.github.io/ashion/img/trend/bs-3.jpg",
      price: 59,
    },
  ];

  const listFeature = [
    {
      name: "Bow wrap skirt",
      img: "https://technext.github.io/ashion/img/trend/f-1.jpg",
      price: 89,
    },
    {
      name: "Metallic earrings",
      img: "https://technext.github.io/ashion/img/trend/f-2.jpg",
      price: 49,
    },
    {
      name: "Flap cross-body bag",
      img: "https://technext.github.io/ashion/img/trend/f-3.jpg",
      price: 99,
    },
  ];

  return (
    <section className={cx("trend")}>
      <Container>
        <Row>
          {listCategoryTrend.map((item) => (
            <Col key={item.id} lg={4} md={4} sm={6}>
              <div className={cx("trend__content")}>
                <div className={cx("trend__title")}>
                  <h4>{item.title}</h4>
                </div>
                {(item.id === 1
                  ? listHotTrend
                  : item.id === 2
                  ? listBestSeller
                  : item.id === 3
                  ? listFeature
                  : {}
                ).map((item, index) => (
                  <div key={index} className={cx("trend__item")}>
                    <div className={cx("trend__item__img")}>
                      <img src={item.img} alt="trend product" />
                    </div>

                    <div className={cx("trend__item__text")}>
                      <h6>{item.name}</h6>
                      <div className={cx("rating")}>
                        <AiFillStar className={cx("icon__rating")} />
                        <AiFillStar className={cx("icon__rating")} />
                        <AiFillStar className={cx("icon__rating")} />
                        <AiFillStar className={cx("icon__rating")} />
                        <AiFillStar className={cx("icon__rating")} />
                      </div>
                      <div
                        className={cx("product__price")}
                      >{`$ ${item.price}.0`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Trend;
