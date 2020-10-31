import React from 'react'

export const Like = ( {_id} ) => {

    

    const handleLike = (_id) => {

      console.log('Like worked with', _id)

        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body:"",
        })
    
      }

 return   <button onClick={() => {handleLike(_id)}}></button>
}

