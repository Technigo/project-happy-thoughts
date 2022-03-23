import React, { useState, useEffect } from "react"

const FetchThoughts = () => {
  const [postedThougts, setpostedThougts] = useState([])
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((response) => response.json())
      .then((json) => setpostedThougts(json))
  }, [])

  const test = () => {
    console.log('test')
  }

  return (
    <>
      {postedThougts.map((data) => (
        <div className="thoughts" key={data._id}>
          <p>{data.message}</p>
          <div className="likes">
            <button className="heartbutton" onClick={test}>❤️</button>
            x {data.hearts}
            <div className="date">
              <p>{data.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
      <p>testar 123</p>
    </>
  )
}

export default FetchThoughts
