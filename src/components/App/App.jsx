import React from 'react';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Users } from '../Users/Users';
import { Section } from '../Section/Section';
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Section>
          <Users />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

