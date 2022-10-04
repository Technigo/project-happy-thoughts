// import React, { useEffect } from 'react';
import React from 'react';

const TaskList = ({ list }) => {
//   useEffect(() => {
//     console.log('component mounted');

  //     return (
  //       console.log('component unmounted')
  //     );
  //   }, []);

  return (
    <section>
      {list.map((singleTask) => {
        return (
          <div key={singleTask.id}>
            <p>{singleTask.description}</p>
          </div>
        )
      })}
    </section>

  )
};

export default TaskList