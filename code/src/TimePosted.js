import React from 'react'
import moment from "moment"

export const TimePosted = (props) => {
    return (
        <p>{moment(props.createdAt).fromNow()}</p>
    )
}