import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "@mui/material";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer")}>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={7} style={{ padding: "0 15px" }}>
            <div className={cx("footer__about")}>
              <div className={cx("footer__logo")}>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt cilisis.
              </p>
              <div className={cx("footer__payment")}>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/payment/payment-1.png"
                    alt="master card"
                  />
                </Link>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/payment/payment-2.png"
                    alt="visa"
                  />
                </Link>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/payment/payment-3.png"
                    alt="discover"
                  />
                </Link>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/payment/payment-4.png"
                    alt="paypal"
                  />
                </Link>
                <Link href="">
                  <img
                    src="https://technext.github.io/ashion/img/payment/payment-5.png"
                    alt="cirrus"
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={5} style={{ padding: "0 15px" }}>
            <div className={cx("footer__widget")}>
              <h6>QUICK LINKS</h6>
              <ul>
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
                <li>
                  <Link href="">FAQ</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} style={{ padding: "0 15px" }}>
            <div className={cx("footer__widget")}>
              <h6>ACCOUNT</h6>
              <ul>
                <li>
                  <Link href="">My Account</Link>
                </li>
                <li>
                  <Link href="">Oders Tracking</Link>
                </li>
                <li>
                  <Link href="">Checkout</Link>
                </li>
                <li>
                  <Link href="">Wishlist</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={8} sm={8} style={{ padding: "0 15px" }}>
            <div className={cx("footer__newsletter")}>
              <h6>NEWSLETTER</h6>
              <form action="">
                <input type="text" name="" id="" placeholder="Email" />
                <button type="submit">SUBSCRIBE</button>
              </form>
              <div className={cx("footer__social")}>
                <Link href="">
                  <FaFacebookF />
                </Link>
                <Link href="">
                  <FaTwitter />
                </Link>
                <Link href="">
                  <FaYoutube />
                </Link>
                <Link href="">
                  <RiInstagramFill />
                </Link>
                <Link href="">
                  <FaPinterest />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr></hr>
            <div className={cx("footer__copyright__text")}>
              <p>
                Copyright © {new Date().getFullYear()} All rights reserved |
                This template is made with ❤ by Tony Tran
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
