import React from "react";
import styles from "./style.module.scss";
import Link from "./Link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Home = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            {navItems.map((item, index) => {
              return <Link key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
