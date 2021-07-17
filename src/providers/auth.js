import React, {createContext, useState, useEffect} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { efetuarLogin } from '../service/usuarioService';
import api from '../service/api';
import history from '../history';



export const AuthContext = createContext({});
export const AuthProvider = (props) => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [msgError, setMsgError] = useState('');
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });


    /**
     * Função para autenticar as paginas
     * @param {*} param0 
     * @returns 
     */
    function CustomRoute({ isPrivate, ...rest}){
        
        if(loading){
            return <h1>Loading...</h1>;
        }
    
        if(isPrivate && !authenticated){
            return <Redirect to="/login" />
        }
    
        return <Route {...rest} />
    }


    //--------------------------------------------------------

    //Pegando e verificando o token
    useEffect(() =>{
        const token = localStorage.getItem('token');

        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleLogin = async() =>{
        
        const data = {
            username: loginInput.username,
            password: loginInput.password
        }

        if(loginInput.username === ''){
            setMsgError('Precisa preencher o campo username');
        }else if(loginInput.password === ''){
            setMsgError('Precisa preencher o campo password');
        }else{
            await efetuarLogin(data)
            .then(response =>{

                //Setando os valores no localStorage
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('nome', response.data.nome);
                localStorage.setItem('urlAvatar', response.data.urlAvatar);
                localStorage.setItem('senhaUser', response.data.senha);

                api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                setAuthenticated(true);

                history.push('/dashboard/usuario');
            }).catch(error => {
                if(error.request.status === 401){
                    setMsgError('Login e senha invalidos');
                }else{
                    setMsgError('Ocorreu um erro inesperado, por favor tente novamente. Se o erro persistir entre em contato.');
                }
            });
        }
    }

    //Login fim
    //------------------------------------------------------------

    return(
        <AuthContext.Provider value={{
            openMenu, 
            setOpenMenu, 
            authenticated, 
            setAuthenticated,
            loading,
            loginInput,
            setLoginInput,
            handleLogin,
            msgError,
            CustomRoute
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);