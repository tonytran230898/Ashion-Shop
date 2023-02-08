import React from "react";
import styles from "./Instagram.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { Link } from "@mui/material";

const cx = classNames.bind(styles);

function Instagram() {
  const imgIntagram = [
    {
      id: 1,
      img: "https://technext.github.io/ashion/img/instagram/insta-1.jpg",
    },
    {
      id: 2,
      img: "https://technext.github.io/ashion/img/instagram/insta-2.jpg",
    },
    {
      id: 3,
      img: "https://technext.github.io/ashion/img/instagram/insta-3.jpg",
    },
    {
      id: 4,
      img: "https://technext.github.io/ashion/img/instagram/insta-4.jpg",
    },
    {
      id: 5,
      img: "https://technext.github.io/ashion/img/instagram/insta-5.jpg",
    },
    {
      id: 6,
      img: "https://technext.github.io/ashion/img/instagram/insta-6.jpg",
    },
  ];
  return (
    <section className={cx("instagram")}>
      <Container fluid>
        <Row>
          {imgIntagram.map((item) => (
            <Col key={item.id} lg={2} md={4} sm={4} className={cx("p-0")}>
              <div
                className={cx("instagram__item")}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className={cx("instagram__text")}>
                  <FiInstagram className={cx("instagram__icon")} />
                  <Link href="">@ ashion_shop</Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Instagram;
