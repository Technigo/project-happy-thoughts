import React from 'react';
import "components css/header.css"
import IconButton from "images/iconfinder_86_815175.png";

export const Header = () => {
  return(
    <div className="header">
      <img className="heart-icon-header" src={IconButton} alt= "heart" aria-label="Heart"/>  
      <h1 className="header-text">What is making you happy right now?</h1>
      <img className="heart-icon-header" src={IconButton} alt= "heart" aria-label="Heart"/>
    </div>
  )
}