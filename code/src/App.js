import React from 'react';
import { ThoughtsPage } from 'components/ThoughtsPage';

export const App = () => {
  return (
    <div className="app">
      <ThoughtsPage />
      <footer>
        <p>Frontend & backend created by</p>
        <p>
          © <a href="mailto: saralie.bognandi@gmail.com">Saralie Bognandi</a>{' '}
          2022
        </p>
      </footer>
    </div>
  );
};
