import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselHome from '../../components/Carousels/CarouselHome';
import CarouselMain from '../../components/Carousels/CarouselMain';
import Layout from '../../components/Layout';
import TitleBar from '../../components/TitleBar';
import clipe from '../../service/clipeService';
import streamer, { getTopStreamers } from '../../service/streamerService';
import cidade, { getTopCidades } from '../../service/cityService';
import grupo, { getTopGroup } from '../../service/groupService';
import { Container, HeartFull } from './styles';
import CardHome from '../../components/CardHome';
import { getRankingById } from '../../service/ranking';
import iconAk47 from '../../assets/iconAk47.svg';
import iconRp from '../../assets/iconrp.svg';

const Home = () =>{

    const [clips, setClips] = useState([]);
    const [streamers, setStreamers] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [limit] = useState(11);
    const [page] = useState(0);

    const [topStreamers, setTopStreamers] = useState([]);
    const [topCidades, setTopCidades] = useState([]);
    const [topGrupos, setTopGrupos] = useState([]);

    const [topPvp, setTopPvp] = useState([]);
    const [topRP, setTopRP] = useState([]);

    useEffect(()=>{

        clipe.getAll(limit,page).then( response => {
            setClips(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        streamer.getAll(limit,page).then( response => {
            setStreamers(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        cidade.getAll(limit,page).then( response => {
            setCidades(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        grupo.getAll(limit,page).then( response => {
            setGrupos(response.data.content);
        }).catch(e=>{
            console.log(e);
        });


        //top 10 - votação dos usuarios
        getTopStreamers().then( response => {
            setTopStreamers(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        getTopGroup().then( response => {
            setTopGrupos(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        getTopCidades().then( response => {
            setTopCidades(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        //My Ranking
        getRankingById(2).then( response => {
            setTopPvp(response.data.melhoresPvp);
            setTopRP(response.data.melhoresRp);
        }).catch(e=>{
            console.log(e);
        });
    
    }, [limit,page]);

    return(
        <Layout>
            <Container>
                <div className="cont-slide-principal">
                    <CarouselMain page="streamer"/>
                </div>

                <div className="cont-title-ranking">
                    <TitleBar title="OS MELHORES DO PVP"/>
                    <img src={iconAk47} alt="icone ak47"/>
                </div>
                <div className="cont-slide-streamer">
                    <CarouselHome>
                        {
                            topPvp.length !== 0 ?
                            topPvp.map((str) =>(
                                <div key={str.id} className="aux-cont-card">
                                    <CardHome
                                        id={str.id}
                                        imgCard={str.urlImageCard}
                                        altImg={str.nome}
                                        streamer={str.nome}
                                        linkCard={`/streamer/${str.id}/${str.nome}`}
                                    />
                                </div>
                            ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title-ranking">
                    <TitleBar title="OS MELHORES DO RP"/>
                    <img src={iconRp} alt="icone rp"/>
                </div>
                <div className="cont-slide-streamer">
                    <CarouselHome>
                        {
                            topRP.length !== 0 ?
                            topRP.map((str) =>(
                                <div key={str.id} className="aux-cont-card">
                                    <CardHome
                                        id={str.id}
                                        imgCard={str.urlImageCard}
                                        altImg={str.nome}
                                        streamer={str.nome}
                                        linkCard={`/streamer/${str.id}/${str.nome}`}
                                    />
                                </div>
                            ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title-ranking">
                    <TitleBar title="STREAMERS MAIS POPULARES"/>
                    <HeartFull />
                </div>
                <div className="cont-slide-streamer">
                    <CarouselHome>
                        {
                            topStreamers.length !== 0 ?
                            topStreamers.map((str) =>(
                                <div key={str.id} className="aux-cont-card">
                                    <CardHome
                                        id={str.id}
                                        imgCard={str.urlImageCard}
                                        altImg={str.nome}
                                        streamer={str.nome}
                                        linkCard={`/streamer/${str.id}/${str.nome}`}
                                        ranking={true}
                                        coracao={str.coracao}
                                    />
                                </div>
                            ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title-ranking">
                    <TitleBar title="GRUPOS MAIS POPULARES"/>
                    <HeartFull />
                </div>
                <div className="cont-slide-grupo">
                    <CarouselHome>
                        {
                            topGrupos.length !== 0 ?
                                topGrupos.map((group) =>(
                                    <div key={group.id} className="aux-cont-card">
                                        <CardHome
                                            id={group.id}
                                            imgCard={group.urlImageCard}
                                            altImg={group.nome}
                                            group={group.nome}
                                            linkCard={`/grupo/${group.id}/${group.nome}`}
                                            ranking={true}
                                            coracao={group.coracao}
                                        />
                                    </div>
                                )) 
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title-ranking">
                    <TitleBar title="SERVIDORES MAIS POPULARES"/>
                    <HeartFull />
                </div>
                <div className="cont-slide-cidade">
                    <CarouselHome>
                        {
                            topCidades.length !== 0 ?
                                topCidades.map((city) =>(
                                    <div key={city.id} className="aux-cont-card">
                                        <CardHome
                                            id={city.id}
                                            imgCard={city.urlImageCard}
                                            altImg={city.nome}
                                            city={city.nome}
                                            linkCard={`/cidade/${city.id}/${city.nome}`}
                                            ranking={true}
                                            coracao={city.coracao}
                                        />
                                    </div>
                                ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title">
                    <TitleBar title="ÚLTIMOS CLIPES"/>
                    <div className="cont-ver-todos">
                        <Link to="/clipes">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-clipes">
                    <CarouselHome>
                        {
                            clips.length !== 0 ?
                                clips.map((clip) =>(
                                    <div key={clip.id} className="aux-cont-card">
                                        <CardHome
                                            id={clip.id}
                                            imgCard={clip.urlImageCard}
                                            altImg={clip.titulo}
                                            clipe={clip.titulo}
                                            linkCard={`/clipe/${clip.id}/${clip.titulo}`}
                                        />
                                    </div>
                                ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>
                <div className="cont-title">
                    <TitleBar title="STREAMERS"/>
                    <div className="cont-ver-todos">
                        <Link to="/streamers">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-streamer">
                    <CarouselHome>
                        {
                            streamers.length !== 0 ?
                                streamers.map((str) =>(
                                    <div key={str.id} className="aux-cont-card">
                                        <CardHome
                                            id={str.id}
                                            imgCard={str.urlImageCard}
                                            altImg={str.nome}
                                            streamer={str.nome}
                                            linkCard={`/streamer/${str.id}/${str.nome}`}
                                        />
                                    </div>
                                ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title">
                    <TitleBar title="GRUPOS"/>
                    <div className="cont-ver-todos">
                        <Link to="/grupos">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-grupo">
                    <CarouselHome>
                        {
                            grupos.length !== 0 ?
                                grupos.map((group) =>(
                                    <div key={group.id} className="aux-cont-card">
                                        <CardHome
                                            id={group.id}
                                            imgCard={group.urlImageCard}
                                            altImg={group.nome}
                                            group={group.nome}
                                            linkCard={`/grupo/${group.id}/${group.nome}`}
                                        />
                                    </div>
                                )) 
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>
            
                <div className="cont-publicity" style={{display: 'none'}}>
                    <div className="publicity">
                        Propaganda
                    </div>
                </div>
                <div className="cont-title">
                    <TitleBar title="CIDADES"/>
                    <div className="cont-ver-todos">
                        <Link to="/cidades">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-cidade">
                    <CarouselHome>
                        {
                            cidades.length !== 0 ?
                                cidades.map((city) =>(
                                    <div key={city.id} className="aux-cont-card">
                                        <CardHome
                                            id={city.id}
                                            imgCard={city.urlImageCard}
                                            altImg={city.nome}
                                            city={city.nome}
                                            linkCard={`/cidade/${city.id}/${city.nome}`}
                                        />
                                    </div>
                                ))
                            : <div>Carregando...</div>
                        }
                    </CarouselHome>
                </div>
                
            </Container>
        </Layout>
    );
}
export default Home;


/**
 * 
 */