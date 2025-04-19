import React, { FC } from "react";
import styles from "./Burger.module.scss";
import clsx from "clsx";

export const Burger: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.line, isOpen && styles.line1Open)} />
      <div className={clsx(styles.line, isOpen && styles.line2Open)} />
      <div className={clsx(styles.line, isOpen && styles.line3Open)} />
    </div>
  );
};
