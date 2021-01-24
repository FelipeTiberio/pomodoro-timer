import React from 'react';
import useSound from 'use-sound';
import startSound from '../../assets/sounds/start-stop-button.wav';

import './styles.css'

const SimpleButton = ( props ) =>{
    const [play] = useSound( startSound );
    
    return (
        <button id="main-button" 
            onClick={() => { play(); props.onClick(); }}> 
            {props.label} 
        </button>
    );
};

export default SimpleButton;