import React, { useState } from 'react';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';
import { TextArea } from 'components/Styled/Globals';

const Form = ({ handlePostNewThought }) => {
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(0);

  const onSubmission = (event) => {
    event.preventDefault();
    handlePostNewThought(newThought);
  };

  const onInputChange = (event) => {
    const textVal = event.target.value;
    setNewThought(textVal);
    setCharCount(textVal.length);
  };

  return (
    <Card as="form" onSubmit={onSubmission}>
      <Card.Title as="label" htmlFor="happyThought">
        What is making you happy right now?
        <TextArea id="happyThought" rows="5" cols="45" onChange={onInputChange} maxLength="140" />
        <TextArea.Counter faded>
          {charCount} / 140
        </TextArea.Counter>
      </Card.Title>
      <Button type="submit">
        <Button.Emoji role="img" aria-label="heart">
          ❤️
        </Button.Emoji>
        <Button.Text>Send Happy Thoughts</Button.Text>
        <Button.Emoji role="img" aria-label="heart">
          ❤️
        </Button.Emoji>
      </Button>
    </Card>
  );
};

export default Form;
