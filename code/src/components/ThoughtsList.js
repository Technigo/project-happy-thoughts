/* eslint-disable */

import React from "react";
import { LikeButton } from "./LikeButton";
import { TimeStamp } from "./TimeStamp";


export const ThoughtsList = ({ loading, setLoading, thoughtList, setNewLike }) => {
    
    return (
        <section className="thoughtsListWrapper" >
            {thoughtList.map((singleThought) => (
                <div key={singleThought._id} className="thoughtBox">
                    <p className="thoughts">{singleThought.message}</p>
                    <div className="likethought">
                        <LikeButton
                            setNewLike={setNewLike}
                            thought={singleThought}
                            loading={loading}
                            setLoading={setLoading}
                        />
                        <TimeStamp thought={singleThought} />
                    </div>
                    {/* console.log(singleThought); */}
                </div>
            ))}
            
        </section>
    )

}
