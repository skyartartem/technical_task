import classNames from 'classnames';
import React from 'react';
import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.headerContainer)}>
      <Logo/>
        <p className={styles.logo}>Tweets</p>
      </div>
    </header>
  );
};
