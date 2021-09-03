import React from 'react';
import { Container } from './styles';

const CardMain = (props) => {
    return(
        <Container>
            <div className="cont-aux">
                <div className="area-img-card">
                    <img src={props.imgCard} alt={props.altImg} />
                </div>
                <div className="area-info">
                    {props.streamer}
                </div>
            </div>
        </Container>
    );
}
export default CardMain;