import React from "react";
import styles from "./Discount.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Discount() {
  const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThirtyDays = NOW_IN_MS + THIRTY_DAYS_IN_MS;

  return (
    <section className={cx("discount")}>
      <Container>
        <Row>
          <Col lg={6} className={cx("p-0")}>
            <div className={cx("discount__img")}>
              <img
                src="https://technext.github.io/ashion/img/discount.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col lg={6} className={cx("p-0")}>
            <div className={cx("discount__text")}>
              <div className={cx("discount__text__title")}>
                <span>DISCOUNT</span>
                <h2>Spring 2023</h2>
                <h5>
                  <span>SALE</span>
                  50%
                </h5>
              </div>
              <CountdownTimer targetDate={dateTimeAfterThirtyDays} />
              <Link>SHOP NOW</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Discount;
