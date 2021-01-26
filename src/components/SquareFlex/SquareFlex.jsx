import React from "react";
import styles from "./SquareFlex.module.scss";

export default function SquareGrid() {
  const rangeArray = (start, end) =>
    Array(end - start + 1)
      .fill()
      .map((_, index) => start + index);

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {rangeArray(0, 4).map((number) => (
          <div className={styles.number}>{number}</div>
        ))}
      </div>
      <div className={styles.column}>
        {rangeArray(5, 9).map((number) => (
          <div className={styles.number}>{number}</div>
        ))}
      </div>
      <div className={styles.column}>
        {rangeArray(10, 14).map((number) => (
          <div className={styles.number}>{number}</div>
        ))}
      </div>
      <div className={styles.column}>
        {rangeArray(15, 19).map((number) => (
          <div className={styles.number}>{number}</div>
        ))}
      </div>
      <div className={styles.column}>
        {rangeArray(20, 24).map((number) => (
          <div className={styles.number}>{number}</div>
        ))}
      </div>
    </div>
  );
}
