import React, { useState, useEffect } from 'react';
import { 
    Container, 
    AreaForm, 
    Form, 
    AreaButton,
    AreaContent,
    AreaSearch,
    Table
} from './styles';
import { 
    registerClipe,
    getAll,
    searchByTitle,
    updateClipe,
    removeClipe
} from '../../service/clipeService';
import ButtonInput from '../../components/ButtonInput';
import { getAllSelect } from '../../service/streamerService';
import api from '../../service/api';
import Paginacao from '../../components/Paginacao';
import CardItemDashboard from '../../components/CardItemDashboard';



const DashboardClipe = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '3');


    const initialCityState = {
        id: null,
        titulo: '',
        url: '',
        coracao: 200,
        urlImageCapa: '',
        urlImageCard: '',
        streamerName: '',
        streamerId: null
    }
    const [editing , setEditing] = useState(false);
    const [getStreamer, setGetStreamer] = useState([]);
    const [clipeInput, setClipeInput] = useState(initialCityState);
    const [selectedStreamer, setSelectedStreamer] = useState("selecione");
    const token = localStorage.getItem('token');
    const [limit] = useState(15);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [filteredClipe, setFilteredClipe] = useState([]);



    useEffect(()=>{

        if(token){
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        }

        const searchAndGetAll = () => {

            if(searchInput === ""){
                getAll(limit, paginaAtual).then((response) =>{
                    setPages(response.data['totalPages']);
                    setFilteredClipe(response.data.content);
                }).catch(
                    (e)=>{console.log(e)
                });
            }else{
                searchByTitle(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredClipe(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }

            //Pegando todos os Streamers
            getAllSelect().then((response) => {
                setGetStreamer(response.data.content)
            }
            ).catch((e) => {console.log(e)});

        }
        searchAndGetAll();

    },[paginaAtual, limit, searchInput, pages, token]);


    console.log(selectedStreamer)

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

    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };


    const handleSearch = event => {
        setSearchInput(event.target.value);
        console.log(searchInput)
    }

    const dadosEditarClipe = (item) => {
        setEditing(true);

        setClipeInput({
            id: item.id,
            titulo: item.titulo,
            url: item.url,
            urlImageCapa: item.urlImageCapa,
            urlImageCard: item.urlImageCard,
            streamerName: item.streamer.nome,
            streamerId: item.streamer.id
        });
    }

    const editarClipe = () => {
        
        const data = {
            'titulo': clipeInput.titulo,
            'url': clipeInput.url,
            'urlImageCapa': clipeInput.urlImageCapa,
            'urlImageCard': clipeInput.urlImageCard,
            'streamer': {
                'id': selectedStreamer
            }
        }

        updateClipe(clipeInput.id, data).then((response)=>{
            console.log(response)
        }).catch((e)=>{console.log(e)})
    }

    const removerClipe = (id) => {
        removeClipe(id).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        });
        
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
                            value={ clipeInput.urlImageCard } 
                            onChange={ changeValue }
                        />
                        <div className="title-input">Streamer Responsável</div>
                        
                        { editing ? (<div>Streamer Atual: { clipeInput.streamerName }</div>) : '' }
                        <div className="area-select-streamer">
                            <select value={selectedStreamer} size="1" onChange={e => setSelectedStreamer(e.target.value)}>
                                <option value="selecione">selecione</option>
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
                                        onclick={() => editarClipe()}
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
                <AreaSearch>
                    <div className="search-content">
                        <input 
                            className="input-search" 
                            placeholder="Digite o nome do grupo para Pesquisar"
                            value={searchInput}
                            onChange={handleSearch}      
                        />
                    </div>
                </AreaSearch>
                <AreaContent>
                    <Table>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Streamer</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredClipe.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.titulo}</td>
                                            <td>{item.streamer.nome}</td>
                                            <td onClick={()=> dadosEditarClipe(item)}>Editar</td>
                                            <td onClick={() => removerClipe(item.id)}>Remover</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Table>
                    <div className="area-pagination">
                        <Paginacao count={pages} onchange={handleChangePagination}/>        
                    </div>
                </AreaContent>
            </div>
        </Container>
    );
}
export default DashboardClipe;
