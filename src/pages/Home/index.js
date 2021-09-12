import React from 'react';
import Layout from '../../components/Layout';
import TitleBar from '../../components/TitleBar';
import { Container } from './styles';


const Home = () =>{
    return(
        <Layout>
            <Container>
                <div className="cont-slide-principal">
                    Slide Principal
                </div>
                <TitleBar title="Últimos Clipes"/>
                <div className="cont-slide-clipes">
                    Slide de Clipes
                </div>
                <TitleBar title="Streamers" />
                <div className="cont-slide-streamer">
                    Slide dos Streamers
                </div>

                <TitleBar title="Cidades"/>
                <div className="cont-slide-cidade">
                    Slide das Cidades
                </div>

                <div className="cont-publicity">
                    <div className="publicity">
                        Propaganda
                    </div>
                </div>

                <TitleBar title="Policia/Facções"/>
                <div className="cont-slide-grupo">
                    Slide dos Grupos
                </div>

                
                

            </Container>
        </Layout>
    );
}
export default Home;