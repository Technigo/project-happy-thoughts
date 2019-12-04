/* API requests mgmt in this file */
const THOUGHTSURL = 'https://technigo-thoughts.herokuapp.com/' /* POST GET https://technigo-thoughts.herokuapp.com/ */
const SUFFIX = '/like' /* POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like */

const submitThought = (event, message, setThoughts, setMessage) => {
  event.preventDefault()
  
  fetch(THOUGHTSURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message})
  })
  .then(response => response.json())
  .then(json => {
    setThoughts(prevThoughts => [json, ...prevThoughts])
    setMessage('')
  })
}

const sendLike = (id) => {
  fetch(THOUGHTSURL+id+SUFFIX, {
    method: 'POST',
  })
  .then(response => response.json())
  .then(json => {
    return
  })
}

const getThoughts = (setThoughts) => {
  fetch(THOUGHTSURL, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    setThoughts(json)
  })
}

export { submitThought, getThoughts, sendLike }