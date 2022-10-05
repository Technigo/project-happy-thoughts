import React from 'react';

const TaskList = ({ list }) => {
  return (
    <section>
      {list.map((singleTask) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div key={singleTask._id}>
            <p>{singleTask.description}</p>
          </div>
        )
      })}
    </section>
  );
}

export default TaskList