import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header({ children }) {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Formax Calculator</h1>
        <div className={styles.navigation}>
          <button
            className={styles.btnRedirect}
            onClick={() => history.push("/calculator")}
          >
            CALCULATOR
          </button>
          <button
            className={styles.btnRedirect}
            onClick={() => history.push("/css-grid")}
          >
            CSS-GRID
          </button>
          <button
            className={styles.btnRedirect}
            onClick={() => history.push("/css-flex")}
          >
            CSS-FLEXBOX
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
