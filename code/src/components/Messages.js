import React, {useEffect} from 'react'
import moment from 'moment'

import { GET_API } from '../reusables/urls'

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

    return (
        <div>
        {messageList.map(thoughts => (
            <div key={thoughts._id}>
              <h4>{thoughts.message}</h4>
              <p>{moment(thoughts.createdAt).fromNow()}</p>
              </div>
          ))}
        </div>
    )
}