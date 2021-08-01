import React, { useEffect, useState } from 'react';
import {Container, AreaForm, Form} from './styles';

const DashboardCidade = () => {
    
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '1');

    const [cidadeInput, setCidadeInput] = useState({
        id: null,
        nome: '',
        urlImageCapa: '',
        urlImageCard: '',
        urlInstagram: '',
        urlTwitter: '',
        urlDiscord: ''
    });

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const {name, value} = event.target;
        setCidadeInput({...cidadeInput, [name]: value})
        
    }

    return(
        <Container>
            <div className="aux-cont">
                <AreaForm>
                    <Form>
                        <div className="title-input">Nome da Cidade</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite o nome da Cidade"
                            name="nome"
                            value={cidadeInput.nome }
                            onChange={changeValue}
                        />
                        <div className="title-input">Url Imagem capa</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem de capa"
                            name="urlImageCapa"    
                            value={cidadeInput.urlImageCapa }
                            onChange={changeValue}
                        />
                        <div className="title-input">Url imagem Card</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem para o Card"
                            name="urlImageCard"    
                            value={cidadeInput.urlImageCard }
                            onChange={changeValue}
                        />
                        <div className="redeSociais">Redes Sociais</div>
                        <div className="title-input">Instagram</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Instagram"
                            name="urlInstagram"    
                            value={cidadeInput.urlInstagram }
                            onChange={changeValue}
                        />
                        <div className="title-input">Discord</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Discord"
                            name="urlDiscord" 
                            value={cidadeInput.urlDiscord }   
                            onChange={changeValue}
                        />
                        <div className="title-input">Twitter</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Twitter"
                            name="urlTwitter"    
                            value={cidadeInput.urlTwitter }
                            onChange={changeValue}
                        />
                    </Form>
                </AreaForm>
            </div>
        </Container>
    );
}
export default DashboardCidade;
