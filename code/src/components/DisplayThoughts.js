import React from "react";

const DisplayThoughts = ({ thoughts }) => {

    return (
        <section className="all-thoughts">
            <div className="thought-wrapper">{thoughts}</div>
        </section>
    );
};

export default DisplayThoughts;