import React from "react";
import styles from "./Grid.module.css";

export const Grid = ({ children }) => {
  return <ul className={styles.grids}>{children}</ul>;
};
