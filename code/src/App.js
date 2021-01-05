import React from 'react';

import { ThoughtsList } from 'components/ThoughtsList';
import { Postthoughts } from 'components/Postthoughts';
import { Footer } from 'components/Footer';

export const App = () => {

  return (
    <>
      <Postthoughts />
      <ThoughtsList />
      <Footer />
    </>
  );
};
