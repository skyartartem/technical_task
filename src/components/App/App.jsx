import React from 'react';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Users } from '../Users/Users';
import { Section } from '../Section/Section';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Users />
        </Section>
      </main>
      <Footer />
    </>
  );
};
