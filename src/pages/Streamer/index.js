import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Layout from '../../components/Layout/index';
import CarouselMain from '../../components/Carousels/CarouselMain';
import TitleBar from '../../components/TitleBar';
import { getAll, searchByName } from '../../service/streamerService';
import Paginacao from '../../components/Paginacao';
import CardMain from '../../components/CardMain';


const Streamer = () => {

    const [limit] = useState(8);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [filteredStreamer, setFilteredStreamer] = useState([]);

    useEffect(()=>{
        const searchAndGetAll = () => {
            if(searchInput === ""){
                getAll(limit, paginaAtual).then((response) =>{
                    setPages(response.data['totalPages']);
                    setFilteredStreamer(response.data.content);
                }).catch(
                    (e)=>{console.log(e)
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

    return(
        <Layout>
            <Container>
                <div className="bar-streamer-title-search">
                    <TitleBar title="Principais Streamers"/>
                    <input 
                        className="input-search"
                        placeholder="Digite o nome do Streamer para Pesquisar"
                        value={searchInput}
                        onChange={handleSearch}       
                    />
                </div>
                <div className="area-carousel">
                    <CarouselMain />
                </div>
                <div className="area-title-bar">
                    <TitleBar title="Streamers"/>
                </div>
                <div className="area-content">
                    {
                        filteredStreamer.map(streamer => (
                            <div className="area-cards" key={streamer.id}>
                                
                                <CardMain
                                    imgCard={streamer.urlImageCard}
                                    altImg={streamer.nome}
                                    streamer={streamer.nome}
                                />
                                
                            </div>
                        ))
                    }
                </div>
                <div className="area-pagination">
                    <Paginacao count={ pages } onchange={ handleChangePagination }/>        
                </div>
            </Container>
        </Layout>
    );

}
export default Streamer;

