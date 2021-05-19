import React, { useState, useRef } from 'react';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';
import Radio from 'components/Styled/Radio';
import InputText from 'components/Styled/InputText';
import TextArea from 'components/TextArea';

import { URL, options } from 'helpers/reusables';

const categories = ['Happy', 'Food', 'Home', 'Project'];

const Form = ({ fetchThoughts }) => {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Happy');
  const [name, setName] = useState('Anonymous');

  const textArea = useRef();

  const onSubmission = (event) => {
    event.preventDefault();
    fetch(URL, options({ message, category, name }))
      .then((res) => {
        if (!res.ok) throw res;
        res.json();
        fetchThoughts();
      })
      .catch((err) => {
        err.json().then((errMessage) => {
          textArea.current.handleNewError({
            title: errMessage.type,
            message: errMessage.message
          });
        });
      });
    // clean the form
    setMessage('');
    textArea.current.resetField();
  };

  return (
    <Card as="form" onSubmit={onSubmission}>
      <Card.Title as="label" htmlFor="happyThought">
        What is making you happy right now?
        <TextArea
          ref={textArea}
          handleMessage={(value) => setMessage(value)}
          fieldValue={message} />
        <InputText htmlFor="name">
          Username:
          <InputText.Field
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </InputText>
      </Card.Title>
      <Card.Actions>
        {categories.map((cat) => (
          <Radio key={cat}>
            <Radio.Input
              type="radio"
              checked={category === cat}
              name="categoriesThought"
              id={cat}
              value={cat}
              onChange={(e) => setCategory(e.target.value)} />
            <Radio.Label htmlFor={cat}>{cat}</Radio.Label>
          </Radio>
        ))}
      </Card.Actions>
      <Card.Footer>
        <Button type="submit">
          <Button.Emoji role="img" aria-label="heart">
            ❤️
          </Button.Emoji>
          <Button.Text>Send Happy Thoughts</Button.Text>
          <Button.Emoji role="img" aria-label="heart">
            ❤️
          </Button.Emoji>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Form;
