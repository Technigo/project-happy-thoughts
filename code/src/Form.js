import React, { useState, useEffect } from "react";

import Send from "./Send";



const Form = ( {thoughts, setThoughts } ) => { 
    return(
        <section className ="form-conatiner">
           
              <label htmlFor="" tabIndex ="0">
                What's making you happy right now?   
                <input
                type="text"
                value={thoughts}
                onChange = {(event) =>setThoughts (event.target.value)}
                required
                />
            </label> 
        <Send />    

        </section>
    )
}

export default Form; 