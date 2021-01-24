import React from 'react';

import './styles.css';

const PlusMinusButtons = ( props ) => {
    return (
        <div className= {props.className}>
        
            <h3>{props.label}</h3>
            <button
                onClick={props.onClickSubMinute}
                >-</button>
                { props.number} 
                <button
                    onClick={props.onClickAddMinute }
                >+</button>
            
        </div>
    );
};

export default PlusMinusButtons ;