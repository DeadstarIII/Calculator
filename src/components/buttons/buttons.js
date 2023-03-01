import React from "react";
import styles from "./buttons.module.css";
function Buttons(props) {
  return (
    <>
      <button>
        <img
          src="../../assets/button-background.svg"
          alt="Button"
        />
        {props.label}
      </button>
    </>
  );
}

export default Buttons;
