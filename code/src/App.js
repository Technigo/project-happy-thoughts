import React from 'react';
import { SubmittedThoughts } from 'components/SubmittedThoughts';
import { SubmitThought } from './components/SubmitThought'

export const App = () => {
  return (
    <div>
      <SubmitThought />
      <SubmittedThoughts />
    </div>
  );
}
