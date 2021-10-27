import React from 'react';
import moment from 'moment';

export const ThoughtCard = ({id, message, date, hearts}) => {

 


    return (
        <div key={id} >
            <p>{message}</p>
            <button> &hearts; {hearts}</button>
            <p className="date">
                - Created at: {moment(date.createdAt).fromNow()}
            </p>
        </div>
    );
};