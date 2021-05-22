const handleFormSubmit = (event) => {
  event.preventDefault()
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: messageNew,
      userName: userName
    })
  }
  fetch(API_URL, options)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error ('Something went wrong!')
    }
  })
  .then(
    fetchMessageList,
    setMessageNew(''),
    setUserName('')
    )
  .catch(() => {
    setErrorMessage(true);
})
}