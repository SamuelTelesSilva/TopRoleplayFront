import React,{useState, useEffect} from 'react';
import {Form} from './styles';

const FormEdit = (props) =>{
    const [streamer, setStreamer] = useState(props.streamerInput);

    useEffect(() => {
        setStreamer(props.streamerInput)
    }, [props])
    
    return(
        <Form>
            <div className="title-input">Nome do  Streamer EDITAR</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Digite o nome do streamer"
                name="nome"
                value={streamer.nome}
                onChange={props.onchange}
            />
            <div className="title-input">Url Imagem capa</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url da imagem de capa"
                name="urlImgCapa"    
                value={streamer.urlImgCapa}
                onChange={props.onchange}
            />
            <div className="title-input">Url imagem 2</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url da imagem para o Card"
                name="urlImgCard"    
                value={streamer.urlImgCard}
                onChange={props.onchange}
            />
            <div className="redeSociais">Redes Sociais</div>
            <div className="title-input">Instagram</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url do Instagram"
                name="urlInstagram"    
                value={streamer.urlInstagram}
                onChange={props.onchange}
            />
            <div className="title-input">Discord</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url do Discord"
                name="urlDiscord"    
            />
            <div className="title-input">Twitter</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url do Twitter"
                name="urlTwitter"    
                value={streamer.urlTwitter}
                onChange={props.onchange}
            />
            <div className="title-input">Plataforma de Stream</div>
            <input 
                className="input-form" 
                type="text" 
                placeholder="Url da plataforma de stream"
                name="urlPlataformaStream"    
                value={streamer.urlPlataformaStream}
                onChange={props.onchange}
            />
        </Form>
    );
}

export default FormEdit;
