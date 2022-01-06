import { API_URL_DELETE } from './utils/urls'

const deleteAPost = ({ thoughtID, recentThoughts }) => {
  const options = {
    method: 'DELETE',
  }

  return fetch(API_URL_DELETE(thoughtID), options)
    .then((res) => res.json())
    .then((json) => {
      const remainingThoughts = recentThoughts.filter(
        (thought) => thought._id !== json._id
      )

      return remainingThoughts
    })
}

export default deleteAPost
