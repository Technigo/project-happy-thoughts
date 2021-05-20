import React from 'react';

import { SubmitButton, Heart } from './Styling';

export const FormButton = () => {
  return (
    <SubmitButton type='submit'>
      <Heart><span role='img' aria-label='heart'>❤️</span></Heart> 
      Send Happy Thought 
      <Heart><span role='img' aria-label='heart'>❤️</span></Heart> 
    </SubmitButton>
  )
};