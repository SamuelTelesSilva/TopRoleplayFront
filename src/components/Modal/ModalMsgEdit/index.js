import React, { useState, useEffect } from 'react';
import {Container} from './styles';
import { useAuth } from '../../../providers/auth';

const ModalMsgEdit = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const {activeModalMsgEdit , setActiveModalMsgEdit} = useAuth();
    
    useEffect(() => {
        let interval = null;

        if(timerOn && activeModalMsgEdit){    
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);

            if(seconds === 3){
                setTimerOn(false)
                setActiveModalMsgEdit(false)
            }  
        }else{
            clearInterval(interval);
            setSeconds(0);
        }
        return () => clearInterval(interval);
    }, [seconds, timerOn, setTimerOn, activeModalMsgEdit, setActiveModalMsgEdit]);

    const closeModal = () => {
        setActiveModalMsgEdit(false)
    }
    
    return(
        <Container onClick={closeModal} active={activeModalMsgEdit}>
           <div className="aux-container">
                {props.msgModalT}
           </div>
        </Container>
    );
}
export default ModalMsgEdit;