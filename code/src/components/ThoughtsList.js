import React from "react";
import moment from "moment";
import { HeartIcon } from "./HeartIcon";

export const ThoughtsList = ({ thoughts, onLikes }) => {
  return (
    <section>
      <div className="message-container">
        <h4>{thoughts.message}</h4>
        <div className="input-container">
          <div className="likes-container">
            <button
              className={
                thoughts.hearts > 0 ? "moreThanZeroClicks" : "zeroClicks"
              }
              onClick={() => onLikes(thoughts._id)}
            >
              <HeartIcon symbol="❤️" label="heart" />
            </button>

            <p className="x-heart">x {thoughts.hearts}</p>
          </div>
          <p className="time">{moment(thoughts.createdAt).fromNow()}</p>
        </div>
      </div>
    </section>
  );
};
