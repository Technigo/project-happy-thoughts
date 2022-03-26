import React from 'react'

import ThoughtsForm from 'components/ThoughtsForm';
import Button from 'components/Button';
import Thoughts from 'components/Thoughts';

export const App = () => {
  return (
    <div>
      <ThoughtsForm />
      <Button />
      <Thoughts />
    </div>
  )
}
