import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Layout from '../../components/Layout/index';
import CarouselMain from '../../components/Carousels/CarouselMain';
import TitleBar from '../../components/TitleBar';
import { getAll, searchByName } from '../../service/groupService';
import Paginacao from '../../components/Paginacao';
import CardMain from '../../components/CardMain';


const Grupo = () => {

    const [limit] = useState(8);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [pages, setPages] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [filteredGroup, setFilteredGroup] = useState([]);

    useEffect(()=>{
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
                <div className="bar-group-title-search">
                    <TitleBar title="Principais Grupos"/>
                    <input 
                        className="input-search"
                        placeholder="Digite o nome do grupo para Pesquisar"
                        value={searchInput}
                        onChange={handleSearch}       
                    />
                </div>
                <div className="area-carousel">
                    <CarouselMain page="grupo"/>
                </div>
                <div className="area-title-bar">
                    <TitleBar title="Grupos"/>
                </div>
                <div className="area-content">
                    {
                        filteredGroup.map(grupo => (
                            <div className="area-cards" key={grupo.id}>
                                <CardMain
                                    id={grupo.id}
                                    imgCard={grupo.urlImageCard}
                                    altImg={grupo.nome}
                                    group={grupo.nome}
                                    linkCard={`/grupo-detail/${grupo.id}`}
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
export default Grupo;

