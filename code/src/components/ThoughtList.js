import React from "react"
import InfiniteScroll from 'react-infinite-scroller';

import Thought from "./Thought"

let items = []

const ThoughtList = ({ thoughts, likeCounter, setLikeCounter, hasMoreMessages, fetchThoughts }) => {
  thoughts.map(thought => (
    items.push(
      <Thought
        key={thought._id}
        thought={thought}
        likeCounter={likeCounter}
        setLikeCounter={setLikeCounter}
      />
    )
  ))

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchThoughts}
      hasMore={hasMoreMessages}
      loader={<div className="loader" key={0}>Loading ...</div>}
      threshold={250}
      useWindow={true}
    >
      <div className="thought-container">
        {items}
      </div>
    </InfiniteScroll>
  )
}

export default ThoughtList