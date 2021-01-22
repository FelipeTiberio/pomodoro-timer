import React from 'react';

const Display = (props) =>{
    return(
        <section id ='count-container'>
                {props.minutos}:{props.segundos}
        </section>
    )
};

export default Display;