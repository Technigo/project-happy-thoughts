import React from 'react'

import DisplayThoughts from './components/DisplayThoughts'
import PostThoughts from './components/PostThoughts'

import './index.css';

const App = () => {
  return (
    <main className="all-thoughts">
      <h1>Happy Thoughts</h1>
      <PostThoughts />
      <DisplayThoughts />

      <footer><a href='https://www.freepik.com/photos/glitter-pattern'>Background image from www.freepik.com</a></footer>
    </main>
  );
}

export default App;