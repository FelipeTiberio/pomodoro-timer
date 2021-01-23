import React, {useState} from 'react';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';
import './styles.css'

function Landing(){
    
    const [ durationSession, setDurantionSession ] = useState(1500);
    const [ durationBreak, setDurantionBreak ]= useState(300);
    const [ timeLeft , setTimeLeft ] = useState(1500);
    const [ start_turn, setStarTurn] = useState(false);
    const [ countDown, setCountdown] = useState({minutes:60, seconds: 60})

    const convertSecondsToMinutes = (seconds) => seconds / 60;

    const addBreakTime = () => { 
            setDurantionBreak( (durationBreak) =>  durationBreak + 60 )
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

    const zerar =  () => {
       
    }

    const start = () =>{
       
    }

    return(
        <main>
            <section id = 'top-buttons'> 
                <PlusMinusButtons 
                    onClickAddMinute  = {addBreakTime}
                    onClickSubMinute  = {subBreakTime}
                    className = "break-buttons" 
                    number={ convertSecondsToMinutes(durationBreak)} />

                <PlusMinusButtons 
                    onClickAddMinute = {addSessionTime}
                    onClickSubMinute = {subSessionTime}
                    className = "timelenght-buttons" 
                    number={ convertSecondsToMinutes(durationSession)} />

            </section>

                <Display  
                    minutos={ 
                        start_turn === false ?
                        durationSession/60  : 
                        countDown.minutes/60
                    } 
                    segundos={
                        start_turn === false ?
                        "00":
                        countDown.seconds/60
                    }/>

            <section id = 'start-rest-container'>
                <SimpleButton 
                    label={ 
                        start_turn === false ?
                        "Start" : "Pause"
                    }
                    onClick={start}
                    />
                <SimpleButton label='Reset' onClick={zerar} />
            </section>
        </main>
    );
};

export default Landing;