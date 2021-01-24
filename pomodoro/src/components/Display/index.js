import  React, {useEffect} from 'react';
import alarmSound from '../../assets/sounds/alarm-clock.wav';
import useSound from 'use-sound';


const Display = (props) =>{
    const [play] = useSound(alarmSound);

    useEffect( () => {
            setTimeout( () =>{
          if( props.minutos <= 0 && props.segundos <= 0){
             play();
          }
        }, 1000);
      });

    return(
        <section id ='count-container'>
                { props.minutos < 10 ? "0" + props.minutos : props.minutos}
                :
                { props.segundos < 10 ? "0" + props.segundos : props.segundos}
        </section>
    )
};

export default Display;