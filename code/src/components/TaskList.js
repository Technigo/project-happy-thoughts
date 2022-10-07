// import React, { useEffect } from 'react';
import React from 'react';
import SingleTask from './SingleTask';

const TaskList = ({ list }) => {
//   useEffect(() => {
//     console.log('component did mount');
//     return (
//       console.log('component unmounted')
//     );
//   }, []);

  return (
    <section>
      {list.map((singleTask) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div key={singleTask._id}>
            <SingleTask description={singleTask.description} checked={singleTask.isChecked} />
          </div>
        )
      })}
    </section>
  );
}

export default TaskList