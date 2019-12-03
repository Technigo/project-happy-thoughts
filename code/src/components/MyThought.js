import React, { useState, useEffect } from "react"


export const MyThought = () => {


    return (
        <div className="thought-card">
            <div className="card-title">
                What makes you happy right now?
            </div>
            <input text="" type="textarea"></input>

            <div className="card-bottom">
                <div className="send-btn">
                    <button> Send my thoughts </button>
                </div>
            </div>
        </div>

    )
}
