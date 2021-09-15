import React,{useState, useEffect} from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty } from './styles';
import ReactPlayer from 'react-player';
import TitleBar from '../../../components/TitleBar';
import { getStreamerById, getAll} from '../../../service/streamerService'
import Heart from '../../../components/Heart';
import { Link } from 'react-router-dom';
import CarouselHome from '../../../components/Carousels/CarouselHome';
import CardHome from '../../../components/CardHome';
import NavegacaoEstrutural from '../../../components/NavegacaoEstrutural';

const Detalhes = (props) => {


    
    const [streamer, setStreamer] = useState([]);
    const [streamers, setStreamers] = useState([]);


    useEffect(()=>{
        const { id } = props.match.params;
        
        getStreamerById(id).then((response)=>{
            setStreamer(response.data)
        }).catch(
            (e)=>{console.log(e)}
        );

        getAll(11,0).then( response => {
            setStreamers(response.data.content);
        }).catch(e=>{
            console.log(e);
        });
        
    },[props.match.params]);

    return(
        <Layout>
            <Container>
                <NavegacaoEstrutural
                    opcao='2'
                    href="/streamers"
                    nameLink1="Streamers"
                    nameLink2={streamer.nome}
                />
                <div className="area-title-bar">
                    <TitleBar title={streamer.nome}/>
                </div>

                <div className="cont-perfil-streamer">
                    <div className="img-perfil-streamer">
                        <img 
                            src={streamer.urlImageCard}
                            alt={streamer.nome} 
                        />
                    </div>
                    <div className="detail-perfil-streamer">
                        <div className="detail-streamer">
                            <div>Nome: {streamer.nome} </div>
                            <div>
                                Corações:
                                {streamer.length !== 0 ? 
                                    <Heart heartsValue={ streamer.coracao }/> : <div>Carregando...</div> 
                                }
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="cont-player-react">
                    <div className="player-react">
                        <ReactPlayer 
                            url={streamer.urlPlataformaStream}
                            height="360px"
                            width="100%"
                        />
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Redes Sociais"/>
                </div>

                <div className="cont-redes-sociais-aux">
                    <div className="cont-redes-sociais">
                        <a
                            href={streamer.urlFacebook}
                        >
                            <div className="rede-social">
                                Facebook
                            </div>
                        </a>
                        <a
                            href={streamer.urlInstagram}
                        >
                            <div className="rede-social">
                                Instagram
                            </div>
                        </a>
                        <a
                            href={streamer.urlTwitter}
                        >
                            <div className="rede-social">
                                Twitter
                            </div>
                        </a>
                        <a
                            href={streamer.urlPlataformaStream}
                        >
                            <div className="rede-social">
                                Stream
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="area-title-bar">
                    <TitleBar title="Seu Streamer Favorito?"/>
                </div>

                <div className="cont-votar-streamer">
                    <HeartEmpty />
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
                                            linkCard={`/streamer/${str.id}`}
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
export default Detalhes;