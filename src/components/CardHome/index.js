import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IconPlay, HeartFull } from './styles';
import Heart from '../Heart/index';

const CardHome = (props) => {
    let element;

    if(props.clipe){
        //quando é clipe ativa o icone de player
        element = (
            <div className="area-icon">
                <IconPlay />
            </div>
        );
    }else{
        //Colocando apenas os nomes
        element=(
            props.streamer || props.city || props.group
        );
    }

    if(props.ranking){
        //quando é um ranking com corações
        element = (
            <div className="cont-title-coracao">
                {props.streamer || props.city || props.group}
                <div className="cont-coracao">
                    <Heart heartsValue={ props.coracao }/>
                </div>
            </div>
        );
    }

    return(
        <Container>
            <Link
                to={props.linkCard}
                style={{ textDecoration: 'none'}}
            >
                <div className="cont-aux">
                    <div className="area-img-card">
                        <img src={props.imgCard} alt={props.altImg}/>
                    </div>
                    <div className="area-info">
                        {element}
                    </div>
                </div>
            </Link>
        </Container>
    );
}
export default CardHome;

//