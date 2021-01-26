import React from "react";
import styles from "./SquareGrid.module.scss";

export default function SquareGrid() {
  return (
    <div className={styles.container}>
      {Array.from(Array(25).keys()).map((number) => (
        <div className={styles.number}>{number}</div>
      ))}
    </div>
  );
}
