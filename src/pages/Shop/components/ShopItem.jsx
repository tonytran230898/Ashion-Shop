import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./ShopItem.module.scss";
import classNames from "classnames/bind";
import CardProducts from "../../Home/components/ProductSpad/CardProducts/CardProducts";
import { ShopCategory } from "./ShopItem/ShopCategory";

const cx = classNames.bind(styles);

function ShopItem() {
  const listCard = [
    {
      id: 1,
      lable: "NEW",
      category: ["All", "Women's"],
      name: "Furry hooded parka",
      img: "https://technext.github.io/ashion/img/shop/shop-1.jpg",
      price: 59,
      keyFilter: [1, 2],
    },
    {
      id: 2,
      category: ["All", "Men's"],
      name: "Flowy striped skirt",
      img: "https://technext.github.io/ashion/img/shop/shop-2.jpg",
      price: 49,
      keyFilter: [1, 3],
    },
    {
      id: 3,
      category: ["All", "Women's", "Accessories"],
      name: "Croc-effect bag",
      img: "https://technext.github.io/ashion/img/shop/shop-3.jpg",
      price: 59,
      keyFilter: [1, 2, 5],
    },
    {
      id: 4,
      category: ["All", "Men's", "Cosmetics"],
      name: "Dark wash Xavi jeans",
      img: "https://technext.github.io/ashion/img/shop/shop-4.jpg",
      price: 59,
      keyFilter: [1, 3, 6],
    },
    {
      id: 5,
      lable: "SALE",
      category: ["All", "Men's", "Kid's"],
      name: "Ankle-cuff sandals",
      img: "https://technext.github.io/ashion/img/shop/shop-5.jpg",
      price: 49,
      initialPrice: 59,
      keyFilter: [1, 3, 4],
    },
    {
      id: 6,
      category: ["All", "Women's", "Kid's", "Accessories", "Cosmetics"],
      name: "Contrasting sunglasses",
      img: "https://technext.github.io/ashion/img/shop/shop-6.jpg",
      price: 49,
      initialPrice: 59,
      keyFilter: [1, 2, 4, 5, 6],
    },
    {
      id: 7,
      category: ["All", "Women's", "Kid's", "Accessories", "Cosmetics"],
      name: "Circular pendant earrings",
      img: "https://technext.github.io/ashion/img/shop/shop-7.jpg",
      price: 59,
      keyFilter: [1, 2, 4, 5, 6],
    },

    {
      id: 8,
      lable: "OUT OF STOCK",
      category: ["All", "Men's", "Kid's", "Accessories", "Cosmetics"],
      name: "Cotton T-Shirt",
      img: "https://technext.github.io/ashion/img/shop/shop-8.jpg",
      price: 49,
      keyFilter: [1, 3, 4, 5, 6],
    },
    {
      id: 9,
      lable: "SALE",
      category: ["All", "Men's", "Kid's", "Accessories", "Cosmetics"],
      name: "Water resistant backpack",
      img: "https://technext.github.io/ashion/img/shop/shop-9.jpg",
      price: 49,
      initialPrice: 59,
      keyFilter: [1, 3, 4, 5, 6],
    },
  ];

  const menuCategories = [
    {
      id: 1,
      name: "Women",
      listItem: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    },
    {
      id: 2,
      name: "Men",
      listItem: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    },
    {
      id: 3,
      name: "Kids",
      listItem: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    },
    {
      id: 4,
      name: "Accessories",
      listItem: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    },
    {
      id: 5,
      name: "Cosmetic",
      listItem: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    },
  ];

  return (
    <Container>
      <Row>
        <Col lg={3} md={3}>
          <div className={cx("shop__sidebar")}>
            <div className={cx("shop__categories")}>
              <div className={cx("section__title")}>
                <h4>CATEGORIES</h4>
              </div>
              <div className={cx("accorion")}>
                {menuCategories.map((item) => (
                  <ShopCategory item={item} />
                ))}
              </div>
            </div>
            <div className={cx("shop__filter")}></div>
            <div className={cx("shop__sizes")}>
              <div className={cx("section__title")}>
                <h4>SHOP BY SIZE</h4>
              </div>
              <div className={cx("size__list")}>
                <label for="xxs">
                  XXS
                  <input type="checkbox" id="xxs" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="xs">
                  XS
                  <input type="checkbox" id="xs" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="xs-s">
                  XS-S
                  <input type="checkbox" id="xs-s" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="s">
                  S
                  <input type="checkbox" id="s" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="m">
                  M
                  <input type="checkbox" id="m" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="m-l">
                  M-L
                  <input type="checkbox" id="m-l" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="l">
                  L
                  <input type="checkbox" id="l" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="xl">
                  XL
                  <input type="checkbox" id="xl" />
                  <span className={cx("checkmark")}></span>
                </label>
              </div>
            </div>
            <div className={cx("shop__color")}>
              <div className={cx("section__title")}>
                <h4>SHOP BY COLOR</h4>
              </div>
              <div className={cx("size__list", "color__list")}>
                <label for="Blacks">
                  Blacks
                  <input type="checkbox" id="Blacks" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Whites">
                  Whites
                  <input type="checkbox" id="Whites" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Reds">
                  Reds
                  <input type="checkbox" id="Reds" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Greys">
                  Greys
                  <input type="checkbox" id="Greys" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Blues">
                  Blues
                  <input type="checkbox" id="Blues" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Beige Tones">
                  Beige Tones
                  <input type="checkbox" id="Beige Tones" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Greens">
                  Greens
                  <input type="checkbox" id="Greens" />
                  <span className={cx("checkmark")}></span>
                </label>
                <label for="Yellows">
                  Yellows
                  <input type="checkbox" id="Yellows" />
                  <span className={cx("checkmark")}></span>
                </label>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={9} md={9}>
          <CardProducts listCard={listCard} />
        </Col>
      </Row>
    </Container>
  );
}

export default ShopItem;
