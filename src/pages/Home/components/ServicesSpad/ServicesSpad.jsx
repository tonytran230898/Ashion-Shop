import React from "react";
import styles from "./ServicesSpad.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegMoneyBillAlt, FaShippingFast } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineSafety } from "react-icons/ai";

const cx = classNames.bind(styles);

function ServicesSpad() {
  return (
    <section className={cx("services")}>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <div className={cx("services__item")}>
              <FaShippingFast className={cx("services__icon")} />
              <h6>Free Shipping</h6>
              <p>For all oder over $99</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className={cx("services__item")}>
              <FaRegMoneyBillAlt className={cx("services__icon")} />

              <h6>Money Back Guarantee</h6>
              <p>If good have Problems</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className={cx("services__item")}>
              <HiOutlineSupport className={cx("services__icon")} />
              <h6>Online Support 24/7</h6>
              <p>Dedicated support</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className={cx("services__item")}>
              <AiOutlineSafety className={cx("services__icon")} />
              <h6>Payment Secure</h6>
              <p>100% secure payment</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSpad;
