import React, { useEffect, useState }  from 'react'

import CreateThought from 'components/CreateThought'
import ShowThoughtList from 'components/ShowThoughtList'

export const App = () => {

  const [thoughtList, setThoughtList] = useState([])

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(data => setThoughtList(data))
  }, [])

  return (
    <div>
      <CreateThought setThoughts={setThoughtList} />
      <ShowThoughtList thoughtList={thoughtList}/>
    </div>
  )
}
