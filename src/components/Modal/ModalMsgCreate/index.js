import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import { useAuth } from '../../../providers/auth';

const ModalMsgCreate = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const {activeModalMsgCreate, setActiveModalMsgCreate} = useAuth();

    
    useEffect(() => {
        let interval = null;

        if(timerOn && activeModalMsgCreate){    
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);

            if(seconds === 10){
                setTimerOn(false)
                setActiveModalMsgCreate(false)
            }  
        }else{
            clearInterval(interval);
            setSeconds(0);
        }
        return () => clearInterval(interval);
    }, [seconds, timerOn, setTimerOn, activeModalMsgCreate, setActiveModalMsgCreate]);

    

    const closeModal = () => {
        setActiveModalMsgCreate(false)
    }
    
    return(
        <Container onClick={closeModal} active={activeModalMsgCreate}>
           <div className="aux-container">
                {props.msgModalCreate}
           </div>
        </Container>
    );
}
export default ModalMsgCreate;