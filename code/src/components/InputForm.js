import React, { useEffect, useState } from 'react'

const InputForm = () =>{
    return (
    <form>
        <h1>What is making you happy right now ?</h1>
        <textarea rows="4" cols="45" name="comment" form="usrform">
    Enter text here...</textarea>
    <button onclick="myFunction()"></button>
    </form>
    )
}

export default InputForm;