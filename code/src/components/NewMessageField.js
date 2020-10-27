import React, { useState } from 'react';
import './newmessagebox.css';
import ic_send from '../assets/ic_send.svg';


export const NewMessageField = () => {


  const handleSubmit = e => {
    e.preventDefault();
    // HERE GOES THE CODE THAT SENDS MESSAGE
  }


  return (
    <>
      <div className="new-message-box">


        <form className="composer column" onSubmit={handleSubmit}>

          

            <label><p className="p-label">What's making you happy today?</p></label>
            <div className="row message-box">
              <input type="text" />
              <button className="button-send"><img src={ic_send} /></button>
            </div>

            <p className="p-counter">4/140</p>

          





        </form>


      </div>
    </>

  )
}


