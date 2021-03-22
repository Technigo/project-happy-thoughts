import React, { useState, useEffect } from 'react'
import './Styles/ListTextField.css'
// import moment from 'moment';
import { API_URL_THOUGHTS } from '../Reusables/urls';

const ListTextField = () => {
    // use states as variables. first is default seconds sets the value
    const [thoughtList, setThoughtList] = useState([]);
    console.log (thoughtList)

    //useEffect descides when and what should render (at what point of mounting the)
    useEffect(() => {
        fetchThoughtList();
    }, []);

    const fetchThoughtList = () => {
        fetch(API_URL_THOUGHTS)
            .then(res => res.json())
            .then(thoughts => setThoughtList(thoughts))
            .catch(err => console.error(err))
    }

    return (
        <>
           <div>
                {thoughtList.map(thought => (
                    <div key={thought._id}>
                        <h4>{thought.message}</h4>
                        <p>{thought.createdAt}</p>
                        <p>number of likes{thought.hearts}</p>
                    </div>
                ))}
           </div>
        </>
    )
}

export default ListTextField