import React from 'react';
import useSound from 'use-sound';
import startSound from '../../assets/sounds/start-stop-button.wav';

const SimpleButton = ( props ) =>{
    const [play] = useSound( startSound );
    
    return (
        <button onClick={() => { play(); props.onClick(); }}> {props.label} </button>
    );
};

export default SimpleButton;