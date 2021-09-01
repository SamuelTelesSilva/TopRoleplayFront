import React, { useState, useEffect } from 'react';
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
        <Layout>
            <Container>
                <div className="bar-clipe-title">
                    <TitleBar title="Últimos Clipes"/>
                </div>
                <div>
                    <iframe
                        src="https://clips.twitch.tv/embed?clip=ObservantPiliableWheelCorgiDerp-VGyj_CSBgVCqe16T&parent=localhost"
                        height="360"
                        width="640"
                        allowFullScreen
                        >
                    </iframe>
                </div>
            </Container>
        </Layout>
    );
} 
export default Detalhes;