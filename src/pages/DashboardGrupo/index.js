import React, { useEffect, useState } from 'react';
import './styles';
import { 
    Container, 
    AreaForm, 
    AreaButton, 
    AreaContent, 
    AreaSearch, 
    Form, 
    AreaAssociation
} from './styles';
import {
    getAll, 
    registerGroup, 
    searchByName, 
    updateGroup, 
    remove, 
    registerLeader, 
    registerMember, 
    registerCity,
    removeLeader,
    removeMember,
    removeCity
} from '../../service/groupService';
import { getAllSelect } from '../../service/streamerService';
import { getAllSelectCity } from '../../service/cityService';
import { useAuth } from '../../providers/auth';
import ButtonInput from '../../components/ButtonInput';
import Paginacao from '../../components/Paginacao';
import api from '../../service/api';
import CardItemDashboard from '../../components/CardItemDashboard';
import ModalMsgEdit from '../../components/Modal/ModalMsgEdit';
import ModalMsgCreate from '../../components/Modal/ModalMsgCreate';
import ModalRemove from '../../components/Modal/ModalRemove';


const DashboardGrupo = () => {

    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '4');

    const initialCityState = {
        id: null,
        nome: '',
        genero: '',
        urlImageCapa: '',
        urlImageCard: ''
    }
    const token = localStorage.getItem('token');
    const [editing , setEditing] = useState(false);
    const [grupoInput, setGrupoInput] = useState(initialCityState);
    const [limit] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [filteredGroup, setFilteredGroup] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [idRemove, setIdRemove] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState("selecione");
    const [selectedStreamer, setSelectedStreamer] = useState("selecione");
    const [selectedStreamerMember, setSelectedStreamerMember] = useState("selecione");
    const [selectedGroupMember, setSelectedGroupMember] = useState("selecione");
    const [selectedCity, setSelectedCity] = useState("selecione");
    const [selectedGender, setSelectedGender] = useState("selecione");
    const [selectedGroupCity, setSelectedGroupCity] = useState("selecione");
    
    const [citySelect, setCitySelect] = useState([]);
    const [streamerSelect, setStreamerSelect] = useState([]);
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
                    setFilteredGroup(response.data.content);
                }).catch(
                    (e)=>{console.log(e)
                });
            }else{
                searchByName(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredGroup(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }

            //Pegando todos os streamers
            getAllSelect().then(response => {
                setStreamerSelect(response.data.content);
            });

            //Pegando todas as cidades
            getAllSelectCity().then(response => {
                setCitySelect(response.data.content);
            })
        }
        searchAndGetAll();

    }, [paginaAtual, limit, searchInput, pages, total, token]);


    const generoGrupo = [
        {
            id: 1,
            genero: 'Policia'
        },
        {
            id: 2,
            genero: 'Facção'
        },
        {
            id: 3,
            genero: 'Adm'
        },
        {
            id: 4,
            genero: 'Outros'
        }
    ]

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
        setGrupoInput({...grupoInput, [name]: value})    
    }

    async function handleSubmit(){
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'nome': grupoInput.nome,
            'genero': selectedGender,
            'coracao': 300,
            'urlImageCapa': grupoInput.urlImageCapa,
            'urlImageCard': grupoInput.urlImageCard
        }

        await registerGroup(data).then(response => {
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
        setGrupoInput(initialCityState);
    }


    /**
     * Método para Preencher o form com o grupo selecionado
     * @param {*} item 
    */
     const dataEditing = (item) => {
        setEditing(true);
        //console.log(item)
        
        setGrupoInput({
            id: item.id,
            nome: item.nome,
            genero: item.genero,
            urlImageCapa: item.urlImageCapa,
            urlImageCard: item.urlImageCard
        })
    }

    /**
     * Método para fazer o update no grupo selecionado
    */
     const updateGrupo = () => {

        const data = {
            'nome': grupoInput.nome,
            'genero': selectedGender,
            'urlImageCapa': grupoInput.urlImageCapa,
            'urlImageCard': grupoInput.urlImageCard
        }

        if(grupoInput.id !== null){
            updateGroup(grupoInput.id, data)
            .then(response => {
                setActiveModalMsgEdit(true);
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            });
            
        }else{
            alert("Selecione um grupo");
        }
    };

    /**
     * Método para remover o grupo selecionado,
     * @param {*} id 
    */
     const removeGroup = (id) => {
        if(id !== null){
            remove(id).then(() => {
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
     * entre o grupo e o streamer
    */
    async function handleSubmitAssociationLeader(){
        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        
        if(selectedGroup !== "selecione" && selectedStreamer !== "selecione"){
            await registerLeader(selectedGroup, selectedStreamer).then(response =>{
                console.log(response);
            }).catch(e => {
                console.log(e);
            });        
        }
    }

    /**
     * Função para cadastrar uma associação
     * entre o grupo e o streamer
    */
     async function handleSubmitAssociationMember(){
        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        if(selectedGroupMember !== "selecione" && selectedStreamerMember !== "selecione"){
            await registerMember(selectedGroupMember, selectedStreamerMember).then(response =>{
                console.log(response);
            }).catch(e => {
                console.log(e);
            });        
        }
    }

    /**
     * Função para cadastrar uma associação
     * entre o grupo e a cidade
    */
     async function handleSubmitAssociationCity(){
        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        if(selectedGroupCity !== "selecione" && selectedCity !== "selecione"){
            await registerCity(selectedGroupCity, selectedCity).then(response =>{
                console.log(response);
            }).catch(e => {
                console.log(e);
            });        
        }
    }

    const removeAssociationLeader = () => {
        removeLeader(selectedGroup, selectedStreamer).then(() => {
            window.location.reload();
        }).catch(e => {
            console.log(e);
        });
    }

    const removeAssociationMember = () => {
        removeMember(selectedGroupMember, selectedStreamerMember).then(() => {
            window.location.reload();
        }).catch(e => {
            console.log(e);
        });
    }

    const removeAssociationCity = () => {
        removeCity(selectedGroupCity, selectedCity).then(() => {
            window.location.reload();
        }).catch(e => {
            console.log(e);
        });
    }

    return(
        <Container>
            <div className="aux-cont">
                <ModalMsgCreate
                    active={activeModalMsgCreate}
                    msgModalCreate="Grupo adicionado com sucesso!"
                />
                <ModalMsgEdit
                    active={activeModalMsgEdit}
                    msgModalT="Atualizado com sucesso!"
                />
                <ModalRemove 
                    accepted={() => removeGroup(idRemove)}
                    denied={() => setActiveModal(false)}
                    active={activeModal}
                /> 
                <AreaForm>
                    <Form>
                        <div className="title-input">Nome do Grupo</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite o nome do Grupo"
                            name="nome"
                            value={grupoInput.nome}
                            onChange={changeValue}
                        />
                        <div className="title-input">Gênero do Grupo</div>
                        <div className="area-select-genero">
                            <select value={selectedGender} size="1" onChange={e => setSelectedGender(e.target.value)}>
                                <option value="selecione">Selecione</option>
                                {
                                    generoGrupo.map( (item) => (
                                        <option key={item.id} value={item.genero}>{item.genero}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="title-input">Url Imagem capa</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem de capa"
                            name="urlImageCapa"    
                            value={grupoInput.urlImageCapa }
                            onChange={changeValue}
                        />
                        <div className="title-input">Url imagem Card</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem para o Card"
                            name="urlImageCard"    
                            value={grupoInput.urlImageCard }
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
                                        onclick={updateGrupo}
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

                    <AreaAssociation>
                        <div className="title-association">
                            Quem é o líder do Grupo?
                        </div>
                        <div className="content-association">
                            <div>
                                <div>Selecione o Grupo</div>
                                <div className="area-select-group">
                                    <select value={selectedGroup} size="1" onChange={e => setSelectedGroup(e.target.value)}>
                                        <option value="selecione">selecione</option>
                                        {filteredGroup.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
                                        ))}    
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Selecione o Streamer</div>
                                <div className="area-select-streamer">
                                    <select value={selectedStreamer} size="1" onChange={e => setSelectedStreamer(e.target.value)}>  
                                        <option value="selecione">selecione</option>
                                        {streamerSelect.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
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
                                        onclick={handleSubmitAssociationLeader}    
                                    />
                                </div>
                                <div className="button-delete-association">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Deletar"
                                        onclick={removeAssociationLeader}    
                                    />
                                </div>
                            </AreaButton>
                        </div>
                    </AreaAssociation>
                    <AreaAssociation>
                        <div className="title-association">
                            Quem faz parte do Grupo?
                        </div>
                        <div className="content-association">
                            <div>
                                <div>Selecione o Grupo</div>
                                <div className="area-select-group">
                                    <select value={selectedGroupMember} size="1" onChange={e => setSelectedGroupMember(e.target.value)}>
                                        <option value="selecione">selecione</option>
                                        {filteredGroup.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
                                        ))}    
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Selecione o Streamer</div>
                                <div className="area-select-streamer">
                                    <select value={selectedStreamerMember} size="1" onChange={e => setSelectedStreamerMember(e.target.value)}>  
                                        <option value="selecione">selecione</option>
                                        {streamerSelect.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
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
                                        onclick={handleSubmitAssociationMember}    
                                    />
                                </div>
                                <div className="button-delete-association">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Deletar"
                                        onclick={removeAssociationMember}    
                                    />
                                </div>
                            </AreaButton>
                        </div>
                    </AreaAssociation>
                    <AreaAssociation>
                        <div className="title-association">
                            O Grupo Joga em qual Cidade?
                        </div>
                        <div className="content-association">
                            <div>
                                <div>Selecione o Grupo</div>
                                <div className="area-select-group">
                                    <select value={selectedGroupCity} size="1" onChange={e => setSelectedGroupCity(e.target.value)}>
                                        <option value="selecione">selecione</option>
                                        {filteredGroup.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
                                        ))}    
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Selecione a Cidade</div>
                                <div className="area-select-streamer">
                                    <select value={selectedCity} size="1" onChange={e => setSelectedCity(e.target.value)}>  
                                        <option value="selecione">selecione</option>
                                        {citySelect.map((item)=>(
                                            <option key={item.id} value={item.id}>
                                                {item.id} - {item.nome}
                                            </option>
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
                                        onclick={handleSubmitAssociationCity}    
                                    />
                                </div>
                                <div className="button-delete-association">
                                    <ButtonInput 
                                        type="submit" 
                                        value="Deletar"
                                        onclick={removeAssociationCity}    
                                    />
                                </div>
                            </AreaButton>
                        </div>
                    </AreaAssociation>
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
                    <div className="area-content-cards">
                        <div className="content-cards">
                            {filteredGroup.map((item)=>(
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
export default DashboardGrupo;
