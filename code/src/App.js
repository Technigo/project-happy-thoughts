import React from 'react';

import { ThoughtsList } from 'Components/ThoughtsList';
import { Postthoughts } from 'Components/Postthoughts';
import { Footer } from 'Components/Footer';

export const App = () => {

  return (
    <>
      <Postthoughts />
      <ThoughtsList />
      <Footer />
    </>
  );
};
