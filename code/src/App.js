import React, { useState } from 'react'
import DisplayThoughts from './components/DisplayThoughts'
import PostThoughts from './components/PostThoughts'

import './index.css';

const App = () => {
  return (
    <section className="all-thoughts">
      <PostThoughts />
      <DisplayThoughts />
    </section>
  );
}

export default App;