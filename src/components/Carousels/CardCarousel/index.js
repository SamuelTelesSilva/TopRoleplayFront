import React from 'react';
import { Container, IconPlay } from './styles';



const CardCarousel = (props) => {
    return(
        <Container>
            <div className="cont-aux" onClick={props.onclick}>
                <img src={props.urlImgCard}
                    alt={props.imgAlt}   
                />
                <div className="area-button">
                    <IconPlay />
                </div>
            </div>
        </Container>
    );
}
export default CardCarousel;