import React, {useState, useEffect, useRef} from 'react';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';
import './styles.css'

const STANDARD_SESSION_DURATION = 1500;
const STANDARD_BREAK_DURATION = 300;

function Landing(){
    
    const [ durationSession, setDurantionSession ] = useState( STANDARD_SESSION_DURATION);
    const [ durationBreak, setDurantionBreak ]= useState(STANDARD_BREAK_DURATION);
    const [ isCounting, setIsCounting] = useState(false);
    const [ countdown, setCountdown] = useState( STANDARD_SESSION_DURATION);

    let intervalo = useRef();

    useEffect( () => {
        /** Run in the backgroud  e count the seconds 
         * using the value that is in countdown.
         */
        intervalo.current = setTimeout( () =>{
          if( isCounting ){
            setCountdown( () => ( countdown - 1))
          }
        }, 1000)
      })

    const addBreakTime = () => { 
            setDurantionBreak( (durationBreak) =>  durationBreak + 60 );
        };

    const subBreakTime = () => { 
            setDurantionBreak( (durationBreak) =>  durationBreak - 60 )
        };
    
    const addSessionTime = () => { 
        setDurantionSession( (durationSession) =>  durationSession + 60 )
        };
    
    const subSessionTime = () => { 
        setDurantionSession( (durationSession) =>  durationSession - 60 )
        };

        const zerar = async () =>{
            await setIsCounting(false);
            await clearTimeout(intervalo.current);
            await setCountdown( durationSession );
          } 

    const start = () =>{
       setIsCounting( () => !isCounting );
       setCountdown( () =>  durationSession );
    }

    const  pause = () =>{
        clearTimeout(intervalo.current);
        setIsCounting( ()=> !isCounting );
  }
    return(
        <main>
            <section id = 'top-buttons'> 
                <PlusMinusButtons 
                    onClickAddMinute  = {addBreakTime}
                    onClickSubMinute  = {subBreakTime}
                    className = "break-buttons" 
                    number={ Math.floor( ( durationBreak )/60 )%60 } />

                <PlusMinusButtons 
                    onClickAddMinute = {addSessionTime}
                    onClickSubMinute = {subSessionTime}
                    className = "timelenght-buttons" 
                    number = { Math.floor( ( durationSession )/60 )%60 } />

            </section>

                <Display  
                    minutos  = { !isCounting ? Math.floor( (durationSession)/60) % 60 : Math.floor( (countdown)/60 )%60 } 
                    segundos = { Math.floor( (countdown) % 60 ) }/>

            <section id = 'start-rest-container'>
                <SimpleButton 
                    label={ 
                        isCounting === false ?
                        "Start" : "Pause"
                    }
                    onClick= { isCounting ? pause : start}
                    />
                <SimpleButton label='Reset' onClick={zerar} />
            </section>
        </main>
    );
};

export default Landing;