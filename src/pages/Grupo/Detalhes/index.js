import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty } from './styles';
import TitleBar from '../../../components/TitleBar';
import { getGroupById } from '../../../service/groupService'
import Heart from '../../../components/Heart';
import CardMain from '../../../components/CardMain';

const Detalhes = (props) => {

    const [grupo, setGrupo] = useState([]);

    useEffect(()=>{  
        const { id } = props.match.params;
        getGroupById(id).then((response)=>{
            setGrupo(response.data[0])
        }).catch(
            (e)=>{console.log(e)}
        );
    
    },[props.match.params]);
    
    return(
        <Layout>
            <Container>
            
                <div className="area-title-bar">
                    <TitleBar title={grupo.nome}/>
                </div>

                <div className="cont-perfil-group">
                    <div className="img-perfil-group">
                        <img 
                            src={grupo.urlImageCard}
                            alt={grupo.nome} 
                        />
                    </div>
                    <div className="detail-perfil-group">
                        <div className="detail-group">
                            <div>Nome: {grupo.nome} </div>
                            <div>
                                Corações:
                                <span>
                                    {grupo.length !== 0 ? 
                                        <Heart heartsValue={ grupo.coracao }/> : <div>Carregando...</div> 
                                    }
                                </span>
                            </div>
                            <div>
                                Cidades:
                                {
                                    grupo.length === 0 ? <div>Carregando...</div> : 
                                    grupo.cidades.map( city => (
                                        <span key={city.id}>
                                            {city.nome}
                                            {grupo.cidades.length > 1 ? ',': ''}
                                        </span>
                                    ))   
                                } 
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Líder"/>
                </div>
                <div className="area-content-leader">
                    {   
                        grupo.length === 0 ? <div>Carregando...</div> : 
                        grupo.lideresGrupo.map( streamer => (
                            <div className="area-cards-lider" key={streamer.id}>
                                <CardMain
                                    id={streamer.id}
                                    imgCard={streamer.urlImageCard}
                                    altImg={streamer.nome}
                                    group={streamer.nome}
                                    linkCard={`/streamer-detail/${streamer.id}`}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Membros"/>
                </div>
                <div className="area-content-member">
                    {   
                        grupo.length === 0 ? <div>Carregando...</div> : 
                        grupo.membros.map( streamer => (
                            <div className="area-cards-membro" key={streamer.id}>
                                <CardMain
                                    id={streamer.id}
                                    imgCard={streamer.urlImageCard}
                                    altImg={streamer.nome}
                                    group={streamer.nome}
                                    linkCard={`/streamer-detail/${streamer.id}`}
                                />
                            </div>
                        ))
                    }
                </div>
                

                <div className="area-title-bar">
                    <TitleBar title="Redes Sociais"/>
                </div>

                <div className="cont-redes-sociais-aux">
                    <div className="cont-redes-sociais">
                        <a
                            href={grupo.urlInstagram}
                        >
                            <div className="rede-social">
                                Instagram
                            </div>
                        </a>
                        <a
                            href={grupo.urlTwitter}
                        >
                            <div className="rede-social">
                                Twitter
                            </div>
                        </a>
                        <a
                            href={grupo.urlDiscord}
                        >
                            <div className="rede-social">
                                Discord
                            </div>
                        </a>
                    </div>
                </div>
                

                <div className="area-title-bar">
                    <TitleBar title="Seu Grupo Favorito?"/>
                </div>

                <div className="cont-votar-group">
                    <HeartEmpty />
                </div>
            
            </Container>
        </Layout>
    );
}
export default Detalhes;