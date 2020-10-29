import React from 'react';

import { ThoughtsList } from "components/ThoughtsList";
import { ThoughtForm } from 'components/ThoughtForm';

export const App = () => {
  return (
    <>
      <ThoughtForm />
      <ThoughtsList />
    </>
  )
}
