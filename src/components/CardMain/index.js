import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const CardMain = (props) => {
    return(
        <Container>
            <div className="area-img-card">
                <img src={props.imgCard} alt={props.title} />
            </div>
            <div className="area-content-card">
                <div className="card-title">
                    <Link to={`/clipe/${props.clipeID}/${props.title}`} style={{ textDecoration: 'none'}}> {/* 2 - Criar o link para passar os parametros para o router */}
                        {props.title}
                    </Link>
                </div>
                <div className="card-name-streamer">
                    {props.streamer}
                </div>
            </div>
        </Container>
    );
}
export default CardMain;