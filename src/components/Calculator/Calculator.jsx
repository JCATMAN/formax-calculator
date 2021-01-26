import React from "react";
import useCalculate from "./useCalculate";
import Button from "../UI/Button/Button";
import Display from "../Display/Display";
import styles from "./Calculator.module.scss";

export default function Calculator() {
  const { result, pressedButton, pressedAction, equalsView } = useCalculate();

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <Display value={result} />
      </div>
      <div className={styles.actions}>
        {["+", "-", "*", "/", "CE", "C"].map((action) => (
          <Button onClick={pressedAction(action)}>{action}</Button>
        ))}
      </div>
      <div className={styles.pad}>
        <div className={styles.buttonsContainer}>
          {Array.from(Array(9).keys()).map((number) => (
            <Button number onClick={pressedButton(number + 1)}>
              {number + 1}
            </Button>
          ))}
        </div>
        <div className={styles.bigButton}>
          <Button big number onClick={pressedButton(0)}>
            0
          </Button>
          <Button onClick={equalsView}>=</Button>
        </div>
      </div>
    </div>
  );
}
