import React, { useState } from 'react'

export const ThoughtsMessage = ({messageDetails}) => {

   return (
       <p>
            {messageDetails.message}
            <span>{messageDetails.hearts}</span>
            <span>{messageDetails.createdAt}</span>
       </p>
   )
}
