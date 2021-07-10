import React from 'react';
import { Container, AreaImgCard, AreaContentCard, AreaButton, IconEdit, IconDelete} from './styles';

function CardItemDashboard(){
    return(
        <Container>
            <AreaImgCard>
                <div className="area-img">
                    <img src="https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_afterhours_taleofus2_256x256.jpg" alt="imagem do card"/>
                </div>
            </AreaImgCard>
            <AreaContentCard>
                <div className="content-card">
                    <div>
                        <span>Id: </span> 1
                    </div>
                    <div>
                        <span>Nome: </span> Samuel Teles
                    </div>
                    <div>
                        <span>Estrelas: </span> 5
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