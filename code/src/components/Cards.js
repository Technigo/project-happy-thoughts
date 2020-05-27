import React, { useState, useRef, useEffect } from "react";
import Moment from 'react-moment';
import styled from 'styled-components'
import { Title, Paragraf } from "shared/shared";

export const Article = styled.article`
  border: 1px solid black;
  background-color: white;
  color: darkgray;
  box-shadow: 3px 3px 3px black;
  width: 90%;
  margin: 1em auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  padding: 1em;
  align-items: end;

  & div {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: flex;

}
& p:nth-child(3){
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-self: end;
}

`
export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${props => props.like ? "lightcoral" : "darkgray"};
  border-radius: 50%;
  font-size: 1.5em;
  color: darkred;

`



export const Cards = ( {info} ) => {
    
    const [likeCount, setLikeCount] = useState(0);
    const myID = info._id

    const handleHearts = (event) => {
        event.preventDefault()
        info.hearts+=1
        setLikeCount(likeCount+1)
        fetch(`https://technigo-thoughts.herokuapp.com/${myID}/like`, { 
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          }).catch((error) => {
            console.error('Error:', error);
          });   
      }

  return (
    <Article>
      <Title>{info.message}</Title>
      <div><Button like={info.hearts>0} onClick = {handleHearts}>&#9829;</Button><p>x {info.hearts}</p></div>
      <p><Moment fromNow>{info.createdAt}</Moment></p>
    </Article>
     
  );
};

          // <article className = "card" key= {info.id}>
          //     <p className="message">{info.message}</p>
          //     <div><button className = {(info.hearts>0) ? "heart love" : "heart"} onClick = {handleHearts} >&#9829;</button> <p>x {info.hearts}</p> </div>
          //     {(likeCount>0) && <p className = "liked">Liked {likeCount} times</p>}
          //     <p className="time"><Moment fromNow>{info.createdAt}</Moment></p>
          // </article>