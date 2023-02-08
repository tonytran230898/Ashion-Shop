import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import ContactItem from "./components/ContactItem";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact")}>
      <ContactItem />
    </div>
  );
}

export default Contact;
