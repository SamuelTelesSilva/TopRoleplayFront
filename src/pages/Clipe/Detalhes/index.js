import React, { useState, useEffect } from 'react';
import './styles';

const Detalhes = (props) => {

    useEffect(()=>{
        const { id } = props.match.params; // 4 - Capturar os parametros passado pelo Router -> CardMain -> Clipe -> Detalhes

        
    },[props.match.params])

    
    return(
        <div>
            asdasdadasd
        </div>
    );
} 
export default Detalhes;