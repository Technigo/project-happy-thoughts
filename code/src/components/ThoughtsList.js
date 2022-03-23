import React from "react";
import moment from "moment";
import { HeartIcon } from "Components/LikedThoughts";

export const ThoughtsList = ({ thoughts, onLikes }) => {
  return (
    <section>
      <div>
        <h4>{thoughts.message}</h4>
        <button onClick={() => onLikes(thoughts._id)}>
          <HeartIcon symbol="❤️" />
        </button>

        <p> x {thoughts.hearts}</p>
        <p>{moment(thoughts.createdAt).fromNow()}</p>
      </div>
      ))
    </section>
  );
};
