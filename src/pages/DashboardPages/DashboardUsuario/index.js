import React, {useState, useEffect} from 'react';
import {Grid, Main, ImageGallery, ImagePerfil, FormEditarPerfil} from './styles';
import NavBar from '../../../components/NavBar/Toolbar/index';
import Footer from '../../../components/Footer/index';
import { avatarLinks } from '../../../service/avatarLinks';
import Slider from "react-slick";
import useWindowDimensions  from '../../../components/useWindowDimensions/index';
import api from '../../../service/api';
import Button from '../../../components/Button/index';
import NavegacaoEstrutural from '../../../components/NavegacaoEstrutural';



const DashboardUsuario = () => {

    const { width } = useWindowDimensions();//Utilizado para pegar o tamanho da tela
    const [senhaProvisoria] = useState(localStorage.getItem('senhaUser'));
    const urlAvatar = localStorage.getItem('urlAvatar');
    const idUserLogado = localStorage.getItem('id');
    const [urlImgPerfilSelected, setUrlImgPerfilSelected] = useState(urlAvatar);
    const token = localStorage.getItem('token');

    const [perfilUserInput, setPerfilUserInput] = useState({
        nome: '',
        idade: '',
        urlAvatar: '',
        senhaAtual:'',
        senha: '',
        confirmaSenha:''
    });

    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash= '';

    useEffect(() =>{
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
        }
    }, [token]);

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


    //Pegando a url do  avatar selecionado
    const imgPerfilSelected = (item)=>{
        setUrlImgPerfilSelected(item.url);
    }

    /**
     * Função para verificar o link que vai ser enviado para a api,
     * Esta comparando o link do localStorage, com os links do avatarLinks.js
     * @returns 
     */
    const filtrarAvatar = () => {
        const res = avatarLinks.filter(avatar => avatar.url === urlAvatar);
        return res.length === 0 ? true : false;
    }

    
    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setPerfilUserInput({...perfilUserInput, [name]: value});
    }
    

    //Verificando e gerando uma hash para a senha do usuario
    if(perfilUserInput.confirmaSenha !== ''){
        if(perfilUserInput.confirmaSenha !== perfilUserInput.senha){
            document.getElementById('msgError').innerHTML = 'É obrigatório repetir a SENHA';
        }else{
            hash = bcrypt.hashSync(perfilUserInput.confirmaSenha, salt);
            document.getElementById('msgError').innerHTML = '';
        }
    }

    
    //Função para atualizar a imagem de perfil
    async function alterarAvatar(){
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'urlAvatar': urlImgPerfilSelected,
            'senhaProvisoria': senhaProvisoria
        }
        
        if(filtrarAvatar()){
            alert('Avatar errado, por favor informe o erro para um ADM');
            localStorage.removeItem('token');
            window.location.reload();
        }else{
            await api.put(`/api/usuarios/avatar/${idUserLogado}`, data)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('nome', response.data.nome);
                    localStorage.setItem('urlAvatar', response.data.urlAvatar);
                    alert("Avatar atualizado com sucesso!");
                    window.location.reload(); //fazendo um reload
                }
            })
            .catch(error => {
                if( error.request.status === 403){
                    alert('Ocorreu um erro com o token');
                    localStorage.removeItem('token');
                    window.location.reload();
                }else if(error.request.status === 404){
                    alert('A senha atual não esta igual a senha do registro informado');
                    localStorage.removeItem('token');
                    window.location.reload();
                }
            });
        }  
    }


    //Função que envia os dados para api
    async function handleSubmit(){

        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;

        const data = {
            'nome': perfilUserInput.nome,
            'idade': perfilUserInput.idade,
            'senhaAnterior': perfilUserInput.senhaAtual,
            'senha': hash
        }

        //Verificando se existe campos vazios e enviando os dados
        if(perfilUserInput.nome !== '' && perfilUserInput.idade !== '' && hash !== ''){

            await api.put(`/api/usuarios/${idUserLogado}`, data)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('nome', response.data.nome);
                    localStorage.setItem('urlAvatar', response.data.urlAvatar);
                    localStorage.setItem('senhaUser', response.data.senha);
                    alert("Usuario atualizado com sucesso!");
                    window.location.reload(); //fazendo um reload
                    //history.push('/login');      
                }
            })
            .catch(error => {
                if( error.request.status === 403){
                    alert('Ocorreu um erro com o token')
                }else if(error.request.status === 404){
                    alert('A senha atual não esta correta')
                }
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
                    <NavegacaoEstrutural
                        opcao='1'
                        nameLink1="Painel do Usuário"
                    />
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
                                    <img src={item.url} alt={item.titulo}/>                               
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

                            <div className="cont-button-perfil">
                                <div className="button-perfil">
                                    <Button title="Atualizar Avatar" onclick={alterarAvatar}/>
                                </div> 
                            </div>

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
                                        <label>Digite a Senha Atual</label> 
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
                                        <label>Digite a Senha Novamente</label> 
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
