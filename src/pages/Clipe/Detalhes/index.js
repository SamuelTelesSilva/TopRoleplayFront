import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import TitleBar from '../../../components/TitleBar';
import { getClipeById } from '../../../service/clipeService';
import { Container } from './styles';


const Detalhes = ( props ) => {
    const [clipe, setClipe] = useState([]);
    const [link, setLink] = useState("ObservantPiliableWheelCorgiDerp-VGyj_CSBgVCqe16T");

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
            </Container>
        </Layout>
    );
} 
export default Detalhes;