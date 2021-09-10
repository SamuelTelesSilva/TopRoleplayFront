import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty } from './styles';
import ReactPlayer from 'react-player';
import TitleBar from '../../../components/TitleBar';
import { getCityById } from '../../../service/cityService'
import Heart from '../../../components/Heart';

const Detalhes = (props) => {

    const [cidade, setCidade] = useState([]);

    useEffect(()=>{
        const { id } = props.match.params;
        
        getCityById(id).then((response)=>{
            setCidade(response.data)
        }).catch(
            (e)=>{console.log(e)}
        );
    },[props.match.params]);

    return(
        <Layout>
            <Container>

                <div className="area-title-bar">
                    <TitleBar title={cidade.nome}/>
                </div>

                <div className="cont-perfil-city">
                    <div className="img-perfil-city">
                        <img 
                            src={cidade.urlImageCard}
                            alt={cidade.nome} 
                        />
                    </div>
                    <div className="detail-perfil-city">
                        <div className="detail-city">
                            <div>Nome: {cidade.nome} </div>
                            <div>
                                Corações:
                                {cidade.length !== 0 ? 
                                    <Heart heartsValue={ cidade.coracao }/> : <div>Carregando...</div> 
                                }
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Redes Sociais"/>
                </div>

                <div className="cont-redes-sociais-aux">
                    <div className="cont-redes-sociais">
                        <a
                            href={cidade.urlInstagram}
                        >
                            <div className="rede-social">
                                Instagram
                            </div>
                        </a>
                        <a
                            href={cidade.urlTwitter}
                        >
                            <div className="rede-social">
                                Twitter
                            </div>
                        </a>
                        <a
                            href={cidade.urlDiscord}
                        >
                            <div className="rede-social">
                                Discord
                            </div>
                        </a>
                    </div>
                </div>
                

                <div className="area-title-bar">
                    <TitleBar title="Sua Cidade Favorita?"/>
                </div>

                <div className="cont-votar-city">
                    <HeartEmpty />
                </div>
                
            </Container>
        </Layout>
    );
}
export default Detalhes;