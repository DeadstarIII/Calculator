import styles from "./calculator.module.css";
import Buttons from "../buttons/buttons";
import React, { useState } from "react";

function Calculator() {
  return (
    <div className={styles.calculatorDiv}>
      <h3 className={styles.calculatorHeading}>Calculator™</h3>
      <div className={styles.Buttons}>
        {" "}
        <div className="button-row">
          <Buttons label={"Clear"} />
          <Buttons label={"Delete"} />
          <Buttons label={"."} />
          <Buttons label={"/"} />
        </div>
        <div className="button-row">
          <Buttons label={"7"} />
          <Buttons label={"8"} />
          <Buttons label={"9"} />
          <Buttons label={"*"} />
        </div>
        <div className="button-row">
          <Buttons label={"4"} />
          <Buttons label={"5"} />
          <Buttons label={"6"} />
          <Buttons label={"-"} />
        </div>
        <div className="button-row">
          <Buttons label={"1"} />
          <Buttons label={"2"} />
          <Buttons label={"3"} />
          <Buttons label={"+"} />
        </div>
        <div className="button-row">
          <Buttons label={"0"} />
          <Buttons label={"="} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
