import React from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty } from './styles';
import ReactPlayer from 'react-player';
import TitleBar from '../../../components/TitleBar';


const Detalhes = () => {
    return(
        <Layout>
            <Container>

                <div className="area-title-bar">
                    <TitleBar title="GabePeixe"/>
                </div>

                <div className="cont-player-react">
                    <div className="player-react">
                        <ReactPlayer 
                            url="https://www.twitch.tv/gaules"
                            height="360px"
                            width="100%"
                        />
                    </div>
                </div>

                <div className="cont-perfil-streamer">
                    <div className="img-perfil-streamer">
                        <img 
                            src="https://pbs.twimg.com/profile_images/1158327045098786816/ZKqu_h-M.jpg" 
                            alt="gabepeixe" 
                        />
                    </div>
                    <div className="detail-perfil-streamer">
                        <div className="detail-streamer">
                            <div>Nome: Gabepeixe</div>
                            <div>Grupo: Laranjas</div>
                            <div>Estrelas: 500</div>
                        </div>    
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Redes Sociais"/>
                </div>

                <div className="cont-redes-sociais">
                    <div className="rede-social">
                        Facebook
                    </div>
                    <div className="rede-social">
                        Instagram
                    </div>
                    <div className="rede-social">
                        Twitter
                    </div>
                    <div className="rede-social">
                        Youtube
                    </div>
                    <div className="rede-social">
                        Discord
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Seu Streamer Favorito?"/>
                </div>

                <div className="cont-votar-streamer">
                    <HeartEmpty />
                </div>
                
            </Container>
        </Layout>
    );
}
export default Detalhes;