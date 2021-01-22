import React from 'react';

const PlusMinusButtons = ( props ) => {
    return (
        <div className= {props.className }>
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