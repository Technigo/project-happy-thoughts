/* eslint-disable */

import React from "react";
import moment from "moment/moment";


export const TimeStamp = ({thought}) =>{
    return(
        <div className="timestamp-box">
        <p className="timestamp">{moment(thought.createdAt).fromNow()}</p>
        </div>
    )
}