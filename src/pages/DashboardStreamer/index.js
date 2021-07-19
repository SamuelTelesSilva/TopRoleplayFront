import React, {useState, useEffect} from 'react';
import { Container, AreaForm, Form, AreaButton, AreaContent } from './styles';
import ButtonInput from '../../components/ButtonInput';
import CardItemDashboard from '../../components/CardItemDashboard';
import Paginacao from '../../components/Paginacao';
import {registerStreamer, getAll, searchByName} from '../../service/streamerService'
import api from '../../service/api';




const DashboardStreamer = () => {

    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina','2');

    const [searchInput, setSearchInput] = useState("");
    const [filteredContact, setFilteredContact] = useState([]); 
    const [limit] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [total] = useState(0);
    const token = localStorage.getItem('token');
    const [perfilUserInput, setPerfilUserInput] = useState({
        nome: '',
        urlImgCapa: '',
        urlImgCard: '',
        urlInstagram: '',
        urlDiscord: '',
        urlTwitter: '',
        urlPlataformaStream: ''
    });

    

    useEffect(()=>{
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
        }
        searchAndGetAll();
    }, [token, paginaAtual, limit, searchInput, pages, total]);


    /**
     * Metodo para fazer um getAll ou ele faz uma busca pelo nome
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
    
        

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setPerfilUserInput({...perfilUserInput, [name]: value});
    }

    //Pagination
    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };

    //Search
    const handleSearch = event => {
        setSearchInput(event.target.value)
    }

    async function handleSubmit(){

        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'nome': perfilUserInput.nome,
            'coracao': 150,
            'urlImageCapa': perfilUserInput.urlImgCapa,
            'urlImageCard': perfilUserInput.urlImgCard,
            'urlInstagram': perfilUserInput.urlInstagram ,
            'urlTwitter':  perfilUserInput.urlTwitter,
            'urlPlataformaStream': perfilUserInput.urlPlataformaStream
        }

        await registerStreamer(data).then(response => {
            console.log(response)
        }).catch(e => {
            console.log(e)
        });
    }

    return(
        <Container>
            <div className="aux-cont">
                <AreaForm>
                    <Form>
                        <div className="title-input">Nome do  Streamer</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Digite o nome do streamer"
                            name="nome"
                            value={perfilUserInput.nome}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url Imagem capa</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem de capa"
                            name="urlImgCapa"    
                            value={perfilUserInput.urlImgCapa}
                            onChange={changeValue}
                        />
                        <div className="title-input">Url imagem 2</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da imagem para o Card"
                            name="urlImgCard"    
                            value={perfilUserInput.urlImgCard}
                            onChange={changeValue}
                        />
                        <div className="redeSociais">Redes Sociais</div>
                        <div className="title-input">Instagram</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Instagram"
                            name="urlInstagram"    
                            value={perfilUserInput.urlInstagram}
                            onChange={changeValue}
                        />
                        <div className="title-input">Discord</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Discord"
                            name="urlDiscord"    
                            value={perfilUserInput.urlDiscord}
                            onChange={changeValue}
                        />
                        <div className="title-input">Twitter</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url do Twitter"
                            name="urlTwitter"    
                            value={perfilUserInput.urlTwitter}
                            onChange={changeValue}
                        />
                        <div className="title-input">Plataforma de Stream</div>
                        <input 
                            className="input-form" 
                            type="text" 
                            placeholder="Url da plataforma de stream"
                            name="urlPlataformaStream"    
                            value={perfilUserInput.urlPlataformaStream}
                            onChange={changeValue}
                        />
                    </Form>
                    <AreaButton>
                        <div className="button-register">
                            <ButtonInput 
                                type="submit" 
                                value="Cadastrar"
                                onclick={handleSubmit}    
                                />
                        </div>
                        <div className="button-update">
                            <ButtonInput type="submit" value="Atualizar"/>
                        </div>
                    </AreaButton>
                </AreaForm>
                <AreaContent>
                    <div className="search-content">
                        <input 
                            className="input-search" 
                            placeholder="Digite o nome do Streamer"
                            value={searchInput}
                            onChange={handleSearch}      
                        />
                        <div className="button-search">
                            <input 
                                className="button-input-search" 
                                type="submit" 
                                value="Pesquisar"
                                onClick={searchAndGetAll}
                            />
                        </div>
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
