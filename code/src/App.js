import React, {useState, useEffect} from 'react'

import Form from './components/Form.js'

export const App = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function getApiData() {
      const response = await fetch (
        `https://happy-thoughts-technigo.herokuapp.com/thoughts`
      )
      let data = await response.json();
      setApiData(data);
    }
    getApiData();
  }, [])

  const likesStyles = {
    bgColor: 'lightgrey'
  }

  return (
    <div className="flex-parent">
      <Form 
        apiData={apiData}
      />
      {apiData && apiData.map(messageIndex => {
        const { _id, message, hearts, createdAt } = messageIndex;
        
        let likesExist = hearts;
        if (likesExist !== 0) {
          likesStyles.bgColor = 'pink';
        } else {
          likesStyles.bgColor = 'lightgrey';
        }

        const handleClick = async () => {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          }

          const fetchedRes = await fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, options)
          let postedData = await fetchedRes.json();
          console.log(postedData)
        }

        return (
          <div key={_id} className="message-display-div">
            <p>Message: {message}</p>
            <span>
            <p onClick={handleClick} style={{display: 'flex'}}>
              <span style={{backgroundColor: `${likesStyles.bgColor}`, padding: '10px', borderRadius: '50%'}}>
                <span role="img" aria-label="Red Heart">❤️</span>
              </span>
              <span style={{padding: '10px', color: 'grey'}}>x {hearts}</span>
              </p> 
            <p style={{padding: '10px', color: 'grey'}}>Created: {createdAt}</p> 
            </span>
          </div>
        );
      })}
    </div>
  )
}