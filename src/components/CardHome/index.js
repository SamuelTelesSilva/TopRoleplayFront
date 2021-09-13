import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IconPlay } from './styles';

const CardHome = (props) => {
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
                        {props.clipe ? (
                            <div className="area-icon">
                                <IconPlay />
                            </div>
                        ) : props.streamer || props.city || props.group}
                    </div>
                </div>
            </Link>
        </Container>
    );
}
export default CardHome;

//