import React, {useState, useEffect} from 'react';
import {Container} from './styles';

const ModalMsg = (props) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        
        return () => clearInterval(interval);
      }, [seconds]);

    console.log(seconds)

    const closeModal = () => {
        console.log("Clicou")
    }
    
    return(
        <Container onClick={closeModal}>
           <div className="aux-container">
                Streamer cadastrado com sucesso!
           </div>
        </Container>
    );
}
export default ModalMsg;