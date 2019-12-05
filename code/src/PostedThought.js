import React from 'react'
import { PostedText } from './PostedText'
import { Hearts } from './Hearts'
// import { Time } from './Time'
import './PostedThought.css'
import Time from 'react-timeago'
import './Time.css'


export const PostedThought = (item) => {
  // const [postedThought, setPostedThought] = useState([])

  // useEffect(() => {
  //   fetch('https://technigo-thoughts.herokuapp.com/', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(json => setPostedThought(json))
  // }, [])

  // const addedThought = (newThought) => {
  //   setPostedThoughts((previousThoughts) => [newThought, ...previousThoughts])
  // }

  return (
    <div
      className="message-box"
      key={item._id}>
      <PostedText
        text={item.message}
      />
      <div className="hearts-time">
        <Hearts
          hearts={item.hearts}
        />
        {/* <Time
              time={item.createdAt}
            /> */}
        <span className="time">
          <Time date={item.createdAt} />
        </span>
      </div>
    </div>

  )
}

  // export const PostedMessages = (props) => {
  //   return (
  //     <div>
  //       <PostedThoughts
  //         thought={props.postedThought.message} />
  //       <Hearts />
  //     </div>
  //   )


