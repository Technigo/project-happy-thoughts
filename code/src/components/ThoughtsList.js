import React from "react"
import { formatRelative } from 'date-fns'

const ThoughtsList = ({ thoughts, likeMessage }) => {
    // const [buttonColor, setButtonColor] = useState("#feddf0")

    // const toggleSendButton = (e) => {

    //     const newButtonColor = buttonColor === "#feddf0" ? "#f7aed7" : "#feddf0"
    //     setButtonColor(newButtonColor)
    // }

    
    return (
        <>
            {thoughts.map((thought) => (
                    <div key={thought._id} className="thought-container">
                        <div className="message">{thought.message}</div>
                        
                        <div className="like-and-date-wrapper">
                            <div className="like">
                                <button
                                // style={{ backgroundColor: buttonColor}}
                                // color={buttonColor}
                                className="heart-button"
                                onClick={() => {
                                    likeMessage(thought._id)
                                    // toggleSendButton()
                                }}
                                >
                                    <span className="heart"
                                    role="img"
                                    aria-label="heart emoji">
                                    💖
                                    </span>
                                </button>
                                <p>
                                    x {thought.hearts}
                                </p>
                            </div>
        
                            <div className="date">
                                <p>{formatRelative(new Date(thought.createdAt), Date.now(), {addSuffix: true,})}</p> 
                            </div>
                        </div>
                    </div>
                )

            )}
        </>
        
    )
}

export default ThoughtsList