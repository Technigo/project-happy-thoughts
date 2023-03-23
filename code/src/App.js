import React from 'react';
import { format } from 'date-fns'
import ThoughtForm from 'components/ThoughtForm';
import ThoughtList from 'components/ThoughtList';
import Picture from './assets/cat.png';

export const App = () => {
  return (
    <div>
      {format(new Date(), 'do MMMM Y')}
      <p>What&apos;s making you happy right now?</p>
      <a href="<a href='https://pngtree.com/so/Cute'>" title="creativity stickers"> <img src={Picture} alt="noding head" className="picture" /> </a>
      <ThoughtForm />
    </div>
  );
}