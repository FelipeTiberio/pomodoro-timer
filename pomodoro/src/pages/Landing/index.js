import React, {useState, useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';

import './styles.css'
import {STANDARD_SESSION_DURATION, STANDARD_BREAK_DURATION, 
        MAX_DURANTION_BREAK, ONE_MINUTE, MAX_DURANTION_SESSION,
        MIN_DURANTION_SESSION
    } from  '../../constants';

function Landing(){
    
    const [ durationSession, setDurantionSession ] = useState( STANDARD_SESSION_DURATION );
    const [ durationBreak, setDurantionBreak ] = useState( STANDARD_BREAK_DURATION );
    const [ isCounting, setIsCounting ] = useState(false);
    const [ countdown, setCountdown ] = useState( STANDARD_SESSION_DURATION );
    const [ isInSession, setIsInSession ] = useState(false);
    const [ isInBreak, setIsInBreak ] = useState(false);

    let runInTheBackGround = useRef();

    useEffect( () => {
       
        runInTheBackGround.current = setTimeout( () =>{
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
            if( durationBreak < MAX_DURANTION_BREAK ){
                setDurantionBreak( (durationBreak) =>  durationBreak + ONE_MINUTE );
            }
        };

    const subBreakTime = () => { 
            if( durationBreak > ONE_MINUTE ){
                setDurantionBreak( (durationBreak) =>  durationBreak - ONE_MINUTE );
            }
        };
    
    const addSessionTime = () => { 
            if( durationSession < MAX_DURANTION_SESSION ){
                setDurantionSession( (durationSession) =>  durationSession + ONE_MINUTE );
            }
        };
    
    const subSessionTime = () => {
            if( durationSession > MIN_DURANTION_SESSION ){
                setDurantionSession( (durationSession) =>  durationSession - ONE_MINUTE );
            } 
        };

    const zerarPomodoro = async () => {
        await setIsCounting(false);
        await clearTimeout(runInTheBackGround.current);
        await setCountdown( durationSession );
        await setIsInBreak(false);
        await setIsInSession(false);
        
    }; 

    const startPomodoro = () => {
        setIsCounting(() => true);
        setIsInSession( true );
    };

    const startBreak = () =>{
        setIsCounting(() => true);
        setCountdown(() => durationBreak);  
        setIsInBreak(true);
    };

    const  pausePomodoro = () => {
        clearTimeout(runInTheBackGround.current);
        setIsCounting( ()=> !isCounting );
    };

    return(
        <>
        <Helmet>
            <title>
                { !isCounting ? "Pomodoro Timer" : 
                Math.floor( (countdown)/60 )%60 +":"+ 
                Math.floor( (countdown) % 60 )
                }
            </title>
        </Helmet>

        <main className="container">
            <h1>Pomodoro</h1>
            <div id='display'>
                <Display  
                    minutos  = { Math.floor( (countdown)/60 )%60 } 
                    segundos = { Math.floor( (countdown) % 60 ) }/>    
            </div>
            
            <section id = 'setting-buttons'> 
                <PlusMinusButtons 
                    onClickAddMinute  = {addBreakTime}
                    onClickSubMinute  = {subBreakTime}
                    label = {"Break length"}
                    className = "break-buttons" 
                    number={ Math.floor( ( durationBreak )/60 )% 60 } />

                <PlusMinusButtons 
                    onClickAddMinute = {addSessionTime}
                    onClickSubMinute = {subSessionTime}
                    label = {"Sesseion length"}
                    className = "timelenght-buttons" 
                    number = { Math.floor( ( durationSession )/60 )%60 } />

            </section>

            <section id = 'start-rest-container'>
                <SimpleButton 
                    label={ 
                        isCounting === false ?
                        "Start" : "Pause"
                    }
                    onClick= { isCounting ? pausePomodoro : startPomodoro}
                    />
                <SimpleButton label='Reset' onClick={zerarPomodoro} />
            </section>
        </main>
        </>
    );
};

export default Landing;