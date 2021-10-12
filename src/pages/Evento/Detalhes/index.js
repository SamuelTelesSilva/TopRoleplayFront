/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from '../../../components/Button/index';
import Layout from '../../../components/Layout';
import NavegacaoEstrutural from '../../../components/NavegacaoEstrutural';
import TitleBar from '../../../components/TitleBar';
import CarouselHome from '../../../components/Carousels/CarouselHome/index'
import { getEventoById } from '../../../service/eventoService';
import { Container } from './styles';
import CardHome from '../../../components/CardHome';

const Detalhes = (props) => {

    const [evento, setEvento] = useState([]);
    const [streamersLadoA, setStreamersLadoA] = useState([]);
    const [streamersLadoB, setStreamersLadoB] = useState([]);
    const [telasAtivas, setTelasAtivas] = useState(2);
    const parent = "www.toproleplay.com"; //www.example.com tutorial salvo nos favoritos, 

    let tela2 = null;
    let tela4 = null;

    useEffect(()=>{
        const { id } = props.match.params;

        getEventoById(id).then(response =>{
            setEvento(response.data);
            setStreamersLadoA(response.data.streamersLadoA);
            setStreamersLadoB(response.data.streamersLadoB)
        }).catch(e =>{
            console.log(e)
        })

    },[props.match.params]);


    if(telasAtivas === 4){

        tela2 = (
            <div className="player-react">
                <ReactPlayer
                    url={evento.urlVideo2}
                    height="360px"
                    width="100%"
                />
            </div>
        );

        tela4 = (
            <div className="player-react">
                <ReactPlayer
                    url={evento.urlVideo4}
                    height="360px"
                    width="100%"
                />
            </div>
        );

    }if(telasAtivas === 6){
        //implementar
    }

    const alterarTela = () =>{

        if(telasAtivas === 2){
            setTelasAtivas(4)
        }if(telasAtivas === 4){
            setTelasAtivas(2)
        }
    }

    console.log(streamersLadoA)

    return(
        <Layout>
            <Container>
                <NavegacaoEstrutural
                    opcao='2'
                    href="/eventos"
                    nameLink1="Eventos"
                    nameLink2="Detalhes do Evento"
                />
                <div className="area-title-bar">
                    <TitleBar title={evento.titulo}/>
                </div>
                <div className="cont-player-react">
                    <div className="player-react">
                        <ReactPlayer
                            url={evento.urlVideo1}
                            height="360px"
                            width="100%"
                        />
                    </div>
                    {tela2 !== null ? tela2 : ''}
                </div>

                <div className="cont-versus">
                    <div className="versus">
                        <h1>X</h1>
                    </div>
                </div>

                <div className="cont-player-react">
                    <div className="player-react">
                        <ReactPlayer
                            url={evento.urlVideo3}
                            height="360px"
                            width="100%"
                        />
                    </div>
                    {tela4 !== null ? tela4 : ''}
                </div>

                <div className="cont-button-telas">
                    <div className="button-telas">
                        {telasAtivas === 2 ? (
                            <Button title="Alterar para 4 telas" onclick={alterarTela}/>
                        ) : (
                            <Button title="Alterar para 2 telas" onclick={alterarTela}/>
                        )}
                        
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Quem vai ganhar ?"/>
                </div>

                <div className="cont-chat-twitch">
                    <div className="chat-twitch">
                        <iframe id="twitch-chat-embed"
                            src={`https://www.twitch.tv/embed/mucadev/chat?parent=${parent}`}
                            height="500"
                            width="100%"
                        />
                    </div>
                </div>
                <div className="area-title-bar">
                    <TitleBar title="Equipe do lado A"/>
                </div>
                <div className="cont-slide-ladoA">
                    <CarouselHome>
                        {
                            streamersLadoA.length !== 0 ?
                            streamersLadoA.map((str) =>(
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

                <div className="area-title-bar">
                    <TitleBar title="Equipe do lado B"/>
                </div>
                <div className="cont-slide-ladoA">
                    <CarouselHome>
                        {
                            streamersLadoB.length !== 0 ?
                            streamersLadoB.map((str) =>(
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


/*

*/