import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Index = ({ data }) => {
  return (
    <div className={styles.link}>
      <Link>{data.title}</Link>
    </div>
  );
};

export default Index;
