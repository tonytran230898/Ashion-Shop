import React, { useState } from "react";
import styles from "./CardProducts.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import { BsArrowsAngleExpand, BsHeart } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import PopupImg from "./PopupImg/PopupImg";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CardProducts({ saveFilter, listCard }) {
  const [showPopup, setShowPopup] = useState(false);
  const [imgPopup, setImgPopup] = useState("");

  const handleShowPopup = (link) => {
    setShowPopup(true);
    setImgPopup(link);
  };
  const handleHidePopup = () => {
    setShowPopup(false);
    setImgPopup("");
  };
  document.onkeydown = handleKeyDown;
  function handleKeyDown(e) {
    if (e.code === "Escape") {
      setShowPopup(false);
    }
  }
  const handleAddProductToCart = (product, index) => {
    let data = {
      id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      quantity: 1,
      total: product.price,
    };
    const productStorage = JSON.parse(localStorage.getItem("listProduct"));
    if (productStorage && productStorage.length > 0) {
      let exist = productStorage.find((item) => {
        return item.id === product.id;
      });
      if (!exist) {
        productStorage.push(data);
        localStorage.setItem("listProduct", JSON.stringify(productStorage));
      }
    } else {
      if (product) {
        localStorage.setItem("listProduct", JSON.stringify([data]));
        console.log("saved");
      }
    }
  };
  return (
    <>
      <Row className={cx("property__gallery")}>
        {saveFilter
          ? saveFilter.map((item, index) => (
              <Col key={item.id} lg={3} md={4} sm={6}>
                <div className={cx("product__item")}>
                  <div
                    className={cx("product__item__img")}
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  >
                    <div
                      className={
                        item.id === 1
                          ? cx("lable", "new")
                          : item.id === 3
                          ? cx("lable", "stockout")
                          : item.id === 6
                          ? cx("lable", "sale")
                          : item.id === 8
                          ? cx("lable", "sale")
                          : ""
                      }
                    >
                      {item.lable}
                    </div>
                    <ul className={cx("product__hover")}>
                      <li onClick={() => handleShowPopup(item.img)}>
                        <span className={cx("img__popup")}>
                          <BsArrowsAngleExpand className={cx("action__icon")} />
                        </span>
                      </li>
                      <li>
                        <span>
                          <BsHeart className={cx("action__icon")} />
                        </span>
                      </li>
                      <li onClick={() => console.log(item)}>
                        <span>
                          <RiShoppingBag2Line className={cx("action__icon")} />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("product__item__text")}>
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
                      style={
                        item.lable === "SALE"
                          ? { color: "var(--primary)" }
                          : { color: "var(--text-color)" }
                      }
                    >
                      $ {item.price}.0
                      <span>
                        {item.lable === "SALE"
                          ? `$ ${item.initialPrice}.0`
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          : listCard.map((item, index) => (
              <Col key={item.id} lg={4} md={6} sm={6}>
                <div className={cx("product__item")}>
                  <div
                    className={cx("product__item__img")}
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  >
                    <div
                      className={
                        item.id === 1
                          ? cx("lable", "new")
                          : item.id === 8
                          ? cx("lable", "stockout")
                          : item.id === 5
                          ? cx("lable", "sale")
                          : item.id === 9
                          ? cx("lable", "sale")
                          : ""
                      }
                    >
                      {item.lable}
                    </div>
                    <ul className={cx("product__hover")}>
                      <li onClick={() => handleShowPopup(item.img)}>
                        <span className={cx("img__popup")}>
                          <BsArrowsAngleExpand className={cx("action__icon")} />
                        </span>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <BsHeart className={cx("action__icon")} />
                          </span>
                        </Link>
                      </li>
                      <li onClick={() => handleAddProductToCart(item, index)}>
                        <Link href="#">
                          <span>
                            <RiShoppingBag2Line
                              className={cx("action__icon")}
                            />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("product__item__text")}>
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
                      style={
                        item.lable === "SALE"
                          ? { color: "var(--primary)" }
                          : { color: "var(--text-color)" }
                      }
                    >
                      $ {item.price}.0
                      <span>
                        {item.lable === "SALE"
                          ? `$ ${item.initialPrice}.0`
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
      </Row>
      {showPopup && (
        <PopupImg handleHidePopup={handleHidePopup} imgPopup={imgPopup} />
      )}
    </>
  );
}

export default CardProducts;
