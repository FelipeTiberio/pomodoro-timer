import React, {useState} from 'react';
import Display from '../../components/Display';
import PlusMinusButtons from '../../components/PlusMinusButtons';
import SimpleButton from '../../components/SimpleButton';
import './styles.css'

function Landing(){
    // 1500s = 25m e 300s = 5m
    const [ durantion_session, setDurantionSession ] = useState(1500);
    const [ durantion_break, setDurantionBreak ]= useState(300);
    const [ count_seconds, setCountSeconds ] = useState(0);
    const [ start_turn, setStarTurn] = useState(false);

    const convert_seconds_to_minutes = (seconds) => seconds / 60;

    const add_break_time = () => { 
            setDurantionBreak( (durantion_break) =>  durantion_break + 60 )
       
        };
    const sub_break_time = () => { 
            setDurantionBreak( (durantion_break) =>  durantion_break - 60 )
        };
    
    const add_session_time = () => { 
        setDurantionSession( (durantion_session) =>  durantion_session + 60 )
        };
    
    const sub_session_time = () => { 
        setDurantionSession( (durantion_session) =>  durantion_session - 60 )
        };

    const zerar =  () => {
        
    }

   

    return(
        <main>
            <section id = 'top-buttons'> 
                <PlusMinusButtons 
                    onClickAddMinute  = {add_break_time}
                    onClickSubMinute = {sub_break_time}
                    className="break-buttons" 
                    number={ convert_seconds_to_minutes(durantion_break)} />

                <PlusMinusButtons 
                    onClickAddMinute = {add_session_time}
                    onClickSubMinute = {sub_session_time}
                    className="timelenght-buttons" 
                    number={ convert_seconds_to_minutes(durantion_session)} />
            </section>

            <Display  minutos={time.minute} segundos={time.second}/>

            <section id = 'start-rest-container'>
                <SimpleButton label='Start' onClick={start}/>
                <SimpleButton label='Reset' />
            </section>
        </main>
    );
};

export default Landing;