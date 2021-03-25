import React, { useState, useRef } from 'react';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';
import TextArea from 'components/TextArea';

import { URL, options } from 'helpers/reusables';

const Form = ({ fetchThoughts }) => {
  const [newThought, setNewThought] = useState('');

  const textArea = useRef();

  const onSubmission = (event) => {
    event.preventDefault();
    fetch(URL, options(newThought))
      .then((res) => {
        if (!res.ok) throw res;
        res.json();
        fetchThoughts();
      })
      .catch((err) => {
        err.json().then((errMessage) => {
          textArea.current.handleNewError({
            title: errMessage.message,
            message: errMessage.errors.message.message
          });
        });
      });
    // clean the form
    setNewThought('');
    textArea.current.resetField();
  };

  return (
    <Card as="form" onSubmit={onSubmission}>
      <Card.Title as="label" htmlFor="happyThought">
        What is making you happy right now?
        <TextArea
          ref={textArea}
          handleNewThought={(value) => setNewThought(value)}
          fieldValue={newThought} />
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
