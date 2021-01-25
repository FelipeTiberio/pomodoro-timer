import React from 'react';

import './styles.css';

const PlusMinusButtons = ( props ) => {
    return (
        <div className= {props.className}>
        
            <h3>{props.label}</h3>
            <button className='btn-setting'
                onClick={props.onClickSubMinute}
                > - </button>
               <span>  { props.number} </span> 
            <button className='btn-setting'
                onClick={props.onClickAddMinute }
                > + </button>
            
        </div>
    );
};

export default PlusMinusButtons ;