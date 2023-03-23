/* eslint-disable indent */
import React from 'react';
import MessageCard from './MessageCard';

const ThoughtList = ({ thoughts }) => {
    return (
        <div>
            {thoughts.map((item) => <MessageCard item={item} />)}
        </div>
    )
}

export default ThoughtList

