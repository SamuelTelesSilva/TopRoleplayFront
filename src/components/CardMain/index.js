import React from 'react';
import { Container } from './styles';

const CardMain = (props) => {
    return(
        <Container>
            <div className="area-img-card">
                <img src={props.imgCard} alt={props.title} />
            </div>
            <div className="area-content-card">
                <div className="card-title">
                    {props.title}
                </div>
                <div className="card-name-streamer">
                    {props.streamer}
                </div>
            </div>
        </Container>
    );
}
export default CardMain;