import React, { useState } from "react"
import styled from 'styled-components'
import "./messagepost.css"
import { Loader } from "./Loader"
import { ThemeChips, ThemeChip } from './ThemeChips'

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 680px) and (max-width: 800px ) {
      flex-direction: column;
  }
`



export const MessagePost = (props) => {
    const { newThought, setNewThought, sendingThought, setSendingThought, setMessages, setDataLength } = props
    const [theme, setTheme] = useState()
    const categories = [
        {
            text: 'Home',
            Image: require('./20088-home.gif')
        },
        {
            text: 'Work',
            Image: require('./22124-process-working.gif')
        },
        {
            text: 'Random',
            Image: require('./992-articulation.gif')
        }
    ]
    const handleEvent = (event) => {
        setNewThought(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSendingThought(true)
        fetch("https://williamjensen-happythoughts.herokuapp.com/", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ message: newThought, theme: theme || false })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMessages(data.thoughts)
                setDataLength(data.length)
                setNewThought('')
                setTheme('')
                setSendingThought(false)
            })
    }
    return (
        <form className="thoughts-container form" onSubmit={handleSubmit}>
            {sendingThought && <Loader />}
            {!sendingThought &&
                <div>
                    <p className="post-title">What's making you happy right now?</p>
                    <textarea maxLength={140}
                        value={newThought}
                        className="post-text"
                        onChange={handleEvent} type="text"
                        placeholder="Sign your thought by writing your name after '~'. Eg. The sun is shining ~Bob">

                    </textarea>
                    <div className="count-and-input-wrapper">
                        <p className="character-count"
                            style={{ color: newThought.length >= 100 ? "red" : newThought.length >= 50 ? "orange" : "black" }}>
                            {140 - newThought.length} characters left
                        </p>
                        {/* <div style={{ display: "flex", flexDirection: "column" }}>
                            <input className="signature-input" type="text"
                                placeholder="Sign your thought"
                                maxLength={20}
                                onChange={(e) => setUser(e.target.value)}></input>
                        </div> */}
                    </div>
                    <ButtonsWrapper>
                        <button className="post-button" disabled={!newThought || newThought.length < 5} type="submit" >
                            <span role="img" aria-label="heart">❤️</span>
                        Send Happy Thought<span role="img" aria-label="heart">❤️</span>
                        </button>
                        {categories.map((item) => {
                            return (
                                // <ThemeChips text={item.text} theme={theme} type="button" onClick={() => setTheme(item.text)}>
                                //     <ChipPic src={item.Image} />
                                //     <ChipText>{item.text}</ChipText>
                                // </ThemeChips>
                                <ThemeChip image={item.Image} text={item.text} theme={theme} setTheme={setTheme}
                                    function={() => setTheme(item.text)} />
                            )

                        })}
                    </ButtonsWrapper>
                </div >}
        </form >
    )
}