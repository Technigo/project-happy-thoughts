import React from 'react'
import Moment from 'react-moment';

export const TimePosted = (props) => {
    return (
        // <p>{moment(props.createdAt).fromNow()}</p>
        <Moment fromNow>{props.createdAt}</Moment>
    )
}