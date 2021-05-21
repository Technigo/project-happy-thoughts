import React from "react"
import InfiniteScroll from 'react-infinite-scroller';

import Thought from "./Thought"

const ThoughtList = ({ thoughts, likeCounter, setLikeCounter, hasMoreMessages, fetchThoughts }) => {
  let items = []

  for (const thought of thoughts) {
    items.push(
      <Thought
        key={thought._id}
        thought={thought}
        likeCounter={likeCounter}
        setLikeCounter={setLikeCounter}
      />
    )
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchThoughts}
      hasMore={hasMoreMessages}
      loader={<div className="loader" key={0}></div>}
      className="scrolling-container"
    >
      <div className="thought-container">
        {items}
      </div>
    </InfiniteScroll>
  )
}

export default ThoughtList