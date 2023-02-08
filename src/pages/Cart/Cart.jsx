import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const listcode = [
  { code: "freeship", value: 1 },
  { code: "blackfriday", value: 15 },
];

function Cart() {
  const productStorage = JSON.parse(localStorage.getItem("listProduct"));

  let [listCart, setLisCart] = useState([]);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (productStorage && productStorage.length > 0) {
      setLisCart(productStorage);
    }
  }, []);
  const handleDelete = (index) => {
    let arr = [...productStorage];
    arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
    localStorage.setItem("listProduct", JSON.stringify(arr));
    setLisCart(arr);
  };
  const handleUpdateNext = (data, index) => {
    let arr = [...productStorage];
    productStorage.forEach((item) => {
      console.log("checkkkk arr index>", arr[index]);
      if (data.id === item.id) {
        return (arr[index] = {
          id: item.id,
          img: item.img,
          name: item.name,
          price: item.price,
          quantity: item.quantity + 1,
          total: (item.quantity + 1) * item.price,
        });
      }
    });
    localStorage.setItem("listProduct", JSON.stringify(arr));
    setLisCart(arr);
  };
  const handleUpdatePrev = (data, index) => {
    let arr = [...productStorage];
    productStorage.forEach((item) => {
      if (data.id === item.id) {
        if (item.quantity === 1) {
          return (arr = [...arr.slice(0, index), ...arr.slice(index + 1)]);
        } else {
          return (arr[index] = {
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            quantity: item.quantity - 1,
            total: (item.quantity - 1) * item.price,
          });
        }
      }
    });
    localStorage.setItem("listProduct", JSON.stringify(arr));
    setLisCart(arr);
  };

  const handleTotal = () => {
    if (productStorage && productStorage.length > 0) {
      let listTotal = [];
      productStorage.forEach((item) => {
        return listTotal.push(item.total);
      });
      const totalCart = listTotal.reduce((a, b) => {
        return a + b;
      });

      return totalCart;
    } else {
      return 0;
    }
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (code) {
        const check = listcode.find((item) => {
          return item.code === code;
        });
        if (check) {
          setLoading(false);

          setDiscount(check.value);
          setMessage(`Success with value: ${check.value}%`);
        } else {
          setLoading(false);

          setDiscount(0);

          setMessage("The code is not correct");
        }
      } else {
        setLoading(false);

        setMessage("Empty validate");
      }
    }, 2000);
  };

  return (
    <section className={cx("cart")}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={cx("shop__cart__table")}>
              <table>
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {listCart.map((item, index) => (
                    <tr key={item.index}>
                      <td className={cx("cart__product__item")}>
                        <div className={cx("cart__product__img")}>
                          <img src={item.img} alt="" />
                        </div>
                        <div className={cx("cart__product__item__title")}>
                          <h6>{item.name}</h6>
                          <div className={cx("rating")}>
                            <AiFillStar className={cx("icon__rating")} />
                            <AiFillStar className={cx("icon__rating")} />
                            <AiFillStar className={cx("icon__rating")} />
                            <AiFillStar className={cx("icon__rating")} />
                            <AiFillStar className={cx("icon__rating")} />
                          </div>
                        </div>
                      </td>
                      <td className={cx("cart__price")}>$ {item.price}.0</td>
                      <td className={cx("cart__quantity")}>
                        <div className={cx("pro__qty")}>
                          <span
                            onClick={() => handleUpdatePrev(item, index)}
                            className={cx("qtybtn")}
                          >
                            -
                          </span>
                          <input type="text" value={item.quantity} />
                          <span
                            onClick={() => handleUpdateNext(item, index)}
                            className={cx("qtybtn")}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td className={cx("cart__total")}>$ {item.total}.0</td>
                      <td className={cx("cart__close")}>
                        <span
                          onClick={() => handleDelete(index)}
                          className={cx("icon__close")}
                        >
                          x
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className={cx("cart__btn")}>
              <Link to="/shop">Continue Shopping</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={cx("discount__content")}>
              <h6>DISCOUNT CODES</h6>
              <form>
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  placeholder="Enter your coupon code"
                />
                <button
                  onClick={(e) => handleSubmitCode(e)}
                  type="submit"
                  className={cx("site__btn")}
                >
                  {loading === true ? "Loading..." : "Apply"}
                </button>
                <span className={cx("discount__msg")}>{message}</span>
              </form>
            </div>
          </Col>
          <Col lg={4} className={cx("offset__lg__2")}>
            <div className={cx("cart__total__procced")}>
              <h6>CART TOTAL</h6>
              <ul>
                <li>
                  Sub Total
                  <span>$ {handleTotal()}</span>
                </li>
                <li>
                  Discount
                  <span>{discount} %</span>
                </li>
                <li>
                  Total
                  {discount > 0 ? (
                    <span>$ {handleTotal() * ((100 - discount) / 100)}</span>
                  ) : (
                    <span>$ {handleTotal()}</span>
                  )}
                </li>
              </ul>
              <Link href="#" className={cx("primary__btn")}>
                Proceed to checkout
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;
