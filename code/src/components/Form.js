import React from 'react'

const Form = ( { onFormSubmit, newThought, setNewThought } ) => {

    return (
       <section>
           <form onSubmit={onFormSubmit}>
               <label htmlFor='new-thought'>
                   <input 
                    type='text'
                    onChange={event => setNewThought(event.target.value)}
                    value={newThought}
                    id='new-thought'
                    name='new-thought'
                />
               </label>
               <button 
                    type='submit'
                    // disabled={newThought.length < 6 || newThought.length > 140}
                >Send Happy Thought</button>
           </form>
       </section>
    )



}

export default Form