import React, {useEffect, useState} from 'react'

export const ThoughtsFeed = () => {
  const TOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [toughts, setToughts] = useState([]);
  
  useEffect(() => { 
    fetch(TOUGHTS_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      console.log(data)
      setToughts(data)
      });
  }, []); 

    return ( 
      <section>
        {toughts.map( toughts => {
          return <ul>
            <li>{toughts.message}</li>
          </ul>
        })}
      </section>
    );
};
