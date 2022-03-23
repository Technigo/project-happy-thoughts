import React, { useState } from 'react'
import DisplayThoughts from './components/DisplayThoughts'
import PostThoughts from './components/PostThoughts'

import './index.css';

const App = () => {
  return (
    <main className="all-thoughts">
      <PostThoughts />
      <DisplayThoughts />
    </main>
  );
}

export default App;