import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Display({ value, ...props }) {
  return (
    <div className={styles.centerContainer}>
      <input value={value} {...props} className={styles.display} readOnly />
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.number,
};
