import React from "react";

const lengthFinder = ( props ) => {
    return (
        <div>
            <input type="text" onChange={props.changed} placeholder="Enter text!!" value={props.value} />
            <h1>{props.length}</h1>
        </div>
    );
}

export default lengthFinder;