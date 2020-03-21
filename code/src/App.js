import React, { useState, useEffect} from 'react'
import 'app.css'
import {ToughtCard} from './components/ToughtCard'

export const App = () => {
  const [ data, setData ] = useState([])

  useEffect (() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
    .then(res => res.json())
    .then(json => setData(json))
  }, [])

  return (
    <section className="container">

      {data.map(item => {
        return (
          <ToughtCard key={item._id} id={item._id} message={item.message} hearts={item.hearts} CreatedAt={item.createdAt} />
        )
      })}

    </section>
  )
}
