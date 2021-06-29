import React, {createContext, useState, useEffect} from 'react';
import api from '../service/api';
import { efetuarLogin } from '../service/toproleplayService';
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
                localStorage.setItem('nome', response.data.nome);
                localStorage.setItem('urlAvatar', response.data.urlAvatar);

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
            msgError
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);