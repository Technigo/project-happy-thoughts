import React from 'react';
import Background from 'components/Background.js';
import Header from 'components/Header.js';
import Feed from 'components/Feed.js';
import Footer from 'components/Footer.js';

export const App = () => {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Feed />
      </main>
      <Footer />
    </>
  )
};
