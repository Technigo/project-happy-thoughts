import React from 'react'

export const CharacterCount = ({ charMinMax }) => {
    return (
        <p className="p-message-length">
            <span className={charMinMax > 140 ? "p-red" : "p-blue"}>
                {140 - charMinMax}
            </span>{""}
        /140
        </p>
    )
}