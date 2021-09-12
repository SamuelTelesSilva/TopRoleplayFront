import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselHome from '../../components/Carousels/CarouselHome';
import CarouselMain from '../../components/Carousels/CarouselMain';
import Layout from '../../components/Layout';
import TitleBar from '../../components/TitleBar';
import clipe from '../../service/clipeService';
import streamer from '../../service/streamerService';
import cidade from '../../service/cityService';
import grupo from '../../service/groupService';
import { Container } from './styles';
import CardMain from '../../components/CardMain';


const Home = () =>{

    const [clips, setClips] = useState([]);
    const [streamers, setStreamers] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [limit] = useState(11);
    const [page] = useState(0);

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


    }, [limit,page]);


    return(
        <Layout>
            <Container>
                <div className="cont-slide-principal">
                    <CarouselMain page="streamer"/>
                </div>
                <div className="cont-title">
                    <TitleBar title="Últimos Clipes"/>
                    <div className="cont-ver-todos">
                        <Link to="/clipe">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-clipes">
                    <CarouselHome>
                        {
                            clips.map((clip) =>(
                                <div key={clip.id} className="aux-cont-card">
                                    <img src={clip.urlImageCard} alt={clip.titulo}/>
                                </div>
                            ))
                        }
                    </CarouselHome>
                </div>
                <div className="cont-title">
                    <TitleBar title="Streamers"/>
                    <div className="cont-ver-todos">
                        <Link to="/streamer">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-streamer">
                    <CarouselHome>
                        {
                            streamers.map((clip) =>(
                                <div key={clip.id} className="aux-cont-card">
                                    <img src={clip.urlImageCard} alt={clip.titulo}/>
                                </div>
                            ))
                        }
                    </CarouselHome>
                </div>

                <div className="cont-title">
                    <TitleBar title="Policia/Facções"/>
                    <div className="cont-ver-todos">
                        <Link to="/grupo">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-grupo">
                    <CarouselHome>
                        {
                            grupos.map((clip) =>(
                                <div key={clip.id} className="aux-cont-card">
                                    <img src={clip.urlImageCard} alt={clip.titulo}/>
                                </div>
                            ))
                        }
                    </CarouselHome>
                </div>
            
                <div className="cont-publicity">
                    <div className="publicity">
                        Propaganda
                    </div>
                </div>
                <div className="cont-title">
                    <TitleBar title="Cidades"/>
                    <div className="cont-ver-todos">
                        <Link to="/cidade">
                            Ver Todos
                        </Link>
                    </div>
                </div>
                <div className="cont-slide-cidade">
                    <CarouselHome>
                        {
                            cidades.map((city) =>(
                                <div key={city.id} className="aux-cont-card">
                                    <CardMain
                                        id={city.id}
                                        imgCard={city.urlImageCard}
                                        altImg={city.nome}
                                        group={city.nome}
                                        linkCard={`/cidade-detail/${city.id}`}
                                    />
                                </div>
                            ))
                        }
                    </CarouselHome>
                </div>
                
            </Container>
        </Layout>
    );
}
export default Home;


