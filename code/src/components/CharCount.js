import React from "react";

export const CharCount = ({charCount}) => {
    return (
        <>
            <p className="charCount">
                <span className={charCount < 6 ? "redColor": "blackColor"}>
                {140 - charCount}
                </span>{" "}
                / 140
            </p>
        </>
    )
}