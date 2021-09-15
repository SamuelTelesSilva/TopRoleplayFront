import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty } from './styles';
import TitleBar from '../../../components/TitleBar';
import { getGroupById, getAll } from '../../../service/groupService'
import Heart from '../../../components/Heart';
import CardMain from '../../../components/CardMain';
import { Link } from 'react-router-dom';
import CarouselHome from '../../../components/Carousels/CarouselHome';
import CardHome from '../../../components/CardHome';
import NavegacaoEstrutural from '../../../components/NavegacaoEstrutural';

const Detalhes = (props) => {

    const [grupo, setGrupo] = useState([]);
    const [grupos, setGrupos] = useState([]);


    useEffect(()=>{  
        const { id } = props.match.params;
        getGroupById(id).then((response)=>{
            setGrupo(response.data[0])
        }).catch(
            (e)=>{console.log(e)}
        );

        getAll(11,0).then( response => {
            setGrupos(response.data.content);
        }).catch(e=>{
            console.log(e);
        });
    
    },[props.match.params]);
    
    return(
        <Layout>
            <Container>
                <NavegacaoEstrutural
                    opcao="2"
                    href="/grupos"
                    nameLink1="Grupos"
                    nameLink2={grupo.nome}
                />
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
                                    linkCard={`/streamer/${streamer.id}`}
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
                                    linkCard={`/streamer/${streamer.id}`}
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
                                            linkCard={`/grupo/${group.id}`}
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