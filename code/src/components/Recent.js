import React from 'react'

const Recent = ({ loading, thoughts }) => {

  if (loading) {
      return <h1>Loading in progress..</h1>
  }

  return (
      <section className='thoughts-box'>
          {thoughts.map(item => (
              <div key={item.id}> 
              <p>{item.message}</p>
              <p>{item.createdAt}</p>
              </div>
          ))}
          </section>
  )
}

export default Recent