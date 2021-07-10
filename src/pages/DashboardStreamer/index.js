import React from 'react';
import { Container, AreaForm, Form, AreaButton } from './styles';
import ButtonInput from '../../components/ButtonInput';

const DashboardStreamer = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina','2');

    return(
        <Container>
           <AreaForm>
                <Form>
                    <div className="title-input">Nome do  Streamer</div>
                    <input type="text" placeholder="Digite o nome do streamer"/>
                    <div className="title-input">Url imagem 1</div>
                    <input type="text" placeholder="Url da imagem de capa"/>
                    <div className="title-input">Url imagem 2</div>
                    <input type="text" placeholder="Url da imagem para o Card"/>
                    <div className="redeSociais">Redes Sociais</div>
                    <div className="title-input">Instagram</div>
                    <input type="text" placeholder="Url do Instagram"/>
                    <div className="title-input">Discord</div>
                    <input type="text" placeholder="Url do Discord"/>
                    <div className="title-input">Twitter</div>
                    <input type="text" placeholder="Url do Twitter"/>
                </Form>
                <AreaButton>
                    <div className="button-register">
                        <ButtonInput type="submit" value="Cadastrar"/>
                    </div>
                    <div className="button-update">
                        <ButtonInput type="submit" value="Atualizar"/>
                    </div>
                </AreaButton>
           </AreaForm>
        </Container>
    );
}
export default DashboardStreamer;
