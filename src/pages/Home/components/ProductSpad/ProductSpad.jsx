import React, { useEffect, useState } from "react";
import styles from "./ProductSpad.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import CardProducts from "./CardProducts/CardProducts";

const cx = classNames.bind(styles);

function ProductSpad({ handlRender }) {
  const listCategory = [
    {
      id: 1,
      category: "All",
    },
    {
      id: 2,
      category: "Women's",
    },
    {
      id: 3,
      category: "Men's",
    },
    {
      id: 4,
      category: "Kid's",
    },
    {
      id: 5,
      category: "Accessories",
    },
    {
      id: 6,
      category: "Cosmetics",
    },
  ];

  const listCard = [
    {
      id: 1,
      lable: "NEW",
      category: ["All", "Women's"],
      name: "Buttons tweed blazer",
      img: "https://technext.github.io/ashion/img/product/product-1.jpg",
      price: 59,
      keyFilter: [1, 2],
    },
    {
      id: 2,
      category: ["All", "Men's"],
      name: "Flowy striped skirt",
      img: "https://technext.github.io/ashion/img/product/product-2.jpg",
      price: 49,
      keyFilter: [1, 3],
    },
    {
      id: 3,
      lable: "OUT OF STOCK",
      category: ["All", "Women's", "Accessories"],
      name: "Cotton T-Shirt",
      img: "https://technext.github.io/ashion/img/product/product-3.jpg",
      price: 59,
      keyFilter: [1, 2, 5],
    },
    {
      id: 4,
      category: ["All", "Men's", "Cosmetics"],
      name: "Slim striped pocket shirt",
      img: "https://technext.github.io/ashion/img/product/product-4.jpg",
      price: 59,
      keyFilter: [1, 3, 6],
    },
    {
      id: 5,
      category: ["All", "Men's", "Kid's"],
      name: "Fit micro corduroy shirt",
      img: "https://technext.github.io/ashion/img/product/product-5.jpg",
      price: 59,
      keyFilter: [1, 3, 4],
    },
    {
      id: 6,
      lable: "SALE",
      category: ["All", "Women's", "Kid's", "Accessories", "Cosmetics"],
      name: "Tropical Kimono",
      img: "https://technext.github.io/ashion/img/product/product-6.jpg",
      price: 49,
      initialPrice: 59,
      keyFilter: [1, 2, 4, 5, 6],
    },
    {
      id: 7,
      category: ["All", "Women's", "Kid's", "Accessories", "Cosmetics"],
      name: "Contrasting sunglasses",
      img: "https://technext.github.io/ashion/img/product/product-7.jpg",
      price: 59,
      keyFilter: [1, 2, 4, 5, 6],
    },

    {
      id: 8,
      lable: "SALE",
      category: ["All", "Men's", "Kid's", "Accessories", "Cosmetics"],
      name: "Water resistant backpack",
      img: "https://technext.github.io/ashion/img/product/product-8.jpg",
      price: 49,
      initialPrice: 59,
      keyFilter: [1, 3, 4, 5, 6],
    },
  ];

  const [isActiveClass, setIsActiveClass] = useState("All");

  const [filterCategory, setFilterCategory] = useState(1);

  const [saveFilter, setSaveFilter] = useState([]);

  const handleClick = (item) => {
    setIsActiveClass(item.id);
    setFilterCategory(item.id);
  };

  useEffect(() => {
    const result = listCard.filter((item) =>
      item.keyFilter.includes(filterCategory)
    );
    setSaveFilter(result);
  }, [filterCategory]);

  return (
    <section className={cx("products")}>
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className={cx("section__title")}>
              <h4>NEW PRODUCT </h4>
            </div>
          </Col>
          <Col lg={8} md={8}>
            <ul className={cx("filter__control")}>
              {listCategory.map((item) => (
                <li
                  key={item.id}
                  className={
                    isActiveClass === item.category || isActiveClass === item.id
                      ? cx("active")
                      : ""
                  }
                  onClick={() => handleClick(item)}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <CardProducts handlRender={handlRender} saveFilter={saveFilter} />
      </Container>
    </section>
  );
}

export default ProductSpad;
