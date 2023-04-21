import React from 'react';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Comments } from '../Comments/Comments';
import { Section } from '../Section/Section';
// import styles from "./Layout.module.css";

export const App = () => {
  return (
    <div className={"styles.layout"}>
      <Header />
      <main className={"styles.main"}>
        <Section>
          <Comments/>
        </Section>
      </main>
      <Footer />
    </div>
  );
};
