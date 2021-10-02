import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import NavegacaoEstrutural from '../../components/NavegacaoEstrutural';
import { Container, IconPlay } from './styles';
import { getAllSelect } from '../../service/eventoService';
import { Link } from 'react-router-dom';


const Evento = () => {
    const [eventos, setEventos] = useState([]);


    useEffect(()=>{
        getAllSelect().then(response => {
            setEventos(response.data.content)
        }).catch(e => {

        })
    },[])



    return(
        <Layout>
            <Container>
                <NavegacaoEstrutural
                    opcao='1'
                    nameLink1="Eventos"
                />
                {
                    eventos.map((evento)=>(
                        <div className="cont-card-evento" key={evento.id}>
                            <Link
                                to={`/detail/${evento.id}/${evento.titulo}`}
                            >
                                <div className="card-button-img"> 
                                    <img src={evento.urlImgCapa} alt={evento.urlImgCapa} />
                                    <div className="cont-card-button">
                                        <IconPlay />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </Container>
        </Layout>
    );
}
export default Evento;