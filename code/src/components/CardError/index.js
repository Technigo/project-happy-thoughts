import React from 'react';

import Card from 'components/Styled/Card';
import Button from 'components/Styled/Button';
import { P } from 'components/Styled/Globals';

const CardError = ({ handleConfirm, ...error }) => {
  return (
    <Card.ErrorWrapper>
      <Button type="button" position="top-right" onClick={handleConfirm}>
        X
      </Button>
      <Card.Title>{error.title}</Card.Title>
      {error.message.map((m) => (
        <P key={m}>{m}</P>
      ))}
    </Card.ErrorWrapper>
  );
};

export default CardError;
