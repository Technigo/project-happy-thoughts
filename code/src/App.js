import React from 'react';
import { ThoughtsPage } from 'components/ThoughtsPage';

export const App = () => {
  return (
    <div className="app">
      <ThoughtsPage />
      <footer>
        <p>Created as a project at Technigo</p>
        <p>
          © <a href="mailto: mia_dahlgren@outlook.com">Saralie Bognandi</a> 2022
        </p>
      </footer>
    </div>
  );
};
