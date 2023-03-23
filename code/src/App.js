/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Feed } from 'Feed';
// import { Header } from 'Header';

export const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="feed-wrapper">
        <Feed />
      </div>
    </div>
  );
}