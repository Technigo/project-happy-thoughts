import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./app.css"
import { MessageText } from "./MessageText"
import { MessagePost } from "./MessagePost"
import { LikeButton } from "./LikeButton"
import { TimePosted } from "./TimePosted"
import { Loader } from "./Loader"


export const App = () => {
  const [messages, setMessages] = useState([])
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('default')
  const [theme, setTheme] = useState()
  const [dataLength, setDataLength] = useState(1)
  const [newThought, setNewThought] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [sendingThought, setSendingThought] = useState(false)
  const forwardButton = <FontAwesomeIcon icon={faChevronRight} />
  const backButton = <FontAwesomeIcon icon={faChevronLeft} />
  useEffect(() => {
    fetch(`https://williamjensen-happythoughts.herokuapp.com?order=${order}&page=${page}&theme=${theme}`)
      .then(res => res.json())
      .then(data => {
        setMessages(data.thoughts)
        setDataLength(data.length)
        setIsLoading(false)
      })
  }, [page, order, theme])

  const handleQueryChange = (val, query) => {
    if (query === "order") {
      setOrder(val)
      setPage(1)
    } else if (query === "page") {
      setPage(page + val)
    }

    window.scrollTo(0, 0)
  }



  return (

    <div className="flex-container">
      {isLoading && <Loader />}
      <MessagePost newThought={newThought} setNewThought={setNewThought}
        setSendingThought={setSendingThought} sendingThought={sendingThought}
        messages={messages} setMessages={setMessages} setDataLength={setDataLength} />


      {messages &&
        messages.map((message) => {
          return <div key={message._id} className="thoughts-container">
            <MessageText text={message.message} user={message.postedBy} />
            <article className="likes-and-time">
              <LikeButton {...message} id={message._id} hearts={message.hearts} setTheme={setTheme} setPage={setPage}
                setOrder={setOrder} />

              <TimePosted createdAt={message.createdAt} />
            </article>
          </div>
        })

      }
      <div className="nav-buttons-container">
        <button className="nav-buttons" disabled={page === 1} onClick={() => handleQueryChange(- 1, "page")}>{backButton}</button>
        <p>Showing page {page} of {dataLength}</p>
        <button className="nav-buttons" disabled={page === dataLength} onClick={() => handleQueryChange(+ 1, "page")}>{forwardButton}</button>
      </div>
      <select onChange={(e) => handleQueryChange(e.target.value, 'order')}>
        <option value="">Show by</option>
        <option value="">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostliked">Most liked</option>
      </select>
    </div>
  )
}
