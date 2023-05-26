import React from 'react';
import { SingleThought } from './SingleThought';

export const HappyList = ({ loading, happyList }) => {
  if (loading) {
    return <h1 className="loading">Happy thoughts coming soon</h1>;
  }

  if (!happyList || !Array.isArray(happyList)) {
    return <p>No happy thoughts available.</p>;
  }
  console.log(typeof happyList)
  return (
    <div>
      <section className="thoughts-container">
        {happyList.map((thought) => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id} className="thoughts">
            <SingleThought thought={thought} />
          </div>
        ))}
      </section>
    </div>
  );
};

