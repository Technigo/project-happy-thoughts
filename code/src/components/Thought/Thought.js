import React from 'react';
import moment from 'moment';

import Button from 'components/Styled/Button';
import Card from 'components/Styled/Card';

const Thought = ({ message, hearts, createdAt, _id, handlePostLikes }) => {
  const onClickLike = () => {
    handlePostLikes(_id);
  }
  return (
    <>
      <Card>
        <Card.Title>{message}</Card.Title>
        <Button type="button" faded={hearts <= 0} onClick={onClickLike}>
          <Button.Emoji role="img" aria-label="heart">
            ❤️
          </Button.Emoji>
        </Button>
        <Card.FooterText faded aria-label="Amount of likes">
          x {hearts}
        </Card.FooterText>
        <Card.FooterText faded alignLeft>
          {moment(createdAt).fromNow()}
        </Card.FooterText>
      </Card>
    </>
  );
};

export default Thought;
