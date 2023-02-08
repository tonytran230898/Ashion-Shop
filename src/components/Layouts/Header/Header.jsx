import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";
import Search from "../../../pages/Home/components/Search/Search";
import { AiOutlineMenu } from "react-icons/ai";
import TemporaryDrawer from "../../TemporaryDrawerOverlay/Overlay";

const cx = classNames.bind(styles);

export default function Header() {
  const [showSearchModel, setShowSearchModel] = useState(false);
  const productStorage = JSON.parse(localStorage.getItem("listProduct"));
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleShowMenu = () => {
    setShowMenuMobile(true);
  };

  const handleHideMenu = () => {
    setShowMenuMobile(false);
  };

  const handleShowSearchModel = () => {
    setShowSearchModel(true);
  };
  const handleHideSearchModel = () => {
    setShowSearchModel(false);
  };

  const listNav = [
    {
      to: "/",
      name: "HOME",
    },
    {
      to: "/shop",
      name: "SHOP",
    },
    {
      to: "/contact",
      name: "CONTACT",
    },
    {
      to: "/cart",
      name: "CART",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={cx("wrapper")}>
      <Container fluid>
        <Row>
          <Col xl={3} lg={2}>
            <div onClick={() => navigate("/")} className={cx("header__logo")}>
              <img
                src="https://technext.github.io/ashion/img/logo.png"
                alt="logo"
              />
            </div>
          </Col>
          <Col xl={6} lg={7}>
            <nav className={cx("header__menu")}>
              <ul>
                {listNav.map((item, index) => (
                  <li
                    key={index}
                    className={
                      location.pathname === item.to ? cx("active") : ""
                    }
                  >
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
          <Col lg={3}>
            <div className={cx("header__right")}>
              <div className={cx("header__right__auth")}>
                <Link>Login</Link>
                <span>/</span>
                <Link>Register</Link>
              </div>

              <ul className={cx("header__right__widget")}>
                <li>
                  <span>
                    <VscSearch onClick={() => handleShowSearchModel()} />
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsHeart />
                    </span>
                    <div className={cx("tip")}>2</div>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <span>
                      <RiShoppingBag2Line />
                    </span>
                    <div className={cx("tip")}>
                      {productStorage && productStorage.length > 0
                        ? productStorage.length
                        : 0}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <AiOutlineMenu
            className={cx("icon__mobile__menu")}
            onClick={() => handleShowMenu()}
          />
        </Row>
        {showSearchModel && (
          <Search handleHideSearchModel={handleHideSearchModel} />
        )}

        <TemporaryDrawer
          showMenuMobile={showMenuMobile}
          setShowMenuMobile={setShowMenuMobile}
        >
          <div className={cx("mobile__menu__container")}>
            <div
              className={cx("mobile__menu__close")}
              onClick={() => handleHideMenu()}
            >
              x
            </div>
            <div className={cx("mobile__menu__icon")}>
              <ul>
                <li>
                  <span>
                    <VscSearch onClick={() => handleShowSearchModel()} />
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsHeart />
                    </span>
                    <div className={cx("mobile__tip")}>2</div>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <span>
                      <RiShoppingBag2Line />
                    </span>
                    <div className={cx("mobile__tip")}>
                      {productStorage && productStorage.length > 0
                        ? productStorage.length
                        : 0}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => navigate("/")}
              className={cx("mobile__menu__logo")}
            >
              <img
                src="https://technext.github.io/ashion/img/logo.png"
                alt="logo"
              />
            </div>
            <div className={cx("nav__mobile__menu")}>
              <nav>
                <ul>
                  {listNav.map((item, index) => (
                    <li
                      onClick={() => handleHideMenu()}
                      key={index}
                      className={cx("nav__mobile__menu__list")}
                    >
                      <Link to={item.to}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={cx("mobile__menu__auth")}>
              <Link>Login</Link>
              <span>/</span>
              <Link>Register</Link>
            </div>
          </div>
        </TemporaryDrawer>
      </Container>
    </header>
  );
}
