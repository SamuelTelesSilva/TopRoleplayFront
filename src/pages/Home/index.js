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
import CardHome from '../../components/CardHome';


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
                    <TitleBar title="Streamers"/>
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
                    <TitleBar title="Policia/Facção"/>
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
                    <TitleBar title="Cidades"/>
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