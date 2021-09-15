import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Layout from '../../components/Layout/index';
import CarouselMain from '../../components/Carousels/CarouselMain';
import TitleBar from '../../components/TitleBar';
import { getAll, searchByName } from '../../service/cityService';
import Paginacao from '../../components/Paginacao';
import CardMain from '../../components/CardMain';
import NavegacaoEstrutural from '../../components/NavegacaoEstrutural';


const Cidade = () => {

    const [limit] = useState(8);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [filteredCity, setFilteredCity] = useState([]);

    useEffect(()=>{
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
                <NavegacaoEstrutural
                    opcao='1'
                    nameLink1="Cidades"
                />
                <div className="bar-city-title-search">
                    <TitleBar title="Principais Cidades"/>
                    <input 
                        className="input-search"
                        placeholder="Digite o nome do servidor para Pesquisar"
                        value={searchInput}
                        onChange={handleSearch}       
                    />
                </div>
                <div className="area-carousel">
                    <CarouselMain page="cidade"/>
                </div>
                <div className="area-title-bar">
                    <TitleBar title="Servidores"/>
                </div>
                <div className="area-content">
                    {
                        filteredCity.map(city => (
                            <div className="area-cards" key={city.id}>
                                <CardMain
                                    id={city.id}
                                    imgCard={city.urlImageCard}
                                    altImg={city.nome}
                                    city={city.nome}
                                    linkCard={`/cidade/${city.id}`}
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
export default Cidade;

