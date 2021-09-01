import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import TitleBar from '../../../components/TitleBar';
import { getClipeById } from '../../../service/clipeService';
import { Container } from './styles';


const Detalhes = ( props ) => {
    const [clipe, setClipe] = useState([]);

    useEffect(()=>{
        const { id } = props.match.params;

        getClipeById(id).then( response => {
            setClipe(response.data);
        }).catch((e)=>{
            console.log(e);
        });
        
    },[props.match.params])


    console.log(clipe)
    return(
        <Layout enableJustify="true">
            <Container>
                <div className="bar-clipe-title">
                    <TitleBar title={clipe.titulo}/>
                </div>
                <div className="cont-iframe">
                    <div className="iframe">
                        <iframe
                            title={clipe.titulo}
                            src={`https://clips.twitch.tv/embed?clip=${clipe.url}&parent=localhost`}
                            height="360"
                            width="100%"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="area-button-streamer">
                    <Button title="Conheça o Streamer"/>
                </div>
                <div className="bar-clipe-title">
                    <TitleBar title="Últimos Clipes"/>
                </div>

            </Container>
        </Layout>
    );
} 
export default Detalhes;