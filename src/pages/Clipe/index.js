import React, {useEffect, useState}from 'react';
import CardMain from '../../components/CardMain';
import Layout from '../../components/Layout';
import Paginacao from '../../components/Paginacao';
import TitleBar from '../../components/TitleBar';
import { Container } from './styles';
import { 
    getAll,
    searchByTitle
} from '../../service/clipeService';


//Fazer ficar no meio da tela com o layout

const Clipe = () => {

    const [limit] = useState(24);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [filteredClipe, setFilteredClipe] = useState([]);

    useEffect(()=>{
    
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

            

        }
        searchAndGetAll();
    },[paginaAtual, limit, searchInput, pages]);

    const handleSearch = event => {
        setSearchInput(event.target.value);
    }

    //Pagination
    const handleChangePagination = (event, value) => {
        setPaginaAtual(value-1);
    };


    console.log(filteredClipe)

    return(
        <Layout>
            <Container>
                <div className="bar-clipe-title-search">
                    <TitleBar title="Últimos Clipes"/>
                    <input 
                        className="input-search"
                        placeholder="Digite o titulo do clipe para Pesquisar"
                        value={searchInput}
                        onChange={handleSearch}      
                    />
                </div>
                
                <div className="area-content">

                    {
                        filteredClipe.map(item => (
                            <div className="area-cards" key={item.id}>
                                <CardMain 
                                    imgCard={item.urlImageCard}
                                    title={item.titulo}
                                    streamer={item.streamer.nome}
                                />
                            </div>
                        ))
                    }
                    
                </div>
                <div className="area-pagination">
                    <Paginacao count={pages} onchange={handleChangePagination}/>        
                </div>
            </Container>
        </Layout>
    );
}
export default Clipe;