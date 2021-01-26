import React from "react";
import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      {...props}
      className={
        props.big
          ? props.number
            ? styles.buttonBigNumber
            : styles.buttonBig
          : props.number
          ? styles.buttonNumber
          : styles.button
      }
    >
      {props.children}
    </button>
  );
}
