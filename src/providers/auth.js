import React, {createContext, useState} from 'react';


export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <AuthContext.Provider value={{openMenu, setOpenMenu}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);