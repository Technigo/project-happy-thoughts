import React from "react"
import InfiniteScroll from 'react-infinite-scroller'

import ThoughtsCard from "./ThoughtsCard"

let items = []
const ThoughtsList = ({ messageList, fetchMessageList, hasMoreMessages }) => {
  messageList.map(message => (
    items.push(

      <ThoughtsCard 
      key={message._id}
      message={message}
      // onLikesIncrease={handleLikesIncrease}
      />
      )
  ))

  return (

    <InfiniteScroll
    pageStart={0}
    loadMore={fetchMessageList}
    hasMore={hasMoreMessages}
    loader={<div className="loader" key={0}>Loading ...</div>}
    threshold={250}
    useWindow={true}
    >
    {items}
    </InfiniteScroll>
  )
}

export default ThoughtsList