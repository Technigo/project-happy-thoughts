/* import React, { useEffetc } from 'react'; */
import React from 'react';

const TaskList = ({ list }) => {
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
}

export default TaskList