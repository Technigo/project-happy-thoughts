import React, { useEffect } from 'react';
// import { formatRelative } from 'date-fns';
import Button from './Button';

const ThoughtBox = ({ thoughts, loading, setLoading, fetchThoughts }) => {
  useEffect(() => {
    setLoading(true);
    fetchThoughts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {loading && (<h3>Loading...</h3>)}
      {!loading && thoughts.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div className="thought-box" key={thought._id}>
            <p>{thought.message}</p>
            <div className="thought-buttons-counters">
              <Button
                buttonText="&#10084;&#65039;"
                textColor="black"
                buttonColor="#e6e6e6"
                hoverColor="pink"
                buttonWidth="40px"
                buttonHeight="40px"
                buttonRadius="50%" />
              <p>x {thought.hearts}</p>
              {/* <p>{thought.createdAt}</p> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ThoughtBox