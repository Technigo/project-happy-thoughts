import React from 'react';

import { Happythoughts } from 'Components/Happythoughts';
import { Postthoughts } from 'Components/Postthoughts';

export const App = () => {
  return (
    <>
      <Postthoughts />
      <Happythoughts />
    </>
  );
};
