import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";

const cx = classNames.bind(styles);

function Categories() {
  const listCategoriesSmall = [
    {
      img: "https://technext.github.io/ashion/img/categories/category-2.jpg",
      title: "Men's fashion",
      description: "358 items",
      linkName: "SHOP NOW",
    },
    {
      img: "https://technext.github.io/ashion/img/categories/category-3.jpg",
      title: "Kid's fashion",
      description: "273 items",
      linkName: "SHOP NOW",
    },
    {
      img: "https://technext.github.io/ashion/img/categories/category-4.jpg",
      title: "Cosmetics",
      description: "159 items",
      linkName: "SHOP NOW",
    },
    {
      img: "https://technext.github.io/ashion/img/categories/category-5.jpg",
      title: "Accessories",
      description: "792 items",
      linkName: "SHOP NOW",
    },
  ];
  return (
    <section className={cx("categories")}>
      <Container fluid>
        <Row className="d-flex">
          <Col className="p-0" lg={6}>
            <div className={cx("categories__item", "categories__large__item")}>
              <div className={cx("categories__text")}>
                <h1>Women's fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incidid-unt labore edolore magna aliquapendisse ultrices
                  gravida.
                </p>
                <Link to="/shop">SHOP NOW</Link>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Row>
              {listCategoriesSmall.map((item, index) => (
                <Col key={index} className="p-0" lg={6} md={6} sm={6}>
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className={cx("categories__item")}
                  >
                    <div className={cx("categories__text")}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <Link to="/shop"> {item.linkName}</Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
