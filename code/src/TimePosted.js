import React from 'react'
import Moment from 'react-moment';

export const TimePosted = (props) => {
    return (

        <Moment style={{ marginBottom: "12px" }} fromNow>{props.createdAt}</Moment>
    )
}