import React, { useState } from 'react';
import { SendThoughtForm } from './components/SendThoughtForm';
import { ThoughtsList } from './components/ThoughtsList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './index.css';

export const App = () => {
  const [sendThought, setSendThought] = useState('');

  return (
    <div>
      <Header />
      <div className="app-wrapper">
        <div className="send-form-div">
          <SendThoughtForm sendRhought={sendThought} setSendThought={setSendThought} />
        </div>
        <ThoughtsList />
      </div>
      <Footer />
    </div>
  );
}
