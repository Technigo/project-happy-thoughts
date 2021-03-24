import React, {useEffect} from 'react'
import moment from 'moment'

import { API_URL, LIKE_API } from '../reusables/urls'

export const Messages = ({ messageList, setMessageList }) => {

    useEffect(() => {
        fetchList()
      }, []);

//fetch for list of messages    

      const fetchList = () => {
          fetch(API_URL)
            .then(res => res.json())
            .then(messages => setMessageList(messages))
            .catch(error => console.error(error))
        }

//fetch for increasing likes

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      const increaseLikes = (id) => {

        fetch(LIKE_API(id), options)
        .then(res => res.json())
        .then(newLike => {
          const updatedMessageList = messageList.map(message => {
            if (message._id === newLike._id) {
              message.hearts += 1;
            }
            return message
            }) 
            setMessageList(updatedMessageList)
        })
        .catch(error => console.error(error))
      }



    return (
        <div className='messageContainer'>
        {messageList.map(message => (
            <div 
              key={message._id}
              className='messageContent'>
              <h4 className='messageText'>
                {message.message}
              </h4>
              <div className='heartAndTime'>
                <div className='heartThings'>
                  <button
                    className='heartButton'
                    onClick={() => increaseLikes(message._id)}>
                    <span className='heart' role='img' aria-label='heart emoji'>
                      &#128151;
                    </span>
                  </button>
                  <p className='nrOfLikes'>
                    x {message.hearts}
                  </p>
                </div>
                <p className='time'>
                  {moment(message.createdAt).fromNow()}
                </p>
              </div>
            </div>
          ))}
        </div>
    )
}