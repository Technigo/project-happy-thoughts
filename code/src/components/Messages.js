import React, {useEffect} from 'react'
import moment from 'moment'

import { API_URL/* , LIKE_API  */} from '../reusables/urls'

export const Messages = ({ messageList, setMessageList/* , likes, setLikes */ }) => {

    useEffect(() => {
        fetchList()
      }, []);
    
      const fetchList = () => {
          fetch(API_URL)
            .then(res => res.json())
            .then(thoughts => setMessageList(thoughts))
            .catch(error => console.error(error))
        }
//likes
/*         const handleSubmit = (e) => {
            e.preventDefault()


        
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }, */
/*               body: JSON.stringify({ hearts: heart }) */
/*             }

            fetch(LIKE_API, options)
            .then(res => res.json())
            .then(likes => setMessageList([likes,...messageList]))
            .catch(error => console.error(error))
        } */
//end likes

    return (
        <div className='messageContainer'>
        {messageList.map(thoughts => (
            <div className='messageContent' key={thoughts._id}>
              <h4 className='messageText'>{thoughts.message}</h4>
              <div className='heartAndTime'>
                <div className='heartThings'>
                <button className='heartButton'>
                <span className='heart'>&#128151;</span>
                </button>
              <p className='nrOfLikes'>x {thoughts.hearts}</p>
              </div>
              <p className='time'>{moment(thoughts.createdAt).fromNow()}</p>
              </div>
              </div>
          ))}

        </div>
    )
}