import React, { useState, useEffect } from 'react';

import { 
    Container, 
    AreaForm, 
    Form, 
    AreaButton,
    AreaContent,
    AreaSearch,
    Table,
    IconEdit, 
    IconDelete
} from './styles';
import { 
    registerEvento,
    getAll,
    searchByTitle,
    updateEvento,
    removeEvento
} from '../../../service/eventoService';
import ButtonInput from '../../../components/ButtonInput';
import api from '../../../service/api';
import Paginacao from '../../../components/Paginacao';
import ModalRemove from '../../../components/Modal/ModalRemove'; 
import ModalMsgEdit from '../../../components/Modal/ModalMsgEdit'; 
import ModalMsgCreate from '../../../components/Modal/ModalMsgCreate';
import { useAuth } from '../../../providers/auth';



const DashboardEvento = () => {
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '5');

    const initialCityState = {
        id: null,
        titulo: '',
        urlStream1: '',
        urlStream2: '',
        urlStream3: '',
        urlStream4: '',
        urlImageCapa: '',
        urlImageCard: ''
       
    }

    const [editing , setEditing] = useState(false);
    const [eventoInput, setEventoInput] = useState(initialCityState);
    const token = localStorage.getItem('token');
    const [limit] = useState(15);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [filteredEvento, setFilteredEvento] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [idRemove, setIdRemove] = useState(false);
    const {
        activeModalMsgEdit,
        setActiveModalMsgEdit,
        activeModalMsgCreate,
        setActiveModalMsgCreate
    } = useAuth();


    useEffect(()=>{
    
        if(token){
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        }

        const searchAndGetAll = () => {

            if(searchInput === ""){
                getAll(limit, paginaAtual).then((response) =>{
                    setPages(response.data['totalPages']);
                    setFilteredEvento(response.data.content);
                }).catch(
                    (e)=>{console.log(e)
                });
            }else{
                searchByTitle(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredEvento(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }
        }
        searchAndGetAll();
    },[paginaAtual, limit, searchInput, pages, token]);

    const changeValue = (event) => {
        const {name, value} = event.target;
        setEventoInput({...eventoInput, [name]: value})    
    }

    async function handleSubmit(){
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'titulo': eventoInput.titulo,
            'urlVideo1': eventoInput.urlStream1,
            'urlVideo2': eventoInput.urlStream2,
            'urlVideo3': eventoInput.urlStream3,
            'urlVideo4': eventoInput.urlStream4,
            'urlImgCapa': eventoInput.urlImageCapa,
            'urlImgCard': eventoInput.urlImageCard,
        }
        await registerEvento(data).then(response => {
            response.status === 201 ? setActiveModalMsgCreate(true) : alert('Ocorreu um erro')
        }).catch( (e)=>{console.log(e)} );
    }

    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };

    const handleSearch = event => {
        setSearchInput(event.target.value);
    }

    const dadosEditarEvento = (item) => {
        setEditing(true);

        setEventoInput({
            id: item.id,
            titulo: item.titulo,
            urlStream1: item.urlVideo1,
            urlStream2: item.urlVideo2,
            urlStream3: item.urlVideo3,
            urlStream4: item.urlVideo4,
            urlImageCapa: item.urlImgCapa,
            urlImageCard: item.urlImgCard,
        });
    }

    const editarEvento = () => {
        

        const data = {
            'titulo': eventoInput.titulo,
            'urlVideo1': eventoInput.urlStream1,
            'urlVideo2': eventoInput.urlStream2,
            'urlVideo3': eventoInput.urlStream3,
            'urlVideo4': eventoInput.urlStream4,
            'urlImgCapa': eventoInput.urlImageCapa,
            'urlImgCard': eventoInput.urlImageCard,   
        }

        updateEvento(eventoInput.id, data).then((response)=>{
            response.status === 200 ? setActiveModalMsgEdit(true) : alert('Ocorreu um erro')
        }).catch((e)=>{console.log(e)})
    }

    const activeModalDelete = (id) => {
        setIdRemove(id);
        setActiveModal(true);
    }

    const removerEvento = (id) => {
        removeEvento(id).then((response)=>{
            response.status === 200 ? window.location.reload() : alert('Ocorreu um erro')
        }).catch((e)=>{
            console.log(e)
        }); 
        setActiveModal(false);
    }

    const buttonReturn = () => {
        setEditing(false)
        setEventoInput(initialCityState);
    }

    return(
        <Container>
            <div className="aux-cont">
                <ModalRemove 
                    accepted={() => removerEvento(idRemove)}
                    denied={() => setActiveModal(false)}
                    active={activeModal}
                /> 
                <ModalMsgEdit 
                    active={activeModalMsgEdit}
                    msgModalT="Atualizado com sucesso!"
                />
                <ModalMsgCreate
                    active={activeModalMsgCreate}
                    msgModalCreate="Evento adicionado com sucesso!"
                />
                <AreaForm>
                    <Form>
                        <div className="title-input">Título do Evento</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite o título do Evento"
                            name="titulo"
                            value={eventoInput.titulo}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url da Stream 1</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite a url da Stream"
                            name="urlStream1"
                            value={eventoInput.urlStream1}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url da Stream 2</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite a url da Stream"
                            name="urlStream2"
                            value={eventoInput.urlStream2}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url da Stream 3</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite a url da Stream"
                            name="urlStream3"
                            value={eventoInput.urlStream3}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url da Stream 4</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite a url da Stream"
                            name="urlStream4"
                            value={eventoInput.urlStream4}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url Imagem capa</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem de capa"
                            name="urlImageCapa"
                            value={eventoInput.urlImageCapa}    
                            onChange={changeValue}
                        />
                        <div className="title-input">Url imagem Card</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem para o Card"
                            name="urlImageCard"   
                            value={ eventoInput.urlImageCard } 
                            onChange={ changeValue }
                        />
                    </Form>
                    
                    {
                        editing ? (
                            <AreaButton>
                                <div className="button-update">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Atualizar"
                                        onclick={() => editarEvento()}
                                    />
                                </div>
                                <div className="button-return">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Voltar"
                                        onclick={buttonReturn}
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
                            placeholder="Digite o nome do Evento para Pesquisar"
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
                                    <th>Url Stream 1</th>
                                    <th>Url Stream 2</th>
                                    <th>Url Stream 3</th>
                                    <th>Url Stream 4</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredEvento.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.titulo}</td>
                                            <td>{item.urlVideo1}</td>
                                            <td>{item.urlVideo2}</td>
                                            <td>{item.urlVideo3}</td>
                                            <td>{item.urlVideo4}</td>
                                            <td onClick={()=> dadosEditarEvento(item)}>
                                                <IconEdit/>
                                            </td>
                                            <td onClick={() => activeModalDelete(item.id)}>
                                                <IconDelete />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Table>
                    <div className="area-pagination">
                        <Paginacao active={true} count={pages} onchange={handleChangePagination}/>    
                        
                    </div>
                </AreaContent>
            </div>
        </Container>
    );
}
export default DashboardEvento;

