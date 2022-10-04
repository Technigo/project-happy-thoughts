import React from 'react';
import { formatRelative } from 'date-fns';

const Thoughts = ({ loading, Thoughts, setThoughts }) = {

    if (loading) {
        return <p>Loading some thoughts...</p>
    }
    const onThoughtCheckChange = (thought) => {
        setThoughts(thoughts => thoughts.map(singleThought => {
            if(singleThought._id === thought._id) {
                return{...singleThought, isChecked: !singleThought.isChecked};
            }
            return (singleThought);
        }));
    }
    return (
        <section>
            {thoughts.map(thought => (
                <div key={thought._id}>
                    <h4>{thought.message}</h4>
                    <input onChange={() => onThoughtCheckChange(thought)} type="checkbox" checked={thought.isChecked} />
                    <p>{formatRelative(thought.createdAt, new Date())}</p>
                </div>
            ))}
        </section>
        
    )


}

export default Thoughts;