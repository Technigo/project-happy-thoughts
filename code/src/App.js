import React from 'react';
import Header from 'components/Header';
import PostAThought from 'components/PostAThought';
import Footer from 'components/Footer';
import RecentThoughtsList from './components/RecentThoughtsList';

export const App = () => {
  return (
    <>
      <Header />
      <PostAThought />
      <RecentThoughtsList />
      <Footer />
    </>
  );
};
