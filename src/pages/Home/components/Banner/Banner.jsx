import React from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "@mui/material";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <section className={cx("banner")}>
      <Container>
        <Row>
          <Col xl={7} lg={8} className={cx("banner__wrapper")}>
            <div className={cx("wrapper__silde")}>
              <Carousel>
                <Carousel.Item className={cx("banner__text")}>
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <Link href="#">SHOP NOW</Link>
                </Carousel.Item>
                <Carousel.Item className={cx("banner__text")}>
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <Link href="#">SHOP NOW</Link>
                </Carousel.Item>
                <Carousel.Item className={cx("banner__text")}>
                  <span>The Chloe Collection</span>
                  <h1>The Project Jacket</h1>
                  <Link href="#">SHOP NOW</Link>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
