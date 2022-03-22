import React from 'react'

const Thought = ({thoughts}) => {

//Here we want to list all thoughts 

    return (
        <section>
            <div>
                <ul>
                    <li key={thoughts._id}>{thoughts.message}</li>
                </ul>
            </div>
        </section>
    )
}

export default Thought