import React from 'react';
import { SendThought } from 'components/SendThought/SendThought';

export const App = () => {
  return (
    <div className="outer-wrapper">
      <section className="thoughts-wrapper">
        <SendThought />
      </section>
    </div>
  );
};
