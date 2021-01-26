import React, { useContext } from "react";
import ResultContext from "../../context/ResultContext";
import styles from "./Result.module.scss";

export default function Result() {
  const { result } = useContext(ResultContext);
  return (
    <div className={styles.container}>
      <h1>
        El resultado obtenido es:{" "}
        <span className={styles.result}>{result}</span>
      </h1>
    </div>
  );
}
