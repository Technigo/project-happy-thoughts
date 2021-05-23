import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'

import { API_URL, LIKES_URL } from './reusable/urls'
import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import Loading from './components/Loading'
import Pagination from './components/Pagination'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [username, setUsername] = useState('')
  const [page, setPage] = useState(1)
  const [perPage] = useState(5)
  const [isLoading, setIsLoading] = useState(true)
  // States that changes color & text in the form when submitted
  const [formAnimation, setformAnimation] = useState(localStorage.getItem('red-color') === 'true')
  const [buttonText, setButtonText] = useState('Send Happy Tought')

  //States that count likes and storage it 
  const likeCount =() => JSON.parse(localStorage.getItem('countList') || "[]")
  const [countedList, setCountedList] = useState(likeCount)

  useEffect(() => {
    fetchMessageList()
    localStorage.setItem('red-color', formAnimation)

    setTimeout (() => {
      setformAnimation(false)
    }, 2000)

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)

  }, [formAnimation, page, perPage]) 

  const fetchMessageList = () => {
    fetch (API_URL(page, perPage))
      .then(res => res.json ())
      .then(messages => {
        setMessageList(messages.data)
        if (!countedList.length) {
          const countList = messages.data.map(item => {
            const countItem = {
              id: item._id,
              count: 0  
            }
            return countItem
          })
          setCountedList(countList)
          localStorage.setItem('countList', JSON.stringify(countList))
        } else {
          const countList = messages.data.map((item) => {
          const existingElement = countedList.find(countItem => countItem.id === item._id);
            if (existingElement) {
              return existingElement;
            } else {
              const countItem = {
                id: item._id,
                count: 0  
              }
              return countItem 
            }
          })
          setCountedList(countList)
          localStorage.setItem('countList', JSON.stringify(countList))
        }
      })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({ message: messageNew,  username: username  })
    }
    fetch (API_URL (page, perPage), options) 
      .then(res => {
        if (res.status === 200) { 
          return res.json()
        } else {
          throw new Error 
            ('Something went wrong! 🤯 Please enter more than 5 characters and try again.')
        }
      })
      .then(receivedMessage => {
        //finding id from the new message thats posts in the list and shows the message list
        //from this id the animation on the latest message can appear.
        const id = receivedMessage._id;
        const updatedList = [receivedMessage, ...messageList]
        updatedList.find(el => el._id === id).animate = true;
        setMessageList(updatedList)
        updatedList.find(el => el._id === id).animate = false;
        setMessageList(updatedList)
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-left"
        })
      })
      setMessageNew('')
      setUsername('')
    }  

    const handleLikesIncrease = (id) => {
      const options = {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json'
        }
      }
    fetch(LIKES_URL(id), options)
    .then(res => res.json())
    .then(receivedMessage => {
      //Increasing hearts when user likes a message with map and returning the new value
      const updatedMessageList = messageList.map(message => {
        if (message._id === receivedMessage.data._id) {
            message.hearts += 1
        }
        return message
      })
      const updatedCountedList = countedList.map(count => {
        if (count.id === receivedMessage.data._id) {
          count.count += 1
        }
        return count
      })
      setMessageList(updatedMessageList)
      setCountedList(updatedCountedList);
      localStorage.setItem('countList', JSON.stringify(updatedCountedList))
      })
    .catch (err => console.error(err))
  }

  // If user adds more than 140 characters, the input box gets red. I add the validation here and send it trough props 
  const handleMessageNewChange = (event) => {
    const count = event.target.value
    const characterCount = count.length 
    if (characterCount <= 140) {
      setMessageNew(count)
    } else if (characterCount > 140) {
      return setMessageNew(messageNew)
    } 
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  //Adding animation on the form when user submits message 
  const handleAnimation = () => {
    if (formAnimation === false && messageNew.length > 5) {
      setformAnimation(!formAnimation)
      setButtonText('Send A New One')
    } 
    if (formAnimation === false && messageNew.length > 5) {
      setButtonText('Send A New One')
    } 
  }

  return (
    <main>
      <div className="wrapper">
        <ToastContainer />     
        <MessageForm 
          onFormSubmit={handleFormSubmit} 
          messageNew={messageNew} 
          username = {username}
          handleUsernameChange = {handleUsernameChange}
          onMessageNewChange = {handleMessageNewChange}
          onAnimationChange = {handleAnimation}
          formAnimation = {formAnimation}
          buttonText={buttonText}
        />
        {isLoading === true ? 
          <Loading/> : 
          <>
            <Pagination 
              page={page}
              setPage={setPage}
              messageList ={messageList} 
            />
            <MessageList 
              messageList ={messageList} 
              handleLikesIncrease = {handleLikesIncrease}
              count = {countedList}
            />
          </>
        }
      </div> 
    </main>
  )
}