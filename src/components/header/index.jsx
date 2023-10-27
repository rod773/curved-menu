"use client";
import { useState } from "react";
import styles from "./style.module.scss";

const Index = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
        console.log(isActive);
      }}
      className={styles.button}
    >
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
      ></div>
    </div>
  );
};

export default Index;
