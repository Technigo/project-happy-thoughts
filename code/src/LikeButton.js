import React, { useState } from "react"
import { ThemeChip } from './ThemeChips'
import "./likebutton.css"
export const LikeButton = (props) => {
    const { hearts, id, setPage, setOrder, setTheme, ...message } = props
    const [heartCounter, setHeartCounter] = useState(hearts)
    const [youLiked, setYouLiked] = useState(+localStorage.getItem(`${id}`) || 0)
    const like = () => {
        fetch(`https://williamjensen-happythoughts.herokuapp.com/${id}/like`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(newData => {
                setHeartCounter(newData.hearts)
                let likes = (+localStorage.getItem(`${id}`) > 0) ? +localStorage.getItem(`${id}`) : 0
                localStorage.setItem(`${id}`, parseInt(++likes))
                setYouLiked(localStorage.getItem(`${id}`))
            })
    }
    const setThemeImage = (messageTheme) => {
        switch (messageTheme) {
            case "Home":
                return require('./20088-home.gif');
            case "Work":
                return require('./22124-process-working.gif');
            case "Random":
                return require('./992-articulation.gif');

        }
    }

    const filterTheme = (messageTheme) => {
        setPage(1)
        setOrder('default')
        setTheme(messageTheme)
        window.scrollTo(0, 0)
    }
    return (
        <article className="flex-wrapper">
            <div className="button-and-theme">
                <div style={{ marginRight: "8px" }}>
                    <button style={{ backgroundColor: heartCounter ? '#ffadad' : '#f2f0f0' }}
                        className="like-button"
                        onClick={like}><span role="img" aria-label="heart">❤️</span></button> x {heartCounter}
                </div>
                {message.theme &&
                    <ThemeChip text={message.theme} theme={message.theme}
                        image={setThemeImage(message.theme)} function={() => filterTheme(message.theme)} />}
            </div>
            <p>You've liked this post {youLiked} times.</p>
        </article >
    )
}
