import React from "react";
import moment from "moment";
import { HeartButtons } from "./HeartButtons";

export const DisplayThought = ({
  id,
  message,
  hearts,
  name,
  type,
  date,
  theme,
}) => {
  return (
    <section className="thought-container">
      <p className="p-thoughts">{message}</p>
      <div className="icon-container">
        <HeartButtons hearts={hearts} id={id} type={type} theme={theme} />
        <div className="wrapper-col">
          <span className="time-gone-by">{name ? name : "Anonymous"}</span>
          <span className="time-gone-by">{moment(date).fromNow()}</span>
        </div>
      </div>
    </section>
  );
};
