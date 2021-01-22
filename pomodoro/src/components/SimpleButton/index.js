import React from 'react';


const SimpleButton = ( props ) =>{
    return (
        <button onClick={props.onClick}> {props.label} </button>
    );
};

export default SimpleButton;