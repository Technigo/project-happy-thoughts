import React, { useEffect, useState } from "react"
import moment from "moment" 

import "../css/thoughtsList.css"

export const ThoughtsList = ( { thoughtsList } ) => {

  return (
    <div>
      {
        messageList.map(message => (
          <p className="thought-text" key={thoughts.created}>
            {thoughts.message}
            <span className="message-time">
              {moment(message.created).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}