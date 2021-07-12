import React from 'react';
import Heart from '../Heart';
import { Container, AreaImgCard, AreaContentCard, AreaButton, IconEdit, IconDelete} from './styles';

function CardItemDashboard(props){
    return(
        <Container>
            <AreaImgCard>
                <div className="area-img">
                    <img src={props.urlImg} alt={props.altUrl}/>
                </div>
            </AreaImgCard>
            <AreaContentCard>
                <div className="content-card">
                    <div>
                        <span>Id: </span> {props.id}
                    </div>
                    <div>
                        <span>Nome: </span> {props.name}
                    </div>
                    <div>
                        <span>Corações: </span>
                        <Heart heartsValue={props.hearts}/>
                    </div>
                </div>
            </AreaContentCard>
            <AreaButton>
                <IconEdit/>
                <IconDelete/>
            </AreaButton>
        </Container>
    );
}
export default CardItemDashboard;