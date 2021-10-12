import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { Container, HeartEmpty, HeartFull } from './styles';
import TitleBar from '../../../components/TitleBar';
import { getCityById, getAll, updateVotacao } from '../../../service/cityService'
import Heart from '../../../components/Heart';
import { Link } from 'react-router-dom';
import CarouselHome from '../../../components/Carousels/CarouselHome';
import CardHome from '../../../components/CardHome';
import NavegacaoEstrutural from '../../../components/NavegacaoEstrutural';
import Publicity from '../../../components/Publicity';

const Detalhes = (props) => {

    const [cidade, setCidade] = useState([]);
    const [cidadeId, setCidadeId] = useState();
    const [cidades, setCidades] = useState([]);
    const [dadosStorageIcons, setDadosStorageIcons] = useState([]);

    useEffect(()=>{

        const { id } = props.match.params;
        setCidadeId(id);

        getCityById(id).then((response)=>{
            setCidade(response.data)
        }).catch(
            (e)=>{console.log(e)}
        );

        getAll(11,0).then( response => {
            setCidades(response.data.content);
        }).catch(e=>{
            console.log(e);
        });

        const dadosLocalStorage = () => {
            let ativarIcon;

            if(localStorage.getItem('city')){
                ativarIcon = JSON.parse(localStorage.getItem('city')); 
                setDadosStorageIcons(ativarIcon)
            }
        }
        dadosLocalStorage();

    },[props.match.params]);

    let newStorageIcons = dadosStorageIcons.filter(
        objeto => objeto.id === cidadeId
    );

    const addCidadeFavorita = () => {
        let myCity = [];

        if(localStorage.getItem('city')){
            myCity = JSON.parse(localStorage.getItem('city')); 
        }
        if(newStorageIcons.length > 0){
            alert('Você já votou')
        }else{

            updateVotacao(cidadeId).then( response =>{
                response.status === 200 ? 
                    window.location.reload() : alert('Ocorreu um erro')
            }).catch(e => {
                console.log(e);
            });

            myCity.push({
                'id' : cidadeId,
                'nome': cidade.nome,
                'imgCard': cidade.urlImageCard,
            });

            localStorage.setItem('city', JSON.stringify(myCity));  
        }
    }


    return(
        <Layout>
            <Container>
                <NavegacaoEstrutural
                    opcao='2'
                    href="/cidades"
                    nameLink1="Cidade"
                    nameLink2={cidade.nome}
                />

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

                <Publicity
                    width={300}
                    height={250}
                    quantidade={2}
                />

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
                    <div className="votar-cidade" onClick={ addCidadeFavorita }>
                        { newStorageIcons.length > 0 ?
                            <HeartFull/> : 
                            <HeartEmpty/>
                        }
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
export default Detalhes;