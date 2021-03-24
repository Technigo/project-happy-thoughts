import React from 'react';
import moment from 'moment';

import Button from 'components/Button/Button';
import Card from 'components/Styled/Card';

const Thought = ({ message, hearts, createdAt }) => {
  return (
    <>
      <Card>
        <Card.Title>{message}</Card.Title>
        <Button isSubmit={false} />
        <Card.FooterText faded aria-label="Amount of likes">
          x {hearts}
        </Card.FooterText>
        <Card.FooterText faded alignLeft>{moment(createdAt).fromNow()}</Card.FooterText>
      </Card>
    </>
  );
};

export default Thought;
