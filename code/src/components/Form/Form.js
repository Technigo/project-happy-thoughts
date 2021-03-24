import React from 'react';

import Button from 'components/Button/Button';
import Card from 'components/Styled/Card'
import { TextArea } from 'components/Styled/Globals'

const Form = () => {
  return (
    <Card as="form">
      <Card.Title as="label" htmlFor="happyThought">
        What is making you happy right now?
        <TextArea id="happyThought" rows="5" cols="45" />
      </Card.Title>
      <Button isSubmit />
    </Card>
  );
};

export default Form;
