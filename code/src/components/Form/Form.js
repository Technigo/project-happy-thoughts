import React, { useState } from 'react';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';
import { TextArea } from 'components/Styled/Globals';

import { URL, options } from 'helpers/reusables';

const Form = ({ fetchThoughts }) => {
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(0);

  const onSubmission = (event) => {
    event.preventDefault();
    fetch(URL, options(newThought))
      .then((res) => {
        res.json();
        fetchThoughts();
      })
      .catch((err) => console.log(err));
    // clean the form
    setNewThought('');
    setCharCount(0);
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
        <TextArea
          id="happyThought"
          value={newThought}
          rows="5"
          cols="45"
          onChange={onInputChange}
          required
          minLength="5"
          maxLength="140" />
        <TextArea.Counter faded>{charCount} / 140</TextArea.Counter>
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
