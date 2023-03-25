/* eslint-disable */

import React from "react";
import { LikeButton } from "./LikeButton";


export const ThoughtsList = ({ loading, setLoading, thoughtList, setNewLike }) => {

    console.log (thoughtList)
    return (
        <section className="thoughtsListWrapper" >
            {thoughtList.map((event) => (
                <div key={event._id} className="thoughtBox">
                    <p className="thoughts">{event.message}</p>
                    <div className="likethought">
                        <LikeButton
                            setNewLike={setNewLike}
                            event={event}
                            loading={loading}
                            setLoading={setLoading} />
                    </div>
                </div>
            ))}
        </section>
    )

}
