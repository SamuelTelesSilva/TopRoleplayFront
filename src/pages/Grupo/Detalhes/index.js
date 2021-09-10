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
            setGrupo(response.data)
        }).catch(
            (e)=>{console.log(e)}
        );
    },[props.match.params]);


    console.log(grupo)

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
                                {grupo.length !== 0 ? 
                                    <Heart heartsValue={ grupo.coracao }/> : <div>Carregando...</div> 
                                }
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="area-title-bar">
                    <TitleBar title="Líder"/>
                </div>
                <div className="area-content-leader">
                    <div className="area-cards-lider" key={grupo.id}>
                        <CardMain
                            id={grupo.id}
                            imgCard={grupo.urlImageCard}
                            altImg={grupo.nome}
                            group="MenorXD"
                        />
                    </div>

                </div>

                <div className="area-title-bar">
                    <TitleBar title="Membros"/>
                </div>
                <div className="area-content-member">
                    <div className="area-cards-membro" key={grupo.id}>
                        <CardMain
                            id={grupo.id}
                            imgCard={grupo.urlImageCard}
                            altImg={grupo.nome}
                            group="Brasil"
                        />
                    </div>

                    <div className="area-cards-membro" key={grupo.id}>
                        <CardMain
                            id={grupo.id}
                            imgCard={grupo.urlImageCard}
                            altImg={grupo.nome}
                            group="Brasil"
                        />
                    </div>

                    <div className="area-cards-membro" key={grupo.id}>
                        <CardMain
                            id={grupo.id}
                            imgCard={grupo.urlImageCard}
                            altImg={grupo.nome}
                            group="Brasil"
                        />
                    </div>

                    <div className="area-cards-membro" key={grupo.id}>
                        <CardMain
                            id={grupo.id}
                            imgCard={grupo.urlImageCard}
                            altImg={grupo.nome}
                            group="Brasil"
                        />
                    </div>

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