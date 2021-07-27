import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import { useAuth } from '../../../providers/auth';

const ModalMsg = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const {activeModalMsg, setActiveModalMsg} = useAuth();
    
    
    useEffect(() => {
        let interval = null;

        if(timerOn && activeModalMsg){    
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);

            if(seconds === 10){
                setTimerOn(false)
                setActiveModalMsg(false)
            }  
        }else{
            clearInterval(interval);
            setSeconds(0);
        }
        return () => clearInterval(interval);
    }, [seconds, timerOn, setTimerOn, activeModalMsg, setActiveModalMsg]);

    

    const closeModal = () => {
        setActiveModalMsg(false)
    }
    
    return(
        <Container onClick={closeModal} active={activeModalMsg}>
           <div className="aux-container">
                {props.msgDoModal}
           </div>
        </Container>
    );
}
export default ModalMsg;