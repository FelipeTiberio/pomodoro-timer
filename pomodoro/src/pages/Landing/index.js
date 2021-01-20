import React, {useState} from 'react';
import './styles.css'


function Landing(){
    // 1500 segundos para o contador padrao de 25 minutos
    const [ contador, setContador ] = useState(1500);

    const increment = ( contador ) => { setContador( contador + 1)};
    const decrement = ( contador ) => { setContador( contador - 1)};

    function start_pomodoro( ){

    }

    function pause_pomodoro(){

    }

    function reset_pomodoro(){
        
    }

    return(
        <main>
            <section id = 'top-buttons'> 
                <div className= 'break-buttons'>
                    <button>-</button>5<button>+</button>
                </div>
                <div className= 'timelenght-buttons'>
                    <button>-</button>25<button>+</button>
                </div>
            </section>

            <section id ='count-container'>
                25:00
            </section>

            <section id = 'start-rest-container'>
                <button> Start </button>
                <button> Reset </button>
            </section>
        </main>
    );
};

export default Landing;