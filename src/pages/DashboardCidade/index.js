import React, { useEffect, useState } from 'react';
import {Container, AreaForm, AreaButton, AreaContent, AreaSearch, Form} from './styles';
import { getAll, registerCity, searchByName, updateCity, remove} from '../../service/cityService';
import ButtonInput from '../../components/ButtonInput';
import api from '../../service/api';
import CardItemDashboard from '../../components/CardItemDashboard';
import Paginacao from '../../components/Paginacao';
import ModalMsgEdit from '../../components/Modal/ModalMsgEdit';
import { useAuth } from '../../providers/auth';
import ModalMsgCreate from '../../components/Modal/ModalMsgCreate';
import ModalRemove from '../../components/Modal/ModalRemove';


const DashboardCidade = () => {

    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '1');
    const initialCityState = {
        id: null,
        nome: '',
        urlImageCapa: '',
        urlImageCard: '',
        urlInstagram: '',
        urlTwitter: '',
        urlDiscord: ''
    }
    const token = localStorage.getItem('token');
    const [cidadeInput, setCidadeInput] = useState(initialCityState);
    const [limit] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [filteredCity, setFilteredCity] = useState([]);
    const [editing , setEditing] = useState(false);
    const {
        activeModalMsgEdit,
        setActiveModalMsgEdit,
        activeModalMsgCreate,
        setActiveModalMsgCreate
    } = useAuth();
    const [activeModal, setActiveModal] = useState(false);
    const [idRemove, setIdRemove] = useState(false);

    useEffect(()=>{

        if(token){
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        }
        
        const searchAndGetAll = () => {
            if(searchInput === ""){
                getAll(limit, paginaAtual).then((response) =>{
                    setPages(response.data['totalPages']);
                    setFilteredCity(response.data.content);
                }).catch(
                    (e)=>{console.log(e)
                });
            }else{
                searchByName(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredCity(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }
        }
        searchAndGetAll();

    }, [paginaAtual, limit, searchInput, pages, total, token]);

    //Search
    const handleSearch = event => {
        setSearchInput(event.target.value)
    }

    //Pagination
    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const {name, value} = event.target;
        setCidadeInput({...cidadeInput, [name]: value})
        
    }

    async function handleSubmit(){
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'nome': cidadeInput.nome,
            'coracao': 300,
            'urlImageCapa': cidadeInput.urlImageCapa,
            'urlImageCard': cidadeInput.urlImageCard,
            'urlInstagram': cidadeInput.urlInstagram,
            'urlTwitter': cidadeInput.urlTwitter,
            'urlDiscord': cidadeInput.urlDiscord
        }

        await registerCity(data).then(response => {
            console.log(response);
            setActiveModalMsgCreate(true);
        }).catch(e => {
            console.log(e);
        })
    }

    /**
     * Metodo para fazer a alteração de um botão para outro,
     * e limpar o form.
    */
      const buttonReturn = () => {
        setEditing(false)
        setCidadeInput(initialCityState);
    }


    /**
     * Método para Preencher o form com a cidade selecionada
     * @param {*} item 
    */
     const dataEditing = (item) => {
        setEditing(true);
        console.log(item)
        
        setCidadeInput({
            id: item.id,
            nome: item.nome,
            urlImageCapa: item.urlImageCapa,
            urlImageCard: item.urlImageCard,
            urlInstagram: item.urlInstagram,
            urlTwitter: item.urlTwitter,
            urlDiscord: item.urlDiscord
        })
    }
  
    /**
     * Método para fazer o update na cidade selecionado
    */
    const updateCidade = () => {
        
        if(cidadeInput.id !== null){
            updateCity(cidadeInput.id, cidadeInput)
            .then(response => {
                setActiveModalMsgEdit(true);
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            });
            
        }else{
            alert("Selecione um contato");
        }
    };

    /**
     * Método para remover a cidade selecionada,
     * @param {*} id 
    */
     const removeCity = (id) => {
        if(id !== null){
            remove(id).then(response => {
                window.location.reload();//procucar uma forma de atualizar só os conteudos não a pagina toda
            }).catch(e => {
                console.log(e);
            });
            setActiveModal(false);
        }else{
            console.log('erro no id');
        }
    }

    //Método para ativar o modal e pegar o id
    const activeModalDelete = (id) => {
        setIdRemove(id);
        setActiveModal(true);
    }
    
    return(
        <Container>
            <div className="aux-cont">
                <ModalMsgCreate
                    active={activeModalMsgCreate}
                    msgModalCreate="Cidade adicionada com sucesso!"
                />
                <ModalMsgEdit
                    active={activeModalMsgEdit}
                    msgModalT="Atualizado com sucesso!"
                />
                <ModalRemove 
                    accepted={() => removeCity(idRemove)}
                    denied={() => setActiveModal(false)}
                    active={activeModal}
                /> 
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
                    {
                        editing ? (
                            <AreaButton>
                                <div className="button-update">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Atualizar"
                                        onclick={updateCidade}
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
                            placeholder="Digite o nome da cidade para Pesquisar"
                            value={searchInput}
                            onChange={handleSearch}      
                        />
                    </div>
                </AreaSearch>
                <AreaContent>
                    <div className="area-content-cards">
                        <div className="content-cards">
                            {filteredCity.map((item)=>(
                                <div className="cards" key={item.id}>
                                    <CardItemDashboard 
                                        id={item.id} 
                                        name={item.nome} 
                                        hearts={item.coracao} 
                                        urlImg={item.urlImageCard} 
                                        altUrl={item.nome}
                                        onclickEdit={() => dataEditing(item)}
                                        onclickDelete={() => activeModalDelete(item.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="area-pagination">
                        <Paginacao count={pages} onchange={handleChangePagination}/>        
                    </div>
                </AreaContent>
            </div>
        </Container>
    );
}
export default DashboardCidade;
