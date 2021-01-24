import React, {useState, useEffect, useRef} from 'react';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';

import './styles.css'
import * as constants from '../../constants';

function Landing(){
    
    const [ durationSession, setDurantionSession ] = useState( constants.STANDARD_SESSION_DURATION);
    const [ durationBreak, setDurantionBreak ]= useState(constants.STANDARD_BREAK_DURATION);
    const [ isCounting, setIsCounting] = useState(false);
    const [ countdown, setCountdown] = useState( constants.STANDARD_SESSION_DURATION);
    const [ isInSession, setIsInSession] = useState(false);
    const [ isInBreak, setIsInBreak] = useState(false);

    let intervalo = useRef();

    useEffect( () => {
        /** Run in the backgroud  e count the seconds 
         * using the value that is in countdown.
         */
        intervalo.current = setTimeout( () =>{
          if( isCounting && countdown > 0){
            setCountdown( () => ( countdown - 1))
          }
          else if( countdown <= 0 && isInSession ){
            startBreak();
            setIsInSession(false);
          }
          else if( countdown <= 0 && isInBreak ){
            startPomodoro();
            setIsInBreak(false);
          }
          
          
        }, 1000);
      });

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

    const zerar = async () => {
        await setIsCounting(false);
        await clearTimeout(intervalo.current);
        await setCountdown( durationSession );
        await setIsInBreak(false);
        await setIsInSession(false);
        }; 

    const startPomodoro = () => {
        setIsCounting(() => true);
        setCountdown(() => durationSession);
        setIsInSession( true );
    };

    const startBreak = () =>{
        setIsCounting(() => true);
        setCountdown(() => durationBreak);  
        setIsInBreak(true);
    };

    const  pause = () => {
        clearTimeout(intervalo.current);
        setIsCounting( ()=> !isCounting );
    };

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
                <div>
                    <Display  
                        minutos  = { !isCounting ? 
                            Math.floor( (durationSession)/60) % 60 : 
                            Math.floor( (countdown)/60 )%60 } 
                        segundos = { Math.floor( (countdown) % 60 ) }/>    
                </div>
                

            <section id = 'start-rest-container'>
                <SimpleButton 
                    label={ 
                        isCounting === false ?
                        "Start" : "Pause"
                    }
                    onClick= { isCounting ? pause : startPomodoro}
                    />
                <SimpleButton label='Reset' onClick={zerar} />
            </section>
        </main>
    );
};

export default Landing;