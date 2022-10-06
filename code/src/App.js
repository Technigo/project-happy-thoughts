import React from 'react';

import Overview from './components/Overview';

export const App = () => {
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <Overview />
      </section>
    </section>
  );
}