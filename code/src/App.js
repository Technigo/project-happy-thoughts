import React from 'react';
import { Thoughts } from './components/Thoughts';

export const App = () => {
  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  return (
    <div className="app-container">
      <div className="thought-container">
        <Thoughts API_URL={API_URL} />
      </div>
    </div>
  );
}
