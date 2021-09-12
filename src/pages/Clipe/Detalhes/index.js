import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from '../../../components/Button';
import CarouselClipe from '../../../components/Carousels/CarouselHome';
import Layout from '../../../components/Layout';
import TitleBar from '../../../components/TitleBar';
import { getAllSelect, getClipeById } from '../../../service/clipeService';
import { Container } from './styles';


const Detalhes = ( props ) => {
    const [clipe, setClipe] = useState([]);
    const [clips, setClips] = useState([]);

    useEffect(()=>{
        const { id } = props.match.params;

        getClipeById(id).then( response => {
            setClipe(response.data);
        }).catch((e)=>{
            console.log(e);
        });

        getAllSelect().then( response => {
            setClips(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

    },[props.match.params]);


    if(clipe.length !== 0){
        console.log()
    }


    return(
        <Layout enableJustify="true">
            <Container>
                <div className="bar-clipe-title">
                    <TitleBar title={clipe.titulo}/>
                </div>
                <div className="cont-iframe-player">
                    {
                        clipe.twitch ? (
                            <div className="iframe">
                                <iframe
                                    title={clipe.titulo}
                                    src={`https://clips.twitch.tv/embed?clip=${clipe.url}&parent=localhost`}
                                    height="360"
                                    width="100%"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="player-react">
                                <ReactPlayer 
                                    url={`${clipe.url}`}
                                    height="360px"
                                    width="100%"
                                />
                            </div>
                        )  
                    }
                </div>
                <div className="area-button-streamer">     
                    <a 
                        href={`${clipe.length !== 0 ? clipe.streamer.urlPlataformaStream : '/'}`}>
                        <Button title="Conheça o Streamer"/>
                    </a>
                </div>
                <div className="bar-clipe-title">
                    <TitleBar title="Últimos Clipes"/>
                </div>
                <div className="area-carousel-clip">
                    <CarouselClipe>
                        {
                            clips.map((clip) =>(
                                <div key={clip.id} className="aux-cont-card">
                                    <img src={clip.urlImageCard} alt={clip.titulo}/>
                                </div>
                            ))
                        }
                    </CarouselClipe>
                </div>
            </Container>
        </Layout>
    );
} 
export default Detalhes;

/**
 *  <a href={`https://${clipe.length !== 0 ? clipe.streamer.urlPlataformaStream : '/'}`}><Button title="Conheça o Streamer"/></a>
 * 
 */