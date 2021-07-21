import React from 'react';
import {Container,Button} from './styles';

const ModalRemove = (props) => {
    return(
        <Container active={props.active}>
            <div className="area-msg">
                <div className="msg">
                    <span>Você vai remover  o item selecionado, deseja continuar?</span>
                </div>
            </div>
            <div className="area-button">
                <Button onClick={props.accepted}>Sim</Button>
                <Button onClick={props.denied}>Não</Button>
            </div>
        </Container>
    );
}
export default ModalRemove;