/* API requests mgmt in this file */
const THOUGHTSURL = 'https://technigo-thoughts.herokuapp.com/' /* POST GET https://technigo-thoughts.herokuapp.com/ */
const SUFFIX = '/like' /* POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like */


// const handleFormSubmit = (event, setThoughts) => {
//   event.preventDefault()

//   // Send the POST request with the input from your form (instead
//   // of 'Hello world' like this example does):
//   fetch('https://technigo-thoughts.herokuapp.com/', { 
//     method: 'POST', 
//     body: JSON.stringify({ message: 'Hello world' })
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
//       // Now you have `newThought` which is the response from the
//       // API as documented at the top of this readme. You can use
//       // it to update the `thoughts` array: 
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//     })
// }

const sendLike = (id) => {
  fetch(THOUGHTSURL+id+SUFFIX, {
    method: 'POST',
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
  })
}

const getThoughts = (setThoughts) => {
  fetch(THOUGHTSURL, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    // return data
    setThoughts(json)
    console.log(json)
  })
}

export { getThoughts, sendLike }