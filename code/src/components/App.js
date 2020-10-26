import React from 'react';
import { HappyForm } from './HappyForm';
import { HappyThoughts } from './HappyThoughts';

export const App = () => {
  return (
    <main className="main-wrapper">
      <HappyForm />
      <HappyThoughts />
    </main>
  );
};
