import React, { useState, useEffect } from 'react';
import { Container, AreaForm, AreaButton, AreaContent, AreaAssociation, AreaSearch} from './styles';
import ButtonInput from '../../components/ButtonInput';
import CardItemDashboard from '../../components/CardItemDashboard';
import Paginacao from '../../components/Paginacao';
import { registerStreamer, getAll, searchByName, updateStreamer, remove, registerAssociationStreamer, updateStreamerAssociation} from '../../service/streamerService';
import { getAllSelect } from '../../service/cityService';
import api from '../../service/api';
import Form from '../../components/Form';
import ModalRemove from '../../components/Modal/ModalRemove'; 
import ModalMsgEdit from '../../components/Modal/ModalMsgEdit'; 
import { useAuth } from '../../providers/auth';
import ModalMsgCreate from '../../components/Modal/ModalMsgCreate';

const DashboardStreamer = () => {

    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina','2');

    const initialStreamerState = {
        id: null,
        nome: '',
        urlImageCapa: '',
        urlImageCard: '',
        urlInstagram: '',
        urlTwitter: '',
        urlPlataformaStream: '',
        idCity: null
    }
    
    const [searchInput, setSearchInput] = useState("");
    const [filteredStreamer, setFilteredStreamer] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [citySelect, setCitySelect] = useState([]);
    const [selectedStreamer, setSelectedStreamer] = useState("selecione");
    const [selectedCity, setSelectedCity] = useState("selecione");
    const [selectedStreamerUpdate, setSelectedStreamerUpdate] = useState("selecione");
    const [selectedCityUpdate, setSelectedCityUpdate] = useState("selecione");
    const [limit] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const token = localStorage.getItem('token');
    const [editing , setEditing] = useState(false);
    const [streamerInput, setStreamerInput] = useState(initialStreamerState);
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
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
        }
        /**
        * Metodo para fazer um getAll com busca pelo nome
        */
        const searchAndGetAll = () => {
            if(searchInput === ""){
                getAll(limit, paginaAtual).then((response) => {
                    setPages(response.data['totalPages']);
                    setFilteredStreamer(response.data.content);
                }).catch(e => {
                    console.log("Erro ao utilizar o getAll " + e);
                });
            }else{
                searchByName(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredStreamer(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }

            //Pegando as cidades
            getAllSelect().then((response)=>{
                setCitySelect(response.data.content)
            }).catch(e => {
                console.log("Erro ao utilizar o getAllSelect " + e);
            });
        }
        searchAndGetAll();
    }, [token, paginaAtual, limit, searchInput, pages, total]);

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setStreamerInput({...streamerInput, [name]: value});
    }

    //Pagination
    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };

    //Search
    const handleSearch = event => {
        setSearchInput(event.target.value)
    }

    /**
     * Método para cadastrar um Streamer 
    */
    async function handleSubmit(){
        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'nome': streamerInput.nome,
            'coracao': 150,
            'urlImageCapa': streamerInput.urlImageCapa,
            'urlImageCard': streamerInput.urlImageCard,
            'urlInstagram': streamerInput.urlInstagram ,
            'urlTwitter':  streamerInput.urlTwitter,
            'urlPlataformaStream': streamerInput.urlPlataformaStream
        }

        await registerStreamer(data).then(response => {
            console.log(response)
            setActiveModalMsgCreate(true)
        }).catch(e => {
            console.log(e)
        });
    }

    /**
     * Metodo para fazer a alteração de um botão para outro,
     * e limpar o form.
    */
    const buttonReturn = () => {
        setEditing(false)
        setStreamerInput(initialStreamerState);
    }

    /**
     * Método para Preencher o form com o streamer selecionado
     * @param {*} item 
    */
    const dataEditing = (item) => {
        setEditing(true)
        setCityData(item.cidade)
        
        setStreamerInput({
            id: item.id,
            nome: item.nome,
            urlImageCapa: item.urlImageCapa,
            urlImageCard: item.urlImageCard,
            urlInstagram: item.urlInstagram,
            urlTwitter: item.urlTwitter,
            urlPlataformaStream: item.urlPlataformaStream
        })
    }
  
    /**
     * Método para fazer o update no streamer selecionado
    */
    const updateStreamers = () => {
        
        if(streamerInput.id !== null){
            updateStreamer(streamerInput.id, streamerInput)
            .then(response => {
                setActiveModalMsgEdit(true);
            })
            .catch(e => {
                console.log(e);
            });
            
        }else{
            alert("Selecione um contato");
        }
    };

    /**
     * Método para remover o streamer selecionado,
     * @param {*} id 
    */
    const removeStreamer = (id) => {
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

    
    /**
     * Função para cadastrar uma associação
     * entre o streamer e a cidade(servidor),
     * onde ele joga.
    */
    async function handleSubmitAssociation(){
        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        if(selectedStreamer === "selecione" || selectedCity === "selecione"){
            alert('selecione corretamente as opções');
        }else{
            await registerAssociationStreamer(selectedCity, selectedStreamer).then(response => {
                if(response.status === 200){
                    alert('Associação cadastrada com sucesso!');
                }
            }).catch(e => {
                alert('Ocorreu um erro, possivelmente já existe essa associação cadastrada. ' + e);
            });
        }
    }

    /**
     * Fazer a atualização da associação cadastrada 
    */
    const updateAssociationStreamer = () => {
        if(selectedCity === "selecione" || selectedStreamerUpdate === "selecione" || selectedCityUpdate === "selecione"){
            alert('selecione corretamente as opções');
        }else{
            updateStreamerAssociation(selectedCity, selectedStreamerUpdate, selectedCityUpdate)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        }
    };

    return(
        <Container>
            <div className="aux-cont">     
                <ModalRemove 
                    accepted={() => removeStreamer(idRemove)}
                    denied={() => setActiveModal(false)}
                    active={activeModal}
                /> 
                <ModalMsgEdit 
                    active={activeModalMsgEdit}
                    msgModalT="Atualizado com sucesso!"
                />
                <ModalMsgCreate
                    active={activeModalMsgCreate}
                    msgModalCreate="Streamer adicionado com sucesso!"
                />
                <AreaForm>
                    <Form 
                        streamerInput={streamerInput}
                        onchange={changeValue}    
                    />
                    {
                        editing ? (
                            <AreaButton>
                                <div className="button-update">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Atualizar"
                                        onclick={updateStreamers}
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
                            placeholder="Digite o nome do Streamer para Pesquisar"
                            value={searchInput}
                            onChange={handleSearch}      
                        />
                    </div>
                </AreaSearch>

                {editing ? (
                    <AreaAssociation>
                        <div className="title-association">
                            Atualizar Associação
                        </div>
                        <div className="content-association">
                            <div>
                                <div>Streamer Atual</div>
                                <div className="area-select-streamer">
                                    <select value={selectedStreamerUpdate} size="1" onChange={e => setSelectedStreamerUpdate(e.target.value)}>
                                        <option value="selecione">Selecione</option>
                                        <option value={streamerInput.id}>{streamerInput.nome}</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Cidade Atual</div>
                                <div className="area-select-city">
                                    <select value={selectedCityUpdate} size="1" onChange={e => setSelectedCityUpdate(e.target.value)}>  
                                        <option value="selecione">selecione</option>
                                        {cityData.map((city)=>(
                                            <option key={city.id} value={city.id}>{city.nome}</option>
                                        ))}    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="title-update">Selecione a Cidade para Substituir a Atual</div>
                            <div className="area-select-city">
                                <select value={selectedCity} size="1" onChange={e => setSelectedCity(e.target.value)}>  
                                    <option value="selecione">selecione</option>
                                    {citySelect.map((item)=>(
                                        <option key={item.id} value={item.id}>{item.nome}</option>
                                    ))}    
                                </select>
                            </div>
                        </div>
                        <div className="area-button-association">
                            <AreaButton>
                                <div className="button-register-association">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Atualizar"
                                        onclick={updateAssociationStreamer}    
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
                            
                        </div>
                    </AreaAssociation>
                ): (
                    <AreaAssociation>
                        <div className="title-association">
                            Cadastrar Associação
                        </div>
                        <div className="content-association">
                            <div>
                                <div>Selecione o Streamer</div>
                                <div className="area-select-streamer">
                                    <select value={selectedStreamer} size="1" onChange={e => setSelectedStreamer(e.target.value)}>
                                        <option value="selecione">selecione</option>
                                        {filteredStreamer.map((item)=>(
                                            <option key={item.id} value={item.id}>{item.nome}</option>
                                        ))}    
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Selecione a Cidade</div>
                                <div className="area-select-city">
                                    <select value={selectedCity} size="1" onChange={e => setSelectedCity(e.target.value)}>  
                                        <option value="selecione">selecione</option>
                                        {citySelect.map((item)=>(
                                            <option key={item.id} value={item.id}>{item.nome}</option>
                                        ))}    
                                    </select>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="area-button-association">
                            <AreaButton>
                                <div className="button-register-association">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Associar"
                                        onclick={handleSubmitAssociation}    
                                    />
                                </div>
                            </AreaButton>
                        </div>
                    </AreaAssociation>
                )}
                <AreaContent>
                    <div className="area-content-cards">
                        <div className="content-cards">
                            {filteredStreamer.map((item)=>(
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
export default DashboardStreamer;
