import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const CardMain = (props) => {
    return(
        <Container>
            <Link
                to={`/streamer-detail/${props.id}`}
                style={{ textDecoration: 'none'}}
            >
                <div className="cont-aux">
                    <div className="area-img-card">
                        <img src={props.imgCard} alt={props.altImg}/>
                    </div>
                    <div className="area-info">
                        {props.streamer || props.city}
                    </div>
                </div>
            </Link>
        </Container>
    );
}
export default CardMain;