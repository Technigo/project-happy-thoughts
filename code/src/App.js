import React/* , { useState, useEffect } */ from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ThoughtBox from 'components/ThoughtBox';
import ThoughtInputBox from 'components/ThoughtInputBox';
/* import Loading from 'components/Loading'; */

export const App = () => {
  return (
    <>
      {/*       <Loading /> */}
      <Header />
      <section className="main-section">
        <ThoughtInputBox />
        <ThoughtBox />
      </section>
      <Footer />
    </>
  )
}
