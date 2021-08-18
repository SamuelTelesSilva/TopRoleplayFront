import React, { useState, useEffect } from 'react';
import { 
    Container, 
    AreaForm, 
    Form, 
    AreaButton
} from './styles';
import { registerClipe } from '../../service/clipeService';
import ButtonInput from '../../components/ButtonInput';
import { getAllSelect } from '../../service/streamerService';
import api from '../../service/api';

const DashboardClipe = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '3');


    const initialCityState = {
        id: null,
        titulo: '',
        url: '',
        coracao: 200,
        urlImageCapa: '',
        urlImageCard: ''
    }
    const [editing , setEditing] = useState(false);
    const [getStreamer, setGetStreamer] = useState([]);
    const [clipeInput, setClipeInput] = useState(initialCityState);
    const [selectedStreamer, setSelectedStreamer] = useState("selecione");
    const token = localStorage.getItem('token');


    useEffect(()=>{

        if(token){
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        }

        const searchAndGetAll = () => {
            getAllSelect().then((response) => {
                setGetStreamer(response.data.content)
            }
            ).catch((e) => {console.log(e)});
        }
        searchAndGetAll();
    },[]);


    const changeValue = (event) => {
        const {name, value} = event.target;
        setClipeInput({...clipeInput, [name]: value})    
    }

    async function handleSubmit(){
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'titulo': clipeInput.titulo,
            'url': clipeInput.url,
            'coracao': 200,
            'urlImageCapa': clipeInput.urlImageCapa,
            'urlImageCard': clipeInput.urlImageCard,
            'streamer': {
                'id': selectedStreamer
            }
        }

        if(selectedStreamer === 'selecione'){
            alert('Você tem que atribuir um streamer para adicionar um clipe');
        }else{
            await registerClipe(data).then(response => {
                alert(
                    response.status === 201 ? 
                        'Cadastrado com Sucesso!': 
                        'Ocorreu um erro'
                )
            }).catch( (e)=>{console.log(e)} );
        }
    }

    

    return(
        <Container>
            <div className="aux-cont">
                <AreaForm>
                    <Form>
                        <div className="title-input">Título do Clipe</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite o título do Clipe"
                            name="titulo"
                            value={clipeInput.titulo}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url do Clipe</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite a url do Clipe"
                            name="url"
                            value={clipeInput.url}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url Imagem capa</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem de capa"
                            name="urlImageCapa"
                            value={clipeInput.urlImageCapa}    
                            onChange={changeValue}
                        />
                        <div className="title-input">Url imagem Card</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem para o Card"
                            name="urlImageCard"   
                            value={clipeInput.urlImageCard} 
                            onChange={changeValue}
                        />
                        <div className="title-input">Streamer Responsável</div>
                        <div className="area-select-streamer">
                            <select value={selectedStreamer} size="1" onChange={e => setSelectedStreamer(e.target.value)}>
                                <option value="selecione">Selecione</option>
                                {
                                    getStreamer.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            Id: {item.id} - Nome: {item.nome}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </Form>
                    
                    {
                        editing ? (
                            <AreaButton>
                                <div className="button-update">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Atualizar"
                                        
                                    />
                                </div>
                                <div className="button-return">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Voltar"
                                            
                                    />
                                </div>
                            </AreaButton>
                        ) :
                        (
                            <AreaButton>
                                <div className="button-register">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Cadastrar"
                                        onclick={handleSubmit}
                                    />
                                </div>
                            </AreaButton>
                        )
                    }
                </AreaForm>
            </div>
        </Container>
    );
}
export default DashboardClipe;
