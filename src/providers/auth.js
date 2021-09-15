import React, {createContext, useState, useEffect} from 'react';
import { Route, Redirect} from 'react-router-dom';
import api from '../service/api';


export const AuthContext = createContext({});
export const AuthProvider = (props) => {

    const [activeModalMsgEdit , setActiveModalMsgEdit] = useState(false);
    const [activeModalMsgCreate, setActiveModalMsgCreate] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [msgModal, setMsgModal] = useState("");
    const [role, setRole] = useState();


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
            return <Redirect to="/" />
        }
    
        return <Route {...rest} />
    }

    //Pegando e verificando o token
    useEffect(() =>{
        const token = localStorage.getItem('token');
        setRole(localStorage.getItem('role'));

        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);
   

 
    return(
        <AuthContext.Provider value={{
            openMenu, 
            setOpenMenu, 
            authenticated, 
            setAuthenticated,
            loading,
            CustomRoute,
            activeModalMsgEdit, 
            setActiveModalMsgEdit,
            activeModalMsgCreate,
            setActiveModalMsgCreate,
            msgModal,
            setMsgModal,
            role, 
            setRole
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);