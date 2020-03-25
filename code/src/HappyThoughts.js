import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'


export const HappyThoughts = () => {

  const [thoughts, setThoughts] = useState([])
  const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'


  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json();
      })
      .then(json => {
        const filteredJson = json.filter(thought => {
          return thought.message;
        })
        setThoughts(json)
      });
  }, [])

  return (
    <div>
      {thoughts.map(json => (
        <p className="thoughtsCard" key={json._id}>
          <div className="thought">{json.message}</div>
          <span className="heartSection">
            <LikeButton /> {moment(json.createdAt).fromNow()} </span></p>
      ))
      }
    </div >
  )
}


