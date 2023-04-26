import React from 'react';
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.content}>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-900">SkyArt</span>, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
