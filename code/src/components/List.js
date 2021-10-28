import React from "react";
const List ({}) => {
    return (
        {list.map((list) => (
            <div className=" thoughts grid" key={list._id}>
              <p className="message">{list.message}</p>
              <div>
                <button
                  className="heart"
                  onClick={() => handleLikesIncrease(list._id)}
                >
                  <span role="img" aria-label="heart emoji">
                    ❤️
                  </span>
                </button>
                x {list.hearts}
              </div>
              <p className="date">{moment(list.createdAt).fromNow()}</p>
            </div>
          ))}
    )
}

export default List