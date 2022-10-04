// import { Card } from 'components/Card';
import CreateThought from 'components/CreateThought';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  console.log({ thoughtList, loading, newTodo });

  return (
    <div>
      <CreateThought />
      <section>
        {thoughtList.reverse().map((thought) => (
          <div key={thought._id}>
            <h4>{thought.message}</h4>
            <p>{thought.hearts}</p>

            {/* <p>{formatRelative(task.date, new Date())}</p> */}
          </div>
        ))}
      </section>
    </div>
  );
};
