import React, { useEffect, useState } from 'react'
import { formatRelative } from 'date-fns'

const ThoughtList = () => {
  const [thoughtList, setThoughtList] = useState([])

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(data => setThoughtList(data))
  }, [])
  console.log(thoughtList)
  return (
    <section>
      { thoughtList &&
        thoughtList.map(singleThought => (
          <div key={singleThought._id}>
            <h4>{singleThought.message}</h4>
            <span>Number of hearts: {singleThought.hearts}</span>
            <p>{singleThought.createdAt}</p>

          </div>
        ))

      }
    </section>
  )
}

export default ThoughtList;