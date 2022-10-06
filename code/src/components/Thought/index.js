import { Card } from 'components/Card';
import React from 'react';

const Thought = (props) => {
  return (
    <Card key={props.thought._id} type="card2">
      <div>
        <h4>{props.thought.message}</h4>
        <p>{props.thought.hearts}</p>
      </div>
    </Card>
  );
};

export default Thought;
