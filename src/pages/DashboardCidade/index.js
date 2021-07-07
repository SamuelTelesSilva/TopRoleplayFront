import React from 'react';
import { useAuth } from '../../providers/auth';
import './styles';

const DashboardCidade = () => {
    
    //Setando o id da pagina, esta sendo utilizado para controlar o menu
    localStorage.setItem('idPagina', '1');


    return(
        <div>
            Dashboard Cidade
        </div>
    );
}
export default DashboardCidade;
