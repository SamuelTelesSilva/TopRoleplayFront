import React, { useState, useEffect } from 'react';
import { Container, AreaForm, AreaButton, AreaContent } from './styles';
import ButtonInput from '../../components/ButtonInput';
import CardItemDashboard from '../../components/CardItemDashboard';
import Paginacao from '../../components/Paginacao';
import { registerStreamer, getAll, searchByName, updateStreamer, remove} from '../../service/streamerService'
import api from '../../service/api';
import Form from '../../components/Form';

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
        urlPlataformaStream: ''
    }
    
    const [searchInput, setSearchInput] = useState("");
    const [filteredContact, setFilteredContact] = useState([]); 
    const [limit] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const token = localStorage.getItem('token');
    const [streamerInput, setStreamerInput] = useState(initialStreamerState);
    const [editing , setEditing] = useState(false);
    

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
                    setFilteredContact(response.data.content)
                }).catch(e => {
                    console.log("Erro ao utilizar o getAll " + e);
                });
            }else{
                searchByName(limit, paginaAtual, searchInput)
                .then((response) => {
                    setFilteredContact(response.data.content)
                    setPages(response.data['totalPages']);
                }).catch(e => {
                    console.log("Erro ao utilizar o searchByName " + e);
                });
            }
        }
        searchAndGetAll();
    }, [token, paginaAtual, limit, searchInput, pages, total]);

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setStreamerInput({...streamerInput, [name]: value});
        console.log(streamerInput)
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
        console.log(streamerInput)
        if(streamerInput.id !== null){
            updateStreamer(streamerInput.id, streamerInput)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
            
        }else{
            alert("Selecione um contato");
        }
    };


    /**
     * Método para remover o streamer selecionado
     * @param {*} id 
    */
    const removeStreamer = (id) => {
        remove(id).then(response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        });
    }

    return(
        <Container>
            <div className="aux-cont">    
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
                    
                <AreaContent>
                    <div className="search-content">
                        <input 
                            className="input-search" 
                            placeholder="Digite o nome do Streamer"
                            value={searchInput}
                            onChange={handleSearch}      
                        />
                    </div>
                    <div className="area-content-cards">
                        <div className="content-cards">
                            {filteredContact.map((item)=>(
                                <div className="cards" key={item.id}>
                                    <CardItemDashboard 
                                        id={item.id} 
                                        name={item.nome} 
                                        hearts={item.coracao} 
                                        urlImg={item.urlImageCard} 
                                        altUrl={item.nome}
                                        onclickEdit={() => dataEditing(item)}
                                        onclickDelete={() => removeStreamer(item.id)}
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
