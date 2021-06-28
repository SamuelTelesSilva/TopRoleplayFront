import React, {useState, useEffect} from 'react';
import {Grid, Main, ImageGallery, ImagePerfil, FormEditarPerfil} from './styles';
import NavBar from '../../components/NavBar/Toolbar/index';
import Footer from '../../components/Footer/index';
import { avatarLinks } from '../../service/avatarLinks';
import Slider from "react-slick";
import useWindowDimensions  from '../../components/useWindowDimensions/index';

import { criarUsuario, updateUser} from '../../service/toproleplayService';
import history from '../../history';
import {Link} from 'react-router-dom';
import api from '../../service/api';

const DashboardUsuario = () => {

    //Utilizado para pegar o tamanho da tela
    const {width} = useWindowDimensions();
    const [urlImgPerfilSelected, setUrlImgPerfilSelected] = useState('https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_afterhours_taleofus2_256x256.jpg');

    //setttings do Slick
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "carousel",
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.15,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              
            }
          },
          
        ]
      };


    //Função que recupera os dados aonde foi clicado, estou pegando a url do  avatar selecionado
    const imgPerfilSelected = (item)=>{
        setUrlImgPerfilSelected(item.url);
    }


    const [perfilUserInput, setPerfilUserInput] = useState({
        nome: '',
        idade: '',
        urlAvatar: urlImgPerfilSelected,
        senhaAtual:'',
        senha: '',
        confirmaSenha:''
        
    });
    const [aviso, setAviso] = useState('');

    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash= '';

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setPerfilUserInput({...perfilUserInput, [name]: value});
    }
    
    console.log(perfilUserInput)
    

   

    //Verificando e gerando uma hash para a senha do usuario
    if(perfilUserInput.confirmaSenha !== ''){
        if(perfilUserInput.confirmaSenha !== perfilUserInput.senha){
            document.getElementById('msgError').innerHTML = 'É obrigatório repetir a SENHA';
        }else{
            hash = bcrypt.hashSync(perfilUserInput.confirmaSenha, salt);
            document.getElementById('msgError').innerHTML = '';
        }
    }

    


    /*const token = localStorage.getItem('token');
    useEffect(() =>{
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
        }
    }, [token]);*/


    //Função que envia os dados para api
    async function handleSubmit(){

        //Passando o token para a api
        //updateUser.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {

            'nome': perfilUserInput.nome,
            'idade': perfilUserInput.idade,
            'urlAvatar': perfilUserInput.urlAvatar,
            'senhaAnterior': perfilUserInput.senhaAtual,
            'senha': hash
        }

        //Verificando se existe campos vazios
        if(perfilUserInput.nome !== '' && perfilUserInput.idade !== '' && hash !== ''){
            await updateUser(1,data)
            .then(response => {
                if(response.status === 200){
                    alert("Usuario atualizado com sucesso!");
                    history.push('/login');      
                }
            })
            .catch(e => {
                console.log(e);
            });
        }else{
            //validarDadosInput();
        }
    }

    
    return(
        <Grid>
            <NavBar/>
            <Main width={width}>
                <div className="container">
                    <ImagePerfil>
                        <div className="img-perfil">
                            <img src={urlImgPerfilSelected} alt={urlImgPerfilSelected}/>
                        </div>
                    </ImagePerfil>
                    
                    <ImageGallery>
                        <div className="title-gallery">
                            <h2>Avatar</h2>
                        </div>
                        <div className="imgGallery">
                            {avatarLinks.map((item) =>(
                                <div key={item.id} className="cont-img" onClick={() => imgPerfilSelected(item)}>
                                    <img  src={item.url} alt={item.titulo}/>                               
                                </div>
                            ))}
                        </div>
                    </ImageGallery>

                    <div className="cont-slider">
                        <Slider {...settings} >
                            {avatarLinks.map((item) =>(
                                <div key={item.id} onClick={() => imgPerfilSelected(item)}>
                                    <img  src={item.url} alt={item.titulo}/>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <FormEditarPerfil>
                        <div className="aux-cont">
                            <div className="area-form"> 
                                <form>
                                    <div>
                                        <label>Nome</label> 
                                    </div> 
                                    <input 
                                        id="input-nome"
                                        type="text"
                                        placeholder="Nome"
                                        name="nome"
                                        value={perfilUserInput.nome}
                                        onChange={changeValue} 
                                        />
                                    <div>
                                        <label>Idade</label> 
                                    </div>
                                    <input 
                                        id="input-idade"
                                        type="number" 
                                        placeholder="Idade"
                                        name="idade"
                                        value={perfilUserInput.idade}
                                        onChange={changeValue} 
                                        />
                                    <div>
                                        <label>Digite a senha atual</label> 
                                    </div> 
                                    <input 
                                        id="input-senha-atual" 
                                        type="password" 
                                        placeholder="Senha atual"
                                        name="senhaAtual"
                                        value={perfilUserInput.senhaAtual}
                                        onChange={changeValue} 
                                        />
                                    <div>
                                        <label>Nova Senha</label> 
                                    </div>
                                    <input
                                        id="input-senha" 
                                        type="password" 
                                        placeholder="Senha"
                                        name="senha"
                                        value={perfilUserInput.senha}
                                        onChange={changeValue}       
                                        />
                                    <div>
                                        <label>Digite a Senha novamente</label> 
                                    </div>
                                    <input 
                                        id="input-senha2"
                                        type="password" 
                                        placeholder="Confirme a sua senha"
                                        name="confirmaSenha"
                                        value={perfilUserInput.confirmaSenha}
                                        onChange={changeValue}  
                                        />
                                </form> 
                            </div>
                            <div id="msgError" className="msgError">
                                    
                            </div>
                            <div className="area-button">
                                <div className="button-cadastrar">
                                    <input 
                                        className="input-button"
                                        type="submit" 
                                        value="Atualizar Dados"
                                        onClick={handleSubmit}
                                        />
                                </div>
                            </div>
                        </div>  
                    </FormEditarPerfil>
                </div>
            </Main>
            <Footer/>
        </Grid>
    );
}
export default DashboardUsuario;
