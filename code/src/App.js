import React from 'react';

import { ThoughtsList } from './ThoughtsList';
import { SendThought } from './SendThought';

export const App = () => {
  return (
    <main className="main-container">
      <SendThought />
      <ThoughtsList />
    </main>
  );
};
