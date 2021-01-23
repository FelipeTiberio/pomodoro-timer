import React from 'react';

const Display = (props) =>{
    return(
        <section id ='count-container'>
                { props.minutos < 10 ? "0" + props.minutos : props.minutos}
                :
                { props.segundos < 10 ? "0" + props.segundos : props.segundos}
        </section>
    )
};

export default Display;