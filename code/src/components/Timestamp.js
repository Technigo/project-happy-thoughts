import React from 'react';
import moment from "moment"

export const Timestamp = (props) => {

  return (
    <li> {moment(props.createdAt).fromNow()}</li>
  )
}

