import React, {useState} from 'react';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';
import './styles.css'

function Landing(){
    // 1500s = 25m e 300s = 5m
    const [ durationSession, setDurantionSession ] = useState(1500);
    const [ durationBreak, setDurantionBreak ]= useState(300);
    const [ timeLeft , setTimeLeft ] = useState(1500);
    const [ start_turn, setStarTurn] = useState(false);

    const convert_seconds_to_minutes = (seconds) => seconds / 60;

    const add_break_time = () => { 
            setDurantionBreak( (durationBreak) =>  durationBreak + 60 )
        };

    const sub_break_time = () => { 
            setDurantionBreak( (durationBreak) =>  durationBreak - 60 )
        };
    
    const add_session_time = () => { 
        setDurantionSession( (durationSession) =>  durationSession + 60 )
        };
    
    const sub_session_time = () => { 
        setDurantionSession( (durationSession) =>  durationSession - 60 )
        };

    const zerar =  () => {
        
    }

    const start = () =>{
        setStarTurn( () => !start_turn)
    }

    return(
        <main>
            <section id = 'top-buttons'> 
                <PlusMinusButtons 
                    onClickAddMinute  = {add_break_time}
                    onClickSubMinute  = {sub_break_time}
                    className = "break-buttons" 
                    number={ convert_seconds_to_minutes(durationBreak)} />

                <PlusMinusButtons 
                    onClickAddMinute = {add_session_time}
                    onClickSubMinute = {sub_session_time}
                    className = "timelenght-buttons" 
                    number={ convert_seconds_to_minutes(durationSession)} />

            </section>

                <Display  minutos={"25"} segundos={"00"}/>

            <section id = 'start-rest-container'>
                <SimpleButton 
                    label={ 
                        start_turn === false ?
                        "Start" : "Pause"
                    }
                    onClick={start}
                    />
                <SimpleButton label='Reset' />
            </section>
        </main>
    );
};

export default Landing;