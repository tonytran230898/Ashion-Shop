import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeadphones, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./ContactItem.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";

const cx = classNames.bind(styles);

function ContactItem() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 chacraters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
          "Please enter a valid email"
        ),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      window.alert("form submitted");
      console.log(values);
    },
  });

  return (
    <Container>
      <Row>
        <Col lg={6} md={6}>
          <div className={cx("contact__content")}>
            <div className={cx("contact__address")}>
              <h5>CONTACT INFO</h5>
              <ul>
                <li>
                  <h6>
                    <FaMapMarkerAlt className={cx("contact__icon")} /> Address
                  </h6>
                  <p>
                    160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                  </p>
                </li>
                <li>
                  <h6>
                    <FaPhoneAlt className={cx("contact__icon")} /> Phone
                  </h6>
                  <span>125-711-811 &nbsp; | &nbsp; 125-668-886</span>
                </li>
                <li>
                  <h6>
                    <FaHeadphones className={cx("contact__icon")} /> Support
                  </h6>
                  <p>Support.photography@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className={cx("contact__form")}>
              <h5>SEND MESSAGE</h5>
              <form onSubmit={formik.handleSubmit}>
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Name"
                />
                {formik.errors.name && (
                  <p className={cx("error__message")}>{formik.errors.name}</p>
                )}
                <input
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Email"
                />
                {formik.errors.email && (
                  <p className={cx("error__message")}>{formik.errors.email}</p>
                )}
                <input
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Phone numbers"
                />
                {formik.errors.phone && (
                  <p className={cx("error__message")}>{formik.errors.phone}</p>
                )}
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  placeholder="Message"
                ></textarea>
                <button type="submit" className={cx("site-btn")}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6}>
          <div className={cx("contact__map")}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3105.5178060192366!2d-77.05440318011213!3d38.88927269926934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s160%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20Castle%2C%20PA%2016101-5161!5e0!3m2!1sen!2s!4v1675668279611!5m2!1sen!2s"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactItem;
