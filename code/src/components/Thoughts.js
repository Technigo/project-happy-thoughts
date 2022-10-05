import React from 'react';
import { formatDistance }  from 'date-fns';

const Thoughts = ({ loading, thoughts, setThoughts }) => {

    if (loading) {
        return <p>Loading some thoughts...</p>
    }
    const onThoughtCheckChange = (thought) => {
        setThoughts(thoughts => thoughts.map(singleThought => {
            if(singleThought._id === thought._id) {
                return {...singleThought, isChecked: !singleThought.isChecked};
            }
            return singleThought;
        }));
    }
    return (
        <section>
            {thoughts.reverse().map(thought => (
                <div key={thought._id}>
                    <p>{thought.message}</p>
                    <input onChange={() => onThoughtCheckChange(thought)} type="checkbox" checked={thought.isChecked} />
                    <p className="timestamp">
                            {formatDistance(new Date(thought.createdAt), Date.now(),{
                             addSuffix: true
                        })}
                        </p>
                </div>
            ))}
        </section>
    );
}

export default Thoughts;