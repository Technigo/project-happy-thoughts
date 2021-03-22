import React, {useEffect} from 'react'
import moment from 'moment'

import { GET_API/* , LIKE_API */ } from '../reusables/urls'

export const Messages = ({ messageList, setMessageList }) => {

    useEffect(() => {
        fetchList()
      }, []);
    
      const fetchList = () => {
          fetch(GET_API)
            .then(res => res.json())
            .then(thoughts => setMessageList(thoughts))
            .catch(error => console.error(error))
        }

/*         const handleSubmit = (e) => {
            e.preventDefault()
        
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ hearts: heart })
            }

            fetch(LIKE_API, options)
            .then(res => res.json())
            .then(likes => setMessageList([likes,...messageList]))
            .catch(error => console.error(error))
        } */

    return (
        <div>
        {messageList.map(thoughts => (
            <div key={thoughts._id}>
              <h4>{thoughts.message}</h4>
              <p>{moment(thoughts.createdAt).fromNow()}</p>
              </div>
          ))}
{/*           <button onSubmit={handleSubmit}>
            HEART
          </button>
          <div>

          </div> */}
        </div>
    )
}