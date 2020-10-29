import React from 'react';

import Header from './components/Header';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Thoughts />
      <Footer />
    </div>
  )
}
