import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'

import { API_URL, LIKES_URL } from './reusable/urls'
import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import Loading from './components/Loading'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  //States that changes color & text in the form when submitted
  const [formAnimation, setformAnimation] = useState(localStorage.getItem('red-color') === 'true')
  const [buttonText, setButtonText] = useState('Send Happy Tought')

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
    }, 1500)

  }, [formAnimation]) 

  //fetching MessageList 
  const fetchMessageList = () => {
    fetch (API_URL)
      .then(res => res.json ())
      .then(messages => {
        setMessageList(messages)
        if (!countedList.length) {
          const countList = messages.map(item => {
            const countItem = {
              id: item._id,
              count: 0  
            }
            return countItem
          })
          setCountedList(countList)
          localStorage.setItem('countList', JSON.stringify(countList))
        } else {
          const countList = messages.map((item) => {
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
      .catch(err => console.error(err))
  }

  //posting new mesagge to the API, fetching the new message 
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({ message: messageNew })
    }
    fetch (API_URL, options) 
      .then(res => {
        if (res.status === 201) { //Catching the error with status: 201 
          return res.json()
        } else {
          throw new Error 
            ('Something went wrong! 🤯 Please enter more than 5 characters and try again.')
        }
      })
      .then(receivedMessage => {
        //finding id from the new mesagge thats posts in the list and shows the message list
        //from this id the animation on the latest message can appear.
        const id = receivedMessage._id;
        const updatedList = [receivedMessage, ...messageList]
        updatedList.find(el => el._id === id).animate = true;
        setMessageList(updatedList)
        updatedList.find(el => el._id === id).animate = false;
        setMessageList(updatedList)
      })
      .catch((err) => {
         //adds notification snackbar, makes it look better than an regular alert message
        toast.error(err.message, {
          position: "top-left"
        })
      })
      setMessageNew('') //clearing the form after user submits their message 
    }  

  //fetching likes from api and adding a counter to show the amount of likes
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
          if (message._id === receivedMessage._id) {
              message.hearts += 1
          }
          return message
        })
        const updatedCountedList = countedList.map(count => {
          if (count.id === receivedMessage._id) {
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

  //if user adds more than 140 characters, the input box gets red. I add the validation here and send it trough props 
  const HandleMessageNewChange = (event) => {
    const count = event.target.value
    const characterCount = count.length 
    if (characterCount <= 140) {
      setMessageNew(count)
    } else if (characterCount > 140) {
      return setMessageNew(messageNew)
    } 
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
          onMessageNewChange = {HandleMessageNewChange}
          onAnimationChange = {handleAnimation}
          formAnimation = {formAnimation}
          buttonText={buttonText}
        />
        {isLoading === true ? 
          <Loading/> : 
          <MessageList 
            messageList ={messageList} 
            handleLikesIncrease = {handleLikesIncrease}
            count = {countedList}
          />
        }
      </div> 
    </main>
  )
}