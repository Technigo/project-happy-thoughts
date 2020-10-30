import React from 'react';

import { ThoughtsList } from "components/ThoughtsList";
import { Footer } from "components/Footer";

export const App = () => {
  
  return (
    <main className="happy-thoughts-container">
      <ThoughtsList />
      <Footer />
    </main>
  );
};