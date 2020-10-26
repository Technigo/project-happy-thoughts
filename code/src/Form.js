import React, { useState, useEffect } from "react";

import Send from "./Send";



const Form = ( { happy, setHappy } ) => { 
    const handleFormSubmit = (event) => {
    event.preventDefault() }
    return(
        <section className ="form-conatiner">
           
              <label htmlFor="" tabIndex ="0">
                What's making you happy right now?   
                <input
                type="text"
                value={happy}
                onChange = {(event) => setHappy(event.target.value)}
                required
                />
            </label> 
        <Send />    

        </section>
    )
}

export default Form; 