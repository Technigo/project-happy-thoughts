import React, { useEffect } from 'react';

const ThoughtList = ({ thoughtList, setThoughtList }) => {
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'))
  }, []);
  return (
    <section>
      {thoughtList.map((singleTask) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div key={singleTask._id}>
            <p>{singleTask.message}</p>
          </div>
        )
      })}
    </section>
  )
}
export default ThoughtList