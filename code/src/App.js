import React, { useState, useEffect } from 'react'
/* local dependencies */
import { API_URL } from './reusable/urls';

export const App = () => {

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => console.log(messages))
      .catch(err => console.error(err));
  }


  return (
    <div>
      
    </div>
  )
}
