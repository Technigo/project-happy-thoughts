import React from 'react';

import { ThoughtsList } from 'Components/ThoughtsList';
import { Postthoughts } from 'Components/Postthoughts';

export const App = () => {
    
  return (
    <>
      <Postthoughts />
      <ThoughtsList />
    </>
  );
};
