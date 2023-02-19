import React from "react";
import styles from "./buttons.module.css";
function Buttons(props) {
  return (
    <button
      className={styles.button}
      type="button"
      >{props.label}</button>
  );
}

export default Buttons;
