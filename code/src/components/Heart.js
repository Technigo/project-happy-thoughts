import React, { useState, useEffect } from 'react'

export const Heart = props => {
    const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/";
    const [heart, setHeart] = useState([]);

    useEffect(() => {
        // Ask the server for the messages using a GET requests
        fetch(MESSAGES_URL)
            .then((res) => {
                // Get the JSON of the response body
                return res.json() 
            })
            .then(data => {
                // Set the state based on the response
                setHeart(data.reverse());
            });
    }, []);


    return (
        <div>
          
            <button/>
            <p>x{}</p>
            
        </div>
    )
}